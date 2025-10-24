import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import Testimonials from "@/components/Testimonials";
import PricingTiers from "@/components/PricingTiers";

export default function FAQ() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-24 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              FAQ & Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about Web4Factory and our services
            </p>
          </div>
        </section>

        <FAQAccordion />
        <Testimonials />
        <PricingTiers />
      </main>
      <Footer />
    </div>
  );
}
