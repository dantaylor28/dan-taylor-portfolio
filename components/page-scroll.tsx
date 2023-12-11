import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function PageScroll() {
  return (
    <div className="hidden sm:block mt-8">
      <Link href="#aboutme">
        <IoIosArrowDown className="text-slate-300 h-12 w-12 animate-pulse hover:text-slate-400" />
      </Link>
    </div>
  );
}
