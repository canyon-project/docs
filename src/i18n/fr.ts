export default {
  giveStar: "Si vous pensez que Canyon est encore bon, donnez-nous des",
  logo: {
    desc: "Solution de couverture de code JavaScript",
  },
  systemTitle: "🚀 Modèle de démarrage Nextra",
  banner: {
    title: "👋 Salut, bienvenue dans le modèle de démarrage Next.js!",
    more: "En savoir plus",
  },
  badgeTitle: "Léger, prêt à l'emploi 🎉",
  text1: "Canyon vous rend plus",
  text2: "Par",
  select: {
    language: "Sélectionner une langue",
  },
  advantages: ["Simple", "Rapide", "Précis"],
  toCollectCovData: "Collecter les données de couverture",
  features: "Caractéristiques",
  customers: "Qui utilise",
  lookMoreCustomers: "Voir plus d'entreprises utilisant Canyon",
  featureList: [
    {
      title: "Pile technologique front-end moderne",
      description:
        "Prend en charge les compilateurs tels que babel et swc, et les outils de packaging tels que webpack et vite.",
    },
    {
      title: "Différentes méthodes de collecte",
      description:
        "Fournit des solutions de collecte de couverture pour les outils de test d'automatisation d'interface utilisateur tels que playwright, et fournit un plugin Chrome pour la collecte de couverture des tests manuels.",
    },
    {
      title: "Données de couverture précises",
      description:
        "Par des moyens tels que les plugins babel, collecte les données de couverture initiale participant à la compilation pour rendre les données de couverture plus précises.",
    },
    {
      title: "Facile à déployer",
      description:
        "La pile technologique Canyon est entièrement basée sur nodejs. Elle fournit également une image Docker pour un déploiement facile.",
    },
    {
      title: "Haute performance et haute disponibilité",
      description:
        "Face aux scénarios de tests d'automatisation d'interface utilisateur à haute concurrence et avec une grande quantité de données, grâce à la file d'attente intégrée, elle peut s'adapter à l'expansion horizontale et verticale de l'environnement de cluster moderne.",
    },
    {
      title: "Intégration CI/CD",
      description:
        "En détectant les variables de pipeline via les plugins babel et en collectant la couverture via le rapporteur, elle peut être intégrée dans le pipeline CI/CD et les données de couverture peuvent être collectées à l'étape CI.",
    },
  ],
  featuresDesc: "Instrumentation facile, collecte pratique",
  frequentlyAskedQuestions: "Questions fréquentes",
  faqs: [
    {
      question: "Quels frameworks et piles technologiques sont pris en charge?",
      answer:
        "Prend en charge les compilateurs tels que babel et swc, et les outils de packaging tels que webpack et vite.",
    },
    {
      question:
        "La collecte de couverture pour nodejs est-elle prise en charge?",
      answer:
        "Collecte principalement les données de couverture des tests end-to-end et des tests UT. Pour nodejs, il peut être instrumenté par nyc puis les données de couverture peuvent être collectées via l'interface API de canyon.",
    },
    {
      question: "Est-il possible sans instrumentation?",
      answer:
        "Après de nombreuses vérifications, les données de couverture avec instrumentation pendant la compilation sont plus précises.",
    },
    {
      question:
        "Pourquoi mes données de couverture sont-elles la couverture du typescript compilé?",
      answer:
        "Vous pouvez activer l'option sourceMap de tsconfig.json pour collecter les données de couverture du code source typescript.",
    },
    {
      question: "Comment obtenir un soutien technique ou de l'aide?",
      answer:
        "Si vous rencontrez des problèmes lors de l'utilisation, veuillez nous contacter via GitHub @zhangtao25.",
    },
  ],
};
