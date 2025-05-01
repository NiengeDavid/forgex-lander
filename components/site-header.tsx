import { Home, Mail, Phone } from "lucide-react";
import Container from "./container";

export default function SiteHeader() {
  return (
    <header className="py-3 px-2 bg-bg2 text-black md:px-5">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-2">
            <Phone size={12} className="text-primary-bg" />{" "}
            <a href="tel:+234 9103715381" className="text-sm">
              +234 9103715381
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Mail size={12} className="text-primary-bg" />
            <a href="mailto:support@miusecurelibrary.com" className="text-sm">
              support@forgexacademy.com.ng
            </a>
          </p>
        </div>
        <div className="hidden md:flex">
          <p className="flex items-center gap-2">
            <Home size={12} className="text-primary-bg" />
            <a href="mailto:support@miusecurelibrary.com" className="text-sm">
              No.3 Mai Suya Junction, Garki, Maitama Abuja
            </a>
          </p>
        </div>
      </Container>
    </header>
  );
}
