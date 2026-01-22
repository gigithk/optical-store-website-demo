import { motion } from "motion/react";
import { Eye, Wrench, Ruler, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Eye size={32} strokeWidth={1} />,
    title: "Comprehensive Eye Exams",
    description: "State-of-the-art vision testing technology combined with expert care to ensure your eyes are healthy and your vision is crystal clear."
  },
  {
    icon: <Ruler size={32} strokeWidth={1} />,
    title: "Precision Lens Fitting",
    description: "Our specialists ensure your frames sit perfectly on your face for maximum comfort and optimal visual performance."
  },
  {
    icon: <Wrench size={32} strokeWidth={1} />,
    title: "Repair & Adjustment",
    description: "Complimentary adjustments and professional repair services to keep your favorite frames in perfect condition."
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1} />,
    title: "Warranty Protection",
    description: "Peace of mind with our comprehensive warranty covering lens scratches and frame defects."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-medium tracking-widest text-[#c9a959] uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#1a2744] mb-6">Exceptional Eye Care</h3>
          <p className="text-gray-600 font-light text-lg leading-relaxed">
            Beyond stylish frames, we provide top-tier optometric services. Our dedicated team is committed to your eye health and vision quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-10 hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="text-[#1a2744] group-hover:text-[#c9a959] transition-colors mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif text-[#1a2744] mb-4">{service.title}</h4>
              <p className="text-gray-500 font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
