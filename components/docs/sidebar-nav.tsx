"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavItem } from "types";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";

export function DocsSidebarNav({ setOpen }) {
  const pathname = usePathname();
  const items = docsConfig.sidebarNav;

  return items.length > 0 ? (
    <div className="w-full">
      {items.map((item) => (
        <div key={item.title} className={cn("pb-8")}>
          <h4 className="mb-1 rounded-md py-1 text-base font-medium md:px-2 md:text-sm">
            {item.title}
          </h4>
          {item.items ? (
            <DocsSidebarNavItems
              setOpen={setOpen}
              items={item.items}
              pathname={pathname}
            />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}


export function DocsSidebarNavItems({
  items,
  setOpen,
  pathname,
}) {
  return items?.length > 0 ? (
    <div className="grid grid-flow-row auto-rows-max text-[15px] md:text-sm">
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <Link
            key={item.title + item.href}
            href={item.href}
            onClick={() => {
              if (setOpen) setOpen(false);
            }}
            className={cn(
              "flex w-full items-center rounded-md px-2 py-1.5 text-muted-foreground hover:underline",
              {
                "font-medium text-blue-600 dark:text-blue-400":
                  pathname === item.href,
              },
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
          </Link>
        ) : (
          <span
            key={item.title + item.href}
            className="flex w-full cursor-not-allowed items-center rounded-md px-2 py-1.5 opacity-60"
          >
            {item.title}
          </span>
        ),
      )}
    </div>
  ) : null;
}
