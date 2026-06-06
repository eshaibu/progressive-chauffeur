import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FleetShowcase } from "@/components/FleetShowcase";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navigation />
      <Hero />
      <FleetShowcase />
      <ServicesGrid />
      <Footer />
    </main>
  );
}
