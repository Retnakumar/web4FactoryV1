import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/BlogGrid";

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-24 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Insights & Innovations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the latest trends, insights, and innovations from the world of Web4 technology
            </p>
          </div>
        </section>

        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}
