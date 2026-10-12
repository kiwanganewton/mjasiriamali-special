# UI/UX audit and fixes

Audit date: 2026-10-12. Scope: the current single-page App Router experience and shared navigation, cards, dialogs and footer components.

## Findings

| Area | Finding and root cause | Change | Verification |
|---|---|---|---|
| Hero carousel arrows (`src/components/landing/hero/hero.tsx`, `hero.config.ts`) | Phone screenshot showed arrows intruding into slide copy. | Controls remain vertically centered, with their centers on the hero edges. Mobile copy has a narrower safe area so it stays clear of the edge controls. | Code-reviewed; target-width browser checks not performed. |
| Newsletter tab on narrow phones (`src/components/landing/newsletter-tab/newsletter-tab.tsx`) | The production screenshot showed a wide horizontal tab. The control had no explicit physical width/height, so if vertical writing-mode handling failed, the label's intrinsic width could make it extend across the page. | Constrained the tab to a fixed narrow width and tall touch target, and rotated a no-wrap inner label. Its layout no longer depends on intrinsic label width or writing-mode behavior. | Lint and TypeScript pass; needs verification on the affected physical phone/browser. Newsletter delivery is not implemented in this UI. |
| Contact panel (`src/components/landing/cta-banner/CtaBanner.tsx`) | At desktop sizes, 42% + 58% column widths used all available width before adding a 2rem gap, which could make the row wider than its container. | Replaced percentage-width flex children with a minmax grid whose fractional columns share the space after the gap. Added `min-w-0` and allowed textarea vertical resizing. | Code-reviewed; browser viewport check not performed. |
| Contact and subscribe form accessibility | Inputs relied on placeholders and `aria-label` instead of persistent associated labels; focus treatment was inconsistent. | Added visually hidden labels, autocomplete hints, focus rings, and shared submit buttons. | Lint and TypeScript checks; keyboard/browser interaction not performed. |
| Cookie notice on short screens (`src/components/cookie-consent/CookieConsent.tsx`) | The full notice and action row can occupy most of a short mobile viewport. The fixed panel had no height cap or internal scrolling. | Capped it at 80dvh and enabled contained vertical scrolling; increased action target height and added keyboard focus rings. | Source-reviewed. Not separately visually verified at target viewport sizes. |
| Shared button (`src/components/ui/button.tsx`) | Existing variants were already used in assessment, hero CTA, and consultation CTA; form submit styling was duplicated. The shared component did not provide its own focus-visible or disabled treatment. | Added shared focus and disabled styles; migrated the contact and subscribe submits. Kept carousel arrows bespoke because they are icon-only edge controls. | Lint and TypeScript checks. |
| Global type and colors (`src/app/globals.css`, `src/app/layout.tsx`) | The stylesheet used Arial on body while loading Geist and publishing Geist as Tailwind's sans font, creating two conflicting font definitions. Brand red values were repeated in shared styles. | Centralized the existing Arial stack and current brand values as CSS/Tailwind tokens; removed unused Geist font downloads. Connected the shared button and updated form focus styling to the tokens. | Build check; visual equivalence not browser-compared. |
| App metadata (`src/app/layout.tsx`) | The page still exposed default Create Next App metadata. | Set the metadata title and description to describe the existing landing page. | Source/build check. |

## Verification summary

- `npm run lint`: completed with no errors and six existing warnings (two unused variables and four raw `<img>` warnings in assessment, add-on, and navigation files).
- `npx tsc --noEmit`: passed after the latest phone fixes.
- `npm run lint`: passed with six existing warnings and no errors.
- Production build: not verified after the latest phone fixes. An isolated build collided with the existing development output directory (`EPERM` creating `.next-audit/server/app/_not-found.segments`); an earlier build passed before these final CSS/layout edits.
- Automated tests: no test script is defined in `package.json`.
- Browser: one screenshot spot-check at the available narrow viewport (approximately 517px wide); exact requested viewport matrix not tested.

## Risks and limitations

- The reported production screenshot may reflect a deployment that differs from the local source. The fixed-size tab should prevent horizontal overflow in either case once this source is deployed.
- The contact form and subscribe form have no submission integration in this UI; this audit did not invent one.
- The newsletter modal does not currently implement a focus trap or Escape-key close. Add these with an established dialog primitive if the modal is expanded.
- Browser-based visual checks at 1440, 1280, 1024, 768, 430, 390, 360 and 320 pixels were not performed in this run. Do not treat source review as visual confirmation.
- One spot-check screenshot was reviewed in the available browser at its default narrow viewport (approximately 517px wide); the CTA section appeared within the viewport. This is not a substitute for the target-width matrix above.
- The initial lint reported unused variables and raw `<img>` warnings in assessment/add-on/navigation files; those unrelated files were not refactored.
