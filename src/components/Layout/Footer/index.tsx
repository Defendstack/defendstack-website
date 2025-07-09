import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { productslabels, resourcelabels, securitylabels } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="bg-darkmode">
      <div className="container px-4">
        <div className=" flex items-start justify-between lg:gap-20 md:gap-6 sm:gap-12 gap-4 pb-16">
          <div className="">
            <div className="">
              <Logo />
            </div>
            <div className="ml-3">
              <div className="flex gap-6 items-center mt-8 relative z-1">
                <Link href="https://x.com/DefendStack" className="group">
                  <Icon
                    icon="fa6-brands:x-twitter"
                    width="24"
                    height="24"
                    className="text-white group-hover:text-primary"
                  />
                </Link>
                <Link
                  href="https://discord.com/invite/CSeVbCvK"
                  className="group"
                >
                  <Icon
                    icon="fa6-brands:discord"
                    width="24"
                    height="24"
                    className="text-white group-hover:text-primary"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/defendstack/"
                  className="group"
                >
                  <Icon
                    icon="fa6-brands:linkedin"
                    width="24"
                    height="24"
                    className="text-white group-hover:text-primary"
                  />
                </Link>
                <Link
                  href="https://github.com/Defendstack/DefendStack-Suite/"
                  className="group"
                >
                  <Icon
                    icon="fa6-brands:github"
                    width="24"
                    height="24"
                    className="text-white group-hover:text-primary"
                  />
                </Link>
              </div>
              <h3 className="text-white text-24 font-medium sm:mt-20 mt-12">
                2025 Copyright
              </h3>
              <Link
                className="text-white text-24 font-medium sm:mt-20 mt-12 hover:text-primary"
                target="_blank"
                href="https://getnextjstemplates.com/"
              >
                @ DefendStack
              </Link>
            </div>
          </div>
          <div className="flex items-start lg:gap-20 md:gap-6 sm:gap-12 gap-4">
            <div className="">
              <h4 className="text-white mb-4 font-medium text-24">Products</h4>
              <ul>
                {productslabels.map((item, index) => (
                  <li key={index} className="pb-4">
                    <Link
                      href={item.href}
                      className="text-white hover:text-primary text-17"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="">
                <h4 className="text-white mb-4 font-medium text-24">
                  Resources
                </h4>
                <ul>
                  {resourcelabels.map((item, index) => (
                    <li key={index} className="pb-4">
                      <Link
                        href={item.href}
                        className="text-white hover:text-primary text-17"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-white mb-4 font-medium text-24">
                  Security
                </h4>
                <ul className="w-3/4">
                  {securitylabels.map((item, index) => (
                    <li key={index} className="pb-4">
                      <Link
                        href={item.href}
                        className="text-white hover:text-primary text-17"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="">
              <h3 className="text-white text-24 font-medium">Subscribe</h3>
              <p className="text-muted/60 text-18 mt-5">
                Subscribe to get the latest
                <br /> news form us
              </p>
              <div className="relative lg:w-100%">
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  placeholder="Enter Email"
                  className="bg-transparent border border-dark_border/60 py-4 text-white rounded-lg w-full mt-6 px-6"
                />
                <Icon
                  icon="tabler:send"
                  width="24"
                  height="24"
                  className="text-primary absolute right-7 bottom-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
