"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/lib/constants";
import { isActivePath } from "@/lib/utils";

export const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className={`hover:text-yellow-500 transition-colors ${
              isActivePath(item.href, pathname) ? "text-gray-100" : ""
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
