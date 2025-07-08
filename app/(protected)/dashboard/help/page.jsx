import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { constructMetadata } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DashboardHeader } from "@/components/dashboard/header";
import { BillingInfo } from "@/components/pricing/billing-info";
import { Icons } from "@/components/shared/icons";
import { HelpForm } from "@/components/forms/help-form";

export const metadata = constructMetadata({
  title: "Card Find – Rewaire",
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
        heading="Help"
        text="Manage billing and your subscription plan."
      />
           <div className="flex items-center justify-center">
              <HelpForm />
            </div>
    </>
  );
}
