import React from "react";

type PageHeadingProps = {
  children: React.ReactNode;
};

export default function PageHeading({ children }: PageHeadingProps) {
  return (
    <span className="text-[28px] sm:text-3xl px-5 capitalize font-medium text-center m-auto">
      {children}
    </span>
  );
}
