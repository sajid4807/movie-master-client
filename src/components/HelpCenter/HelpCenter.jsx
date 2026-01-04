export default function HelpCenter() {
  return (
    <div className=" py-8 md:py-16 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 text-white">
      <div className="max-w-5xl mx-auto bg-slate-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">Help Center</h1>

        <p className="text-gray-300 mb-6">
          Welcome to <span className="font-semibold text-cyan-400">Movie Master</span> Help Center. Here you can find answers to common questions, guides, and tips for using our platform.
        </p>

        {/* FAQ Sections */}
        <div className="space-y-6">
          {/* Account & Profile */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Account & Profile</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>How to create an account and sign in securely.</li>
              <li>How to update your profile picture, username, and personal info.</li>
              <li>Resetting your password if forgotten.</li>
            </ul>
          </div>

          {/* Movies & Watchlist */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Movies & Watchlist</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>How to browse and explore movies, anime, and TV shows.</li>
              <li>Adding movies to your personal watchlist.</li>
              <li>Uploading your own movie content and managing it.</li>
            </ul>
          </div>

          {/* Reporting Issues */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Reporting Issues</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>How to report bugs, inappropriate content, or suspicious activity.</li>
              <li>Steps to follow if your content is flagged or removed.</li>
              <li>How to contact our support team directly.</li>
            </ul>
          </div>

          {/* Privacy & Safety */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Privacy & Safety</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Managing your personal data and account settings.</li>
              <li>Keeping your account safe from unauthorized access.</li>
              <li>Understanding our Community Rules and policies.</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 p-6 bg-slate-700 rounded-xl border border-cyan-500/20">
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">Still Need Help?</h2>
          <p className="text-gray-300 mb-4">If you can’t find what you’re looking for, contact our support team anytime.</p>
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
