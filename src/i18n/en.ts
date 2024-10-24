export default {
  giveStar: "If you think Canyon is still good, please give us",
  logo: {
    desc: "JavaScript code coverage solution",
  },
  systemTitle: "🚀 Nextra Starter Template",
  banner: {
    title: "👋 Hey, welcome to the Next.js starter template!",
    more: "Learn more",
  },
  badgeTitle: "Lightweight, ready to use 🎉",
  text1: "Canyon makes you more",
  text2: "Through",
  select: {
    language: "Select language",
  },
  advantages: ["Simple", "Fast", "Accurate"],
  toCollectCovData: "Collect coverage data",
  features: "Features",
  customers: "Who's using",
  lookMoreCustomers: "View more companies using Canyon",
  featureList: [
    {
      title: "Modern front-end technology stack",
      description:
        "Supports compilers such as babel and swc, and packaging tools such as webpack and vite.",
    },
    {
      title: "Multiple collection methods",
      description:
        "Provides coverage collection solutions for UI automation testing tools such as playwright, and provides a chrome plugin for manual test coverage collection.",
    },
    {
      title: "Accurate coverage data",
      description:
        "By means of babel plugins and other methods, the initial coverage data participating in compilation is collected to make the coverage data more accurate.",
    },
    {
      title: "Easy to deploy",
      description:
        "The Canyon technology stack is completely based on nodejs, and a docker image is also provided for convenient deployment.",
    },
    {
      title: "High performance and high availability",
      description:
        "In the face of the high concurrency and large amount of data in UI automation testing scenarios, through the built-in message queue, it can adapt to the horizontal and vertical expansion of the modern cluster environment.",
    },
    {
      title: "CI/CD integration",
      description:
        "By detecting pipeline variables through babel plugins and collecting coverage through the reporter, it can be integrated into the CI/CD pipeline, and coverage data can be collected in the CI stage.",
    },
  ],
  featuresDesc: "Easy instrumentation, convenient collection",
  frequentlyAskedQuestions: "Frequently Asked Questions",
  faqs: [
    {
      question: "What frameworks and technology stacks are supported?",
      answer:
        "Supports compilers such as babel and swc, and packaging tools such as webpack and vite.",
    },
    {
      question: "Is nodejs coverage collection supported?",
      answer:
        "Mainly collect end-to-end test and UT test coverage data. For nodejs, it can be instrumented by nyc and then the coverage data can be collected through the canyon api interface.",
    },
    {
      question: "Can it be done without instrumentation?",
      answer:
        "After extensive verification, the coverage data with instrumentation during compilation is more accurate.",
    },
    {
      question: "Why is my coverage data the coverage of compiled typescript?",
      answer:
        "You can collect the coverage data of typescript source code by enabling the sourceMap option in tsconfig.json.",
    },
    {
      question: "How can I get technical support or help?",
      answer:
        "If you encounter problems during use, please contact us through GitHub @zhangtao25.",
    },
  ],
};
