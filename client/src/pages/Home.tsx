import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ThreePillars from "@/components/ThreePillars";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ThreePillars />
        <WhySection />
      </main>
      <Footer />
    </div>
  );
}
