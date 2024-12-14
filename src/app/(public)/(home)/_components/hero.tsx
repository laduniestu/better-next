import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="bg-gradient-to-b from-primary/50 via-primary to-primary bg-clip-text pb-5 text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Innovating the Future of Technology
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-xl" data-aos="fade-up">
                Join us in pushing the boundaries of innovation and shaping
                technological advancements for a smarter, connected world.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <Button asChild className="group">
                  <Link href="/">
                    Explore Technology
                    <span className="tracking-normal transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="ml-4">
                  <Link href="/">Discover More</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative h-96 w-full rounded-xl bg-primary">
            <div className="flex h-full items-center justify-center text-3xl text-white">
              Showcase of Cutting-edge Technology
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
