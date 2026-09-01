---
name: daily-ai-paper-lesson
description: Curate a verified AI/ML/DL paper and create one deep, self-contained one-hour HTML lesson. Use for daily paper-study lessons, not scheduling or generic summaries.
---

# Daily AI Paper Lesson

Create a durable mental-model lesson for an AI university student. The default renderer is `$paper2html`; it replaces the earlier generic lesson-page workflow. `$paper2poster` and `$paper2slides` are optional outputs only when the user explicitly requests them.

## Start with the collection and paper

Read [learner preferences](references/learner-preferences.md), the collection index, and `curriculum.json` when a collection is in scope. Preserve explicit user instructions over this skill.

Choose one distinct, highly teachable core paper that broadens the learner’s mental model. Maintain balance across domains and avoid repeated central mechanisms. Candidate discovery may use Hugging Face Daily Papers, arXiv, credible venues, author sites, and official project pages, but each chosen paper must have a genuine, readable, publicly accessible primary PDF and canonical record.

Before writing, verify title, authors, version/venue, exact source URL, and key claims against the PDF/canonical record. Download only into the authorised destination supplied by the user; when the collection is in scope, save the original PDF in the new title-slug paper folder with a filesystem-safe title-based name. Do not clone repositories.

## Default output: one deep HTML lesson

Use `$paper2html` to create one self-contained, offline-readable HTML lesson designed for roughly 60 minutes of active study. It is the only default HTML deliverable, not an additional project homepage. Use `$frontend-design` to establish a paper-specific visual thesis, typography, layout rhythm, semantic palette, and signature element; do not reuse one generic lesson shell with only a new title or accent colour. Use `$paper-lesson-visuals` when designing or validating lesson diagrams, original-paper figures, plots, or interactive labs.

### Collection-mode renderer contract

When this skill is creating a collection lesson, create an undated title-slug folder first and pass that exact folder to `$paper2html` as its output location. Record the study date in `curriculum.json`, not in the folder name. The collection folder contains the title-based PDF and one title-based snake-case lesson HTML file (for example, `attention_is_all_you_need.html`); do not create a nested `<paper-stem>_html/` bundle or substitute `index.html`. Update the collection only after the lesson clears final QA.

The page must teach gradually through a causal sequence: learning promise and route, intuitive prerequisite bridge with analogy, motivating problem or failed baseline, named actors/symbols/shapes, mechanism, multiple worked traces or derivations, predict-before-reveal practice, source-grounded evidence, diagnostics and limitations, active recall with answers, then final “Connect it to your mental map” and “Takeaway” sections. Each section should resolve the question left by the previous one. The connection should genuinely relate to prior completed lessons.

Keep reader-facing content free of process wording: no generated-by text, run dates, verification badges, tool names, internal labels, or trial language. End with a concise “Source and further exploration” footer.

### One-hour quality gate

Before delivery, confirm that the completed lesson is a plausible 60-minute active study route and that it teaches rather than merely summarizes the paper. It needs a prerequisite bridge, mapped notation, one paper-specific signature visual or interaction, at least one source-grounded evidence visual; favour a sharp original figure or table when it serves the lesson, while a faithful named reconstruction is equally acceptable when it reads more clearly; at least two substantive worked traces, derivations, or decision exercises when the paper supports them, a predict-before-reveal check, misconceptions or diagnostics, evidence with scope and limitations, active recall with accessible answers, and a genuine connection to earlier lessons. Preserve room for paper-specific teaching choices; this is an outcome gate, not a fixed page template.

## Optional companion outputs

- If the user asks for a poster, use `$paper2poster` in addition to the lesson.
- If the user asks for slides, use `$paper2slides` in addition to the lesson.
- Do not create either by default. Their outputs do not replace the one-hour lesson.

## Visual integrity and delegation

Use original paper visuals only when sharp; custom explanatory visuals must be labeled as lesson diagrams. Follow `$paper-lesson-visuals` for visual selection, accessibility, offline behaviour, and visual QA. The lesson must stay usable offline, keyboard accessible, visibly focused, and reduced-motion aware.

For a substantial new collection lesson, use independent research/verification, visual-source audit, and pedagogy/design briefs whenever delegation is available. For smaller revisions, use delegation when the user asks or when it materially improves confidence. Integrate the evidence into one coherent output; do not paste briefs together.

## Deliver and validate

Create one new undated `title-slug` folder. Preserve prior folders and remove only current-run temporary/duplicate assets. Update `index.html`, `curriculum.json`, and the generated catalog for a completed collection addition, keeping newest lessons first by the curriculum date. Include a top Home link when the index is in scope.

Validate HTML/embedded JavaScript, local references, PDF readability/provenance, accessibility basics, collection JSON, and visual assets when supported. State any inspection limitation plainly.
