import { Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CategoryCard({ heading }) {
  return (
    <Card>
      <div className="flex justify-center align-middle">
        <p className="py-4 text-center font-medium">{heading}</p>
      </div>
    </Card>
  );
}
