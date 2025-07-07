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
      { href: "/dashboard/couponsell", icon: "lineChart", title: "Coupon Sell" },
      { href: "/dashboard/couponbuy", icon: "lineChart", title: "Coupon Buy" },
      { href: "/dashboard/cardfind", icon: "lineChart", title: "Card Find" },
      { href: "/dashboard/cardlist", icon: "lineChart", title: "Card List" },
      {
        href: "/admin/orders",
        icon: "package",
        title: "Orders",
        badge: 2,
        authorizeOnly: UserRole.USER,
      },
    ],
  },
  {
    title: "OPTIONS",
    items: [
      { href: "/dashboard/settings", icon: "settings", title: "Settings" },
      { href: "/dashboard/help", icon: "settings", title: "Help" },
      { href: "/dashboard/profit", icon: "settings", title: "Profit" },
      { href: "/dashboard/purchased", icon: "settings", title: "Purchased" },
      { href: "/dashboard/policy", icon: "settings", title: "Policy" },
      { href: "/dashboard/verify", icon: "settings", title: "Verify" },
    ],
  },
];
