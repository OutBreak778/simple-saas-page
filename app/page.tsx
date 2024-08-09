import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Headers from "@/components/Headers";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Headers />
      <Hero />
      <LogoTicker />
      <Products />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
