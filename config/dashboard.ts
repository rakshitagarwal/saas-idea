import { UserRole } from "@prisma/client";

import { SidebarNavItem } from "types";

export const sidebarLinks: SidebarNavItem[] = [
  {
    title: "MENU",
    items: [
      {
        href: "/admin",
        icon: "laptop",
        title: "Admin Panel",
        authorizeOnly: UserRole.USER,
      },
      { href: "/dashboard", icon: "dashboard", title: "Dashboard" },
      {
        href: "/dashboard/billing",
        icon: "billing",
        title: "Billing",
        authorizeOnly: UserRole.USER,
      },
      { href: "/dashboard/charts", icon: "lineChart", title: "Charts" },
      { href: "/dashboard/couponsell", icon: "coupon", title: "Coupon Sell" },
      { href: "/dashboard/couponbuy", icon: "discount", title: "Coupon Buy" },
      { href: "/dashboard/cardfind", icon: "card", title: "Card Find" },
      { href: "/dashboard/cardlist", icon: "wallet", title: "Card List" },
    ],
  },
  {
    title: "OPTIONS",
    items: [
      { href: "/dashboard/settings", icon: "settings", title: "Settings" },
      { href: "/dashboard/help", icon: "help", title: "Help" },
      { href: "/dashboard/profit", icon: "rupee", title: "Profit" },
      { href: "/dashboard/purchased", icon: "purchased", title: "Purchased" },
      { href: "/dashboard/policy", icon: "policy", title: "Policy" },
      { href: "/dashboard/verify", icon: "verify", title: "Verify" },
    ],
  },
];
