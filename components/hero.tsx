import Container from "./container";
import Image from "next/image";
import { heroDetails } from "@/data/hero";

const img = "/assets/hero.jpeg";
export default function Hero() {
  return (
    <section id="home" className="bg-primary-bg mt-24 md:mt-28">
      <Container>
        <div className="flex flex-col justify-between items-center mx-auto gap-6 md:flex-row">
          <div className="w-full flex flex-col items-start text-white gap-5 py-12 lg:py-0">
            <h3 className="text-2xl md:text-xl lg:text-3xl font-bold">
              {heroDetails?.title}
            </h3>
            <p className="text-sm font-light  text-white">
              {heroDetails?.description}
            </p>
            <a
              href={heroDetails?.buttonHref}
              className="bg-btn text-black px-4 py-2 rounded hover:bg-accent"
            >
              {heroDetails?.buttonText}
            </a>
          </div>
          <div className="w-full">
            <Image
              src={heroDetails?.image}
              height={673}
              width={1200}
              alt={heroDetails?.imageAlt}
              className="w-full h-fit"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
