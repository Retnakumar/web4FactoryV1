import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Web4 and how is it different from Web3?",
    answer: "Web4, or The Symbiotic Web, represents the next evolution beyond Web3. While Web3 focuses on decentralization through blockchain, Web4 integrates AI, Blockchain, and IoT to create truly intelligent, interconnected, and autonomous systems that understand context, learn from interactions, and seamlessly bridge the physical and digital worlds.",
  },
  {
    question: "How can Web4Factory help my business?",
    answer: "We provide end-to-end solutions that leverage AI for intelligent automation, blockchain for transparent and secure transactions, and IoT for real-time data collection and analysis. Whether you need to optimize operations, create new revenue streams, or build innovative products, our Web4 platform provides the foundation for digital transformation.",
  },
  {
    question: "What industries do you serve?",
    answer: "Our Web4 solutions are versatile and applicable across multiple sectors including finance, healthcare, supply chain, manufacturing, retail, and smart cities. We customize our approach based on your industry-specific challenges and opportunities.",
  },
  {
    question: "How secure are blockchain-based solutions?",
    answer: "Blockchain technology provides unparalleled security through cryptographic algorithms and decentralized consensus mechanisms. Every transaction is immutable and transparent, making it virtually impossible to tamper with data. We implement additional security layers including smart contract audits, encryption, and access controls to ensure maximum protection.",
  },
  {
    question: "What is the typical timeline for project implementation?",
    answer: "Project timelines vary based on complexity and scope. Simple integrations may take 4-8 weeks, while comprehensive Web4 ecosystem implementations can range from 3-9 months. We follow an agile methodology with regular milestones and deliverables to ensure transparency and flexibility.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Absolutely. We offer comprehensive post-deployment support including monitoring, updates, security patches, and performance optimization. Our support packages are tailored to your needs, from basic maintenance to full-scale managed services with 24/7 availability.",
  },
];

export default function FAQAccordion() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Web4Factory
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-md px-6 hover-elevate"
                data-testid={`accordion-item-${index}`}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline" data-testid={`accordion-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground" data-testid={`accordion-content-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
