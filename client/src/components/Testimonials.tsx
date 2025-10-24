import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVentures Inc.",
    initials: "SC",
    content: "Web4Factory transformed our entire infrastructure. Their AI-powered blockchain solutions increased our operational efficiency by 300% while reducing costs significantly.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, SmartCity Solutions",
    initials: "MR",
    content: "The IoT integration they built for our smart city project was exceptional. Real-time data processing and automated decision-making have revolutionized our urban management.",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "Founder, HealthChain",
    initials: "AP",
    content: "Their blockchain expertise helped us create a secure, HIPAA-compliant patient data system. The team's professionalism and technical knowledge are unmatched.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "VP Engineering, FinTech Global",
    initials: "DK",
    content: "Web4Factory delivered beyond our expectations. The combination of AI analytics and blockchain security has given us a competitive edge in the market.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by innovators worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-300 relative overflow-hidden group"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 relative z-10" data-testid={`text-testimonial-content-${index}`}>
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 relative z-10">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
