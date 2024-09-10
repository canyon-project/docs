// components/LocalizedLink.js
import { useRouter } from "next/router";

const LocalizedLink = ({ href, children }: any) => {
  const { asPath } = useRouter();

  // 检查当前路径是否包含 /zh
  const isZh = asPath.startsWith("/zh");

  // 根据当前语言生成目标链接
  const localizedHref = isZh ? `/zh${href}` : href;

  return (
    <a
      className={
        "_text-primary-600 _underline _decoration-from-font [text-underline-position:from-font]"
      }
      href={localizedHref}
    >
      {children}
    </a>
  );
};

export default LocalizedLink;
