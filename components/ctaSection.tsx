import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "./container";
import Image from "next/image";
import { ctaDetails } from "@/data/cta";

export default function CTASection() {

  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <Container className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* left Column - Carousel */}
        <div className="w-full">
          <Carousel className="w-full mx-auto">
            <CarouselContent>
              {ctaDetails.carouselImages?.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <Image
                        src={image}
                        alt={`School image ${index + 1}`}
                        width={800}
                        height={1200}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* right Column - Text Content */}
        <div className="text-black text-start lg:p-12">
          <h2 className="text-3xl font-medium mb-6 lg:font-semibold">
            {ctaDetails?.title}
          </h2>
          <p className="mb-6">{ctaDetails?.description1}</p>
          <p className="mb-8">{ctaDetails?.description2}</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-start">
              <p className="text-4xl font-bold text-black border-b-5 border-primary-bg w-24 pb-2">
                5+
              </p>
              <p className="text-lg mt-1">Core Learning Areas</p>
            </div>
            <div className="text-start">
              <p className="text-4xl font-bold text-black border-b-5 border-primary-bg w-24 pb-2">
                100%
              </p>
              <p className="text-lg mt-1">English Language Instruction</p>
            </div>
            <div className="text-start">
              <p className="text-3xl font-bold text-black border-b-5 border-primary-bg w-32 pb-2">
                5 - 18
              </p>
              <p className="text-lg mt-1">Age (Gen Alpha, Beta & Z)</p>
            </div>
            <div className="text-start">
              <p className="text-4xl font-bold text-black border-b-5 border-primary-bg w-24 pb-2">
                95%
              </p>
              <p className="text-lg mt-1">Flexible Scheduling</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
