import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import blog1 from "@assets/generated_images/Blog_post_1_thumbnail_9ecb1555.png";
import blog2 from "@assets/generated_images/Blog_post_2_thumbnail_61a9d004.png";
import blog3 from "@assets/generated_images/Blog_post_3_thumbnail_9d1fa857.png";

const blogPosts = [
  {
    image: blog1,
    title: "The Future of AI in Web4 Ecosystems",
    excerpt: "Exploring how artificial intelligence is reshaping the way we interact with decentralized applications and smart systems.",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    category: "AI & Machine Learning",
  },
  {
    image: blog2,
    title: "Blockchain Beyond Cryptocurrency",
    excerpt: "Discover the transformative applications of blockchain technology in supply chain, healthcare, and enterprise solutions.",
    date: "Jan 10, 2025",
    readTime: "7 min read",
    category: "Blockchain",
  },
  {
    image: blog3,
    title: "IoT and the Connected Future",
    excerpt: "How the Internet of Things is creating intelligent ecosystems that bridge the physical and digital worlds.",
    date: "Jan 5, 2025",
    readTime: "6 min read",
    category: "Internet of Things",
  },
];

export default function BlogGrid() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Insights & Innovations
          </h2>
          <p className="text-lg text-muted-foreground">
            Exploring the frontiers of Web4 technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300 group cursor-pointer"
              data-testid={`card-blog-${index}`}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="text-xs font-medium text-primary mb-2">{post.category}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors" data-testid={`text-blog-title-${index}`}>
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4" data-testid={`text-blog-excerpt-${index}`}>
                  {post.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto font-semibold group/btn" data-testid={`button-read-more-${index}`}>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
