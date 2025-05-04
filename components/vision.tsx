import Image from "next/image";
import Container from "./container";
import { visionDetails } from "@/data/vision";

export default function Vision() {
  return (
    <div id="vision" className="bg-primary-bg py-12">
      <Container className="flex flex-col text-white md:flex-row p-8">
        {/* Left Side: Vision and Mission */}
        <div className="md:max-w-xl flex-1 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">{visionDetails?.visionHead}</h2>
            <p className="text-white">{visionDetails?.vision}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{visionDetails?.missionHead}</h2>
            <p className="text-white">{visionDetails?.mission}</p>
          </div>
        </div>

        {/* Right Side: Founder's Notes */}
        <div className="w-full flex-1 mt-8 md:mt-0 md:ml-8">
          <h2 className="text-2xl font-bold mb-4">
            {visionDetails?.founderHead}
          </h2>
          <p className="text-white mb-8">{visionDetails?.founderNotes1}</p>
          <p className="text-white mb-8">{visionDetails?.founderNotes2}</p>
          <p className="text-white mb-8">{visionDetails?.welcome}</p>
          <div className="flex items-center space-x-4">
            <Image
              src={visionDetails?.avatar}
              alt="Founder's Avatar"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-lg font-bold">{visionDetails?.name}</h3>
              <p className="text-gray-300">Founder & CEO</p>
              <a
                href={visionDetails?.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                blessingingyape.com.ng
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
