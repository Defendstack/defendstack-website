"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BuyCrypto from "./buy-form";
import SellCrypto from "./sell-form";
import CardSlider from "./slider";
import { useEffect, useRef, useState, useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ModalVideo from "@/components/Modal-Videos/modalVideo";

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false);
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false);
      }
    },
    [BuyRef, SellRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? "hidden" : "";
  }, [isBuying, isSelling]);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container px-4">
        <div className="grid grid-cols-12">
          <motion.div
            {...leftAnimation}
            className="lg:col-span-6 col-span-12 py-10 mx-3.5"
          >
            <span className="font-bold flex lg:justify-start justify-center text-white sm:text-5xl text-28 mb-0">
              Open Source Shift
            </span>
            <span className="font-bold text-primary sm:text-5xl text-28 mb-0">
              Left Framework
            </span>

            <h1 className="font-light lg:text-20 md:text-20 text-18 lg:text-start text-center text-white mb-10">
              The DefendStack is a comprehensive Application Security Platform
              that enables developers to build securely from the start while
              giving security teams complete visibility and control. But here's
              the kicker—it's completely free.
            </h1>
            <div className="flex items-center lg:justify-start justify-center gap-5">
              <div className="flex items-center lg:justify-start justify-center gap-5">
                <a
                  href="https://github.com/Defendstack/DefendStack-Suite?tab=readme-ov-file#installation"
                  rel="noopener noreferrer"
                  className="cursor-pointer bg-primary border border-primary rounded-lg text-20 font-medium text-white py-2 px-7 flex items-center gap-2"
                >
                  <Image
                    src="/images/hero/download.png"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                  <span>Install Now</span>
                </a>
                <a
                  href="/coming-soon"
                  rel="noopener noreferrer"
                  className="cursor-pointer bg-transparent border border-primary rounded-lg text-20 font-medium text-primary py-2 px-7 flex items-center gap-2"
                >
                  <span>Learn More</span>
                  <Image
                    src="/images/hero/more.png"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="lg:col-span-6 col-span-12 lg:block"
          >
            <div className="my-10 mx-3.5">
              <motion.div
                {...rightAnimation}
                className="lg:col-span-6 col-span-12 lg:block"
              >
                <div className="mx-3.5">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                    <div className="">
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
                        <video
                          src="/DefendStack.mp4"
                          controls
                          autoPlay
                          loop
                          muted
                          className="w-full h-full object-contain"
                          title="DefendStack video"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>{" "}
            </div>
          </motion.div>
        </div>
        <CardSlider />
      </div>
      <div className="absolute w-50 h-50 bg-linear-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
    </section>
  );
};

export default Hero;
