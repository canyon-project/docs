export default {
  logo: {
    desc: "JavaScript code coverage solution",
  },
  systemTitle: "🚀 Nextra 启动模板",
  banner: {
    title: "👋 嘿，欢迎来到 Next.js 起步模板!",
    more: "了解详情",
  },

  badgeTitle: "轻量级、开箱即用 🎉",
  text1: "Canyon fayu",
  text2: "通过",
  select: {
    language: "选择语言",
  },
  advantages: ["简单", "快速", "准确"],
  featureList: [
    {
      title: "现代前端技术栈",
      description:
        "支持babel、swc等编译器，支持webpack、vite等打包工具。",
    },
    {
      title: "多种收集方式",
      description:
        "提供playwright等UI自动化测试工具的覆盖率收集方案，提供手工测试覆盖率收集的chrome插件。",
    },
    {
      title: "准确的覆盖率数据",
      description:
        "通过babel插件等方式，收集参与编译的初始化覆盖率数据，使覆盖率数据更准确",
    },
    {
      title: "易于部署",
      description: "Canyon技术栈完全基于nodejs，也提供了docker镜像，方便部署",
    },
    {
      title: "高性能、高可用",
      description:
        "面对UI自动化测试的高并发且数据量大的场景，通过内置的消息队列，可以适配现代化集群环境的水平垂直扩展。",
    },
    {
      title: "CI/CD集成",
      description:
        "通过babel插件侦测流水线变量，和上报器收集覆盖率，可以集成到CI/CD流水线中，在CI阶段就可以收集覆盖率数据。",
    },
  ],
  featuresDesc: "轻松插桩，便捷收集",
  faqs: [
    {
      question: "支持哪些框架和技术栈？",
      answer: "支持babel、swc等编译器，支持webpack、vite等打包工具。",
    },
    {
      question: "支持nodejs覆盖率收集吗？",
      answer:
        "主要收集端到端测试、UT测试覆盖率数据。nodejs需要可以通过nyc插桩后，再通过canyon api接口收集覆盖率数据。",
    },
    {
      question: "不插桩可以吗？",
      answer: "我们经过大量验证，编译时插桩的覆盖率数据更准确。",
    },
    {
      question: "为什么我的覆盖率数据是编译后typescript的覆盖率？",
      answer:
        "您可以通过开启tsconfig.json的sourceMap选项，来收集typescript源码的覆盖率数据。",
    },
    {
      question: "如何获得技术支持或帮助？",
      answer:
        "如果在使用过程中遇到问题，请通过 GitHub @zhangtao25 与我们联系。",
    },
  ],
};
