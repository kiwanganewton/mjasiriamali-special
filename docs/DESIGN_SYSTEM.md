# Design system

## Source of truth

Global tokens live in `src/app/globals.css` under `:root`. Tailwind 4 aliases are exposed in its `@theme inline` block, so utilities such as `bg-brand`, `text-brand`, `border-brand`, and `font-sans` resolve to those values. The site root imports this stylesheet from `src/app/layout.tsx`.

| Token | Current value | Controls |
|---|---|---|
| `--font-family-base` | Native system UI stack (`system-ui`, platform UI fonts, `Segoe UI`) | Body, headings, and Tailwind sans family on all devices. |
| `--font-size-body-base` / `--line-height-body-base` | `1rem` / `1.7` | Shared paragraph utility `text-body`. |
| Hero heading size tokens | `1.875rem` mobile / `2rem` desktop | `.heading-hero`; a compact-phone token is also available. |
| Section heading sizes | `1.375rem` mobile / `1.5rem` tablet / `1.625rem` desktop | `.heading-section` for section, modal and assessment headings. |
| Card heading sizes | `1.125rem` mobile / `1.25rem` desktop | `.heading-card` for package, service and menu card titles. |
| Subheading, compact UI, and eyebrow sizes | `1rem`/`1.125rem`; `0.9375rem`/`1rem`; `0.6875rem` | `.heading-subsection`, `.heading-ui`, and `.heading-eyebrow`. |
| Heading weight and line-height tokens | `500` on mobile; section, card, and subheading styles use `600` from 768px up; hero uses `600` | Shared responsive heading classes centralize weight, line-height, and tracking while preserving the lighter mobile treatment. |
| `--brand-primary-value` | `#c8102e` | Primary brand actions and focus color (`bg-brand`, `text-brand`, `border-brand`). |
| `--brand-strong-value` | `#a70d26` | Darker brand hover color (`bg-brand-strong`). |
| `--brand-bright-value` | `#d70900` | Existing brighter red accent (`bg-brand-bright`). |
| `--site-background` / `--site-foreground` | `#fff` / `#171717` | Global page background and text defaults. |
| `--layout-content-width` | `1280px` | Shared `max-w-content` utility used by hero, feature section, add-on section, and footer. |
| `--radius-card-value` | `1.25rem` | Shared `rounded-card` utility used by feature cards; components retain local variants where design differs. |
| `--surface-muted` / `--text-muted` / `--border-default` | `#f7f7f7` / `#737373` / `#e3e3e3` | Consumed through `bg-surface-muted`, `text-muted`, and `border-border`. |

The current project uses Tailwind's standard responsive breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`). Their defaults are supplied by the installed Tailwind 4 framework. Do not create one-off pixel breakpoints unless a measured layout issue requires one.

## Fonts and typography

Body text and non-hero headings use the native system UI font stack on all devices. Hero headings use Inter through `next/font`, which Next.js bundles with the application so the hero typography stays the same locally and in production. Inter is loaded at weights 500 and 600 for the responsive hero heading styles.

## Shared heading styles

Use `.heading-hero`, `.heading-section`, `.heading-card`, `.heading-subsection`, `.heading-ui`, and `.heading-eyebrow` for interface headings. These shared classes are applied to the hero, landing sections, cards, menus, footer labels, assessment flow, and dialogs. Their responsive sizes, weights, line heights, and tracking are controlled by the related `--font-*`, `--line-height-*`, and `--tracking-*` tokens in `:root` in `src/app/globals.css`.

## Changing global colors

Edit the values in `:root` in `src/app/globals.css`, then consume the matching Tailwind alias. Example:

```tsx
<button className="border-brand bg-brand text-white hover:bg-brand-strong">
  Continue
</button>
```

Do not repeat the hex code in a new component. Keep photo-specific colors, slide text colors in `src/components/landing/hero/hero.config.ts`, and intentional special accents local when they are part of the asset or slide design.

## Spacing and layout

The shared maximum content width and card radius have Tailwind aliases. Layout components retain local padding and section spacing because their rhythm intentionally varies. Prefer fluid widths (`w-full`, `max-w-*`, `min-w-0`, grid fractions) over fixed viewport widths. A two-column layout should account for its gap: use grid fractions or `calc()` after measuring available width.

## Shared buttons

Use `src/components/ui/button.tsx` for standard button actions. It supports `solid` or `outline` variants, `brand`, `dark`, or `light` tones, and normal button attributes such as `type`, `onClick`, and `disabled`.

```tsx
<Button type="submit" tone="brand" disabled={isSubmitting}>
  Send
</Button>
```

Use semantic `Link` elements for navigation. Keep bespoke icon buttons when the control has a distinct purpose and visual placement, as with the hero carousel arrows. To add a global token, define it once in `:root`, expose a named alias in `@theme inline`, then use that utility and document its meaning here.
