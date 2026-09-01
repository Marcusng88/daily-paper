# HTML authoring

- Write semantic sections and a real heading hierarchy; do not simulate structure with generic `div`s alone.
- Keep all required CSS, JavaScript, fonts, and assets local. A lesson must open with networking disabled.
- Preserve source-figure aspect ratio. Use `width: 100%; height: auto` for flow images; do not use a fixed container that frames empty whitespace.
- Typeset non-trivial mathematics structurally and offline. Keep short symbols inline, but use native MathML (or an equivalently semantic local construction) for stacked fractions and roots, bounded sums/products, matrices, cases, and aligned derivations. Do not flatten a complex fraction into slash notation or cram a multi-step derivation into one line. Preserve MathML's native inline/block math layout: do not override a `<math>` element with ordinary CSS `display: inline-block` or `display: block`, which can make Chromium stack operators and identifiers vertically. Style an outer scrolling wrapper for wide equations instead. Display equations must remain readable and horizontally scroll rather than clip on narrow screens; do not add a remote MathJax or KaTeX dependency.
- Label explanatory SVG/HTML figures as **Lesson diagram** and distinguish them from evidence taken from the paper.
- Pair every interaction with text that explains its static meaning. Use native buttons/inputs where possible, focus styles, keyboard controls, and `prefers-reduced-motion`.
- Put reader-facing sources only in the concise final footer; keep notes, verification logs, and implementation wording out of the page.
