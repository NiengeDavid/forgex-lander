import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import Container from "./container";
import { menuItems } from "@/data/menuItems";
import { footerDetails } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="bg-bg2 text-black relative pt-20 pb-10 px-6 md:px-20">
      <Container>
        <div className="relative z-10 flex flex-col md:flex-row md:justify-between gap-10">
          {/* Left Column */}
          <div className="max-w-md space-y-4">
            <h3 className="text-3xl font-bold">{footerDetails?.title}</h3>
            <p className="text-sm text-black">{footerDetails?.description}</p>

            <div className="space-y-4 mt-4 text-sm">
              <p className="flex items-center gap-2">
                <Phone size={16} />{" "}
                <a href={`tel:${footerDetails?.Phone}`}>
                  {footerDetails?.Phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a href={`mailto:${footerDetails?.email}`}>
                  {footerDetails?.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} /> {footerDetails?.address}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-4 text-black">
                {menuItems.map((item) => (
                  <li key={item.text}>
                    <Link
                      href={item.url}
                      className="text-primary-text font-medium hover:text-primary-bg transition-colors"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Resources</h4>
              <ul className="space-y-4 text-black">
                <li>
                  <Link className="hover:text-primary-bg" href="/">
                    Handbook
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary-bg" href="/">
                    Admission Form
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5">Follow Us</h4>
              <div className="flex items-center gap-4 mt-2">
                {footerDetails.socialLinks?.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-700" />
        <p className="text-center text-sm text-black">
          © <span>{new Date().getFullYear()}</span> {footerDetails?.title}. All
          Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}
