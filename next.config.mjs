import createWithNextra from "nextra";

const withNextra = createWithNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  latex: true,
});

/**
 * @type {import("next").NextConfig}
 */
export default withNextra({
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  distDir: "./.next",
  i18n: {
    locales: ["zh", "en", "ja"],
    defaultLocale: "zh",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  redirects: () => [
    {
      source: "/",
      destination: "/zh",
      permanent: true,
    },
  ],
});
