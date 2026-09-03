/* Generated from curriculum.json by scripts/build_catalog.mjs. */
window.DAILY_PAPER_CATALOG = [
  {
    "date": "2026-09-03",
    "slug": "communication-efficient-learning-of-deep-networks-from-decentralized-data",
    "topic": "federated",
    "topicLabel": "Federated learning",
    "title": "Communication-Efficient Learning of Deep Networks from Decentralized Data",
    "description": "Learn how a shared model can be improved across many clients without pooling raw training data, and why fewer communication rounds require careful handling of client drift.",
    "authors": [
      "H. Brendan McMahan",
      "Eider Moore",
      "Daniel Ramage",
      "Seth Hampson",
      "Blaise Agüera y Arcas"
    ],
    "venue": "AISTATS 2017",
    "paperFile": "communication-efficient-learning-of-deep-networks-from-decentralized-data/communication_efficient_learning_of_deep_networks_from_decentralized_data.pdf",
    "lessonFile": "communication-efficient-learning-of-deep-networks-from-decentralized-data/communication_efficient_learning_of_deep_networks_from_decentralized_data.html",
    "canonicalUrl": "https://proceedings.mlr.press/v54/mcmahan17a.html",
    "domain": "federated and decentralized optimization",
    "areas": [
      "federated learning",
      "distributed systems",
      "optimization",
      "privacy-aware machine learning"
    ],
    "concepts": [
      "federated learning",
      "federated averaging",
      "decentralized data",
      "non-IID data",
      "client drift",
      "communication rounds",
      "local epochs"
    ],
    "mentalMapConnection": "Adds a training-topology layer beside SGD and Adam: the optimizer still changes parameters, but FedAvg decides where the gradient work happens and how many local updates occur before models are combined.",
    "search": "communication-efficient learning of deep networks from decentralized data communication-efficient-learning-of-deep-networks-from-decentralized-data h. brendan mcmahan,eider moore,daniel ramage,seth hampson,blaise agüera y arcas aistats 2017 federated federated learning learn how a shared model can be improved across many clients without pooling raw training data, and why fewer communication rounds require careful handling of client drift. federated and decentralized optimization adds a training-topology layer beside sgd and adam: the optimizer still changes parameters, but fedavg decides where the gradient work happens and how many local updates occur before models are combined. https://proceedings.mlr.press/v54/mcmahan17a.html federated learning distributed systems optimization privacy-aware machine learning federated learning federated averaging decentralized data non-iid data client drift communication rounds local epochs"
  },
  {
    "date": "2026-09-02",
    "slug": "mastering-the-game-of-go-with-deep-neural-networks-and-tree-search",
    "topic": "planning",
    "topicLabel": "Planning and search",
    "title": "Mastering the game of Go with deep neural networks and tree search",
    "description": "Learn how AlphaGo combined learned policy and value networks with tree search so it could deliberate over a huge board without examining every possible game.",
    "authors": [
      "David Silver",
      "Aja Huang",
      "Chris J. Maddison",
      "Arthur Guez",
      "Laurent Sifre",
      "George van den Driessche",
      "Julian Schrittwieser",
      "Ioannis Antonoglou",
      "Veda Panneershelvam",
      "Marc Lanctot",
      "Sander Dieleman",
      "Dominik Grewe",
      "John Nham",
      "Nal Kalchbrenner",
      "Ilya Sutskever",
      "Timothy Lillicrap",
      "Madeleine Leach",
      "Koray Kavukcuoglu",
      "Thore Graepel",
      "Demis Hassabis"
    ],
    "venue": "Nature 2016",
    "paperFile": "mastering-the-game-of-go-with-deep-neural-networks-and-tree-search/mastering_the_game_of_go_with_deep_neural_networks_and_tree_search.pdf",
    "lessonFile": "mastering-the-game-of-go-with-deep-neural-networks-and-tree-search/mastering_the_game_of_go_with_deep_neural_networks_and_tree_search.html",
    "canonicalUrl": "https://doi.org/10.1038/nature16961",
    "domain": "planning with learned policy and value networks",
    "areas": [
      "reinforcement learning",
      "planning",
      "tree search",
      "game playing"
    ],
    "concepts": [
      "Monte Carlo tree search",
      "policy prior",
      "value network",
      "tree expansion",
      "exploration bonus",
      "rollout",
      "backup"
    ],
    "mentalMapConnection": "Adds planning to the reinforcement-learning branch: unlike DQN's direct action scoring, AlphaGo uses learned policy and value predictions to decide where a temporary search tree should spend its computation.",
    "search": "mastering the game of go with deep neural networks and tree search mastering-the-game-of-go-with-deep-neural-networks-and-tree-search david silver,aja huang,chris j. maddison,arthur guez,laurent sifre,george van den driessche,julian schrittwieser,ioannis antonoglou,veda panneershelvam,marc lanctot,sander dieleman,dominik grewe,john nham,nal kalchbrenner,ilya sutskever,timothy lillicrap,madeleine leach,koray kavukcuoglu,thore graepel,demis hassabis nature 2016 planning planning and search learn how alphago combined learned policy and value networks with tree search so it could deliberate over a huge board without examining every possible game. planning with learned policy and value networks adds planning to the reinforcement-learning branch: unlike dqn's direct action scoring, alphago uses learned policy and value predictions to decide where a temporary search tree should spend its computation. https://doi.org/10.1038/nature16961 reinforcement learning planning tree search game playing monte carlo tree search policy prior value network tree expansion exploration bonus rollout backup"
  },
  {
    "date": "2026-09-01",
    "slug": "model-agnostic-meta-learning-for-fast-adaptation-of-deep-networks",
    "topic": "meta-learning",
    "topicLabel": "Meta-learning",
    "title": "Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks",
    "description": "Learn why a model can be trained not just to perform now, but to become useful after a few examples and an ordinary gradient step.",
    "authors": [
      "Chelsea Finn",
      "Pieter Abbeel",
      "Sergey Levine"
    ],
    "venue": "ICML 2017",
    "paperFile": "model-agnostic-meta-learning-for-fast-adaptation-of-deep-networks/model_agnostic_meta_learning_for_fast_adaptation_of_deep_networks.pdf",
    "lessonFile": "model-agnostic-meta-learning-for-fast-adaptation-of-deep-networks/model_agnostic_meta_learning_for_fast_adaptation_of_deep_networks.html",
    "canonicalUrl": "https://proceedings.mlr.press/v70/finn17a.html",
    "domain": "meta-learning and few-shot adaptation",
    "areas": [
      "meta-learning",
      "few-shot learning",
      "optimization",
      "reinforcement learning"
    ],
    "concepts": [
      "meta-learning",
      "task distribution",
      "support set",
      "query set",
      "fast adaptation",
      "inner update",
      "outer update",
      "meta-gradient",
      "first-order MAML"
    ],
    "mentalMapConnection": "Adds a learn-to-adapt branch: unlike Adam, which changes how one update is scaled, MAML trains an initialization for the model it becomes after task-specific updates.",
    "search": "model-agnostic meta-learning for fast adaptation of deep networks model-agnostic-meta-learning-for-fast-adaptation-of-deep-networks chelsea finn,pieter abbeel,sergey levine icml 2017 meta-learning meta-learning learn why a model can be trained not just to perform now, but to become useful after a few examples and an ordinary gradient step. meta-learning and few-shot adaptation adds a learn-to-adapt branch: unlike adam, which changes how one update is scaled, maml trains an initialization for the model it becomes after task-specific updates. https://proceedings.mlr.press/v70/finn17a.html meta-learning few-shot learning optimization reinforcement learning meta-learning task distribution support set query set fast adaptation inner update outer update meta-gradient first-order maml"
  },
  {
    "date": "2026-08-31",
    "slug": "denoising-diffusion-probabilistic-models",
    "topic": "generative",
    "topicLabel": "Generative modeling",
    "title": "Denoising Diffusion Probabilistic Models",
    "description": "Learn how generation can be decomposed into reversing a known sequence of small noise steps.",
    "authors": [
      "Jonathan Ho",
      "Ajay Jain",
      "Pieter Abbeel"
    ],
    "venue": "NeurIPS 2020",
    "paperFile": "denoising-diffusion-probabilistic-models/denoising_diffusion_probabilistic_models.pdf",
    "lessonFile": "denoising-diffusion-probabilistic-models/denoising_diffusion_probabilistic_models.html",
    "canonicalUrl": "https://arxiv.org/abs/2006.11239",
    "domain": "diffusion-based generative modeling",
    "areas": [
      "generative modeling",
      "diffusion models",
      "denoising",
      "score matching"
    ],
    "concepts": [
      "diffusion models",
      "forward noising process",
      "reverse denoising process",
      "noise schedule",
      "noise prediction",
      "variational bound",
      "iterative sampling"
    ],
    "mentalMapConnection": "Adds a likelihood-trained generative path beside GANs and VAEs: corrupt data with a fixed process, then learn many local denoising corrections.",
    "search": "denoising diffusion probabilistic models denoising-diffusion-probabilistic-models jonathan ho,ajay jain,pieter abbeel neurips 2020 generative generative modeling learn how generation can be decomposed into reversing a known sequence of small noise steps. diffusion-based generative modeling adds a likelihood-trained generative path beside gans and vaes: corrupt data with a fixed process, then learn many local denoising corrections. https://arxiv.org/abs/2006.11239 generative modeling diffusion models denoising score matching diffusion models forward noising process reverse denoising process noise schedule noise prediction variational bound iterative sampling"
  },
  {
    "date": "2026-08-30",
    "slug": "distilling-the-knowledge-in-a-neural-network",
    "topic": "compression",
    "topicLabel": "Model compression",
    "title": "Distilling the Knowledge in a Neural Network",
    "description": "Learn how a small model learns from a teacher’s entire softened probability distribution, carrying more information than one hard label.",
    "authors": [
      "Geoffrey Hinton",
      "Oriol Vinyals",
      "Jeff Dean"
    ],
    "venue": "NeurIPS Workshop 2015",
    "paperFile": "distilling-the-knowledge-in-a-neural-network/distilling_the_knowledge_in_a_neural_network.pdf",
    "lessonFile": "distilling-the-knowledge-in-a-neural-network/distilling_the_knowledge_in_a_neural_network.html",
    "canonicalUrl": "https://arxiv.org/abs/1503.02531",
    "domain": "model compression and teacher-student learning",
    "areas": [
      "model compression",
      "knowledge distillation",
      "deployment",
      "transfer learning"
    ],
    "concepts": [
      "knowledge distillation",
      "soft targets",
      "teacher-student learning",
      "softmax temperature",
      "dark knowledge",
      "temperature-squared gradient scaling",
      "model compression"
    ],
    "mentalMapConnection": "Adds a model-compression branch: a smaller student learns the teacher’s relationships among classes rather than copying only hard labels.",
    "search": "distilling the knowledge in a neural network distilling-the-knowledge-in-a-neural-network geoffrey hinton,oriol vinyals,jeff dean neurips workshop 2015 compression model compression learn how a small model learns from a teacher’s entire softened probability distribution, carrying more information than one hard label. model compression and teacher-student learning adds a model-compression branch: a smaller student learns the teacher’s relationships among classes rather than copying only hard labels. https://arxiv.org/abs/1503.02531 model compression knowledge distillation deployment transfer learning knowledge distillation soft targets teacher-student learning softmax temperature dark knowledge temperature-squared gradient scaling model compression"
  },
  {
    "date": "2026-08-26",
    "slug": "simclr-contrastive-learning",
    "topic": "self-supervised",
    "topicLabel": "Self-supervised learning",
    "title": "A Simple Framework for Contrastive Learning of Visual Representations",
    "description": "Learn how carefully chosen augmented views become a self-supervised training signal, teaching an encoder what should stay the same without labels.",
    "authors": [
      "Ting Chen",
      "Simon Kornblith",
      "Mohammad Norouzi",
      "Geoffrey Hinton"
    ],
    "venue": "ICML 2020",
    "paperFile": "simclr-contrastive-learning/a_simple_framework_for_contrastive_learning_of_visual_representations.pdf",
    "lessonFile": "simclr-contrastive-learning/a_simple_framework_for_contrastive_learning_of_visual_representations.html",
    "canonicalUrl": "https://proceedings.mlr.press/v119/chen20j.html",
    "domain": "self-supervised visual representation learning",
    "areas": [
      "self-supervised learning",
      "representation learning",
      "contrastive learning",
      "computer vision"
    ],
    "concepts": [
      "self-supervised learning",
      "contrastive learning",
      "positive pairs",
      "negative pairs",
      "NT-Xent loss",
      "temperature",
      "projection head",
      "linear evaluation"
    ],
    "mentalMapConnection": "Adds self-supervision: augmentation defines invariances, while a contrastive objective shapes representations without class labels.",
    "search": "a simple framework for contrastive learning of visual representations simclr-contrastive-learning ting chen,simon kornblith,mohammad norouzi,geoffrey hinton icml 2020 self-supervised self-supervised learning learn how carefully chosen augmented views become a self-supervised training signal, teaching an encoder what should stay the same without labels. self-supervised visual representation learning adds self-supervision: augmentation defines invariances, while a contrastive objective shapes representations without class labels. https://proceedings.mlr.press/v119/chen20j.html self-supervised learning representation learning contrastive learning computer vision self-supervised learning contrastive learning positive pairs negative pairs nt-xent loss temperature projection head linear evaluation"
  },
  {
    "date": "2026-08-24",
    "slug": "semi-supervised-classification-with-graph-convolutional-networks",
    "topic": "graphs",
    "topicLabel": "Graph machine learning",
    "title": "Semi-Supervised Classification with Graph Convolutional Networks",
    "description": "Learn how a node mixes carefully normalized information from its neighbours and itself, then turns relational context into a class prediction.",
    "authors": [
      "Thomas N. Kipf",
      "Max Welling"
    ],
    "venue": "ICLR 2017",
    "paperFile": "semi-supervised-classification-with-graph-convolutional-networks/semi_supervised_classification_with_graph_convolutional_networks.pdf",
    "lessonFile": "semi-supervised-classification-with-graph-convolutional-networks/semi_supervised_classification_with_graph_convolutional_networks.html",
    "canonicalUrl": "https://openreview.net/forum?id=SJU4ayYgl",
    "domain": "graph representation learning and semi-supervised node classification",
    "areas": [
      "graph neural networks",
      "representation learning",
      "semi-supervised learning"
    ],
    "concepts": [
      "graphs",
      "adjacency matrix",
      "message passing",
      "self-loops",
      "degree normalization",
      "node classification",
      "over-smoothing"
    ],
    "mentalMapConnection": "Adds a graph-structured-data branch: it generalizes the shared local rule of CNNs beyond grids and contrasts fixed graph neighbourhood mixing with the Transformer’s learned attention.",
    "search": "semi-supervised classification with graph convolutional networks semi-supervised-classification-with-graph-convolutional-networks thomas n. kipf,max welling iclr 2017 graphs graph machine learning learn how a node mixes carefully normalized information from its neighbours and itself, then turns relational context into a class prediction. graph representation learning and semi-supervised node classification adds a graph-structured-data branch: it generalizes the shared local rule of cnns beyond grids and contrasts fixed graph neighbourhood mixing with the transformer’s learned attention. https://openreview.net/forum?id=sju4ayygl graph neural networks representation learning semi-supervised learning graphs adjacency matrix message passing self-loops degree normalization node classification over-smoothing"
  },
  {
    "date": "2026-08-24",
    "slug": "the-lottery-ticket-hypothesis",
    "topic": "efficient",
    "topicLabel": "Efficient ML",
    "title": "The Lottery Ticket Hypothesis: Finding Sparse, Trainable Neural Networks",
    "description": "Learn why a useful sparse network may be defined by both its mask and its original initialization, and how pruning discovers one route through a dense model.",
    "authors": [
      "Jonathan Frankle",
      "Michael Carbin"
    ],
    "venue": "ICLR 2019",
    "paperFile": "the-lottery-ticket-hypothesis/the_lottery_ticket_hypothesis.pdf",
    "lessonFile": "the-lottery-ticket-hypothesis/the_lottery_ticket_hypothesis.html",
    "canonicalUrl": "https://arxiv.org/abs/1803.03635",
    "domain": "neural-network sparsity, pruning, and initialization",
    "areas": [
      "efficient ML",
      "sparsity",
      "pruning",
      "initialization",
      "optimization"
    ],
    "concepts": [
      "unstructured pruning",
      "binary masks",
      "winning tickets",
      "iterative magnitude pruning",
      "original initialization",
      "sparse trainability"
    ],
    "mentalMapConnection": "Adds a sparsity branch: optimization may depend not only on architecture, but on which parameters survive and the values from which they started.",
    "search": "the lottery ticket hypothesis: finding sparse, trainable neural networks the-lottery-ticket-hypothesis jonathan frankle,michael carbin iclr 2019 efficient efficient ml learn why a useful sparse network may be defined by both its mask and its original initialization, and how pruning discovers one route through a dense model. neural-network sparsity, pruning, and initialization adds a sparsity branch: optimization may depend not only on architecture, but on which parameters survive and the values from which they started. https://arxiv.org/abs/1803.03635 efficient ml sparsity pruning initialization optimization unstructured pruning binary masks winning tickets iterative magnitude pruning original initialization sparse trainability"
  },
  {
    "date": "2026-08-23",
    "slug": "auto-encoding-variational-bayes",
    "topic": "generative",
    "topicLabel": "Generative modeling",
    "title": "Auto-Encoding Variational Bayes",
    "description": "Learn how a VAE balances reconstruction with a sampleable latent space, and why reparameterization lets gradients flow through random samples.",
    "authors": [
      "Diederik P. Kingma",
      "Max Welling"
    ],
    "venue": "ICLR 2014",
    "paperFile": "auto-encoding-variational-bayes/auto_encoding_variational_bayes.pdf",
    "lessonFile": "auto-encoding-variational-bayes/auto_encoding_variational_bayes.html",
    "canonicalUrl": "https://arxiv.org/abs/1312.6114",
    "domain": "probabilistic generative modeling and variational inference",
    "areas": [
      "generative modeling",
      "variational inference",
      "latent-variable models"
    ],
    "concepts": [
      "latent variables",
      "generative model",
      "approximate posterior",
      "ELBO",
      "reparameterization trick",
      "variational inference",
      "prior distribution"
    ],
    "mentalMapConnection": "Adds a likelihood-based latent-variable branch beside GANs, and connects probabilistic inference to the stochastic-gradient training ideas introduced by Adam.",
    "search": "auto-encoding variational bayes auto-encoding-variational-bayes diederik p. kingma,max welling iclr 2014 generative generative modeling learn how a vae balances reconstruction with a sampleable latent space, and why reparameterization lets gradients flow through random samples. probabilistic generative modeling and variational inference adds a likelihood-based latent-variable branch beside gans, and connects probabilistic inference to the stochastic-gradient training ideas introduced by adam. https://arxiv.org/abs/1312.6114 generative modeling variational inference latent-variable models latent variables generative model approximate posterior elbo reparameterization trick variational inference prior distribution"
  },
  {
    "date": "2026-08-23",
    "slug": "dropout-a-simple-way-to-prevent-neural-networks-from-overfitting",
    "topic": "regularization",
    "topicLabel": "Regularization",
    "title": "Dropout: A Simple Way to Prevent Neural Networks from Overfitting",
    "description": "Learn why training with missing internal routes discourages fragile feature partnerships, and how one scaled test network approximates an ensemble.",
    "authors": [
      "Nitish Srivastava",
      "Geoffrey Hinton",
      "Alex Krizhevsky",
      "Ilya Sutskever",
      "Ruslan Salakhutdinov"
    ],
    "venue": "JMLR 2014",
    "paperFile": "dropout-a-simple-way-to-prevent-neural-networks-from-overfitting/dropout_a_simple_way_to_prevent_neural_networks_from_overfitting.pdf",
    "lessonFile": "dropout-a-simple-way-to-prevent-neural-networks-from-overfitting/dropout_a_simple_way_to_prevent_neural_networks_from_overfitting.html",
    "canonicalUrl": "https://www.jmlr.org/papers/v15/srivastava14a.html",
    "domain": "regularization and generalization",
    "areas": [
      "regularization",
      "generalization",
      "deep learning",
      "model averaging"
    ],
    "concepts": [
      "dropout",
      "regularization",
      "generalization",
      "co-adaptation",
      "Bernoulli masks",
      "test-time scaling",
      "shared-weight ensemble"
    ],
    "mentalMapConnection": "Adds a regularization branch: it changes which internal routes train on each pass, unlike Adam's parameter updates, BatchNorm's activation statistics, or ResNet's permanent shortcut paths.",
    "search": "dropout: a simple way to prevent neural networks from overfitting dropout-a-simple-way-to-prevent-neural-networks-from-overfitting nitish srivastava,geoffrey hinton,alex krizhevsky,ilya sutskever,ruslan salakhutdinov jmlr 2014 regularization regularization learn why training with missing internal routes discourages fragile feature partnerships, and how one scaled test network approximates an ensemble. regularization and generalization adds a regularization branch: it changes which internal routes train on each pass, unlike adam's parameter updates, batchnorm's activation statistics, or resnet's permanent shortcut paths. https://www.jmlr.org/papers/v15/srivastava14a.html regularization generalization deep learning model averaging dropout regularization generalization co-adaptation bernoulli masks test-time scaling shared-weight ensemble"
  },
  {
    "date": "2026-08-22",
    "slug": "adam-a-method-for-stochastic-optimization",
    "topic": "optimization",
    "topicLabel": "Optimization",
    "title": "Adam: A Method for Stochastic Optimization",
    "description": "Learn how Adam keeps separate memories for gradient direction and gradient scale, then turns them into a calibrated parameter update.",
    "authors": [
      "Diederik P. Kingma",
      "Jimmy Ba"
    ],
    "venue": "ICLR 2015",
    "paperFile": "adam-a-method-for-stochastic-optimization/adam_a_method_for_stochastic_optimization.pdf",
    "lessonFile": "adam-a-method-for-stochastic-optimization/adam_a_method_for_stochastic_optimization.html",
    "canonicalUrl": "https://arxiv.org/abs/1412.6980",
    "domain": null,
    "areas": [
      "optimization",
      "deep-learning",
      "adaptive-methods",
      "training-dynamics"
    ],
    "concepts": [],
    "mentalMapConnection": null,
    "search": "adam: a method for stochastic optimization adam-a-method-for-stochastic-optimization diederik p. kingma,jimmy ba iclr 2015 optimization optimization learn how adam keeps separate memories for gradient direction and gradient scale, then turns them into a calibrated parameter update. https://arxiv.org/abs/1412.6980 optimization deep-learning adaptive-methods training-dynamics"
  },
  {
    "date": "2026-08-22",
    "slug": "direct-preference-optimization",
    "topic": "post-training",
    "topicLabel": "Post-training",
    "title": "Direct Preference Optimization: Your Language Model is Secretly a Reward Model",
    "description": "Learn how preference pairs can directly reshape a language model through a logistic objective, without training a separate reward model or running reinforcement learning.",
    "authors": [
      "Rafael Rafailov",
      "Archit Sharma",
      "Eric Mitchell",
      "Stefano Ermon",
      "Christopher D. Manning",
      "Chelsea Finn"
    ],
    "venue": "NeurIPS 2023",
    "paperFile": "direct-preference-optimization/direct_preference_optimization.pdf",
    "lessonFile": "direct-preference-optimization/direct_preference_optimization.html",
    "canonicalUrl": "https://proceedings.neurips.cc/paper_files/paper/2023/file/a85b405ed65c6477a4fe8302b5e06ce7-Paper-Conference.pdf",
    "domain": "language-model post-training and alignment",
    "areas": [
      "language-model post-training",
      "alignment",
      "preference learning"
    ],
    "concepts": [
      "preference pairs",
      "Bradley-Terry model",
      "KL-regularized reward maximization",
      "reference policy",
      "implicit reward",
      "DPO loss",
      "beta"
    ],
    "mentalMapConnection": "First collection lesson: establishes the preference-learning and post-training branch.",
    "search": "direct preference optimization: your language model is secretly a reward model direct-preference-optimization rafael rafailov,archit sharma,eric mitchell,stefano ermon,christopher d. manning,chelsea finn neurips 2023 post-training post-training learn how preference pairs can directly reshape a language model through a logistic objective, without training a separate reward model or running reinforcement learning. language-model post-training and alignment first collection lesson: establishes the preference-learning and post-training branch. https://proceedings.neurips.cc/paper_files/paper/2023/file/a85b405ed65c6477a4fe8302b5e06ce7-paper-conference.pdf language-model post-training alignment preference learning preference pairs bradley-terry model kl-regularized reward maximization reference policy implicit reward dpo loss beta"
  },
  {
    "date": "2026-08-21",
    "slug": "batch-normalization",
    "topic": "normalization",
    "topicLabel": "Normalization",
    "title": "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift",
    "description": "Understand how a learned measuring tape uses mini-batch statistics during training, then running statistics at inference, to make deep feature scales easier to manage.",
    "authors": [
      "Sergey Ioffe",
      "Christian Szegedy"
    ],
    "venue": "ICML 2015",
    "paperFile": "batch-normalization/batch_normalization_accelerating_deep_network_training.pdf",
    "lessonFile": "batch-normalization/batch_normalization_accelerating_deep_network_training.html",
    "canonicalUrl": "https://arxiv.org/abs/1502.03167",
    "domain": null,
    "areas": [
      "deep-learning",
      "optimization",
      "normalization",
      "computer-vision"
    ],
    "concepts": [],
    "mentalMapConnection": null,
    "search": "batch normalization: accelerating deep network training by reducing internal covariate shift batch-normalization sergey ioffe,christian szegedy icml 2015 normalization normalization understand how a learned measuring tape uses mini-batch statistics during training, then running statistics at inference, to make deep feature scales easier to manage. https://arxiv.org/abs/1502.03167 deep-learning optimization normalization computer-vision"
  },
  {
    "date": "2026-08-20",
    "slug": "generative-adversarial-nets",
    "topic": "generative",
    "topicLabel": "Generative modeling",
    "title": "Generative Adversarial Nets",
    "description": "Learn how a generator and a learned critic play a game that moves generated samples toward the real data distribution.",
    "authors": [
      "Ian Goodfellow",
      "Jean Pouget-Abadie",
      "Mehdi Mirza",
      "Bing Xu",
      "David Warde-Farley",
      "Sherjil Ozair",
      "Aaron Courville",
      "Yoshua Bengio"
    ],
    "venue": "NeurIPS 2014",
    "paperFile": "generative-adversarial-nets/generative_adversarial_nets.pdf",
    "lessonFile": "generative-adversarial-nets/generative_adversarial_nets.html",
    "canonicalUrl": "https://arxiv.org/abs/1406.2661",
    "domain": null,
    "areas": [
      "generative-modeling",
      "deep-learning",
      "adversarial-learning",
      "probabilistic-modeling"
    ],
    "concepts": [],
    "mentalMapConnection": null,
    "search": "generative adversarial nets generative-adversarial-nets ian goodfellow,jean pouget-abadie,mehdi mirza,bing xu,david warde-farley,sherjil ozair,aaron courville,yoshua bengio neurips 2014 generative generative modeling learn how a generator and a learned critic play a game that moves generated samples toward the real data distribution. https://arxiv.org/abs/1406.2661 generative-modeling deep-learning adversarial-learning probabilistic-modeling"
  },
  {
    "date": "2026-08-19",
    "slug": "attention-is-all-you-need",
    "topic": "language",
    "topicLabel": "Language modeling",
    "title": "Attention Is All You Need",
    "description": "Learn how tokens exchange information through queries, keys, values, and causal masking to build context for translation.",
    "authors": [
      "Ashish Vaswani",
      "Noam Shazeer",
      "Niki Parmar",
      "Jakob Uszkoreit",
      "Llion Jones",
      "Aidan N. Gomez",
      "Łukasz Kaiser",
      "Illia Polosukhin"
    ],
    "venue": "NeurIPS 2017",
    "paperFile": "attention-is-all-you-need/attention_is_all_you_need.pdf",
    "lessonFile": "attention-is-all-you-need/attention_is_all_you_need.html",
    "canonicalUrl": "https://arxiv.org/abs/1706.03762",
    "domain": null,
    "areas": [
      "deep-learning",
      "natural-language-processing",
      "transformers",
      "attention"
    ],
    "concepts": [],
    "mentalMapConnection": null,
    "search": "attention is all you need attention-is-all-you-need ashish vaswani,noam shazeer,niki parmar,jakob uszkoreit,llion jones,aidan n. gomez,łukasz kaiser,illia polosukhin neurips 2017 language language modeling learn how tokens exchange information through queries, keys, values, and causal masking to build context for translation. https://arxiv.org/abs/1706.03762 deep-learning natural-language-processing transformers attention"
  },
  {
    "date": "2026-08-19",
    "slug": "deep-residual-learning-for-image-recognition",
    "topic": "vision",
    "topicLabel": "Computer vision",
    "title": "Deep Residual Learning for Image Recognition",
    "description": "See why deep networks learn more easily when each block preserves a useful feature map and learns only the correction.",
    "authors": [
      "Kaiming He",
      "Xiangyu Zhang",
      "Shaoqing Ren",
      "Jian Sun"
    ],
    "venue": "CVPR 2016",
    "paperFile": "deep-residual-learning-for-image-recognition/deep_residual_learning_for_image_recognition.pdf",
    "lessonFile": "deep-residual-learning-for-image-recognition/deep_residual_learning_for_image_recognition.html",
    "canonicalUrl": "https://arxiv.org/abs/1512.03385",
    "domain": null,
    "areas": [
      "deep-learning",
      "computer-vision",
      "convolutional-neural-networks",
      "optimization"
    ],
    "concepts": [],
    "mentalMapConnection": null,
    "search": "deep residual learning for image recognition deep-residual-learning-for-image-recognition kaiming he,xiangyu zhang,shaoqing ren,jian sun cvpr 2016 vision computer vision see why deep networks learn more easily when each block preserves a useful feature map and learns only the correction. https://arxiv.org/abs/1512.03385 deep-learning computer-vision convolutional-neural-networks optimization"
  },
  {
    "date": "2026-08-19",
    "slug": "human-level-control-through-deep-reinforcement-learning",
    "topic": "reinforcement",
    "topicLabel": "Reinforcement learning",
    "title": "Human-level Control through Deep Reinforcement Learning",
    "description": "Build intuition for value forecasts, Bellman targets, experience replay, and the delayed target network that stabilizes learning from pixels.",
    "authors": [
      "Volodymyr Mnih",
      "Koray Kavukcuoglu",
      "David Silver",
      "Andrei A. Rusu",
      "Joel Veness",
      "Marc G. Bellemare",
      "Alex Graves",
      "Martin Riedmiller",
      "Andreas K. Fidjeland",
      "Georg Ostrovski",
      "Stig Petersen",
      "Charles Beattie",
      "Amir Sadik",
      "Ioannis Antonoglou",
      "Helen King",
      "Dharshan Kumaran",
      "Daan Wierstra",
      "Shane Legg",
      "Demis Hassabis"
    ],
    "venue": "Nature 2015",
    "paperFile": "human-level-control-through-deep-reinforcement-learning/human_level_control_through_deep_reinforcement_learning.pdf",
    "lessonFile": "human-level-control-through-deep-reinforcement-learning/human_level_control_through_deep_reinforcement_learning.html",
    "canonicalUrl": "https://www.nature.com/articles/nature14236",
    "domain": null,
    "areas": [
      "deep-reinforcement-learning",
      "decision-making",
      "computer-vision",
      "deep-learning"
    ],
    "concepts": [],
    "mentalMapConnection": null,
    "search": "human-level control through deep reinforcement learning human-level-control-through-deep-reinforcement-learning volodymyr mnih,koray kavukcuoglu,david silver,andrei a. rusu,joel veness,marc g. bellemare,alex graves,martin riedmiller,andreas k. fidjeland,georg ostrovski,stig petersen,charles beattie,amir sadik,ioannis antonoglou,helen king,dharshan kumaran,daan wierstra,shane legg,demis hassabis nature 2015 reinforcement reinforcement learning build intuition for value forecasts, bellman targets, experience replay, and the delayed target network that stabilizes learning from pixels. https://www.nature.com/articles/nature14236 deep-reinforcement-learning decision-making computer-vision deep-learning"
  }
];
