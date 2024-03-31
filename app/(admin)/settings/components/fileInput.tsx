"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function FileInput() {
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    console.log(files);
  };

  return (
    <>
      <input
        type="file"
        id="fileInput"
        className="hidden"
        onChange={handleFileSelect}
      />

      <label
        htmlFor="fileInput"
        className="p-[2px] cursor-pointer relative rounded-full  border-2 border-dashed border-[#e1e7ee]"
      >
        <Avatar className="w-20 h-20">
          <AvatarImage src="/big_profile.svg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </label>
    </>
  );
}

export default FileInput;
