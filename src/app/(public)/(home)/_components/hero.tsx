import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import HeroLight from "./hero-light.jpg";
import HeroDark from "./hero-dark.jpg";
import { GithubIcon } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto max-w-6xl">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="bg-gradient-to-b from-primary/50 via-primary to-primary bg-clip-text pb-5 text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              The <i className="font-bold">Perfect</i> Next.js Starter Kit
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-xl" data-aos="fade-up">
                This Next.js starter kit includes everything you need to build
                your awesome product. From authentication to analytics,
                it&apos;s everything you need to launch your project.
              </p>
              <div className="mx-auto max-w-xs space-x-0 space-y-4 sm:flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0">
                <Button asChild className="group" data-umami-event="CTA Button">
                  <a href="#features">
                    Explore tech stacks
                    <span className="tracking-normal transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  data-umami-event="Github Button"
                >
                  <a
                    href="https://github.com/laduniestu/better-next"
                    target="_BLANK"
                  >
                    <GithubIcon className="h-6 w-6" />
                    laduniestu/better-next
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <Link href="/app" id="about">
            <div className="relative h-full w-full rounded-xl outline outline-8 outline-primary/20 hover:outline-primary">
              <Image
                src={HeroLight}
                alt="Hero Image"
                className="h-full w-full object-cover dark:hidden"
              />
              <Image
                src={HeroDark}
                alt="Hero Image"
                className="hidden h-full w-full object-cover dark:flex"
              />
            </div>
            <span className="sr-only">Hero Link</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
