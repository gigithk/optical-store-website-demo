import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Collection", href: "/#collections" },
    { name: "Our Story", href: "/#about" },
    { name: "Store", href: "/#store" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== "/" ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled || location.pathname !== "/" ? "text-[#1a2744]" : "text-[#1a2744]"}`}>
          LUMIÈRE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isAnchor = link.href.startsWith("/#");
            return isAnchor ? (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#2d3436] hover:text-[#c9a959] transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-[#2d3436] hover:text-[#c9a959] transition-colors tracking-wide"
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-[#2d3436] hover:text-[#c9a959] transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="text-[#2d3436] hover:text-[#c9a959] transition-colors relative">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-[#c9a959] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <a
            href="/#contact"
            className="px-6 py-2 bg-[#1a2744] text-white text-sm font-medium rounded-sm hover:bg-[#2d3436] transition-colors"
          >
            Book Exam
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1a2744]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => {
                const isAnchor = link.href.startsWith("/#");
                return isAnchor ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-[#1a2744] hover:text-[#c9a959]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-lg font-medium text-[#1a2744] hover:text-[#c9a959]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <hr className="border-gray-100" />
              <a
                href="/#contact"
                className="block text-center w-full py-3 bg-[#1a2744] text-white font-medium rounded-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
