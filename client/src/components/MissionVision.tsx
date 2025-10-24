import { Card } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To democratize access to Web4 technologies, empowering businesses of all sizes to harness the power of AI, Blockchain, and IoT. We believe in creating solutions that are not just technologically advanced, but also practical, scalable, and accessible.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "A world where the boundaries between the physical and digital realms dissolve, creating a seamless symbiotic ecosystem. We envision intelligent systems that anticipate needs, transparent networks that build trust, and interconnected devices that enhance human potential.",
  },
  {
    icon: Heart,
    title: "Core Values",
    description: "Innovation without compromise. Security by design. Transparency in everything we do. We're committed to ethical AI development, sustainable blockchain practices, and privacy-respecting IoT implementations that put users first.",
  },
];

export default function MissionVision() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {values.map((value, index) => (
            <Card key={index} className="p-8 hover-elevate transition-all duration-300" data-testid={`card-value-${index}`}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-md bg-gradient-to-br from-primary/20 to-ring/20 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4" data-testid={`text-value-title-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-value-description-${index}`}>
                    {value.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
