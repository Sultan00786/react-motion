"use client";
import { ChartPie, Framer, PartyPopper } from "lucide-react";
import {
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  motion,
  useSpring,
  useTransform,
} from "motion/react";
import Image, { StaticImageData } from "next/image";
import { JSX, useRef } from "react";
import scrollHook1 from "../../../public/scrollHook/scrollHook1.webp";
import scrollHook2 from "../../../public/scrollHook/scrollHook2.webp";
import scrollHook3 from "../../../public/scrollHook/scrollHook3.webp";

type ContainerItem = {
  image: StaticImageData;
  icon: JSX.Element;
  headline: string;
  subheadline: string;
};

const contents = [
  {
    image: scrollHook1,
    icon: <PartyPopper />,
    headline: "Designs That Speak Louder Than Your Words",
    subheadline:
      "We craft visuals that transform brands into experiences—capturing attention, emotion, and imagination through design that connects creativity with purpose and impact.",
  },
  {
    image: scrollHook2,
    icon: <ChartPie />,
    headline: "Creative Ideas Shaped Into Visual Masterpieces",
    subheadline:
      "Our studio blends art and strategy to design visuals that inspire, engage, and leave a lasting mark across digital, print, and social platforms worldwide.",
  },
  {
    image: scrollHook3,
    icon: <Framer />,
    headline: "Transforming Concepts Into Stunning Visual Stories",
    subheadline:
      "From logos to full brand identities, we bring your vision to life with bold design, color harmony, and storytelling that elevates your visual presence.",
  },
];
function Container() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="w-full">
      <motion.div
        style={{
          scaleX: scaleX,
          originX: 0,
        }}
        className="fixed top-0 left-0 w-full h-2 z-50 bg-pink-500"
      ></motion.div>
      {contents.map((item, index) => (
        <ContainerItem key={index} item={item} index={index} />
      ))}
    </div>
  );
}

function ContainerItem({
  item,
  index,
}: {
  item: ContainerItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [500, 0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, 3]);

  return (
    <div key={index} ref={ref} className="w-full h-screen">
      <div className="w-4xl h-full mx-auto flex items-center gap-10 justify-between">
        <div className="text-white w-fit flex flex-col gap-6">
          <div className="">{item.icon}</div>
          <h1 className="text-3xl font-bold">{item.headline}</h1>
          <p className="text-neutral-400">{item.subheadline}</p>
        </div>
        <motion.div
          style={{
            filter: useMotionTemplate`blur(${blur}px)`,
            translateY: translateY,
            scale: scale,
            opacity: opacity,
          }}
          className="w-full"
        >
          <Image
            src={item.image}
            className=" w-[400px] h-[400px] relative z-10 object-cover rounded-lg"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Container;
