# UI/UX audit and fixes

Audit date: 2026-10-12. Scope: the current single-page App Router experience and shared navigation, cards, dialogs and footer components.

## Findings

| Area | Finding and root cause | Change | Verification |
|---|---|---|---|
| Hero carousel arrows (`src/components/landing/hero/hero.tsx`) | Previous placement let the controls drift away from the vertical center at narrow widths. | Controls remain vertically centered at every width, with each circle centered exactly on its respective left or right hero edge. Touch targets are 44px at narrow widths and grow at larger breakpoints. | Code-reviewed; target-width browser checks not performed. |
| Newsletter subscribe UI (`src/components/landing/newsletter-tab/newsletter-tab.tsx`) | The project has a fixed vertical subscribe tab and a modal, not an in-flow newsletter section. The modal form is already a vertical stack (`space-y-4`), so the reported horizontal-flow defect was not present in the source inspected. | Kept the vertical stack, added `min-w-0` to the email input wrapper and routed submit through the shared button. No unsupported claim of fixing an observed horizontal layout. | Source inspected at 320px minimum modal width calculation; browser check not performed. Newsletter delivery is not implemented in this UI. |
| Contact panel (`src/components/landing/cta-banner/CtaBanner.tsx`) | At desktop sizes, 42% + 58% column widths used all available width before adding a 2rem gap, which could make the row wider than its container. | Replaced percentage-width flex children with a minmax grid whose fractional columns share the space after the gap. Added `min-w-0` and allowed textarea vertical resizing. | Code-reviewed; browser viewport check not performed. |
| Contact and subscribe form accessibility | Inputs relied on placeholders and `aria-label` instead of persistent associated labels; focus treatment was inconsistent. | Added visually hidden labels, autocomplete hints, focus rings, and shared submit buttons. | Lint and TypeScript checks; keyboard/browser interaction not performed. |
| Cookie notice on short screens (`src/components/cookie-consent/CookieConsent.tsx`) | The full notice and action row can occupy most of a short mobile viewport. The fixed panel had no height cap or internal scrolling. | Capped it at 80dvh and enabled contained vertical scrolling; increased action target height and added keyboard focus rings. | Source-reviewed. Not separately visually verified at target viewport sizes. |
| Shared button (`src/components/ui/button.tsx`) | Existing variants were already used in assessment, hero CTA, and consultation CTA; form submit styling was duplicated. The shared component did not provide its own focus-visible or disabled treatment. | Added shared focus and disabled styles; migrated the contact and subscribe submits. Kept carousel arrows bespoke because they are icon-only edge controls. | Lint and TypeScript checks. |
| Global type and colors (`src/app/globals.css`, `src/app/layout.tsx`) | The stylesheet used Arial on body while loading Geist and publishing Geist as Tailwind's sans font, creating two conflicting font definitions. Brand red values were repeated in shared styles. | Centralized the existing Arial stack and current brand values as CSS/Tailwind tokens; removed unused Geist font downloads. Connected the shared button and updated form focus styling to the tokens. | Build check; visual equivalence not browser-compared. |
| App metadata (`src/app/layout.tsx`) | The page still exposed default Create Next App metadata. | Set the metadata title and description to describe the existing landing page. | Source/build check. |

## Verification summary

- `npm run lint`: completed with no errors and six existing warnings (two unused variables and four raw `<img>` warnings in assessment, add-on, and navigation files).
- `npx tsc --noEmit`: passed.
- Production build: `npm run build -- --webpack` passed when run with an isolated `.next-audit` output directory because the project's regular `.next` directory was in use by its existing dev server.
- Automated tests: no test script is defined in `package.json`.
- Browser: one screenshot spot-check at the available narrow viewport (approximately 517px wide); exact requested viewport matrix not tested.

## Risks and limitations

- The requested newsletter horizontal layout could not be reproduced from the current code. If it refers to a different branch, deployed build, or external embed, compare that implementation before further CSS changes.
- The contact form and subscribe form have no submission integration in this UI; this audit did not invent one.
- The newsletter modal does not currently implement a focus trap or Escape-key close. Add these with an established dialog primitive if the modal is expanded.
- Browser-based visual checks at 1440, 1280, 1024, 768, 430, 390, 360 and 320 pixels were not performed in this run. Do not treat source review as visual confirmation.
- One spot-check screenshot was reviewed in the available browser at its default narrow viewport (approximately 517px wide); the CTA section appeared within the viewport. This is not a substitute for the target-width matrix above.
- The initial lint reported unused variables and raw `<img>` warnings in assessment/add-on/navigation files; those unrelated files were not refactored.
