import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-black px-4 py-10 md:py-16">
      <div className="max-w-4xl mx-auto flex justify-center">
        
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg text-white flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-cyan-400">Contact Us</h2>

          <p className="text-gray-300 text-sm leading-relaxed">
            Have a question or feedback? Reach out to us — we’d love to hear from you!
          </p>

          <div className="space-y-3 text-sm">
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
              <span>mdsajidhossen4807@gmail.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 pt-2 text-sm font-medium">
            <a
              href="https://www.linkedin.com/in/sajid-hossen/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-blue-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/sajid4807"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-gray-300 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.facebook.com/md.sajid.516286#"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:text-blue-500 transition"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
