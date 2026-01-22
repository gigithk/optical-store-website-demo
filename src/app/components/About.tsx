import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764778055595-b641b067ab40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvcHRpY2FsJTIwc3RvcmUlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjkwNjg4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Optical shop interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#f8f9fa] z-[-1] hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-medium tracking-widest text-[#c9a959] uppercase mb-3">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1a2744] mb-6">A Legacy of Vision</h3>
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
              Established in 1985, Lumière started with a simple mission: to combine medical precision with high fashion. We believe that eyewear is the most important accessory you wear—it frames your view of the world and the world's view of you.
            </p>
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
              We travel the globe to source frames from independent artisans who prioritize craftsmanship over mass production. Every pair in our collection tells a story of material, technique, and design.
            </p>
            <div className="flex items-center space-x-8">
              <div>
                <span className="block text-3xl font-serif text-[#1a2744]">35+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <span className="block text-3xl font-serif text-[#1a2744]">12k+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
