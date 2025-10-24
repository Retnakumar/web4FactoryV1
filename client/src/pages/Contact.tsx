import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <ContactForm />

        <section className="py-16 bg-card">
          <div className="container mx-auto px-6">
            <Card className="p-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Headquarters</h3>
                  <p className="text-muted-foreground">
                    Web4Factory Innovation Hub<br />
                    123 Tech Boulevard, Cyber City<br />
                    Bangalore, Karnataka 560001<br />
                    India
                  </p>
                </div>
              </div>
              <div className="w-full h-64 bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Map placeholder - Headquarters location</p>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
