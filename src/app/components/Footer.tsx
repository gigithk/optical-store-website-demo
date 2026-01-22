import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a2744] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <a href="#" className="text-3xl font-serif font-bold tracking-tighter mb-6 block text-white">
              LUMIÈRE
            </a>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              Crafting clarity and style through precision optics and timeless design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#c9a959] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#c9a959] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#c9a959] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#c9a959] text-sm uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#collections" className="text-gray-400 hover:text-white transition-colors">Collections</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#virtual-try-on" className="text-gray-400 hover:text-white transition-colors">Virtual Try-On</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#c9a959] text-sm uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Warranty</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#c9a959] text-sm uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-gray-400 font-light mb-4">
              Subscribe for exclusive releases and eye care tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-none text-white px-4 py-2 w-full focus:ring-1 focus:ring-[#c9a959] outline-none placeholder-gray-500"
              />
              <button className="bg-[#c9a959] text-[#1a2744] px-4 font-medium hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lumière Optical. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
}
