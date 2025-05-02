import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import { admissionDetails } from "@/data/admission";

const img = "/assets/admission.jpeg";

export default function AdmissionSection() {
  return (
    <section id="admission" className="pb-16 bg-primary-bg text-white lg:pb-0">
      <Container className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:gap-14">
          {/* Left Column - Image or Illustration (placeholder) */}
          <div className="">
            <div className="w-full">
              {/* Placeholder for an image - replace with your actual image */}
              <Image
                src={admissionDetails?.image}
                alt="Admission Illustration"
                width={1200}
                height={673}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {admissionDetails?.title}
            </h2>
            <p className="text-lg font-medium mb-6">
              {admissionDetails?.bullet}
            </p>
            <p className="text-lg mb-8">
             {admissionDetails?.description}
            </p>
            <Link
              href="#waitlist"
              className="inline-block bg-btn text-black hover:bg-blue-50 font-bold py-3 px-8 rounded-sm transition-colors duration-300"
            >
              {admissionDetails?.btnText}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
