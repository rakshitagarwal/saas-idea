import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { constructMetadata } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DashboardHeader } from "@/components/dashboard/header";
import { BillingInfo } from "@/components/pricing/billing-info";
import { Icons } from "@/components/shared/icons";
import { CouponForm } from "@/components/forms/coupon-form";

export const metadata = constructMetadata({
  title: "Coupon Sell – Rewaire",
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
      <DashboardHeader
        heading="Coupon Sell"
        text="List down your coupon here."
      />
      <div className="flex items-center justify-center">
        <CouponForm />
      </div>
    </>
  );
}
