# Dashboard and Application Shell Blueprint

Use this guide for an admin panel, analytics dashboard, internal tool, account or workspace home, or any private application screen that summarizes data and leads to further action.

This is not a marketing page. A dashboard is usually private, indexability is never assumed for this route, and it is read repeatedly by the same person, not once by a stranger. Apply [`waitsec-ui`](../../waitsec-ui/SKILL.md) for component and state detail. Load [`seo-and-structured-data.md`](./seo-and-structured-data.md) only if the project explicitly needs metadata on this route, which is rare for private application screens.

## Start With Known Facts

Identify before building:

- Who opens this screen, and what decision or task brings them here.
- The two or three questions the screen must answer at a glance.
- The real data sources, metrics, and their current shape and volume.
- The primary action available from this screen, and any secondary actions.
- The existing app shell: navigation, header, content region, and their current breakpoints.
- Whether real-time or near-real-time data matters here, or a periodic refresh is enough.

Do not invent metrics, sample rows, chart data, or user names to fill the layout. Use placeholder states instead, described below.

## Shell Structure

Reuse the project's existing shell. When establishing one:

- A persistent primary navigation, either a sidebar for a dense, multi-section application or a top bar for a lighter, few-section tool. Do not build both without a reason.
- A page header with the page title, a short description only if it adds real information, and the primary action for this screen.
- One main content region. Avoid nested scroll containers unless a specific data table or panel genuinely needs its own scroll.
- Breadcrumbs only when the app has real navigation depth, not as decoration on a top-level page.

## Content Hierarchy

A useful default order, adjusted to the real questions the screen answers:

1. A small row of summary metrics, each with a current value and a comparison such as a trend, a change, or a target, not a number alone.
2. The one or two visualizations that matter most for this screen's job.
3. A supporting table or list with the underlying records.
4. Filters, date range, and search live near the top of the content region, close to what they affect.

Do not give every metric equal visual weight. State which two or three numbers matter most for this screen and give those the strongest hierarchy.

## Choosing a Chart

| Data shape | Good choice | Avoid |
| :--- | :--- | :--- |
| Trend over time | Line or area chart | Pie chart for time series |
| Comparing a few categories | Bar chart | 3D bar or pie effects |
| Comparing many categories | Sorted horizontal bar, or a table | A bar chart with more than about ten unlabeled bars |
| Part-to-whole, few segments | Simple pie or donut, three to five segments | Pie or donut past five or six segments |
| Exact values matter | A table, with sorting | Reading precise numbers off a chart axis |
| Compact inline trend | A sparkline next to the metric | A full axis-and-legend chart in a tight space |

State the takeaway a chart should communicate before choosing its type. Pick the type that makes that takeaway readable at a glance, not the type that looks most technical.

## Data Density by Platform

| Context | Density | Notes |
| :--- | :--- | :--- |
| Desktop, internal tool, power users | Higher | More visible columns, denser tables, more on screen at once is expected. |
| Desktop, occasional or mixed users | Medium | Group secondary detail behind a row expansion or a drawer. |
| Mobile or narrow viewport | Lower | Show the two or three columns that answer the primary question. Move the rest to a detail view. |

Let the audience and the platform decide density together. A dense enterprise table built for daily power users should not be flattened the same way a consumer-facing summary screen is.

## Responsive Behavior

- Collapse a sidebar to an icon rail, an overlay, or a bottom navigation bar on narrow widths. Keep the same destinations reachable, not a reduced subset.
- Let wide tables scroll horizontally inside their own container, or reflow to stacked cards, one record per card, on narrow widths. Never let the whole page scroll horizontally.
- Resize charts to their container and reduce axis label density before letters overlap, rather than shrinking text until it is unreadable.
- Keep filters and the primary action reachable without scrolling past the main content on a small screen.
- Preserve the same reading order between the summary metrics, the chart, and the table across breakpoints.

## States

Design each state the screen can actually reach:

- **Loading**: a skeleton that matches the real layout's shape, not a generic spinner replacing the whole screen after the first load.
- **Empty**: what a new account or filtered-to-nothing view looks like, with a next step, not a blank card.
- **Error or stale data**: what happens when a data source fails or is delayed, with a retry action and a visible timestamp for when data was last current.
- **Partial data**: when some widgets load and others do not, each widget should fail independently instead of blocking the whole screen.
- **Populated**: the normal state with real data, including reasonable behavior at both a small and a large volume of records.

## Actions

- Give the page one clear primary action, placed in the header or the most relevant summary card, not repeated in five places.
- Put bulk actions in a table's selection toolbar, visible only once a row is selected.
- Confirm destructive actions such as delete, revoke, or reset before they run, and state what the action affects.
- Show immediate feedback after a save, filter change, or action, so the person does not wonder whether it worked.

## Anti-Patterns

### 1. The Trophy Wall

* **The Bad Habit:** Filling the screen with as many metric cards and charts as the layout can fit.
* **The Problem:** Every number gets the same visual weight, and the two or three that actually matter disappear into the crowd.
* **Why It Fails:** A person opening the screen for a quick answer has to scan everything to find anything.
* **Clean Fix:** Decide which two or three questions this screen must answer, then size and place those metrics first. Move the rest lower or behind a drill-down.
* **The Waitsec Way:** A dashboard proves its value by what it makes obvious, not by what it fits on the screen.

### 2. Pie Charts for Everything

* **The Bad Habit:** Reaching for a pie or donut chart as the default visualization regardless of what the data actually shows.
* **The Problem:** Time series, comparisons across many categories, and exact values all get forced into a shape that cannot represent them clearly.
* **Why It Fails:** People cannot compare slice angles accurately, and a pie with many thin slices communicates almost nothing.
* **Clean Fix:** Match the chart type to the data shape using the chart table above. Default to a line or bar chart unless the data is genuinely a small part-to-whole split.
* **The Waitsec Way:** The data decides the chart, not the other way around.

### 3. Desktop-Only Tables

* **The Bad Habit:** Building a wide data table with many columns and assuming the screen will always be wide.
* **The Problem:** On a narrow viewport the table either forces page-level horizontal scrolling or shrinks text until it is unreadable.
* **Why It Fails:** The screen becomes unusable on a phone or a resized window, even though the underlying data is still needed there.
* **Clean Fix:** Contain the table's scroll inside its own region, or reflow to stacked record cards on narrow widths, keeping the columns that answer the primary question visible first.
* **The Waitsec Way:** A table built for one width is a table built for one device.

### 4. Missing Loading and Empty States

* **The Bad Habit:** Designing only the fully populated state and leaving loading and empty states as an afterthought or a bare spinner.
* **The Problem:** New accounts, filtered-to-nothing views, and slow connections all show a confusing or blank screen.
* **Why It Fails:** These states are common, not edge cases, and a blank screen reads as broken rather than empty.
* **Clean Fix:** Design a layout-matching skeleton for loading and a next-step message for empty, alongside the populated state.
* **The Waitsec Way:** A screen is not finished until every state it can reach has been designed.

## Pre-Flight Checklist

- [ ] Did I identify who opens this screen and the two or three questions it must answer?
- [ ] Did I reuse the existing shell, navigation pattern, and breakpoints instead of building a second one?
- [ ] Do the most important metrics carry more visual weight than the rest?
- [ ] Does each chart type match the shape of its data, using real thresholds instead of decoration?
- [ ] Is data density matched to the platform and the audience's expected use?
- [ ] Do tables and charts stay usable, without page-level horizontal scrolling, on a narrow viewport?
- [ ] Are loading, empty, error or stale, partial, and populated states all designed?
- [ ] Is there one clear primary action, with destructive actions confirmed and bulk actions scoped to selection?
- [ ] If a glass, blur, or frosted surface was requested, did I apply [`glassmorphism.md`](./glassmorphism.md) instead of default panels?
- [ ] Did I avoid inventing metrics, records, or names not present in real data or placeholder states?
