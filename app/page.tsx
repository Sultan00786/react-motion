import Card from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#F7F7F8] w-full h-full">
      <div className="flex flex-col w-4xl mx-auto gap-2 px-2 pt-8 h-screen bg-white border-x border border-gray-200">
        <Link href="/exit">
          1.{" "}
          <span
            className={cn(
              " hover:text-blue-500 relative font-semibold group transition-all duration-200",
              "after:w-full after:h-0.5 hover:after:bg-blue-500 after:bg-gray-950 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            )}
          >
            While Exit
          </span>
        </Link>
      </div>
    </div>
  );
}
