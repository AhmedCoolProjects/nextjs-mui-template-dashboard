"use client";

import TitleSection from "@/components/common/title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function ChangePassword({ id }: { id: string }) {
  return (
    <div id={id} className="paper rounded-2xl !mb-16 !pb-8">
      <TitleSection
        title="Change password"
        description="Update your password below"
      />
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col items-start space-y-2">
          <span className="min-w-44 text-cus-gray text-sm">
            Current password
          </span>
          <Input type="password" placeholder="" />
        </div>
        <div className="flex flex-col items-start space-y-2">
          <span className="min-w-44 text-cus-gray text-sm">New password</span>
          <Input type="password" placeholder="" />
        </div>
        <div className="flex flex-col items-start space-y-2">
          <span className="min-w-44 text-cus-gray text-sm">
            Confirm new password
          </span>
          <Input type="password" placeholder="" />
        </div>
        <Button className="w-fit !mt-8" disabled>
          Change password
        </Button>
      </div>
    </div>
  );
}

export default ChangePassword;
