import { Home, Mail, Phone } from "lucide-react";
import Container from "./container";

export default function SiteHeader() {
  return (
    <header className="py-3 sticky bg-bg2 text-black">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-1 hover:underline">
            <Phone size={12} className="text-primary-bg" />{" "}
            <a href="tel:+234 81153110901" className="text-[10px]">
              +234 81153110901
            </a>
          </p>
          <p className="flex items-center gap-1 hover:underline">
            <Mail size={12} className="text-primary-bg" />
            <a href="mailto:forgexacademy@gmail.com" className="text-[10px]">
              forgexacademy@gmail.com
            </a>
          </p>
        </div>
        <div className="hidden md:flex">
          <p className="flex items-center gap-2">
            <Home size={12} className="text-primary-bg" />
            <span className="text-sm">
              19, 444 Crescent Citec Villa Estate, Gwarinpa, Abuja.
            </span>
          </p>
        </div>
      </Container>
    </header>
  );
}
