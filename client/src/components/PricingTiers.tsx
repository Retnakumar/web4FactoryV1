import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "$999",
    period: "per month",
    description: "Perfect for startups exploring Web4",
    features: [
      "AI-powered analytics dashboard",
      "Basic blockchain integration",
      "Up to 1,000 IoT device connections",
      "Community support",
      "Monthly updates",
    ],
  },
  {
    name: "Pro",
    price: "$2,999",
    period: "per month",
    description: "For growing businesses scaling operations",
    features: [
      "Advanced AI models & customization",
      "Full blockchain infrastructure",
      "Up to 10,000 IoT device connections",
      "Priority support 24/7",
      "Weekly updates",
      "Custom smart contracts",
      "Dedicated account manager",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited AI capabilities",
      "Private blockchain network",
      "Unlimited IoT connections",
      "White-glove support",
      "Real-time updates",
      "Custom development",
      "On-premise deployment option",
      "SLA guarantee",
    ],
  },
];

export default function PricingTiers() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexible pricing for every stage of your Web4 journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-8 hover-elevate transition-all duration-300 relative ${
                tier.featured ? "border-primary shadow-lg shadow-primary/20 scale-105" : ""
              }`}
              data-testid={`card-pricing-${index}`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold mb-2" data-testid={`text-pricing-name-${index}`}>
                  {tier.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold" data-testid={`text-pricing-price-${index}`}>{tier.price}</span>
                  <span className="text-muted-foreground ml-2">/ {tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={tier.featured ? "default" : "outline"}
                size="lg"
                data-testid={`button-pricing-cta-${index}`}
              >
                {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
