# Learner and collection preferences

Read this reference before creating or materially revising a lesson for this learner. Update it when feedback represents a durable preference, keeping the change specific and dated only when dates materially help the collection.

## Learning goal and level

- The learner is an AI university student building native intuition and a broad mental model of AI/ML/DL.
- Aim for one deeply taught core paper per session, designed for roughly 60 minutes of active study.
- Prioritise influential, high-quality, educationally clear papers. A mix of classic and lookback work is welcome; recency is not required.
- Prefer a balanced mix of credible paper and venue ecosystems over time where that does not weaken primary-PDF provenance or educational clarity.
- Teach without assuming excessive prerequisites. Use plain-language analogies, worked traces, and careful notation rather than oversimplifying the paper.

## Curriculum shape

Mix domains over time: language models, computer vision, reinforcement learning, generative/multimodal models, agents, optimisation, efficient ML, and theory. `curriculum.json` is the single source of truth for completed lessons and concepts introduced; read it before selecting a paper and when making mental-map connections. Do not restate whole earlier lessons.

## File-first delivery

- The reader wants files to open and navigate, especially a comprehensive HTML lesson and the original paper PDF; Markdown alone is not the deliverable.
- Default collection location, when explicitly in scope: /Users/zhengjie.ng/Documents/intern diary/daily-ai-papers/daily-paper/
- Store each paper in its own undated title-slug folder. Keep the study date in `curriculum.json`, and keep the original PDF in the folder with a filesystem-safe title-based filename such as attention_is_all_you_need.pdf.
- Update index.html and curriculum.json only for a completed addition to this collection.
- Preserve existing lessons. Clean up only temporary assets or current-run duplicates; never leave low-quality replacement PDFs/PNGs beside the intended final assets.

## Source and visual quality

- Confirm the paper has an accessible primary PDF before teaching it.
- Include at least one source-grounded evidence visual in every detailed lesson. Prefer a sharp, tightly cropped original figure or result table with exact figure/table and paper-page provenance when it makes the evidence easier to read. A faithful HTML/SVG reconstruction of a named source figure or table is equally acceptable when it is clearer or the original does not remain readable; preserve its values, scales, conditions, and uncertainty, and label it clearly as a reconstruction. A custom mechanism diagram alone does not satisfy this evidence requirement.
- Include an original paper figure only if it can remain sharp. Prefer vector PDF/SVG. Do not embed blurry snapshots.
- Do not embed the complete source-paper PDF merely to display one figure. Extract or create a dedicated, sharp local figure asset; keep the full original paper as a footer link.
- A paper's raster figure may be shown at native size with a clear caption; do not upscale it merely to fill layout.
- Use custom SVG/animation when it makes the mechanism easier to understand. It must be clearly a lesson diagram, not passed off as an original figure.
- Keep lessons self-contained and avoid remote dependencies where practical.

## Lesson voice and interface

- Detailed, appealing, and purposeful rather than templated or dashboard-like.
- Give each paper its own subject-grounded visual thesis, typography, layout rhythm, semantic palette, and one signature explanatory element. Do not reuse the previous lesson's page shell with only a title or accent-colour swap; collection consistency should come from navigation, teaching quality, source treatment, and accessibility rather than identical page templates.
- Keep lessons free of metadata-style wording. Show only reader-serving teaching content and source links: never expose generated-by labels, source-verification badges, run dates, tool names, internal process labels, or trial language.
- Every reader-facing recall, diagnostic, or prediction prompt must provide a correct answer in the lesson, either directly or through an accessible reveal/answer key.
- Typeset mathematical structure like a technical textbook. Keep only genuinely short notation inline; render fractions, roots, bounded sums/products, matrices, cases, and multi-step derivations as readable display mathematics with stacked or aligned structure rather than slash-heavy text forced into one row. Prefer native offline MathML or an equally semantic local treatment, and make wide equations scroll safely on narrow screens without using a remote rendering dependency.
- Organize the teaching as a gradual causal path: prerequisite bridge and analogy, motivating problem, named components and notation, mechanism, worked traces, prediction, evidence, limitations, recall, mental map, and takeaway. Do not merely place these sections side by side; explain why each next idea is needed.
- One strong visual signature is better than scattered decorative animation.

### Visual direction: academic, not cutesy

- The house style is a well-typeset academic paper or technical book, not a friendly product-explainer site. Favour serif body text, generous whitespace, and a restrained palette used semantically (e.g. two colors distinguishing two named quantities) rather than decoratively. Avoid bright accent colors, heavy drop-shadows, oversized rounded "app card" shapes, or pill-shaped buttons — these read as childish rather than professional.
- Build custom explanatory diagrams as clean, labeled inline SVG by default — precise line weight, minimal color, closer to a textbook figure than an illustration. Reach for SVG before a screenshot, a stock icon, or a canvas animation: it stays sharp at any size, can be labeled directly, and is easiest to make legible and readable.
- Interactive elements should feel like an instrument embedded in a figure — a labeled slider on a diagram, a toggle that reveals the next derivation step — rather than a game-like "duel" or "lab" framing. Keep the pedagogical intent but present it with the same restraint as the rest of the page.
- Include original paper/source links and relevant repository links only; never clone code.
- Present final paper links in a **Source and further exploration** footer as a concise bulleted list, rather than an inline run of links.
- When a collection lesson has a Home link, use the exact text **← Daily AI Paper Lab**.
- End every detailed lesson with:
  - **Connect it to your mental map** - a true bridge to earlier lessons or concepts.
  - **Takeaway** - a compact native-intuition statement that the learner can reuse.

## Current feedback rule

When the learner gives feedback such as “make this more detailed,” “do not show this metadata,” or “the image is blurry,” improve the current lesson first. Then update this reference only if the preference is likely to apply to later lessons as well.
