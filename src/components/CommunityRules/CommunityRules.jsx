import { Link } from "react-router";

export default function CommunityRules() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-black py-8 md:py-16 text-white">
      <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">Community Rules</h1>

        <p className="text-gray-300 mb-4">
          At <span className="font-semibold text-cyan-400">Movie Master</span>, we value a safe, friendly, and engaging environment for all users. By participating on our platform, you agree to follow these community rules:
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">1. Respect Others</h2>
        <p className="text-gray-300 mb-4">
          Be respectful to other users. Harassment, bullying, hate speech, or discriminatory behavior will not be tolerated.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">2. Appropriate Content</h2>
        <p className="text-gray-300 mb-4">
          Only post content that is appropriate and relevant to movies, anime, or entertainment. Avoid posting offensive, illegal, or spam content.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">3. No Piracy</h2>
        <p className="text-gray-300 mb-4">
          Sharing pirated movies, series, or copyrighted material is strictly prohibited. Respect the intellectual property of content creators.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">4. Privacy Respect</h2>
        <p className="text-gray-300 mb-4">
          Do not share personal information of other users without their consent. Respect everyone's privacy and data security.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">5. Reporting Issues</h2>
        <p className="text-gray-300 mb-4">
          If you encounter violations of these rules, please report them via the <Link to='/report-issue' className="font-semibold text-cyan-400">Report Issue</Link> page so our team can review and take action.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">6. Moderation</h2>
        <p className="text-gray-300 mb-4">
          Our moderators have the right to remove content or restrict access to users who violate the rules. Continuous violations may result in account suspension.
        </p>

        <p className="text-gray-300 mt-6">
          Following these rules helps keep <span className="font-semibold text-cyan-400">Movie Master</span> a safe and enjoyable place for everyone. Thank you for being a responsible member of our community!
        </p>

        <p className="text-gray-400 text-sm mt-8">
          © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Movie Master</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
}
