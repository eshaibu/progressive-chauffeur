import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FleetShowcase } from "@/components/FleetShowcase";
import { AgreedFares } from "@/components/AgreedFares";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navigation />
      <Hero />
      <FleetShowcase />
      <ServicesGrid />
      <AgreedFares />
      <BookingForm />
      <Footer />
    </main>
  );
}
