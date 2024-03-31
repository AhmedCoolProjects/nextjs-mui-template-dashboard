"use client";

import { cn } from "@/lib/utils";

function TitleSection({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-6", className)}>
      <h1 className="text-black font-medium text-lg">{title}</h1>
      {description && (
        <span className="text-sm text-cus-gray">{description}</span>
      )}
    </div>
  );
}

export default TitleSection;
