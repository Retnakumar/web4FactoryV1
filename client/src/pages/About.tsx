import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MissionVision from "@/components/MissionVision";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-24 bg-gradient-to-b from-background via-card to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                About Web4Factory
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are pioneers in the Web4 revolution, building the symbiotic ecosystem 
                where AI, Blockchain, and IoT converge to create intelligent, decentralized, 
                and interconnected solutions.
              </p>
            </div>

            <Card className="p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-display font-bold mb-6 text-center">
                The Future of the Symbiotic Web
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Web4 represents a paradigm shift in how we interact with technology. 
                  It's not just about decentralization or smart contracts—it's about creating 
                  an ecosystem where systems think, learn, and adapt autonomously while remaining 
                  transparent and trustworthy.
                </p>
                <p>
                  At Web4Factory, we combine the predictive power of artificial intelligence, 
                  the transparency and security of blockchain, and the real-world connectivity 
                  of IoT devices. This trinity creates applications that are not just reactive, 
                  but proactive—anticipating needs before they arise.
                </p>
                <p>
                  Our platform enables businesses to build solutions that operate across 
                  physical and digital boundaries seamlessly. From smart cities that optimize 
                  energy usage in real-time to healthcare systems that predict and prevent 
                  diseases, we're making the impossible possible.
                </p>
              </div>
            </Card>
          </div>
        </section>

        <MissionVision />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
              Why Choose Web4Factory
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { title: "Expertise", description: "Deep technical knowledge across AI, blockchain, and IoT" },
                { title: "Innovation", description: "Cutting-edge solutions that push technological boundaries" },
                { title: "Scalability", description: "Architecture designed to grow with your business" },
                { title: "Security", description: "Enterprise-grade protection at every layer" },
                { title: "Support", description: "Dedicated team available 24/7 for your success" },
                { title: "Results", description: "Proven track record of transformative implementations" },
              ].map((item, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
