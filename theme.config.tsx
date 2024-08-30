import type { DocsThemeConfig } from "nextra-theme-docs";
import ThemeToggle from "./src/widgets/theme-toggle";
import LocaleToggle from "./src/widgets/locale-toggle";
import { CustomFooter } from "@/components/CustomFooter";
import { useLocale } from "@/hooks";

const Logo = () => {
  const { t, currentLocale } = useLocale();

  return (
    <div
      className="flex hover:nx-opacity-75 items-center"
      onClick={() => {
        window.location.href = "/";
      }}
    >
      <img src="/logo.svg" style={{ width: "32px" }} alt="" />
      <span className="mx-2 font-extrabold hidden md:inline select-none">
        CANYON
      </span>
      <span className="text-gray-600 font-normal hidden lg:!inline whitespace-no-wrap">
        {t("logo.desc")}
      </span>
    </div>
  );
};

const docsThemeConfig = {
  logo: <Logo></Logo>,
  project: {
    link: "https://github.com/canyon-project/canyon",
  },
  themeSwitch: {
    component: () => <></>,
  },
  footer: {
    component: () => <CustomFooter />,
  },
  navbar: {
    extraContent: () => {
      return (
        <>
          <LocaleToggle className="max-md:hidden" />
          <ThemeToggle className="max-md:hidden" />
        </>
      );
    },
  },
} satisfies DocsThemeConfig;

export default docsThemeConfig;
