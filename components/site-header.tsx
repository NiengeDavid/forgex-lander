import { Home, Mail, Phone } from "lucide-react";
import Container from "./container";

export default function SiteHeader() {
  return (
    <header className="py-3 bg-bg2 text-black">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-1 hover:underline">
            <Phone size={12} className="text-primary-bg" />{" "}
            <a href="tel:+234 9103715381" className="text-[10px]">
              +234 9103715381
            </a>
          </p>
          <p className="flex items-center gap-1 hover:underline">
            <Mail size={12} className="text-primary-bg" />
            <a href="mailto:support@miusecurelibrary.com" className="text-[10px]">
              support@forgexacademy.com.ng
            </a>
          </p>
        </div>
        <div className="hidden md:flex">
          <p className="flex items-center gap-2">
            <Home size={12} className="text-primary-bg" />
            <span className="text-sm">
              No.3 Mai Suya Junction, Garki, Maitama Abuja
            </span>
          </p>
        </div>
      </Container>
    </header>
  );
}
