import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Projects",
    href: "",
    submenu: [
      {
        label: "DefendStack-Secrets",
        href: "https://docs.defendstack.org/DefendStack-Secrets/Introduction",
      },
      {
        label: "DefendStack-SCA",
        href: "https://docs.defendstack.org/DefendStack-SCA/Introduction",
      },
      {
        label: "DefendStack-ASM",
        href: "/coming-soon",
      },
    ],
  },
  {
    label: "Resources",
    href: "",
    submenu: [
      // {
      //   label: "Blog",
      //   href: "/coming-soon",
      // },
      {
        label: "Documentation",
        href: "https://docs.defendstack.org/Documentation/Introduction",
      },
    ],
  },
  {
  label: "Success Stories",
  href: "/success-stories",
  },
  {
    label: "Security",
    href: "/security",
  },
  {
    label: "About Us",
    href: "/about",
  },
];
