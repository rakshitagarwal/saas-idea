import Link from "next/link";
import { redirect } from "next/navigation";

import { features } from "@/config/landing";
import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { constructMetadata } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CategoryCard from "@/components/dashboard/category-card";
import { DashboardHeader } from "@/components/dashboard/header";
import { BillingInfo } from "@/components/pricing/billing-info";
import { Icons } from "@/components/shared/icons";

export const metadata = constructMetadata({
  title: "Coupon Buy – Rewaire",
  description: "Manage billing and your subscription plan.",
});

export default async function BillingPage() {
  const user = await getCurrentUser();

  let userSubscriptionPlan;
  if (user && user.id && user.role === "USER") {
    userSubscriptionPlan = await getUserSubscriptionPlan(user.id);
  }
  return (
    <>
      <DashboardHeader heading="Coupon Buy" text="Explore coupon you can buy" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-4">
        <CategoryCard heading="Recently Added" />
        <CategoryCard heading="Expiring Soon" />
        <CategoryCard heading="Big Discounts" />
        <CategoryCard heading="Sort Coupons" />
      </div>
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = Icons[feature.icon || "nextjs"];
          return (
            <div
              className="group relative overflow-hidden rounded-2xl border bg-background p-5 md:p-8"
              key={feature.title}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-purple-500/80 to-white opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10"
              />
              <div className="relative">
                <div className="relative flex size-12 rounded-2xl border border-border shadow-sm *:relative *:m-auto *:size-6">
                  <Icon />
                </div>

                <p className="mt-6 pb-6 text-muted-foreground">
                  {feature.description}
                </p>

                <div className="-mb-5 flex gap-3 border-t border-muted py-4 md:-mb-7">
                  <Button
                    variant="secondary"
                    size="sm"
                    rounded="xl"
                    className="px-4"
                  >
                    <Link href="/" className="flex items-center gap-2">
                      <span>Visit the site</span>
                      <Icons.arrowUpRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="flex justify-center">
        <Button type="submit" className="w-fit">
          Find More
        </Button>
      </div> */}
    </>
  );
}
