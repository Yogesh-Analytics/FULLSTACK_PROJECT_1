// import React from 'react';
// import { MapPin, Phone, Mail, Clock } from 'lucide-react';
// import { CONTACT_DETAILS } from '../constants';

// const Contact: React.FC = () => {
//   return (
//     <section id="contact" className="py-20 md:py-32 bg-neutral-900">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h4 className="text-arkin-gold text-sm tracking-[0.2em] uppercase mb-4 font-bold">Get In Touch</h4>
//           <h2 className="font-serif text-4xl md:text-5xl text-white">Contact Us</h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           {/* Info Side */}
//           <div className="space-y-10">
//             <div>
//               <p className="text-zinc-400 text-lg leading-relaxed mb-8">
//                 Ready to start your next project? Reach out to us and let's build something extraordinary together. At Arkin Spaces, we value every interaction.
//               </p>
//             </div>

//             <div className="space-y-8">
//               {/* Address */}
//               <div className="flex items-start gap-6 group">
//                 <div className="w-12 h-12 border border-arkin-gold/30 flex items-center justify-center text-arkin-gold group-hover:bg-arkin-gold group-hover:text-white transition-colors duration-300 shrink-0 rounded-sm bg-arkin-dark shadow-sm">
//                   <MapPin size={20} />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-bold uppercase tracking-wider mb-2">Location</h4>
//                   <p className="text-zinc-400 font-light">{CONTACT_DETAILS.location}</p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start gap-6 group">
//                 <div className="w-12 h-12 border border-arkin-gold/30 flex items-center justify-center text-arkin-gold group-hover:bg-arkin-gold group-hover:text-white transition-colors duration-300 shrink-0 rounded-sm bg-arkin-dark shadow-sm">
//                   <Phone size={20} />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-bold uppercase tracking-wider mb-2">Call Us</h4>
//                   <p className="text-zinc-400 font-light font-mono">+91 {CONTACT_DETAILS.phone}</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start gap-6 group">
//                 <div className="w-12 h-12 border border-arkin-gold/30 flex items-center justify-center text-arkin-gold group-hover:bg-arkin-gold group-hover:text-white transition-colors duration-300 shrink-0 rounded-sm bg-arkin-dark shadow-sm">
//                   <Mail size={20} />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-bold uppercase tracking-wider mb-2">Email Us</h4>
//                   <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-zinc-400 font-light hover:text-arkin-gold transition-colors">
//                     {CONTACT_DETAILS.email}
//                   </a>
//                 </div>
//               </div>

//               {/* Hours */}
//               <div className="flex items-start gap-6 group">
//                 <div className="w-12 h-12 border border-arkin-gold/30 flex items-center justify-center text-arkin-gold group-hover:bg-arkin-gold group-hover:text-white transition-colors duration-300 shrink-0 rounded-sm bg-arkin-dark shadow-sm">
//                   <Clock size={20} />
//                 </div>
//                 <div>
//                   <h4 className="text-white font-bold uppercase tracking-wider mb-2">Working Hours</h4>
//                   <p className="text-zinc-400 font-light">Mon - Sat: 9:00 AM - 6:00 PM</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Form Side */}
//           <div className="bg-arkin-dark p-8 md:p-12 border border-white/10 rounded-sm shadow-xl">
//             <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
//               <div>
//                 <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2 font-semibold">Your Name</label>
//                 <input 
//                   type="text" 
//                   className="w-full bg-neutral-800 border border-neutral-700 text-white p-4 focus:border-arkin-gold focus:outline-none focus:ring-1 focus:ring-arkin-gold/50 transition-all placeholder-zinc-600"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2 font-semibold">Your Email</label>
//                 <input 
//                   type="email" 
//                   className="w-full bg-neutral-800 border border-neutral-700 text-white p-4 focus:border-arkin-gold focus:outline-none focus:ring-1 focus:ring-arkin-gold/50 transition-all placeholder-zinc-600"
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div>
//                 <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2 font-semibold">Your Phone</label>
//                 <input 
//                   type="tel" 
//                   className="w-full bg-neutral-800 border border-neutral-700 text-white p-4 focus:border-arkin-gold focus:outline-none focus:ring-1 focus:ring-arkin-gold/50 transition-all placeholder-zinc-600"
//                   placeholder="Enter your number"
//                 />
//               </div>
//               <div>
//                 <label className="block text-zinc-400 text-xs uppercase tracking-widest mb-2 font-semibold">Message</label>
//                 <textarea 
//                   rows={4}
//                   className="w-full bg-neutral-800 border border-neutral-700 text-white p-4 focus:border-arkin-gold focus:outline-none focus:ring-1 focus:ring-arkin-gold/50 transition-all resize-none placeholder-zinc-600"
//                   placeholder="Tell us about your project"
//                 ></textarea>
//               </div>
//               <button 
//                 type="submit"
//                 className="w-full bg-arkin-gold text-arkin-darker font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors duration-300 shadow-md"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACT_DETAILS } from "../constants";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-arkin-gold text-sm tracking-[0.2em] uppercase mb-4 font-bold">
            Get In Touch
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info Side */}
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <MapPin className="text-arkin-gold" />
              <p className="text-zinc-400">
                Basaveshwaranagar, Bangalore
              </p>
            </div>

            <div className="flex items-start gap-6">
              <Phone className="text-arkin-gold" />
              <p className="text-zinc-400">
                +91 {CONTACT_DETAILS.phone}
              </p>
            </div>

            <div className="flex items-start gap-6">
              <Mail className="text-arkin-gold" />
              <p className="text-zinc-400">
                office@arkinspaces.com
              </p>
            </div>

            <div className="flex items-start gap-6">
              <Clock className="text-arkin-gold" />
              <p className="text-zinc-400">
                Mon - Sat: 9AM - 6PM
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-arkin-dark p-8 border border-white/10 rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 bg-neutral-800 text-white"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 bg-neutral-800 text-white"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full p-4 bg-neutral-800 text-white"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-4 bg-neutral-800 text-white"
                rows={4}
                required
              />

              <button
                type="submit"
                className="w-full bg-arkin-gold py-4 font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;