import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Appointment request sent! We will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info & Map */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-medium tracking-widest text-[#c9a959] uppercase mb-3">Visit Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1a2744] mb-8">Store Locator</h3>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start">
                <div className="bg-[#f8f9fa] p-3 rounded-full mr-4 text-[#1a2744]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1a2744] mb-1">Main Showroom</h4>
                  <p className="text-gray-600 font-light">123 Visionary Way, Suite 100<br />New York, NY 10012</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#f8f9fa] p-3 rounded-full mr-4 text-[#1a2744]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1a2744] mb-1">Call Us</h4>
                  <p className="text-gray-600 font-light">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#f8f9fa] p-3 rounded-full mr-4 text-[#1a2744]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1a2744] mb-1">Email</h4>
                  <p className="text-gray-600 font-light">concierge@lumiere.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#f8f9fa] p-3 rounded-full mr-4 text-[#1a2744]">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1a2744] mb-1">Hours</h4>
                  <p className="text-gray-600 font-light">Mon-Fri: 10am - 7pm<br />Sat: 11am - 5pm<br />Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden relative grayscale">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1629819934661!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:w-1/2 bg-[#f8f9fa] p-8 md:p-12 rounded-sm">
            <h3 className="text-3xl font-serif text-[#1a2744] mb-6">Book an Appointment</h3>
            <p className="text-gray-600 mb-8 font-light">
              Schedule a comprehensive eye exam or a styling consultation with our experts.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm uppercase tracking-wide text-gray-500 mb-2">First Name</label>
                  <input
                    {...register("firstName", { required: true })}
                    className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-[#c9a959] transition-colors"
                  />
                  {errors.firstName && <span className="text-red-500 text-xs mt-1">Required</span>}
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-wide text-gray-500 mb-2">Last Name</label>
                  <input
                    {...register("lastName", { required: true })}
                    className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-[#c9a959] transition-colors"
                  />
                  {errors.lastName && <span className="text-red-500 text-xs mt-1">Required</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wide text-gray-500 mb-2">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-[#c9a959] transition-colors"
                />
                {errors.email && <span className="text-red-500 text-xs mt-1">Required</span>}
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wide text-gray-500 mb-2">Service Type</label>
                <select
                  {...register("service")}
                  className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-[#c9a959] transition-colors"
                >
                  <option value="exam">Comprehensive Eye Exam</option>
                  <option value="styling">Styling Consultation</option>
                  <option value="repair">Frame Repair/Adjustment</option>
                </select>
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wide text-gray-500 mb-2">Message (Optional)</label>
                <textarea
                  rows={4}
                  {...register("message")}
                  className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-[#c9a959] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a2744] text-white font-medium py-4 px-8 hover:bg-[#2d3436] transition-colors uppercase tracking-widest text-sm"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
