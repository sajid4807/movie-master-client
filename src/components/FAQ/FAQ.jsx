export default function FAQ() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click on the 'Sign Up' button on the homepage, fill in your details, and verify your email to get started.",
    },
    {
      question: "How can I add movies to my watchlist?",
      answer: "Navigate to the movie you want to save and click on the 'Add to Watchlist' button. Your watchlist is accessible from your profile.",
    },
    {
      question: "How do I upload my own movie content?",
      answer: "Go to your profile, click 'Upload Movie', and follow the instructions. Make sure your content complies with our Community Rules.",
    },
    {
      question: "I forgot my password. What should I do?",
      answer: "Click on 'Forgot Password' at the login page, enter your email, and follow the reset instructions sent to you.",
    },
    {
      question: "How do I report a problem or bug?",
      answer: "Go to the 'Report Issue' page via the Support section and fill out the form. Our team will respond promptly.",
    },
    {
      question: "How do I update my profile info?px-4 md:px-0",
      answer: "In your profile, click 'Edit Profile' and update your personal information like name, email, and profile picture.",
    },
  ];

  return (
    <div className="px-4 md:px-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black py-8 md:py-16 text-white">
      <div className="max-w-5xl mx-auto bg-slate-800 rounded-2xl p-4 md:p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6 text-center">Frequently Asked Questions</h1>
        <p className="text-gray-300 mb-8 text-center">
          Here are answers to the most common questions about using <span className="text-cyan-400 font-semibold">Movie Master</span>.
        </p>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-700 p-4 rounded-xl border border-cyan-500/20 shadow-sm hover:shadow-md transition-all">
              <h2 className="text-lg font-semibold text-cyan-400 mb-2">{faq.question}</h2>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 p-6 bg-slate-700 rounded-xl border border-cyan-500/20 text-center">
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">Still have questions?</h2>
          <p className="text-gray-300 mb-4">Contact our support team anytime for help.</p>
          <a
            href="/contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Contact Support
          </a>
        </div>

        <p className="text-gray-400 text-sm mt-10 text-center">
          © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Movie Master</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
}
