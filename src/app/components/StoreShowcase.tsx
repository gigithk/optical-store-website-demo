import { motion } from "motion/react";
import { Instagram, MapPin, Clock, Phone } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1761850956529-22004785713d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBmYXNoaW9uJTIwd29tYW4lMjBzdW5nbGFzc2VzJTIwc2VsZmllfGVufDF8fHx8MTc2OTA3MDM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Summer vibes with our new Riviera collection. #LumiereStyle"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1596638787647-904d822d751e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGF0bGF5JTIwZ2xhc3NlcyUyMGFlc3RoZXRpY3N8ZW58MXx8fHwxNzY5MDcwMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "The details matter. Handcrafted perfection. #ArtisanEyewear"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1616157541164-44d02156fef0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB3ZWFyaW5nJTIwZ2xhc3NlcyUyMGNvZmZFZSUyMHNob3AlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY5MDcwMzc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Focus on what's important. #ClearVision"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1750390200253-51bd0c7e23b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZXlld2VhciUyMHN0cmVldCUyMHN0eWxlfGVufDF8fHx8MTc2OTA3MDM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "City strutting. #StreetStyle #EyewearFashion"
  }
];

export function StoreShowcase() {
  return (
    <section id="store" className="bg-white pt-24 pb-12">
      {/* Store Section */}
      <div className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-[#f8f9fa] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1593214451196-37e0651f8ef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXRhaWwlMjBib3V0aXF1ZSUyMGludGVyaW9yJTIwZGVzaWduJTIwZXlld2VhcnxlbnwxfHx8fDE3NjkwNzAzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Lumière Boutique Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 bg-[#1a2744] text-white p-8 hidden md:block">
              <p className="font-serif text-xl italic leading-relaxed">
                "An experience of light and clarity."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-[#c9a959] uppercase tracking-widest text-xs font-semibold mb-3 block">
              Visit Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a2744] mb-8">
              The Boutique
            </h2>
            <p className="text-[#2d3436]/70 leading-relaxed mb-8 font-light">
              Step into our flagship store and experience the Lumière difference. 
              Our boutique is designed as a sanctuary for vision, offering personalized 
              styling sessions and comprehensive eye examinations in a serene, 
              minimalist environment.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-[#c9a959] mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-[#1a2744]">Location</h4>
                  <p className="text-sm text-[#2d3436]/70">123 Optic Avenue, Design District</p>
                  <p className="text-sm text-[#2d3436]/70">New York, NY 10012</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-[#c9a959] mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-[#1a2744]">Hours</h4>
                  <p className="text-sm text-[#2d3436]/70">Mon - Sat: 10am - 7pm</p>
                  <p className="text-sm text-[#2d3436]/70">Sun: 11am - 5pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-[#c9a959] mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-[#1a2744]">Contact</h4>
                  <p className="text-sm text-[#2d3436]/70">+1 (212) 555-0199</p>
                  <p className="text-sm text-[#2d3436]/70">boutique@lumiere.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="bg-[#f8f9fa] py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12 text-center">
            <Instagram className="text-[#1a2744] mb-4" size={32} />
            <h3 className="font-serif text-3xl text-[#1a2744] mb-2">@LumiereOptical</h3>
            <p className="text-[#2d3436]/60 text-sm">Follow us for style inspiration and new releases</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden block bg-gray-200"
              >
                <ImageWithFallback
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100" size={32} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
