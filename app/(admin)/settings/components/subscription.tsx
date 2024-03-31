"use client";

import TitleSection from "@/components/common/title";
import { Button } from "@/components/ui/button";

function Subscription({ id }: { id: string }) {
  return (
    <div id={id} className="paper rounded-2xl !pb-8">
      <TitleSection title="Manage subscription" />
      <Button className="w-full">✨ Upgrade to Premium</Button>
    </div>
  );
}

export default Subscription;
