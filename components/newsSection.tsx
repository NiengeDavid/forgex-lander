import React from "react";
import Link from "next/link";
import Container from "./container";
import { newsItems } from "@/data/newsItems";
import Image from "next/image";

export default function NewsSection() {

  return (
    <section id="curriculum" className="py-12 px-4 sm:px-6 lg:px-8 bg-bg2">
      <Container className="mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Learning Areas
          </h2>
          <Link
            href="#"
            className="text-primary-bg hover:text-primary-bg/80 font-medium flex items-center"
          >
            Join us now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-transparent overflow-hidden transition-shadow"
            >
              <div className="p-6 w-96">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-lg mb-4"
                  width={400}
                  height={192}
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link
                  href={item.link}
                  className="inline-flex items-center text-primary-bg hover:text-primary-bg/80 font-medium"
                >
                  Contact us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};