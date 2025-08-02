import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8" />
              <span className="font-bold text-xl">Reboot Earth</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              Join us in our mission to restore and protect our planet through sustainable 
              practices, innovative solutions, and collective action for a greener future.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:info@rebootearth.org" className="hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="text-primary-foreground/80 space-y-2">
              <p>Email: info@rebootearth.org</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Green Street<br />Eco City, EC 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Reboot Earth. All rights reserved. | 
            <a href="#" className="hover:text-accent transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-accent transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;