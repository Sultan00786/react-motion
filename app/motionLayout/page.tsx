"use client";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function page() {
  const [numOfNotification, setNumOfNotification] = useState<number[]>([]);
  return (
    <div className="relative w-full h-screen bg-blue-999">
      <Button
        onClick={() => {
          setNumOfNotification([
            ...numOfNotification,
            numOfNotification.length + 1,
          ]);
        }}
        variant="secondary"
        className="absolute top-4 left-4"
        size="lg"
      >
        <span>Add Notification</span>
        <Plus></Plus>
      </Button>
      <motion.div
        // layout
        className="fixed bottom-0 inset-x-0 flex flex-col items-center gap-2 p-4"
      >
        <AnimatePresence>         // this is right
          {numOfNotification.map((index) => (
            // <AnimatePresence>    ---> this is wrong 
            <motion.div
              initial={{ opacity: 0, scale: 0.3, translateY: 100 }}
              animate={{ opacity: 1, scale: 1, translateY: 0 }}
              exit={{
                opacity: 0,
                scale: 0.3,
                translateY: 100,
                transition: { duration: 0.25, ease: "easeInOut" },
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              layoutId={`notification-${index}`}
              key={index}
              className=" relative h-32 w-72 bg-[#131C27] border border-slate-800 rounded-md flex flex-col gap-3 py-4 px-4"
            >
              <div className="w-5/6 h-8 bg-slate-600 rounded-lg"></div>
              <div className="w-3/4 h-8 bg-slate-800 rounded-lg"></div>
              <X
                className="absolute text-slate-700 font-bold top-2 right-2 cursor-pointer hover:text-slate-400"
                size={20}
                strokeWidth={3}
                onClick={() => {
                  console.log(index);
                  setNumOfNotification(
                    numOfNotification.filter((i) => i !== index)
                  );
                }}
              ></X>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default page;
