---
name: paper-lesson-visuals
description: Design and validate sharp, accessible explanatory diagrams and small interactive labs embedded in an offline academic-paper HTML lesson. Use for paper lessons, not in-conversation visualizations or generic product UI.
---

# Paper Lesson Visuals

Make a visual only when it makes a paper's mechanism, evidence, comparison, or mental model materially easier to understand. The visual belongs inside the lesson's self-contained HTML; this skill does not create an in-conversation visualization surface.

## Choose the smallest useful form

- Use a concise table when a comparison is primarily textual or numerical.
- Use a labelled SVG for architecture, tensor shapes, information flow, algorithm steps, or a small derivation.
- Use a compact interactive lab only when changing an input helps the learner form intuition. It must have a useful static reading path too.
- Prefer a source figure from the original paper when it remains sharp at its displayed size and supports a specific teaching point. Prefer vector extraction or high-resolution rendering, but do not force it when a faithful reconstruction teaches the evidence more clearly. Never enlarge a blurry screenshot.
- Label non-paper visuals **Lesson diagram** in the nearby caption. Attribute original-paper visuals precisely.

## Lesson-first composition

The reader is studying, not operating a dashboard. Give each visual one question to answer and one dominant visual field. Keep labels, values, and a short caption close to the figure; avoid KPI cards, decorative panels, status badges, pill controls, and duplicate legends.

Place every retained source-paper visual in the causal lesson flow where its question becomes necessary: a mechanism figure beside the mechanism it clarifies, and a result figure beside the evidence it qualifies. Do not append a detached source-figure gallery unless comparing the figures themselves is the learning activity.

For diagrams, use direct labels and arrows instead of a legend when possible. For plots, include meaningful axes and units, label important values directly, and use a legend only when direct labels are insufficient. Preserve the paper's units, splits, metrics, and experimental conditions.

## Interactive labs

Use native, keyboard-operable controls with visible labels. Let the learner predict before revealing the outcome. Keep one primary mechanism per lab and make the initial state explanatory even before interaction.

- Use `aria-live="polite"` only for a compact changed result.
- Preserve natural tab order; do not add positive `tabindex`.
- Keep focus styles visible and honour `prefers-reduced-motion`.
- Provide a static sentence that explains what the control demonstrates, including the result at a meaningful default state.
- Validate every queried element exists, JavaScript has no undefined identifiers, and the primary control visibly changes the intended visual or result.

## Technical integrity

Use semantic `figure`, `figcaption`, and appropriately titled/described SVGs (`role="img"`, `<title>`, and `<desc>`). Make SVGs responsive from their container, preserve readable labels on narrow screens, and avoid clipped text or fixed viewport layouts.

For a mechanism that has an equation, map a visual element to the symbols nearby. For example, show that residual addition is elementwise, explain shape compatibility before an addition node, and distinguish a learned projection from simple channel dropping.

When showing results, do not fabricate points, trends, datasets, or comparisons. State uncertainty and limits in the surrounding lesson prose rather than encoding unwarranted certainty in decorative visual treatment.

## Offline and visual QA

All lesson visuals must work without network access. Prefer inline SVG and local assets. Do not use runtime API calls, remote fonts, external libraries, or `fetch` for a lesson visual.

Before delivery, inspect the rendered lesson at desktop and narrow mobile widths. Check that SVG text is sharp, captions match their figures, controls work by keyboard, no content overlaps or clips, the reduced-motion path is calm, and any original-paper asset remains legible.
