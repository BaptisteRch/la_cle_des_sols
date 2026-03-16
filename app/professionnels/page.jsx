// app/professionnels/page.jsx
import Image from "next/image";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";
import ServiceCardsPro from "../components/ServiceCardsPro";

export default function ProfessionnelsPage() {
  return (
    <main className="page">
      <SiteHeader />
      <ServiceCardsPro />

      {/* CONTACT */}
      <section className="section bg-beige" id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <ContactSection />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
