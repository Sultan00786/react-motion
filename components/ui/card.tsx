"use client";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function Card() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            exit={{
              opacity: 0,
              scale: 0.95,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "flex flex-col items-center gap-2 w-96 min-h-[550px] h-[550] p-4 bg-white rounded-md shadow-md",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
            )}
          >
            <h1 className="text-[15px] w-full font-semibold">
              Organization UI Components
            </h1>
            <p className=" text-[15px] leading-5 text-gray-500">
              A collection of beautiful card UI components. Let's see them in
              action
            </p>
            <motion.button
              onClick={() => setIsOpen(false)}
              className="text-[15px] font-semibold flex items-center gap-1 mt-4 border text-gray-600 border-gray-200 rounded-md shadow-xs px-2 py-1 cursor-pointer"
              // whileHover={{
              //   translateY: -5,
              // }}
              // whileTap={{
              //   translateY: 2,
              //   transition: { duration: 0 },
              // }}
              // transition={{
              //   duration: 0.2,
              //   ease: "easeInOut",
              // }}
            >
              Close
              <X className="w-4 h-4 mt-[2.8px] text-gray-500" strokeWidth={2} />
            </motion.button>

            <div className="bg-gray-100/25 flex-1 w-5/6 mt-4 mb-7 rounded-lg border border-dashed border-gray-200 relative">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  filter: "blur(10px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.005,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className={cn(
                  "absolute inset-0 w-full h-full bg-white rounded-lg border border-gray-200 cursor-pointer",
                  "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
                )}
              ></motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Card;
