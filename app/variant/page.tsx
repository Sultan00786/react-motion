"use client";
import { cn } from "@/lib/utils";
import {
  ChevronRight,
  House,
  Users,
  ChartNoAxesCombined,
  Settings,
  ChevronLeft,
} from "lucide-react";
import { motion, Variant } from "motion/react";
import { tr } from "motion/react-client";
import { useState } from "react";

const sidebarList = [
  {
    label: "Home",
    icon: <House width={20} height={20} strokeWidth={2} />,
  },
  {
    label: "Analytics",
    icon: <ChartNoAxesCombined width={20} height={20} strokeWidth={2} />,
  },
  {
    label: "Users",
    icon: <Users width={20} height={20} strokeWidth={2} />,
  },
  {
    label: "Settings",
    icon: <Settings width={20} height={20} strokeWidth={2} />,
  },
  // "Users", "Analytics", "Blogs", "Settings"
];

export default function page() {
  return (
    <div className="h-screen flex bg-gray-150">
      <Sidebar />
      <div className=" w-full h-fit px-4 py-4 bg-white border-b border-gray-200">
        <h1 className="text-2xl font-semibold">Overview</h1>
      </div>
    </div>
  );
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const sideBarOpen = {
    open: {
      width: "16rem",
    },
    close: {
      width: "4rem",
    },
  };
  const listAnimate = {
    open: {
      opacity: 1,
      translateY: 0,
    },
    close: {
      opacity: 0,
      translateY: -30,
    },
  };
  const staggerAnimate = {
    open: {
      transition: {
        staggerChildren: 0.05, // delay on each child --> kind of stagger effect
        delayChildren: 0.3, // delay on parent container of list
      },
    },
    close: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "close"}
      variants={sideBarOpen}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "h-full bg-white pr-4 border-r border-gray-200"
        // `${!isOpen && " flex flex-col items-center"}`
      )}
    >
      <div className=" flex items-center justify-between pt-4 pl-4">
        <h1 className={cn("text-2xl font-semibold", `${!isOpen && "sr-only"}`)}>
          Dashbord
        </h1>
        <button
          className="text-[15px] font-semibold flex items-center gap-1 border  border-gray-200 rounded-full shadow-md shadow-gray-500/50 hover:shadow-gray-500 transition-all duration-200 cursor-pointer relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <ChevronRight width={30} height={30} strokeWidth={2} />
          ) : (
            <ChevronLeft width={30} height={30} strokeWidth={2} />
          )}
        </button>
      </div>
      <div className="mt-4">
        <motion.ul variants={staggerAnimate} className="pl-2">
          {sidebarList.map((item) => (
            <motion.li
              variants={listAnimate}
              key={item.label}
              className="flex items-center gap-2 py-2 pl-2 text-black rounded-lg hover:bg-gray-200 cursor-pointer"
            >
              {item.icon}
              <label className={`${!isOpen && "sr-only"}`}>{item.label}</label>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}
