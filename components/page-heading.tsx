import React from "react";

type PageHeadingProps = {
  children: React.ReactNode;
};

export default function PageHeading({ children }: PageHeadingProps) {
  return (
    <div className="flex items-center py-4 mb-8">
      <div className="flex-grow h-px bg-cyan-50"></div>
      <span className="flex-shrink text-[28px] sm:text-3xl px-5 capitalize font-medium">{children}</span>
      <div className="flex-grow h-px bg-cyan-50"></div>
    </div>
  );
}
