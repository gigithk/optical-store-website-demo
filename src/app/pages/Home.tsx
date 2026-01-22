import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { Collections } from "@/app/components/Collections";
import { Services } from "@/app/components/Services";
import { About } from "@/app/components/About";
import { VirtualTryOn } from "@/app/components/VirtualTryOn";
import { Testimonials } from "@/app/components/Testimonials";
import { Contact } from "@/app/components/Contact";
import { StoreShowcase } from "@/app/components/StoreShowcase";
import { Footer } from "@/app/components/Footer";

export function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <About />
      <Services />
      <VirtualTryOn />
      <Testimonials />
      <StoreShowcase />
      <Contact />
    </>
  );
}
