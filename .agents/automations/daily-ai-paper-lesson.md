# Daily AI Paper Lesson — scheduled-task instructions

This file is the project-scoped source of truth for the **Daily AI paper lesson** scheduled task. It is shared with collaborators so that a manual or scheduled run follows the same lesson workflow.

## Keeping the scheduled task in sync

The live automation deliberately contains only a bootstrap instruction to read this file. Therefore it does not duplicate this long prompt and cannot become stale when this file changes.

When changing the Daily AI paper lesson workflow:

1. Edit this file first.
2. Keep the live automation bootstrap pointing to this exact absolute path.
3. If the bootstrap wording or path must change, update both the live automation and this section in the same change.

## Task prompt

Create the next daily AI/ML/DL paper lesson in `/Users/zhengjie.ng/Documents/intern diary/daily-ai-papers/daily-paper/`.

Read and follow this project-scoped instruction file first, together with the project `AGENTS.md` and the project-scoped skills it names. This file is the canonical scheduled-task prompt.

Use `$daily-ai-paper-lesson` and follow it fully, including its learner-preferences reference. Use delegated mode for this substantial lesson: independently research and verify candidate papers, audit original visual sources, and develop pedagogy and design, then integrate one coherent lesson.

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

Finish with a concise completion report naming the paper, linking the lesson HTML and PDF, and stating the commit hash and push result.
