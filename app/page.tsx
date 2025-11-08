import Card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { label } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

type WorkItem = {
  label: string;
  href: string;
};

const works = [
  {
    label: "While Exit",
    href: "/exit",
  },
  {
    label: "Variant",
    href: "/variant",
  },
  {
    label: "Scroll Hook",
    href: "/scrollHook",
  },
];

export default function Home() {
  return (
    <div className="bg-[#F7F7F8] w-full h-full">
      <div className="flex flex-col w-4xl mx-auto gap-2 px-2 pt-8 h-screen bg-white border-x border border-gray-200">
        {works.map((workItem, index) => (
          <ListItem index={index} workItem={workItem} key={index} />
        ))}
      </div>
    </div>
  );
}

function ListItem({ index, workItem }: { index: number; workItem: WorkItem }) {
  return (
    <>
      <Link href={workItem.href} className="cursor-default">
        {index + 1}.{" "}
        <span
          className={cn(
            " hover:text-blue-500 relative group transition-all duration-200 cursor-pointer",
            "after:w-full after:h-0.5 hover:after:bg-blue-500 after:bg-gray-950 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
          )}
        >
          {workItem.label}
        </span>
      </Link>
    </>
  );
}
