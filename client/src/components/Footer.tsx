import { Link } from "wouter";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold bg-gradient-to-r from-primary to-ring bg-clip-text text-transparent mb-4">
              Web4Factory
            </h3>
            <p className="text-sm text-muted-foreground">
              Intelligence Meets Innovation — in Every Block, Empowering the Web Beyond 3.0.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-about">
                    About
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-services">
                    Services
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-blog">
                    Blog
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer" data-testid="link-footer-faq">
                    FAQ
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li data-testid="text-email">contact@web4factory.in</li>
              <li data-testid="text-phone">+91 (555) 123-4567</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover-elevate active-elevate-2"
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@web4factory.in"
                className="p-2 rounded-md hover-elevate active-elevate-2"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">© 2025 Web4Factory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
