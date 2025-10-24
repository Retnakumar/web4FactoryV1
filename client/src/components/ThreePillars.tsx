import { Card } from "@/components/ui/card";
import aiIcon from "@assets/generated_images/AI_pillar_icon_bf145fbc.png";
import blockchainIcon from "@assets/generated_images/Blockchain_pillar_icon_ec265ebe.png";
import iotIcon from "@assets/generated_images/IoT_pillar_icon_51d8d9d3.png";

const pillars = [
  {
    title: "Artificial Intelligence",
    icon: aiIcon,
    description: "Advanced AI algorithms that learn, adapt, and evolve with your needs, creating intelligent systems that understand context and deliver predictive insights.",
  },
  {
    title: "Blockchain",
    icon: blockchainIcon,
    description: "Decentralized infrastructure ensuring transparency, security, and trust in every transaction. Smart contracts that automate processes and eliminate intermediaries.",
  },
  {
    title: "Internet of Things",
    icon: iotIcon,
    description: "Interconnected devices creating a seamless ecosystem where data flows intelligently, enabling real-time monitoring and automated decision-making.",
  },
];

export default function ThreePillars() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            The Three Pillars of Web4
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our symbiotic approach combines cutting-edge technologies to create the future of the web
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-300 hover:scale-105 group"
              data-testid={`card-pillar-${index}`}
            >
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-ring/20 p-1 group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
                  <img 
                    src={pillar.icon} 
                    alt={pillar.title} 
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-center" data-testid={`text-pillar-title-${index}`}>
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-center" data-testid={`text-pillar-description-${index}`}>
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
