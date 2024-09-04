"use client";
// import { useBreadcrumb } from "@/services/hooks/general";
import { cn } from "@/lib/utils";
import Link from "next/link";

type TSection = {
  redirectUrl: string;
  title: string;
  icon: JSX.Element;
  comingSoon: boolean;
};

type TSidebarSection = {
  section: TSection[];
};

export default function SidebarSection({ section }: TSidebarSection) {
  // const currentPath = useBreadcrumb();
  return section.map(({ redirectUrl, icon, title, comingSoon }, index) => (
    <Link
      className={cn(
        "my-3 flex h-12 w-full items-center justify-between gap-3 rounded-[0.8rem] stroke-white p-2 text-base font-medium leading-5",
        redirectUrl === ""
          ? "bg-[#b3a7f3] stroke-black text-black hover:stroke-black"
          : "hover:bg-[#b3a7f3] hover:fill-black hover:stroke-black hover:text-black",
      )}
      key={index}
      href={redirectUrl}
    >
      <div className="flex items-center gap-3">
        {icon}
        {title}
      </div>
      {comingSoon && (
        <span className="rounded-lg bg-[#715002] px-2 py-0.5 text-sm text-[#FEC848]">
          Coming Soon
        </span>
      )}
    </Link>
  ));
}
