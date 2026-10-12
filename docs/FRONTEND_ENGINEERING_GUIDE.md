# Frontend engineering guide for this project

This site uses the Next.js App Router (`src/app`), React 19, TypeScript, Tailwind CSS 4 via `@tailwindcss/postcss`, and Framer Motion. The route is composed in `src/app/page.tsx`; shared and feature components live in `src/components`. The `src/app/api/recommendation/route.ts` file is a server route handler. Keep that separation rather than moving the landing page to the Pages Router.

## What the audit demonstrated

### Responsive-first layout

A flex row with children sized to 42% and 58% appears to fit until a gap is added: the percentages already consume the full row. The contact panel now uses `grid-template-columns: minmax(0, .42fr) minmax(0, .58fr)`, so the gap is deducted before the columns divide available space. `minmax(0, …)` and `min-w-0` let grid items shrink below their content's intrinsic width.

The cookie notice is a fixed panel with substantial copy. A fixed overlay needs a height limit on short screens; it now caps at `80dvh` and scrolls internally so its content can be reached without trapping the whole page behind an oversized panel.

For future layouts, start with one column and add a wider layout only when the content supports it. Prefer `w-full` with `max-w-*` to a fixed width. Add `min-w-0` to grid/flex children containing long text or form controls when their intrinsic size could force overflow.

### Test small screens intentionally

The hero arrows stay vertically centered at every viewport, with the center of each control placed on its corresponding hero edge. Their touch circles are smaller on narrow screens and grow at larger breakpoints. Test their edge alignment and ensure the parent has enough page gutter so they remain reachable.

The requested newsletter section did not exist in this checkout: there is a fixed newsletter tab that opens a modal. Its form already used a vertical stack. Identify actual DOM structure first; do not add CSS for a layout that is not present. If the deployed page differs, compare its commit and embed before changing this component.

### Flexbox and grid

Use flexbox for one-dimensional alignment and grid for explicit rows/columns. Percentage widths plus a gap can exceed the parent. Fractional grid tracks calculate after the gap. `minmax(0, 1fr)` also prevents a long child from setting an unexpectedly large minimum track size.

### Shared components and tokens

`src/components/ui/button.tsx` is the standard action button, with `solid`/`outline` and `brand`/`dark`/`light` options. The contact and subscribe form submits previously repeated brand styling; they now use the shared component. The hero controls stay purpose-built because they are icon-only carousel controls with responsive edge placement. Reuse a shared component when its semantics and variants fit, not by replacing every `<button>` mechanically.

Global tokens are in `src/app/globals.css`. The existing rendered font is Arial, set on body before the audit; Geist was downloaded but not applied. The root now uses the same Arial stack and named brand/neutral tokens. Change the token once and use its Tailwind alias rather than repeating hex literals. Keep purposeful local differences, such as slide-specific image text colors, explicit.

### App Router component boundaries

`src/app/page.tsx` and most content components are Server Components by default. Components that need browser APIs, state, event handlers, or Framer Motion use a client boundary (`"use client"`), such as the hero, newsletter modal, and animated add-on services. Do not mark a parent or the entire page client-side just to support one interaction; keep the boundary around the feature that needs it. Fetch secrets and call external services in server code such as the route handler, not browser components.

### Semantic HTML and accessibility

Use `<a>`/Next `Link` for navigation and `<button>` for actions. Inputs need labels even when a placeholder is present; placeholders disappear during typing. The contact and subscribe forms now have visually hidden labels and autocomplete hints. Keep visible keyboard focus, meaningful image alternatives, useful iframe titles, and sufficiently large touch targets. Custom dialogs should also support focus management, Escape to close, and returning focus to the opener; the current newsletter modal still needs those behaviors.

### Avoid override accumulation

Before adding a media query, inspect the base layout, parent width, flex/grid rules, and neighboring breakpoint declarations. Fix the source constraint (for example, percentage columns plus gap) instead of layering a contradictory width override. Keep repeated design values centralized and component-specific exceptions named and intentional.

### Verification before deployment

Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` before shipping, plus existing tests when the repository has them. This project has no test script. Inspect the responsive page at 1440, 1280, 1024, 768, 430, 390, 360, and 320px; check document scroll width, hero controls, form widths, menu operation, and modal behavior. Record which checks were visual and which were code-only. A successful build cannot prove that a layout looks right.
