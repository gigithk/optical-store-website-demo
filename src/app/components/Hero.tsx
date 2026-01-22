import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#f8f9fa]">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1766004265904-3ab8cc5c1eb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjB3ZWFyaW5nJTIwZ2xhc3NlcyUyMGNsb3NlJTIwdXAlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2OTA2ODgxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Elegant eyewear model"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa]/80 via-[#f8f9fa]/40 to-transparent z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl"
        >
          <h2 className="text-[#c9a959] uppercase tracking-[0.2em] text-sm font-medium mb-4">
            New Collection 2026
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1a2744] leading-[1.1] mb-8">
            See the World <br />
            <span className="italic font-light">Differently</span>
          </h1>
          <p className="text-[#2d3436]/80 text-lg md:text-xl mb-10 max-w-md font-light leading-relaxed">
            Handcrafted eyewear that blends timeless elegance with modern precision. Designed for those who appreciate the details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#collections"
              className="px-8 py-4 bg-[#1a2744] text-white font-medium hover:bg-[#2d3436] transition-all duration-300 text-center"
            >
              Explore Collection
            </a>
            <a
              href="#virtual-try-on"
              className="px-8 py-4 border border-[#1a2744] text-[#1a2744] font-medium hover:bg-[#1a2744] hover:text-white transition-all duration-300 text-center"
            >
              Virtual Try-On
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
      >
        <ArrowDown className="text-[#1a2744]" size={24} />
      </motion.div>
    </section>
  );
}
