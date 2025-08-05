import { upgradeData } from "@/app/api/data";
import Image from "next/image";

const Upgrade = () => {
  return (
    <section className="md:py-40 py-20" id="upgrade">
      <div className="container px-4">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={"/public/images/blurred-shape.svg"}
            width={760}
            height={668}
            alt="Blurred shape"
          />
        </div>
        <div className="max-w6xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-2 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                data-aos="fade-up"
              >
                Join us in redefining what it means to be secure
              </h2>
              <p
                className="animate-[gradient_6s_linear_infinite] mb-8"
                data-aos="fade-up"
              >
                We envision a world where every business, regardless of size or
                budget, has access to state-of-the-art cybersecurity. Where
                security isn't a luxury, but a fundamental right. Where we stand
                united against cyber threats, leaving no one behind.
              </p>
              <div className="mx-auto max-w-[300px] sm:flex sm:max-w-[400px] sm:justify-center gap-2">
                <a
                  href="https://docs.defendstack.org/Documentation/Introduction"
                  rel="noopener noreferrer"
                  className="cursor-pointer bg-primary border border-primary rounded-lg text-20 font-medium text-white py-2 px-7 flex items-center justify-center gap-2 mb-2 sm:mb-0 sm:mr-2 w-full"
                >
                  <span>Learn More</span>
                  <Image
                    src="/images/upgrade/more-white.png"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                </a>
                <a
                  href="https://github.com/Defendstack/DefendStack-Suite"
                  rel="noopener noreferrer"
                  className="cursor-pointer bg-transparent border border-primary rounded-lg text-20 font-medium text-primary py-2 px-7 flex justify-center items-center gap-2 w-full"
                >
                  <Image
                    src="/images/upgrade/github-primary.png"
                    alt="icon"
                    width={20}
                    height={20}
                  />
                  <span> GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
