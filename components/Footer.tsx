import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-card border-t border-gray-200 dark:border-border pt-16 pb-8 mt-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: About & Logo */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1 mb-1">
              {/* Dummy BU box-er bodle eikhane Image component bosiyechi */}
              <div className="relative w-20 h-20 bg-white dark:bg-muted rounded-md p-1"> 
                <Image 
                  src="/images/1212.png" // Tomar logo path
                  alt="BU Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase leading-none mb-1">
                  Bangladesh University
                </span>
                <span className="font-extrabold text-xl leading-none text-foreground tracking-tight">
                  E - LIBRARY
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Your gateway to boundless knowledge. Access thousands of academic resources, journals, and books tailored for your success.
            </p>
            {/* Social Icons (Using inline SVGs to avoid errors) */}
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 dark:bg-muted flex items-center justify-center text-muted-foreground hover:bg-[#6A1B29] dark:hover:bg-primary hover:text-white dark:hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 dark:bg-muted flex items-center justify-center text-muted-foreground hover:bg-[#6A1B29] dark:hover:bg-primary hover:text-white dark:hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 dark:bg-muted flex items-center justify-center text-muted-foreground hover:bg-[#6A1B29] dark:hover:bg-primary hover:text-white dark:hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-[#6A1B29] dark:hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/explore" className="hover:text-[#6A1B29] dark:hover:text-primary transition-colors">Explore Collection</Link></li>
              <li><Link href="/categories" className="hover:text-[#6A1B29] dark:hover:text-primary transition-colors">Browse Categories</Link></li>
              <li><Link href="/events" className="hover:text-[#6A1B29] dark:hover:text-primary transition-colors">Upcoming Events</Link></li>
              <li><Link href="/about" className="hover:text-[#6A1B29] dark:hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Resources</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li><Link href="/help" className="hover:text-[#6A1B29] dark:hover:text-primary transition-colors">Help Center & FAQ</Link></li>
              <li><Link href="/guidelines" className="hover:text-[#6A1B29] dark:hover:text-primary transition-colors">Library Guidelines</Link></li>
              <li><Link href="/request" className="hover:text-[#6A1B29] dark:hover:text-primary transition-colors">Request a Book</Link></li>
              <li><Link href="/feedback" className="hover:text-[#6A1B29] dark:hover:text-primary transition-colors">Provide Feedback</Link></li>
              <li><Link href="/accessibility" className="hover:text-[#6A1B29] dark:hover:text-primary transition-colors">Accessibility</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#6A1B29] dark:text-primary shrink-0" />
                <span>15/1, Iqbal Road, Mohammadpur,<br/>Dhaka-1207, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#6A1B29] dark:text-primary shrink-0" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#6A1B29] dark:text-primary shrink-0" />
                <span>library@bu.edu.bd</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-gray-100 dark:border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Bangladesh University E-Library. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-[#6A1B29] dark:hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#6A1B29] dark:hover:text-primary">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}