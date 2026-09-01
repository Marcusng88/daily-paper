---
name: paper2html
description: Convert an academic paper PDF into a publish-ready, self-contained single-page HTML lesson or project page. Use when the user asks for paper2html, a paper webpage, project page, or a detailed paper lesson in HTML.
---

# paper2html — Paper to a single-page HTML lesson (you-led, coordinated)

Turn one verified paper PDF into a portable, offline-ready HTML bundle. You are the lead author: inspect the paper, choose the visual language, hand-author the page, and revise it after QA. This is a staged workflow, not a one-shot template.

```text
PDF
 → local extraction and factual intake        → verified notes + useful local assets
 → understand paper + choose visual direction → lesson/page outline
 → hand-author the HTML page                  → portable HTML bundle
 → static and rendered QA                     → revise until clean
 → collect beside the PDF                     → portable HTML bundle
```

## How you run this skill

1. Work one stage at a time. Read the paper and any extracted assets before deciding the page’s claims, figures, or hierarchy.
2. Use the PDF skill for reading/extraction and `$frontend-design` for the design direction. Do not require MinerU, cloud parsing, tokens, Conda, Node, or cloned repositories.
3. Confirm the visual direction only when it would materially change the result; otherwise state the reasonable default you selected and proceed.
4. Never invent a metric, author, result, repository, caption, or paper link. The primary PDF and canonical record are the fact boundary.

## Step 0: Environment and workspace

Require a readable, authorised local PDF. Use an explicit output folder supplied by the user; otherwise place the HTML bundle next to the PDF in `<paper-stem>_html/`, appending `_v2`, `_v3`, and so on rather than overwriting an existing deliverable.

When invoked by `$daily-ai-paper-lesson` for a collection, its undated title-slug folder and title-based filename contract overrides this standalone default: write the lesson directly into that supplied folder as `<paper_title_snake_case>.html`, keep the title-based PDF there, and do not create a nested bundle or `index.html`.

Verify title, authors, venue/version, canonical URL, and useful code URL before authoring. If the PDF is scanned and local extraction is unreliable, use available OCR only when needed; otherwise stop and report that the evidence cannot be verified.

## Step 1: Extract and verify [gate 1]

Read the full paper rather than relying on its abstract. Build a compact factual intake for yourself: title/authors, contribution, method, claims, results, limitations, equations/notation, and candidate figures/tables. Inspect candidate figures at their native quality.

For every selected original figure, record why it helps the reader. A figure that becomes blurry, is too dense to read, or merely decorates the page does not earn a place. Use a custom SVG/HTML explanation instead, labeled “Lesson diagram.”

## Step 2: Understand the paper and set the design direction [confirm when material]

Establish a paper-specific visual concept before writing: visual language, restrained palette, typography, page structure, and one signature explanatory element. Avoid reusing a generic dashboard or the prior paper’s visual identity.

Before authoring, make a compact visual plan: identify each retained source figure and its teaching question, then state the question answered by the signature lesson diagram or interaction. Omit visuals that do not earn a specific teaching role. For a daily collection lesson, use `$paper-lesson-visuals` for the diagram/interaction and its accessibility checks.

For a daily lesson, the page is a credible 60-minute active study session. Build a route and teach one core mechanism deeply: prerequisite bridge, intuitive analogy, mapped notation, at least two worked traces/derivations or decision exercises when supported, evidence, limits, misconceptions, active recall with an accessible answer key, mental-map connection, and takeaway.

Read [design-languages.md](references/design-languages.md) before selecting the page's visual language.

## Step 3: Hand-author the HTML page [optional confirm]

Write a responsive, offline-readable page yourself. Use only useful local assets with relative paths; no remote scripts or fonts. Every image needs meaningful alt text and every link must resolve. Keep figures proportional: never stretch them or put a border around an oversized empty image box.

Reader-facing content must not expose verification logs, run dates, tool names, generated-by wording, or internal labels. Include a top Home link when the page belongs to a collection. End with a concise **Source and further exploration** footer containing the local PDF, canonical record, and an official repository only when useful.

Interactive elements must be keyboard-usable, visibly focused, reduced-motion aware, and accompanied by a static explanation. Use original visuals as evidence and custom diagrams for understanding.

Read [html-authoring.md](references/html-authoring.md) while building the page.

## Step 4: QA validation and revision [gate 2]

Before delivery, clear these hard failures:

- invalid HTML or embedded JavaScript;
- missing local assets, empty links, or broken Home/source links;
- unsupported claims or mismatched numbers;
- empty image alt text or unlabeled custom figures;
- horizontal overflow, clipped content, distorted figures, or unreadable mobile layout.

Also reject a lesson that only summarizes the paper. After following it, a student should be able to explain the core mechanism, work through a concrete trace or derivation, distinguish a common misconception, interpret the central evidence, and state an important limitation. Prefer a sharp original-paper extract for evidence when it clearly helps; a faithful reconstruction remains valid when it teaches the evidence more clearly. Recheck semantic heading order, visible focus, keyboard operation, reduced-motion behaviour, and sufficient contrast for interactive elements.

Inspect the page at desktop and mobile widths when rendering is available. Static checks alone cannot catch visual defects. Revise and recheck until hard failures are cleared; report any inspection capability that is unavailable.

Use [qa-checklist.md](references/qa-checklist.md) for the final pass.

## Step 5: Collect the deliverable next to the PDF

Deliver the agreed HTML filename plus only its needed local assets beside the PDF. Preserve previous final bundles; remove only current-run temporary or duplicate assets. Report the final HTML and PDF paths succinctly.

## Deliverable locations

Place the final HTML, source PDF, and only necessary local assets in the collision-safe bundle folder. Preserve an earlier completed bundle and never overwrite it silently.

## Troubleshooting

- **Extraction is incomplete:** verify the missing detail directly against the source PDF; do not fill it from memory.
- **A paper figure is unusable:** replace it with a labeled lesson diagram, not an enlarged blurry screenshot.
- **The page looks generic:** revisit the paper-specific visual direction before adding decoration.
- **A visual check is unavailable:** do static validation and state the limitation rather than claiming a visual pass.
