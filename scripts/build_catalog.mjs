import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const curriculum = JSON.parse(fs.readFileSync(path.join(root, "curriculum.json"), "utf8"));

const presentation = {
  "you-only-look-once-unified-real-time-object-detection": ["vision", "Computer vision", "CVPR 2016"],
  "neural-turing-machines": ["memory", "Memory-augmented models", "arXiv preprint 2014"],
  "communication-efficient-learning-of-deep-networks-from-decentralized-data": ["federated", "Federated learning", "AISTATS 2017"],
  "mastering-the-game-of-go-with-deep-neural-networks-and-tree-search": ["planning", "Planning and search", "Nature 2016"],
  "model-agnostic-meta-learning-for-fast-adaptation-of-deep-networks": ["meta-learning", "Meta-learning", "ICML 2017"],
  "denoising-diffusion-probabilistic-models": ["generative", "Generative modeling", "NeurIPS 2020"],
  "distilling-the-knowledge-in-a-neural-network": ["compression", "Model compression", "NeurIPS Workshop 2015"],
  "simclr-contrastive-learning": ["self-supervised", "Self-supervised learning", "ICML 2020"],
  "semi-supervised-classification-with-graph-convolutional-networks": ["graphs", "Graph machine learning", "ICLR 2017"],
  "the-lottery-ticket-hypothesis": ["efficient", "Efficient ML", "ICLR 2019"],
  "auto-encoding-variational-bayes": ["generative", "Generative modeling", "ICLR 2014"],
  "dropout-a-simple-way-to-prevent-neural-networks-from-overfitting": ["regularization", "Regularization", "JMLR 2014"],
  "direct-preference-optimization": ["post-training", "Post-training", "NeurIPS 2023"],
  "adam-a-method-for-stochastic-optimization": ["optimization", "Optimization", "ICLR 2015"],
  "batch-normalization": ["normalization", "Normalization", "ICML 2015"],
  "generative-adversarial-nets": ["generative", "Generative modeling", "NeurIPS 2014"],
  "attention-is-all-you-need": ["language", "Language modeling", "NeurIPS 2017"],
  "deep-residual-learning-for-image-recognition": ["vision", "Computer vision", "CVPR 2016"],
  "human-level-control-through-deep-reinforcement-learning": ["reinforcement", "Reinforcement learning", "Nature 2015"]
};

const catalog = curriculum.completed_lessons.map(lesson => {
  const display = presentation[lesson.slug];
  if (!display) throw new Error(`No catalog presentation mapping for ${lesson.slug}`);
  const [topic, topicLabel, venue] = display;
  const authors = (lesson.authors || []).filter(Boolean);
  if (!authors.length) throw new Error(`No authors listed for ${lesson.slug}`);
  const areas = (lesson.areas || []).filter(Boolean);
  const concepts = (lesson.concepts_introduced || []).filter(Boolean);
  const tokens = [lesson.title, lesson.slug, authors, venue, topic, topicLabel, lesson.description,
    lesson.domain, lesson.mental_map_connection, lesson.canonical_url, ...areas, ...concepts]
    .filter(Boolean).join(" ").toLowerCase();
  return {
    date: lesson.date,
    slug: lesson.slug,
    topic,
    topicLabel,
    title: lesson.title,
    description: lesson.description,
    authors,
    venue,
    paperFile: lesson.paper_file,
    lessonFile: lesson.lesson_file,
    canonicalUrl: lesson.canonical_url,
    domain: lesson.domain || null,
    areas,
    concepts,
    mentalMapConnection: lesson.mental_map_connection || null,
    search: tokens
  };
});

const content = `/* Generated from curriculum.json by scripts/build_catalog.mjs. */\nwindow.DAILY_PAPER_CATALOG = ${JSON.stringify(catalog, null, 2)};\n`;
fs.writeFileSync(path.join(root, "catalog.js"), content, "utf8");
console.log(`Wrote ${catalog.length} lessons to catalog.js`);
