# Security Guide: Correct Access and Safe Data

Use this guide for authorization, tenant boundaries, sensitive data, and fields that a request may write. Apply the correct rule for the resource instead of forcing every resource into the same ownership model.

## 1. Using the Wrong Authorization Context

* **The Bad Habit:** Fetch a record by a client-supplied ID without an access check, or assume every allowed record must be owned directly by the current user.
* **The Problem:** Private records may be exposed, while valid public, shared, tenant, or administrator access may be blocked.
* **Why It Fails:** Access rules belong to the resource and action. A single ownership check cannot represent public content, team data, tenant isolation, or role-based administration.
* **Clean Fix:** Decide whether the action is public, owner-scoped, tenant-scoped, role-scoped, or covered by a policy. Scope the query and run the matching authorization check before returning or changing protected data.
* **The Waitsec Way:** Do not trust an ID by itself. Trust the access rule that matches the resource.

**Bad example:**
```php
$order = Order::findOrFail($request->route('id'));
return $order;
```

**Good owner-scoped example:**
```php
$order = $request->user()->orders()->findOrFail($request->route('id'));
return new OrderResource($order);
```

**Good tenant and role example:**
```php
$order = $request->user()->tenant->orders()->findOrFail($request->route('id'));
$this->authorize('manage', $order);
```

A public catalog item may need no login. A shared tenant record may need a tenant query and a billing role, not direct user ownership.

## 2. Exposing Sensitive Data

* **The Bad Habit:** Return full models or log full requests because it is faster than choosing fields.
* **The Problem:** Password hashes, tokens, payment details, internal flags, personal data, or stack traces can leave the server boundary.
* **Why It Fails:** Responses, logs, exports, and third-party tools often have wider access and longer retention than the source system.
* **Clean Fix:** Return and log only the fields needed for the action. Use resource objects, serializers, redaction, and safe error messages. Keep diagnostic detail in protected server logs when it is needed.
* **The Waitsec Way:** Data that is not needed should not cross the boundary.

**Bad example:**
```js
logger.info("login request", request.body);
return response.json(user);
```

**Good example:**
```js
logger.info("login attempt", { userId: user.id, outcome: "success" });
return response.json({ id: user.id, displayName: user.displayName });
```

## 3. Letting Requests Write Unintended Fields

* **The Bad Habit:** Pass the full request body into a model create or update call after only checking that the body is valid JSON.
* **The Problem:** A caller can set fields that the form did not expose, such as `role`, `tenantId`, `price`, or an internal status.
* **Why It Fails:** Type validation alone does not decide which fields the caller is allowed to control.
* **Clean Fix:** Validate the expected shape, select the allowed writable fields for this action, and keep protected values under server control. Use framework allowlists or request objects where they fit the project.
* **The Waitsec Way:** Accept only the fields this action is meant to accept.

**Bad example:**
```php
$user->update($request->all());
```

**Good example:**
```php
$input = $request->validated();
$user->update([
    'display_name' => $input['display_name'],
    'timezone' => $input['timezone'],
]);
```

## Security Pre-Flight Checklist

Before finalizing security-related work:
- [ ] Is the action public, owner-scoped, tenant-scoped, role-scoped, or policy-controlled?
- [ ] Does every protected read and write use the matching access check?
- [ ] Do responses, logs, exports, and errors omit data they do not need?
- [ ] Can the request write only the fields allowed for this action?
