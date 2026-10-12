# Responsive testing checklist

Status legend: **Passed** = executed and passed; **Failed** = executed and failed; **Blocked** = attempted but environment prevented it; **Not tested** = not executed. Source review is not a visual viewport test.

## Viewport matrix

| Width | Intended category | Main checks | Status |
|---:|---|---|---|
| 1440px | Desktop | Centered max-width containers, three-card hero, CTA columns, footer grid, no horizontal overflow | Not tested (browser) |
| 1280px | Laptop | Container gutters, hero card widths, navigation fit, CTA gap | Not tested (browser) |
| 1024px | Tablet / small laptop | `lg` transition, CTA grid sizing, carousel controls and desktop menu | Not tested (browser) |
| 768px | Tablet | `md` two-card hero, add-on desktop section, card and form shrink behavior | Not tested (browser) |
| 430px | Mobile | Single hero slide and below-slide arrows, stacked CTA, modal and footer | Not tested (browser) |
| 390px | Mobile | Text wrapping, button width, input sizing, touch spacing | Not tested (browser) |
| 360px | Small mobile | No clipped controls or content, modal padding and form widths | Not tested (browser) |
| 320px | Very small mobile | No document overflow, readable hero title, modal fits viewport | Not tested (browser) |

## Checklist

- [ ] Check document width against viewport; investigate any horizontal scroll.
- [ ] Open and close navigation with pointer and keyboard; verify focus visibility and menu bounds.
- [ ] Operate both hero carousel controls; confirm controls remain in the hero region and do not cover slide text/buttons.
- [ ] Inspect heading wraps, paragraph line length, and section spacing at each width.
- [ ] Check image aspect ratios, crop, and intrinsic sizing.
- [ ] Check CTA/contact and newsletter forms at 320px and 360px; labels, autocomplete, focus, and validation work.
- [ ] Confirm buttons remain readable, reachable, and large enough to tap.
- [ ] Tab through the full page; check visible focus and meaningful accessible names.
- [ ] Check reduced-motion preferences for autoplay and transitions.
- [ ] Check dialog focus entry, Escape behavior, and focus return.
- [ ] Run lint, TypeScript, production build, and available test suite.
- [ ] Recheck navigation, forms, carousel, assessment, and external integrations after production build.

## Run commands

```bash
npm run lint
npx tsc --noEmit
npm run build
```

This repository currently defines no automated test script. Add viewport tests when a browser test framework is introduced; do not infer visual success from compilation alone.
