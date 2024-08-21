/** @type {import('next').NextConfig} */
import nextra from "nextra";
// const nextConfig = {
//   reactStrictMode: true,
// };

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

export default withNextra({
  transpilePackages: ["antd"],
});
