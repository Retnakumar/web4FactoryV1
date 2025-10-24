import { Card } from "@/components/ui/card";
import { Sparkles, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "We push the boundaries of what's possible, constantly exploring new frontiers in Web4 technology.",
  },
  {
    icon: Shield,
    title: "Security Built-In",
    description: "Every solution is architected with security at its core, leveraging blockchain's immutable nature.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that scales with your needs, from startup to enterprise.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Distributed infrastructure ensuring reliability and accessibility across the globe.",
  },
];

export default function WhySection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Why Web4Factory?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're not just building applications; we're architecting the future of the internet. 
            Our platform seamlessly integrates AI, Blockchain, and IoT to create intelligent, 
            decentralized, and interconnected systems that redefine what's possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-feature-${index}`}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
