import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { constructMetadata } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DashboardHeader } from "@/components/dashboard/header";
import InfoCard from "@/components/dashboard/info-card";
import { DiscountCardForm } from "@/components/forms/card-form";
import { BillingInfo } from "@/components/pricing/billing-info";
import { Icons } from "@/components/shared/icons";

export const metadata = constructMetadata({
  title: "Card List – Rewaire",
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
      <DashboardHeader heading="Card List" text="List down your card here." />

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-4">
          <InfoCard heading="Credit/Debit" line1="type1 card" />
          <InfoCard heading="Travel/Hotel" line1="type2 card" />
          <InfoCard heading="Shopping/Food" line1="type3 card" />
          <InfoCard heading="Membership/Other" line1="type4 card" />
        </div>
        <div className="flex justify-center">
          <DiscountCardForm />
        </div>
      </div>
    </>
  );
}
