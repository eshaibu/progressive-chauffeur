import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FleetShowcase } from "@/components/FleetShowcase";
import { Footer } from "@/components/Footer";
import { AgreedFares } from "@/components/AgreedFares";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navigation />
      <Hero />
      <FleetShowcase />
      <ServicesGrid />
      {/* <Pricing /> - Old transparent pricing commented out */}
      <AgreedFares />
      <Footer />
    </main>
  );
}
