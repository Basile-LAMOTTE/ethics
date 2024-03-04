"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "./utils";

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
]

const Gallery = ({
  className,
}: {
  className?: string;
}) => {
//   return <div>Gallery</div>;
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
        <div
          className={cn("h-[40rem] items-start overflow-y-auto w-full dark:bg-dot-white/[0.2]", className)}
          ref={gridRef}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
            ref={gridRef}
          >
            {/* <Image
              src="/images/image_generee.png"
              width={500}
              height={500}
              alt="Picture of the author"
            /> */}
            <div className="grid gap-10">
              {firstPart.map((el, idx) => (
                <motion.div
                  style={{ y: translateFirst }} // Apply the translateY motion value here
                  key={"grid-1" + idx}
                >
                  <Image
                    src={el}
                    className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </motion.div>
              ))}
            </div>
            <div className="grid gap-10">
              {secondPart.map((el, idx) => (
                <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                  <Image
                    src={el}
                    className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </motion.div>
              ))}
            </div>
            <div className="grid gap-10">
              {thirdPart.map((el, idx) => (
                <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                  <Image
                    src={el}
                    className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
  );
};

export default Gallery;
