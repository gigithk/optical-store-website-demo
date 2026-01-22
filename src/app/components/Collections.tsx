import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const collections = [
  {
    id: 1,
    title: "Optical Frames",
    image: "https://images.unsplash.com/photo-1722924908364-2a8ea385aab1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBleWVnbGFzc2VzJTIwb24lMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5MDY4ODExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Everyday elegance for clarity and comfort.",
    link: "/optical"
  },
  {
    id: 2,
    title: "Sun Protection",
    image: "https://images.unsplash.com/photo-1760722640035-2080c82d3f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwc3VuZ2xhc3NlcyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NjkwNjg4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bold styles for the brightest days.",
    link: "/sun"
  },
  {
    id: 3,
    title: "Limited Edition",
    image: "https://images.unsplash.com/photo-1761845687464-0df22001a80c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXMlMjBwcm9kdWN0JTIwc2hvdHxlbnwxfHx8fDE3NjkwNjg4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Exclusive designs for the discerning collector.",
    link: "/limited"
  }
];

export function Collections() {
  return (
    <section id="collections" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium tracking-widest text-[#c9a959] uppercase mb-3">Curated Selection</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1a2744]">Refined Eyewear</h3>
          </div>
          <Link to="/optical" className="hidden md:flex items-center text-[#1a2744] hover:text-[#c9a959] transition-colors font-medium group mt-4 md:mt-0">
            View All Collections <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link to={item.link} className="block">
                <div className="overflow-hidden mb-6 relative aspect-[4/5] bg-[#f8f9fa]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <h4 className="text-2xl font-serif text-[#1a2744] mb-2">{item.title}</h4>
                <p className="text-gray-500 mb-4 font-light">{item.description}</p>
                <span className="inline-block border-b border-[#1a2744] text-[#1a2744] text-sm pb-1 group-hover:border-[#c9a959] group-hover:text-[#c9a959] transition-colors">
                  Shop Now
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/optical" className="inline-flex items-center text-[#1a2744] font-medium group">
            View All Collections <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
