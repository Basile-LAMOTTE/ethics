"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { cn } from "./utils";
import { Spotlight } from "@/components/ui/Spotlight";

const images: string[] = [
  "/images/image_generee.png",
  "/images/image.png",
  "/images/tmp6hc9zwbh.png",
  "/images/tmp7gz83ryg.png",
  "/images/tmp9_jtn00p.png",
  "/images/tmp9zucqpnr.png",
  "/images/tmparsx8u6q.png",
  "/images/tmpbk278luk.png",
  "/images/tmpepo7wkgz.png",
  "/images/tmpevo9l0bq.png",
  "/images/tmpf99b6noi.png",
  "/images/tmpgoltzxw9.png",
  "/images/tmpj1n_zky0.png",
  "/images/tmpkn86o_28.png",
  "/images/tmploqxaqu9.png",
  "/images/tmpnsczaxgn.png",
  "/images/tmpoygsfli4.png",
  "/images/tmpp5lxs2kv.png",
  "/images/tmpqgo05s5z.png",
  "/images/tmpseutinn4.png",
  "/images/tmpsiduv4ha.png",
  "/images/tmpt55epzh6.png",
  "/images/tmptbfz8wtn.png",
  "/images/tmpwa4gyxc0.png",
  "/images/tmpxwr2udqz.png",
  "/images/tmpyuqcyc4x.png",
  "/images/tmpyyw1ulg6.png",
  "/images/tmpz263a0qp.png",
  "/images/tmpzw39pbzk.png",
];

export default function Gallery() {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <ParallaxScroll className="z-10" images={images} />;
    </div>
  );
}
