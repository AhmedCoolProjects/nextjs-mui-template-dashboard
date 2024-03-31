"use client";

import TitleSection from "@/components/common/title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function ChangeEmail({ id }: { id: string }) {
  return (
    <div id={id} className="paper rounded-2xl !pb-8">
      <TitleSection title="Change email" description="ahmed.b@gmail.com" />
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col items-start space-y-2">
          <span className="min-w-44 text-cus-gray text-sm">
            New email address
          </span>
          <Input placeholder="" />
        </div>
        <div className="flex flex-col items-start space-y-2">
          <span className="min-w-44 text-cus-gray text-sm">Password</span>
          <Input type="password" placeholder="" value="sdfsfsdfsdfs" />
        </div>
        <Button className="w-fit !mt-8">Change email</Button>
      </div>
    </div>
  );
}

export default ChangeEmail;
