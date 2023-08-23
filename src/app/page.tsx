"use client";

import Image from "next/image";
import image from "../../public/header_img.jpg";
import image1 from "../../public/image1.jpg";
import image2 from "../../public/image2.jpg";
import image3 from "../../public/image3.jpg";
import image4 from "../../public/image4.jpg";
import image5 from "../../public/image5.jpg";
import image6 from "../../public/image6.jpg";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const IMAGES = [image1, image2, image3, image4, image5, image6];

export default function Home() {
  const galleryRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLElement>(null);
  const { scrollYProgress: yScrollGallery } = useScroll({
    target: galleryRef,
  });
  const { scrollYProgress: yScrollText } = useScroll({
    target: textRef,
  });

  const x = useTransform(yScrollGallery, [0, 1], ["60px", `-${2.5 * 450}px`]);
  const xText = useTransform(yScrollText, [1, 0], ["-68%", "-1%"]);
  const yText = useTransform(yScrollText, [0, 1], ["0%", `${30 * 8}%`]);
  const xTextNegative = useTransform(yScrollText, [0, 1], ["-68%", "0%"]);
  const yTextNegative = useTransform(
    yScrollText,
    [0, 1],
    [`-${30 * 8}%`, "0%"],
  );

  const variants: Variants = {
    initial: (direction: 1 | -1) => ({
      y: -150 * direction,
    }),
    animate: {
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <main>
      <nav className="fixed top-0 z-10 flex h-full w-full flex-col justify-between px-16 py-10 text-2xl font-semibold text-white mix-blend-difference">
        <div className="flex justify-between">
          <p>Horizontal Scroll Gallery</p>
          <p>NextJS File</p>
        </div>
        <div className="flex justify-between">
          <p>
            Images by <span className="underline">Death to Stock</span>
          </p>
          <p className="underline">Desgined By Paul</p>
        </div>
      </nav>
      <header className="relative flex min-h-screen items-center justify-center">
        <div className="text-center text-white mix-blend-difference">
          <p className="text-2xl">SHADOW TECH</p>
          <h1 className="overflow-hidden p-1 text-9xl font-bold">
            <motion.span
              custom={1}
              variants={variants}
              initial="initial"
              animate="animate"
              className="serif inline-block font-light italic"
            >
              Hyper
            </motion.span>{" "}
            <motion.span
              custom={-1}
              variants={variants}
              initial="initial"
              animate="animate"
              className="inline-block"
            >
              ANGEST
            </motion.span>
          </h1>
        </div>
        <Image
          src={image}
          alt="header_image"
          placeholder="blur"
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
        />
      </header>
      <section ref={galleryRef} className="relative h-[400vh] bg-white">
        <div className="sticky top-0 flex h-screen items-center space-x-12 overflow-hidden">
          {IMAGES.map((img, index) => (
            <motion.div
              key={index}
              className={`relative h-[550px] min-w-[450px] overflow-hidden`}
              style={{ x }}
            >
              <motion.div
                whileInView={{
                  scale: 1.05,
                  transition: { delay: 0.3, duration: 1, ease: "backInOut" },
                }}
              >
                <Image src={img} alt="image" placeholder="blur" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
      <section ref={textRef} className="relative mt-12 h-[200vh] bg-white">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden text-9xl uppercase">
          <motion.p
            style={{
              x: xTextNegative,
              y: yTextNegative,
              rotate: 5,
              translateY: -100,
            }}
            className="absolute origin-top-left whitespace-nowrap bg-yellow-400 py-2"
          >
            HTML - CSS - JAVASCRIPT - REACTJS - TAILWIND - WEB - DESIGN - HTML -
            CSS - REACTJS - DESIGN
          </motion.p>
          <motion.p
            style={{ x: xText, y: yText, rotate: -5, translateY: 100 }}
            className="absolute origin-left -rotate-12 whitespace-nowrap bg-red-400 py-2"
          >
            HTML - CSS - JAVASCRIPT - REACTJS - TAILWIND - WEB - DESIGN - HTML -
            CSS - REACTJS - DESIGN
          </motion.p>
          {/* <p className="absolute  rotate-6 whitespace-nowrap bg-yellow-400 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae
            iure explicabo a quasi veritatis animi, soluta eum. Fugit, magni
            exercitationem dicta dignissimos modi ad vero explicabo sapiente
            provident esse!
          </p> */}
        </div>
      </section>
    </main>
  );
}
