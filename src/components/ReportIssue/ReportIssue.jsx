import { useState } from "react";
import { AlertCircle } from "lucide-react";

export default function ReportIssue() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issueType: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your issue has been submitted. Thank you!");
    setFormData({ name: "", email: "", issueType: "", description: "" });
  };

  return (
    <div className="px-4 md:px-0 py-8 md:py-16 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
      <div className="max-w-3xl mx-auto bg-slate-800 rounded-2xl p-4 md:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle className="w-8 h-8 text-cyan-400" />
          <h1 className="text-3xl font-bold text-cyan-400">Report an Issue</h1>
        </div>

        <p className="text-gray-300 mb-6">
          Facing any issues with Movie Master? Please fill out the form below and our team will investigate it as soon as possible.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none"
            required
          />
          <select
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none"
            required
          >
            <option value="">Select Issue Type</option>
            <option value="content">Content Issue (movie/anime info)</option>
            <option value="bug">Bug / Technical Issue</option>
            <option value="account">Account / Login Issue</option>
            <option value="other">Other</option>
          </select>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your issue in detail..."
            rows={5}
            className="w-full p-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-3 rounded-full font-semibold transition"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}
