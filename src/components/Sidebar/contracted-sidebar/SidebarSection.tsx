"use client";
// import { useBreadcrumb } from "@/services/hooks/general";
import { cn } from "@/lib/utils";
import Link from "next/link";

type TSection = {
  redirectUrl: string;
  shortTitle?: string;
  icon: JSX.Element;
  comingSoon: boolean;
};

type TSidebarSection = {
  section: TSection[];
};

export default function SidebarSection({ section }: TSidebarSection) {
  // const currentPath = useBreadcrumb();
  return section.map(({ redirectUrl, icon, shortTitle, comingSoon }, index) => (
    <Link
      className={cn(
        "my-3 flex h-auto w-full flex-col items-center justify-center py-0.5 gap-3 rounded-[0.4rem] stroke-white text-base font-medium",
        redirectUrl === ""
          ? "bg-[#b3a7f3] stroke-black text-black"
          : "hover:bg-[#b3a7f3] hover:stroke-black hover:text-black"
      )}
      key={index}
      href={redirectUrl}
    >
      {icon}
      <h6 className="text-center text-sm leading-none">
        {shortTitle ? shortTitle : ""}
      </h6>
      {comingSoon && (
        <span className="rounded-lg text-center bg-[#715002] px-2 py-0.5 text-sm text-[#FEC848]">
          Coming Soon
        </span>
      )}
    </Link>
  ));
}
