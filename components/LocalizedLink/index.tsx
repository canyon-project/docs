// components/LocalizedLink.js
import { useRouter } from "next/router";
// import { useLocale } from "@/hooks";

const LocalizedLink = ({ href, children }: any) => {
  // const { asPath } = useRouter();
  // const { currentLocale } = useLocale();

  // 根据当前语言生成目标链接
  // const localizedHref = `/${currentLocale}${href}`;

  return (
    <a
      className={
        "_text-primary-600 _underline _decoration-from-font [text-underline-position:from-font]"
      }
      // href={localizedHref}
    >
      {children}
    </a>
  );
};

export default LocalizedLink;
