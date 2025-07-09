import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link className="flex items-center" href="/">
      <Image
        src="/images/logo/logo.svg"
        alt="logo"
        width={10}
        height={10}
        style={{ width: "auto", height: "50px" }}
        quality={100}
      />
      <h1 className="text-22 font-medium">Defend</h1>
      <span className="text-22 font-medium text-primary">Stack</span>
    </Link>
  );
};

export default Logo;
