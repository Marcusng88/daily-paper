param(
  [string]$CurriculumPath = (Join-Path $PSScriptRoot "..\curriculum.json"),
  [string]$CatalogPath = (Join-Path $PSScriptRoot "..\catalog.js")
)

$curriculum = Get-Content -Raw -LiteralPath $CurriculumPath | ConvertFrom-Json
$topics = @{
  "semi-supervised-classification-with-graph-convolutional-networks" = @("graphs", "Graph machine learning")
  "direct-preference-optimization" = @("post-training", "Post-training")
  "auto-encoding-variational-bayes" = @("generative", "Generative modeling")
  "dropout-a-simple-way-to-prevent-neural-networks-from-overfitting" = @("regularization", "Regularization")
  "adam-a-method-for-stochastic-optimization" = @("optimization", "Optimization")
  "batch-normalization" = @("normalization", "Normalization")
  "generative-adversarial-nets" = @("generative", "Generative modeling")
  "attention-is-all-you-need" = @("language", "Language modeling")
  "deep-residual-learning-for-image-recognition" = @("vision", "Computer vision")
  "human-level-control-through-deep-reinforcement-learning" = @("reinforcement", "Reinforcement learning")
}
$venues = @{
  "semi-supervised-classification-with-graph-convolutional-networks" = "ICLR 2017"
  "auto-encoding-variational-bayes" = "ICLR 2014"
  "dropout-a-simple-way-to-prevent-neural-networks-from-overfitting" = "JMLR 2014"
  "direct-preference-optimization" = "NeurIPS 2023"
  "adam-a-method-for-stochastic-optimization" = "ICLR 2015"
  "batch-normalization" = "ICML 2015"
  "generative-adversarial-nets" = "NeurIPS 2014"
  "attention-is-all-you-need" = "NeurIPS 2017"
  "deep-residual-learning-for-image-recognition" = "CVPR 2016"
  "human-level-control-through-deep-reinforcement-learning" = "Nature 2015"
}

$catalog = foreach ($lesson in $curriculum.completed_lessons) {
  $topic = $topics[$lesson.slug]
  if (-not $topic) { throw "No index topic mapping exists for '$($lesson.slug)'." }
  $authorText = switch ($lesson.slug) {
    "semi-supervised-classification-with-graph-convolutional-networks" { "Kipf & Welling"; break }
    "auto-encoding-variational-bayes" { "Kingma & Welling"; break }
    "dropout-a-simple-way-to-prevent-neural-networks-from-overfitting" { "Srivastava et al."; break }
    "direct-preference-optimization" { "Rafailov et al."; break }
    "adam-a-method-for-stochastic-optimization" { "Kingma & Ba"; break }
    "batch-normalization" { "Ioffe & Szegedy"; break }
    "generative-adversarial-nets" { "Goodfellow et al."; break }
    "attention-is-all-you-need" { "Vaswani et al."; break }
    "deep-residual-learning-for-image-recognition" { "He et al."; break }
    "human-level-control-through-deep-reinforcement-learning" { "Mnih et al."; break }
    default { if ($lesson.authors -is [array]) { $lesson.authors -join ", " } else { $lesson.authors } }
  }
  $venue = $venues[$lesson.slug]
  $areas = @($lesson.areas | Where-Object { $_ })
  $concepts = @($lesson.concepts_introduced | Where-Object { $_ })
  $tokens = (@($lesson.title, $lesson.slug, $authorText, $venue, $topic[0], $topic[1], $lesson.domain, $lesson.mental_map_connection, $lesson.canonical_url) + $areas + $concepts) | Where-Object { $_ } | ForEach-Object { $_.ToString().ToLowerInvariant() }
  [ordered]@{
    date = $lesson.date; slug = $lesson.slug; topic = $topic[0]; topicLabel = $topic[1]; title = $lesson.title; authors = $authorText; venue = $venue
    paperFile = $lesson.paper_file; lessonFile = $lesson.lesson_file; canonicalUrl = $lesson.canonical_url; domain = $lesson.domain; areas = $areas; concepts = $concepts; mentalMapConnection = $lesson.mental_map_connection; search = ($tokens -join ' ')
  }
}

$json = $catalog | ConvertTo-Json -Depth 4
$content = "/* Generated from curriculum.json by scripts/build_catalog.ps1. */`r`nwindow.DAILY_PAPER_CATALOG = $json;`r`n"
Set-Content -LiteralPath $CatalogPath -Value $content -Encoding utf8
