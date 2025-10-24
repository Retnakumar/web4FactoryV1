import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-24 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Web4 Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive services that harness the power of AI, Blockchain, and IoT 
              to transform your business for the digital age
            </p>
          </div>
        </section>

        <ServicesGrid />

        <section className="py-24 bg-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how Web4Factory can accelerate your digital transformation
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
