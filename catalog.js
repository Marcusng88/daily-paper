/* Generated from curriculum.json by scripts/build_catalog.ps1. */
window.DAILY_PAPER_CATALOG = [
    {
        "date":  "2026-08-24",
        "slug":  "semi-supervised-classification-with-graph-convolutional-networks",
        "topic":  "graphs",
        "topicLabel":  "Graph machine learning",
        "title":  "Semi-Supervised Classification with Graph Convolutional Networks",
        "authors":  "Kipf \u0026 Welling",
        "venue":  "ICLR 2017",
        "paperFile":  "2026-08-24-semi-supervised-classification-with-graph-convolutional-networks/semi_supervised_classification_with_graph_convolutional_networks.pdf",
        "lessonFile":  "2026-08-24-semi-supervised-classification-with-graph-convolutional-networks/semi_supervised_classification_with_graph_convolutional_networks.html",
        "canonicalUrl":  "https://openreview.net/forum?id=SJU4ayYgl",
        "domain":  "graph representation learning and semi-supervised node classification",
        "areas":  [
                      "graph neural networks",
                      "representation learning",
                      "semi-supervised learning"
                  ],
        "concepts":  [
                         "graphs",
                         "adjacency matrix",
                         "message passing",
                         "self-loops",
                         "degree normalization",
                         "node classification",
                         "over-smoothing"
                     ],
        "mentalMapConnection":  "Adds a graph-structured-data branch: it generalizes the shared local rule of CNNs beyond grids and contrasts fixed graph neighbourhood mixing with the Transformerâ€™s learned attention.",
        "search":  "semi-supervised classification with graph convolutional networks semi-supervised-classification-with-graph-convolutional-networks kipf \u0026 welling iclr 2017 graphs graph machine learning graph representation learning and semi-supervised node classification adds a graph-structured-data branch: it generalizes the shared local rule of cnns beyond grids and contrasts fixed graph neighbourhood mixing with the transformerâ€™s learned attention. https://openreview.net/forum?id=sju4ayygl graph neural networks representation learning semi-supervised learning graphs adjacency matrix message passing self-loops degree normalization node classification over-smoothing"
    },
    {
        "date":  "2026-08-23",
        "slug":  "auto-encoding-variational-bayes",
        "topic":  "generative",
        "topicLabel":  "Generative modeling",
        "title":  "Auto-Encoding Variational Bayes",
        "authors":  "Kingma \u0026 Welling",
        "venue":  "ICLR 2014",
        "paperFile":  "2026-08-23-auto-encoding-variational-bayes/auto_encoding_variational_bayes.pdf",
        "lessonFile":  "2026-08-23-auto-encoding-variational-bayes/auto_encoding_variational_bayes.html",
        "canonicalUrl":  "https://arxiv.org/abs/1312.6114",
        "domain":  "probabilistic generative modeling and variational inference",
        "areas":  [
                      "generative modeling",
                      "variational inference",
                      "latent-variable models"
                  ],
        "concepts":  [
                         "latent variables",
                         "generative model",
                         "approximate posterior",
                         "ELBO",
                         "reparameterization trick",
                         "variational inference",
                         "prior distribution"
                     ],
        "mentalMapConnection":  "Adds a likelihood-based latent-variable branch beside GANs, and connects probabilistic inference to the stochastic-gradient training ideas introduced by Adam.",
        "search":  "auto-encoding variational bayes auto-encoding-variational-bayes kingma \u0026 welling iclr 2014 generative generative modeling probabilistic generative modeling and variational inference adds a likelihood-based latent-variable branch beside gans, and connects probabilistic inference to the stochastic-gradient training ideas introduced by adam. https://arxiv.org/abs/1312.6114 generative modeling variational inference latent-variable models latent variables generative model approximate posterior elbo reparameterization trick variational inference prior distribution"
    },
    {
        "date":  "2026-08-23",
        "slug":  "dropout-a-simple-way-to-prevent-neural-networks-from-overfitting",
        "topic":  "regularization",
        "topicLabel":  "Regularization",
        "title":  "Dropout: A Simple Way to Prevent Neural Networks from Overfitting",
        "authors":  "Srivastava et al.",
        "venue":  "JMLR 2014",
        "paperFile":  "2026-08-23-dropout-a-simple-way-to-prevent-neural-networks-from-overfitting/dropout_a_simple_way_to_prevent_neural_networks_from_overfitting.pdf",
        "lessonFile":  "2026-08-23-dropout-a-simple-way-to-prevent-neural-networks-from-overfitting/dropout_a_simple_way_to_prevent_neural_networks_from_overfitting.html",
        "canonicalUrl":  "https://www.jmlr.org/papers/v15/srivastava14a.html",
        "domain":  "regularization and generalization",
        "areas":  [
                      "regularization",
                      "generalization",
                      "deep learning",
                      "model averaging"
                  ],
        "concepts":  [
                         "dropout",
                         "regularization",
                         "generalization",
                         "co-adaptation",
                         "Bernoulli masks",
                         "test-time scaling",
                         "shared-weight ensemble"
                     ],
        "mentalMapConnection":  "Adds a regularization branch: it changes which internal routes train on each pass, unlike Adam\u0027s parameter updates, BatchNorm\u0027s activation statistics, or ResNet\u0027s permanent shortcut paths.",
        "search":  "dropout: a simple way to prevent neural networks from overfitting dropout-a-simple-way-to-prevent-neural-networks-from-overfitting srivastava et al. jmlr 2014 regularization regularization regularization and generalization adds a regularization branch: it changes which internal routes train on each pass, unlike adam\u0027s parameter updates, batchnorm\u0027s activation statistics, or resnet\u0027s permanent shortcut paths. https://www.jmlr.org/papers/v15/srivastava14a.html regularization generalization deep learning model averaging dropout regularization generalization co-adaptation bernoulli masks test-time scaling shared-weight ensemble"
    },
    {
        "date":  "2026-08-22",
        "slug":  "direct-preference-optimization",
        "topic":  "post-training",
        "topicLabel":  "Post-training",
        "title":  "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
        "authors":  "Rafailov et al.",
        "venue":  "NeurIPS 2023",
        "paperFile":  "2026-08-22-direct-preference-optimization/direct_preference_optimization.pdf",
        "lessonFile":  "2026-08-22-direct-preference-optimization/direct_preference_optimization.html",
        "canonicalUrl":  "https://proceedings.neurips.cc/paper_files/paper/2023/file/a85b405ed65c6477a4fe8302b5e06ce7-Paper-Conference.pdf",
        "domain":  "language-model post-training and alignment",
        "areas":  [
                      "language-model post-training",
                      "alignment",
                      "preference learning"
                  ],
        "concepts":  [
                         "preference pairs",
                         "Bradley-Terry model",
                         "KL-regularized reward maximization",
                         "reference policy",
                         "implicit reward",
                         "DPO loss",
                         "beta"
                     ],
        "mentalMapConnection":  "First collection lesson: establishes the preference-learning and post-training branch.",
        "search":  "direct preference optimization: your language model is secretly a reward model direct-preference-optimization rafailov et al. neurips 2023 post-training post-training language-model post-training and alignment first collection lesson: establishes the preference-learning and post-training branch. https://proceedings.neurips.cc/paper_files/paper/2023/file/a85b405ed65c6477a4fe8302b5e06ce7-paper-conference.pdf language-model post-training alignment preference learning preference pairs bradley-terry model kl-regularized reward maximization reference policy implicit reward dpo loss beta"
    },
    {
        "date":  "2026-08-22",
        "slug":  "adam-a-method-for-stochastic-optimization",
        "topic":  "optimization",
        "topicLabel":  "Optimization",
        "title":  "Adam: A Method for Stochastic Optimization",
        "authors":  "Kingma \u0026 Ba",
        "venue":  "ICLR 2015",
        "paperFile":  "2026-08-22-adam-a-method-for-stochastic-optimization/adam_a_method_for_stochastic_optimization.pdf",
        "lessonFile":  "2026-08-22-adam-a-method-for-stochastic-optimization/adam_a_method_for_stochastic_optimization.html",
        "canonicalUrl":  "https://arxiv.org/abs/1412.6980",
        "domain":  null,
        "areas":  [
                      "optimization",
                      "deep-learning",
                      "adaptive-methods",
                      "training-dynamics"
                  ],
        "concepts":  [

                     ],
        "mentalMapConnection":  null,
        "search":  "adam: a method for stochastic optimization adam-a-method-for-stochastic-optimization kingma \u0026 ba iclr 2015 optimization optimization https://arxiv.org/abs/1412.6980 optimization deep-learning adaptive-methods training-dynamics"
    },
    {
        "date":  "2026-08-21",
        "slug":  "batch-normalization",
        "topic":  "normalization",
        "topicLabel":  "Normalization",
        "title":  "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift",
        "authors":  "Ioffe \u0026 Szegedy",
        "venue":  "ICML 2015",
        "paperFile":  "2026-08-21-batch-normalization/batch_normalization_accelerating_deep_network_training.pdf",
        "lessonFile":  "2026-08-21-batch-normalization/batch_normalization_accelerating_deep_network_training.html",
        "canonicalUrl":  "https://arxiv.org/abs/1502.03167",
        "domain":  null,
        "areas":  [
                      "deep-learning",
                      "optimization",
                      "normalization",
                      "computer-vision"
                  ],
        "concepts":  [

                     ],
        "mentalMapConnection":  null,
        "search":  "batch normalization: accelerating deep network training by reducing internal covariate shift batch-normalization ioffe \u0026 szegedy icml 2015 normalization normalization https://arxiv.org/abs/1502.03167 deep-learning optimization normalization computer-vision"
    },
    {
        "date":  "2026-08-20",
        "slug":  "generative-adversarial-nets",
        "topic":  "generative",
        "topicLabel":  "Generative modeling",
        "title":  "Generative Adversarial Nets",
        "authors":  "Goodfellow et al.",
        "venue":  "NeurIPS 2014",
        "paperFile":  "2026-08-20-generative-adversarial-nets/generative_adversarial_nets.pdf",
        "lessonFile":  "2026-08-20-generative-adversarial-nets/generative_adversarial_nets.html",
        "canonicalUrl":  "https://arxiv.org/abs/1406.2661",
        "domain":  null,
        "areas":  [
                      "generative-modeling",
                      "deep-learning",
                      "adversarial-learning",
                      "probabilistic-modeling"
                  ],
        "concepts":  [

                     ],
        "mentalMapConnection":  null,
        "search":  "generative adversarial nets generative-adversarial-nets goodfellow et al. neurips 2014 generative generative modeling https://arxiv.org/abs/1406.2661 generative-modeling deep-learning adversarial-learning probabilistic-modeling"
    },
    {
        "date":  "2026-08-19",
        "slug":  "attention-is-all-you-need",
        "topic":  "language",
        "topicLabel":  "Language modeling",
        "title":  "Attention Is All You Need",
        "authors":  "Vaswani et al.",
        "venue":  "NeurIPS 2017",
        "paperFile":  "2026-08-19-attention-is-all-you-need/attention_is_all_you_need.pdf",
        "lessonFile":  "2026-08-19-attention-is-all-you-need/attention_is_all_you_need.html",
        "canonicalUrl":  "https://arxiv.org/abs/1706.03762",
        "domain":  null,
        "areas":  [
                      "deep-learning",
                      "natural-language-processing",
                      "transformers",
                      "attention"
                  ],
        "concepts":  [

                     ],
        "mentalMapConnection":  null,
        "search":  "attention is all you need attention-is-all-you-need vaswani et al. neurips 2017 language language modeling https://arxiv.org/abs/1706.03762 deep-learning natural-language-processing transformers attention"
    },
    {
        "date":  "2026-08-19",
        "slug":  "deep-residual-learning-for-image-recognition",
        "topic":  "vision",
        "topicLabel":  "Computer vision",
        "title":  "Deep Residual Learning for Image Recognition",
        "authors":  "He et al.",
        "venue":  "CVPR 2016",
        "paperFile":  "2026-08-19-deep-residual-learning-for-image-recognition/deep_residual_learning_for_image_recognition.pdf",
        "lessonFile":  "2026-08-19-deep-residual-learning-for-image-recognition/deep_residual_learning_for_image_recognition.html",
        "canonicalUrl":  "https://arxiv.org/abs/1512.03385",
        "domain":  null,
        "areas":  [
                      "deep-learning",
                      "computer-vision",
                      "convolutional-neural-networks",
                      "optimization"
                  ],
        "concepts":  [

                     ],
        "mentalMapConnection":  null,
        "search":  "deep residual learning for image recognition deep-residual-learning-for-image-recognition he et al. cvpr 2016 vision computer vision https://arxiv.org/abs/1512.03385 deep-learning computer-vision convolutional-neural-networks optimization"
    },
    {
        "date":  "2026-08-19",
        "slug":  "human-level-control-through-deep-reinforcement-learning",
        "topic":  "reinforcement",
        "topicLabel":  "Reinforcement learning",
        "title":  "Human-level Control through Deep Reinforcement Learning",
        "authors":  "Mnih et al.",
        "venue":  "Nature 2015",
        "paperFile":  "2026-08-19-human-level-control-through-deep-reinforcement-learning/human_level_control_through_deep_reinforcement_learning.pdf",
        "lessonFile":  "2026-08-19-human-level-control-through-deep-reinforcement-learning/human_level_control_through_deep_reinforcement_learning.html",
        "canonicalUrl":  "https://www.nature.com/articles/nature14236",
        "domain":  null,
        "areas":  [
                      "deep-reinforcement-learning",
                      "decision-making",
                      "computer-vision",
                      "deep-learning"
                  ],
        "concepts":  [

                     ],
        "mentalMapConnection":  null,
        "search":  "human-level control through deep reinforcement learning human-level-control-through-deep-reinforcement-learning mnih et al. nature 2015 reinforcement reinforcement learning https://www.nature.com/articles/nature14236 deep-reinforcement-learning decision-making computer-vision deep-learning"
    }
];

