import { motion } from "motion/react";
import { Camera } from "lucide-react";

export function VirtualTryOn() {
  return (
    <section id="virtual-try-on" className="py-24 bg-[#1a2744] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#c9a959]/10 rounded-l-full transform translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-medium tracking-widest text-[#c9a959] uppercase mb-3">Innovation</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6">Try Before You Buy</h3>
            <p className="text-gray-300 font-light text-lg leading-relaxed mb-8">
              Not sure which style suits you? Experience our advanced Virtual Try-On technology. 
              Using your device's camera, you can instantly see how any frame looks on your face 
              in 3D, from the comfort of your home.
            </p>
            <button className="flex items-center px-8 py-4 bg-[#c9a959] text-[#1a2744] font-bold hover:bg-white transition-colors duration-300">
              <Camera className="mr-2" size={20} />
              Launch Virtual Mirror
            </button>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-[3/4] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-[#2d3436] flex items-center justify-center mb-6 animate-pulse">
                <Camera size={40} className="text-white/50" />
              </div>
              <p className="text-xl font-medium mb-2">Camera Access Required</p>
              <p className="text-gray-400 text-sm">Allow access to start your virtual fitting experience</p>
              
              <div className="absolute top-6 right-6 w-3 h-3 bg-red-500 rounded-full animate-ping" />
              
              {/* Fake UI elements to make it look like an app */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                <div className="w-12 h-12 rounded-full border border-white/20" />
                <div className="w-16 h-16 rounded-full border-4 border-white" />
                <div className="w-12 h-12 rounded-full border border-white/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
