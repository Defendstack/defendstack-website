"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Work = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const services = [
    {
      icon: "/images/icons/speedometer.png",
      text: "Dynamic Scoring",
    },
    {
      icon: "/images/icons/prioritization.png",
      text: "Risk Based Prioritization",
    },
    {
      icon: "/images/icons/distributed.png",
      text: "Seamless Integration",
    },
  ];

  return (
    <section className="md:pt-28" id="work">
      <div className="container px-4 mx-auto lg:max-w-(--breakpoint-xl) px-4">
        <div ref={ref} className="grid grid-cols-12 items-center">
          <motion.div
            {...bottomAnimation}
            className="lg:col-span-7 col-span-12"
          >
            <p className="sm:text-40 text-30 text-white lg:w-full md:w-70% font-medium">
              Map Your <span className="text-primary">Product Journey</span>
            </p>
            <h2 className="sm:text-18 text-18 text-white md:w-85%">
              The DefendStack is an open-source security platform that empowers
              developers to build securely from the ground up while allowing
              security teams to map the product journey with complete visibility
              and control—all at no cost.
            </h2>
            <div className="grid md:grid-cols-2 gap-7 mt-11">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="px-5 py-5 bg-light_grey/30 rounded-full">
                    <Image
                      src={service.icon}
                      alt={`${service.text} icon`}
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="text-24 text-muted">{service.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...TopAnimation} className="lg:col-span-5 col-span-12">
            <div className="2xl:-mr-40 mt-9 flex justify-center">
              <Image
                src="/images/icons/work-3.png"
                alt="image"
                width={550}
                height={400}
                className="lg:w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
