import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add axios/fetch here to send formData to your backend
    alert("Message sent! (This is a placeholder)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className=" bg-gradient-to-br from-slate-900 via-slate-950 to-black py-8 md:py-16">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-10">

        {/* Contact Info */}
        <div className="lg:w-1/2 bg-slate-800 rounded-2xl p-6 shadow-lg text-white flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-cyan-400">Contact Us</h2>
          <p className="text-gray-300">
            Have a question or feedback? Reach out to us, we’d love to hear from you!
          </p>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <span>123 Movie Street, Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-cyan-400" />
            <span>+880 1610 230949</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-cyan-400" />
            <span>support@moviemaster.com</span>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-blue-500 transition">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-blue-300 transition">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-pink-500 transition">Instagram</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 bg-slate-800 rounded-2xl p-6 shadow-lg text-white">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-full font-semibold transition flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
