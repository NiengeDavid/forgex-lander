import SiteHeader from "./site-header";
import Container from "./container";
import Header from "./header";

export default function Navbar() {
  return (
    <div className="w-full fixed z-50">
      <SiteHeader />
      <Header />
    </div>
  );
}
