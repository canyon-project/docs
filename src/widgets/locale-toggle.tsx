"use client";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { addBasePath } from "next/dist/client/add-base-path";
import { useLocale } from "@/hooks";
import { Toggle } from "@/components/ui/toggle";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

/**
 * 快速切换语言组件，用于覆盖 nextra 原生切换下拉框
 */
const obj = {
  en: "English",
  zh: "简体中文",
  ja: "日本語",
};
export default function LocaleToggle({ className }: { className?: string }) {
  const { currentLocale, t } = useLocale();
  const router = useRouter();
  const { asPath } = router;

  const changeLocale = useCallback(
    (locale: string) => {
      // 滚动条位置记录
      const currentPosition = window.scrollY;
      // 检查是否滚动到底部
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      let nextHref = asPath;
      if (locale === "zh") {
        nextHref = addBasePath(
          asPath.replace(`/en`, `/zh`).replace(`/ja`, `/zh`),
        );
      } else if (locale === "en") {
        nextHref = addBasePath(
          asPath.replace(`/zh`, `/en`).replace(`/ja`, `/en`),
        );
      } else if (locale === "ja") {
        nextHref = addBasePath(
          asPath.replace(`/zh`, `/ja`).replace(`/en`, `/ja`),
        );
      }

      router.replace(nextHref).then(() => {
        // 滚动条位置恢复
        if (isAtBottom) {
          // 如果之前在底部，则依旧滚动到新的底部
          window.scrollTo(0, document.body.scrollHeight);
        } else {
          // 否则，恢复到之前的滚动位置
          window.scrollTo(0, currentPosition);
        }
      });
    },
    [asPath, router],
  );

  const [position, setPosition] = React.useState(currentLocale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Toggle size="sm" className={className}>
          <span className="icon-[mdi--language]"></span>
        </Toggle>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t("select.language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={(value) => {
            setPosition(value);
            changeLocale(value);
          }}
        >
          <DropdownMenuRadioItem value="zh">简体中文</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ja">日本語</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
