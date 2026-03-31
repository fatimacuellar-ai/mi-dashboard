# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (also runs TypeScript type-check)
npm run lint     # ESLint
npm run start    # Serve the production build
```

There are no tests configured. TypeScript errors surface via `npm run build` — Next.js runs `tsc --noEmit` as part of the build pipeline.

## Architecture

This is a **Next.js 16 App Router** project with a single route (`/`). All UI is a client-side dashboard — the page is statically prerendered but fully interactive via React state.

### Data flow

All dashboard data lives in **`app/lib/data.ts`**. It exports:
- `Period` — union type `"month" | "quarter" | "semester" | "year"`
- `periodData` — a `Record<Period, PeriodData>` with hardcoded data for each time range, typed with interfaces (`KPI`, `SalesPoint`, `UsersPoint`, `TrafficPoint`, `RevenuePoint`)
- `PERIOD_LABELS` — display strings for each period

**`app/components/DashboardClient.tsx`** is the only stateful component. It holds `useState<Period>` and passes the correct slice of `periodData` down to each chart as props. The period selector (dropdown + pill buttons) also lives here.

`app/page.tsx` is a thin server component that renders `<DashboardClient />`.

### Chart components

Each chart in `app/components/` is a `"use client"` component that accepts a single typed `data` prop:

| Component | Chart type | Prop type |
|---|---|---|
| `SalesLineChart` | LineChart | `SalesPoint[]` |
| `UsersBarChart` | BarChart | `UsersPoint[]` |
| `TrafficPieChart` | PieChart | `TrafficPoint[]` |
| `RevenueAreaChart` | AreaChart | `RevenuePoint[]` |

All chart data uses `label` as the x-axis `dataKey`. Label values vary by period granularity: weekly (`"Sem 1"`) for last month, monthly (`"Ene"`, `"Oct"`) for quarter/semester/year.

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. There is no `tailwind.config.js` — configuration uses CSS custom properties in `app/globals.css`. Color palette: indigo-600 (primary/active), green-600 (positive KPI delta), red-500 (negative KPI delta).
