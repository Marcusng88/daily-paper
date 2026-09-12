# Daily AI Paper Lesson — scheduled-task instructions

This file is the project-scoped source of truth for the **Daily AI paper lesson** scheduled task. It is shared with collaborators so that a manual or scheduled run follows the same lesson workflow.

## Keeping the scheduled task in sync

The live automation deliberately contains only a bootstrap instruction to read this file. Therefore it does not duplicate this long prompt and cannot become stale when this file changes.

When changing the Daily AI paper lesson workflow:

1. Edit this file first.
2. Keep the live automation bootstrap pointing to this exact absolute path.
3. If the bootstrap wording or path must change, update both the live automation and this section in the same change.

## Task prompt

Create the next daily AI/ML/DL paper lesson in `/Users/zhengjie.ng/Documents/daily-ai-papers/daily-paper/`.

Read and follow this project-scoped instruction file first, together with the project `AGENTS.md` and the project-scoped skills it names. This file is the canonical scheduled-task prompt.

Use `$daily-ai-paper-lesson` and follow it fully, including its learner-preferences reference. Use `$supervisor-worker`. You are the supervisor for this scheduled run.

Before paper selection, inspect `curriculum.json`, `index.html`, and representative existing lessons: at least three recent lessons and two older lessons from different domains. Extract curriculum coverage, recent concept overlap, prerequisite gaps, strong teaching and visual patterns, and known quality defects to avoid. Treat existing lessons as references, not templates.

Use two delegated waves. Spawn only as many workers as materially help, up to the configured limit of six.

1. **Selection:** assign read-only workers to curriculum analysis, candidate discovery, and source verification. Compare their evidence yourself. Reject title or slug repeats, penalize overlap with the last three to five lessons, and prefer papers that fill a learning gap or make a meaningful connection. Do not create lesson files, assets, curriculum updates, commits, or pushes until you independently verify one selected paper.
2. **Preparation:** after selection, assign a mechanism researcher, visual-source auditor, and pedagogy designer. The visual auditor must inspect candidate assets at native and intended display size, and return only sharp, tightly cropped candidates with figure/table number, PDF page, provenance, teaching question, and staging path. The pedagogy brief must propose a paper-specific 60-minute causal route, prediction exercise, active recall, misconceptions, and relevant mental-map connections.

Workers must not spawn workers. Assign writes only with exclusive boundaries. No worker may modify `curriculum.json`, `index.html`, `catalog.js`, or another worker's files. You own lesson integration, shared collection files, final validation, commit, and push. Verify ambiguous, conflicting, or weakly supported claims against the primary PDF or with one targeted follow-up.

Inspect the Git collection, `curriculum.json`, `index.html`, and existing lessons first. Choose one distinct, highly teachable core paper that broadens an AI university student's mental model. Avoid repeats and recently taught central mechanisms, and keep the collection balanced across AI, ML, and DL domains and credible venue ecosystems.

Verify a genuine publicly accessible primary PDF, its title, authors, version or venue, canonical record, and exact source URL before creating files. If no suitable source can be verified, do not create a substitute lesson; report the issue.

Create one new undated title-slug folder. Record the lesson date only in `curriculum.json`. Store the comprehensive title-based snake-case HTML, the original title-based snake-case PDF, and only useful local visual assets directly in that folder. Do not clone repositories, create a nested bundle, overwrite an existing lesson folder, commit, or push before the lesson has been fully created and validated.

Create a deeply taught, self-contained, offline-readable lesson for roughly 60 minutes of active study. Use `$paper2html`, `$frontend-design`, `$paper-lesson-visuals`, and the PDF skill. Give the paper a distinct, subject-grounded visual identity rather than reusing a generic shell.

Organize the material as a gradual causal teaching path for a university student:

1. A clear learning promise and credible timed route.
2. An intuitive prerequisite bridge with a concrete analogy.
3. The motivating problem or failed baseline.
4. Named actors, notation, tensor shapes, and assumptions before the full equation.
5. A faithful architecture or mechanism explanation.
6. At least two substantive worked calculations, traces, or derivations.
7. A predict-before-reveal exercise with an accessible correct answer and static explanation.
8. Source-grounded evidence with exact figure, table, and paper-page provenance, plus how to interpret it.
9. Limitations, failure modes, and misconceptions.
10. Active recall in which every question has an answer.
11. “Connect it to your mental map” using relevant completed lessons from `curriculum.json`.
12. A compact “Takeaway.”

Each section should resolve the question left by the previous section. Prefer a sharp original-paper architecture or result visual when it serves a clear teaching role: favour vector extraction or a high-resolution dedicated crop, never embed a whole PDF merely to show one figure, and never enlarge a blurry screenshot. The visual-source audit must prepare a tightly cropped, high-resolution local candidate for every figure, table, or plot it recommends, recording its source number, PDF page, and teaching question. This is not a quota: use every candidate that is sharp, non-redundant, and advances the causal lesson flow; remove current-run candidates that are not used. A faithful named reconstruction remains equally valid when it presents the source evidence more clearly. Label custom explanatory visuals exactly “Lesson diagram.”

Make interactions keyboard-usable, visibly focused, reduced-motion aware, and accompanied by a static explanation. Use the exact Home text “← Daily AI Paper Lab”. Keep reader-facing HTML free of metadata and process wording. End with “Source and further exploration” using concise bullets for the local original PDF, canonical record, and an official repository only when useful.

Update `curriculum.json` with the date and undated paths, then regenerate `catalog.js` with `node scripts/build_catalog.mjs`. Ensure `index.html` remains newest-first by curriculum date and includes the learner-facing description beneath every paper title. Validate the HTML, embedded JavaScript, local assets, PDF readability and provenance, accessibility basics, mobile layout, curriculum JSON, and catalog paths.

After all validation succeeds, inspect Git status. Commit only the files created or modified by this run, using a descriptive commit message prefixed `[ai-assisted]`. Then push the current branch to origin. Do not force-push. If pre-existing unrelated changes, a missing Git identity, authentication issue, or a push rejection prevents a safe push, do not alter unrelated work; report the exact issue.

Finish with a learner-friendly completion report: name the paper, explain what the learner will understand, why it was selected as the next useful lesson, its central mental model, relevant prior-lesson connections, estimated study time, and links to the lesson HTML and PDF. Follow with a short technical note stating validation completed or unavailable, the commit hash, push result, and any limitations or blockers.
