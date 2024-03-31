"use client";

import TitleSection from "@/components/common/title";
import { Input } from "@/components/ui/input";
import CategorySelect from "./categorySelect";
import FileInput from "./fileInput";

function ProfileInfos({ id }: { id: string }) {
  return (
    <div id={id} className="paper rounded-2xl !pb-8">
      <TitleSection
        title="Profile information"
        description="Edit your profile information below"
      />
      <div className="flex flex-col space-y-5">
        <div className="flex flex-row items-center">
          <span className="min-w-44 text-cus-gray text-sm">Profile photo</span>
          <FileInput />
        </div>
        <div className="flex flex-row items-center">
          <span className="min-w-44 text-cus-gray text-sm">Name</span>
          <Input placeholder="" value="Jina" />
        </div>
        <div className="flex flex-row items-center">
          <span className="min-w-44 text-cus-gray text-sm">Business name</span>
          <Input placeholder="" value="Jina" />
        </div>
        <div className="flex flex-row items-center">
          <span className="min-w-44 text-cus-gray text-sm">
            Business Category
          </span>
          <CategorySelect />
        </div>
      </div>
    </div>
  );
}

export default ProfileInfos;
