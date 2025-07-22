import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-card/20 border-t border-border/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating digital experiences that combine beautiful design 
              with powerful functionality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ 
                      behavior: "smooth" 
                    });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>hello@developer.com</p>
              <p>+1 (555) 123-4567</p>
              <p>New York, NY</p>
            </div>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors hover-scale"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              © {currentYear} Portfolio. Made with <Heart className="w-4 h-4 text-red-500" /> and lots of coffee.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;