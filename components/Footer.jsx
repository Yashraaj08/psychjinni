import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { name: "About us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
  ];

  const legalLinks = [
    { name: "Terms", href: "#terms" },
    { name: "Privacy", href: "#privacy" },
    { name: "Cookies", href: "#cookies" },
    { name: "Licenses", href: "#licenses" },
  ];

  const resourceLinks = [
    { name: "Blog", href: "#blog" },
    { name: "Newsletter", href: "#newsletter" },
    { name: "Events", href: "#events" },
    { name: "Help centre", href: "#help" },
  ];

  return (
    <footer className="bg-primary text-white mx-20 my-10 rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex sm:flex-row flex-col justify-between">
          {/* Company Info */}
          <div className="max-w-96">
            <div className="flex items-center space-x-2 mb-6">
              <a
                href="/"
                className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
              >
                <img src="/logo.png" alt="logo" width={140} height={100} />
              </a>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering minds to heal through professional mental health
              services, therapy, and wellness programs designed for individuals,
              corporates, and educational institutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="mt-10 md:mt-0 flex sm:flex-row flex-col gap-10 md:gap-20">
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-4">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 Psychjinni. All rights reserved.
            </p>
            <p className="text-white/60 text-sm mt-4 md:mt-0">
              Empowering minds to heal, not hide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
