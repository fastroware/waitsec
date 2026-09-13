# Migration Guide: Safe Rollout and Recovery

Use this guide for schema migrations, persisted model changes, data backfills, and database constraints. Follow the project's deployment policy when it exists.

## 1. Changing Schema Without a Recovery Plan

* **The Bad Habit:** Ship a migration with no recovery plan, or add a `down()` method that looks reversible but would delete data written after deployment.
* **The Problem:** A failed rollout leaves the team without a safe way to restore service or move forward.
* **Why It Fails:** Schema rollback and data recovery are not the same thing. Some changes are safely reversible, while others need a backup, application rollback, forward fix, or staged release.
* **Clean Fix:** Decide how the change will be deployed, checked, and recovered before running it. Use `down()` when it can safely restore the prior state. Otherwise document and test the forward-fix, backup, restore, or application rollback path that fits the project.
* **The Waitsec Way:** Every migration needs a recovery plan, not a pretend reverse button.

**Bad example:** Add a new required column, let the new app write it, then define `down()` to drop the column and all new values.

**Good example:** Add a compatible column, deploy code that can work with both schemas, monitor the rollout, and keep a tested forward fix or restore plan. Add `down()` only if using it will not destroy data the team needs.

## 2. Removing Data in One Release

* **The Bad Habit:** Drop a column or table as soon as the application stops showing it.
* **The Problem:** Old code, background jobs, reports, or rollback versions may still read or write the data.
* **Why It Fails:** A single deploy can remove live data before every dependency and recovery path is ready.
* **Clean Fix:** Remove data in stages when the system needs a safe transition. Stop new writes, keep compatible reads, deploy the new path, back up or archive, verify usage has ended, then remove the old schema in a later change.
* **The Waitsec Way:** Separate stopping use from deleting data.

**Bad example:** Rename a live column by dropping the old column and adding an empty replacement in one migration.

**Good example:** Add the new column, write both fields if needed, backfill existing rows, switch reads, verify the old field is unused, then drop it in a later release.

## 3. Adding Constraints Without Checking Existing Data

* **The Bad Habit:** Add a unique, foreign-key, or not-null constraint without checking current rows, or keep an important invariant only in application code when the database can safely enforce it.
* **The Problem:** The migration may fail on existing data, lock a busy table, or leave room for duplicate and orphaned rows.
* **Why It Fails:** Application checks can lose races, but a database constraint added blindly can break deployment or reject valid legacy data.
* **Clean Fix:** Inspect existing data first, define cleanup rules, estimate migration and locking cost, and stage the change when needed. Add a database constraint when the database can express the invariant safely. Keep application validation for clear user feedback and rules that the database cannot represent well.
* **The Waitsec Way:** Check the data before tightening the rule, then enforce it at the safest layer.

**Bad example:**
```sql
ALTER TABLE users ADD CONSTRAINT users_email_unique UNIQUE (email);
```
Run this without checking duplicate or null email values.

**Good example:**
```sql
SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```
Resolve duplicates using an agreed business rule, test the migration on production-like data, then add the unique constraint with the safest method supported by the database.

## Migration Pre-Flight Checklist

Before finalizing stored-data work:
- [ ] Does the rollout remain compatible with the application versions that may run during deployment?
- [ ] Is there a tested recovery path that fits the real data risk, whether rollback, forward fix, backup, or restore?
- [ ] Are destructive changes staged when old code or data may still be needed?
- [ ] Did I inspect existing data and operational cost before adding constraints?
