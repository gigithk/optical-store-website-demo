import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const testimonials = [
  {
    id: 1,
    name: "Elena Rodriguez",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1612872513575-7e7666b96ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdCUyMGdsYXNzZXN8ZW58MXx8fHwxNzY5MDY4ODExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "The attention to detail is unmatched. I found frames that perfectly complement my face shape, and the prescription is spot on. Truly a premium experience."
  },
  {
    id: 2,
    name: "James Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1758600588319-fa4097ee5208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGdsYXNzZXN8ZW58MXx8fHwxNzY5MDY4ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "I've been wearing glasses for 20 years, and this was the best eye exam I've ever had. The staff is knowledgeable and the selection is incredibly stylish."
  },
  {
    id: 3,
    name: "Sarah Miller",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1643968704781-df3b260df6a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW4lMjBtYWtpbmclMjBleWUlMjBnbGFzc2VzfGVufDF8fHx8MTc2OTA2ODgxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Lumière isn't just a store; it's an experience. The virtual try-on helped me narrow down my choices, but visiting the showroom was the highlight."
  }
];

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-widest text-[#c9a959] uppercase mb-3">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#1a2744]">Client Stories</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((t) => (
              <div key={t.id} className="px-4 pb-12 outline-none">
                <div className="bg-white p-10 md:p-14 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-[#f8f9fa]">
                    <ImageWithFallback src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex justify-center md:justify-start text-[#c9a959] mb-4 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-light italic text-[#2d3436] mb-6 leading-relaxed">
                      "{t.text}"
                    </p>
                    <div>
                      <h4 className="font-serif font-bold text-[#1a2744] text-lg">{t.name}</h4>
                      <p className="text-gray-500 text-sm uppercase tracking-wide">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
