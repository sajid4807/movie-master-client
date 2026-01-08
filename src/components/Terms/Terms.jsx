export default function Terms() {
  return (
    <div className="px-4 md:px-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black py-8 md:py-16 text-white">
      <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-4 md:p-8 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
          Terms & Conditions
        </h1>

        <p className="mb-4 text-gray-300">
          Welcome to <span className="text-cyan-400 font-semibold">Movie Master</span>! These Terms & Conditions outline the rules and regulations for using our website and services related to movies, anime, TV shows, and other entertainment content.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">1. Acceptance of Terms</h2>
        <p className="text-gray-300 mb-4">
          By accessing or using our website, you agree to be bound by these terms. If you disagree with any part, you must not use our services.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">2. User Accounts</h2>
        <p className="text-gray-300 mb-4">
          Users may create accounts to save watchlists, upload reviews, and interact with content. You are responsible for maintaining the confidentiality of your account and password.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">3. Content Use</h2>
        <p className="text-gray-300 mb-4">
          All content provided on Movie Master is for personal, non-commercial use. You may not redistribute, sell, or reproduce content without explicit permission.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">4. Prohibited Actions</h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Uploading inappropriate or copyrighted material without permission.</li>
          <li>Using automated tools to scrape or collect content.</li>
          <li>Interfering with the website’s functionality or security.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">5. Limitation of Liability</h2>
        <p className="text-gray-300 mb-4">
          Movie Master is provided “as is” without warranties of any kind. We are not liable for any damages arising from the use of the site or services.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">6. Changes to Terms</h2>
        <p className="text-gray-300 mb-4">
          We may update these Terms & Conditions from time to time. Users are encouraged to review them periodically. Continued use of the website constitutes acceptance of any changes.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-2 text-white">7. Contact</h2>
        <p className="text-gray-300">
          If you have questions about these Terms & Conditions, please <a href="/contact" className="text-cyan-400 underline">contact us</a>.
        </p>
      </div>
    </div>
  );
}
