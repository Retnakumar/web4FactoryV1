import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Link2, Cpu, Database, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI-Powered Web Applications",
    description: "Leverage cutting-edge machine learning models to create intelligent applications that understand user behavior, automate complex tasks, and deliver personalized experiences at scale.",
    features: ["Natural Language Processing", "Predictive Analytics", "Computer Vision"],
  },
  {
    icon: Link2,
    title: "Blockchain Infrastructure & Smart Contracts",
    description: "Build secure, transparent, and decentralized systems with our blockchain expertise. From custom smart contracts to complete DApp development, we deliver trustless solutions.",
    features: ["Smart Contract Development", "DApp Architecture", "Token Economics"],
  },
  {
    icon: Cpu,
    title: "IoT Integration for Smart Ecosystems",
    description: "Connect your physical world to the digital realm with our IoT solutions. Create intelligent networks of devices that communicate, analyze, and respond in real-time.",
    features: ["Device Management", "Real-time Analytics", "Edge Computing"],
  },
  {
    icon: Database,
    title: "Data Intelligence & Automation",
    description: "Transform raw data into actionable insights with our advanced analytics platform. Automate workflows and optimize operations using AI-driven intelligence.",
    features: ["Data Pipeline Automation", "Business Intelligence", "Workflow Optimization"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Web4 solutions tailored to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-300 group"
              data-testid={`card-service-${index}`}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-md bg-gradient-to-br from-primary/20 to-ring/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30 transition-shadow">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4" data-testid={`text-service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6" data-testid={`text-service-description-${index}`}>
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full group" data-testid={`button-learn-more-${index}`}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
