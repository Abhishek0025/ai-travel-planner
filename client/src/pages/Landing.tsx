import { Link } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Plan trips that actually{" "}
          <span className="text-brand-500">make sense</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Enter your destination, budget, and interests. Get a realistic,
          book-ready itinerary with real drive times, weather checks, and
          budget breakdown — powered by AI.
        </p>

        {/* CTA — different for signed in vs signed out */}
        <SignedOut>
          <div className="flex gap-4 justify-center">
            <Link
              to="/sign-up"
              className="px-8 py-4 bg-brand-500 text-white rounded-xl font-medium
                text-lg hover:bg-brand-600 transition-colors"
            >
              Start planning free
            </Link>
            <Link
              to="/sign-in"
              className="px-8 py-4 border border-gray-300 text-gray-700 rounded-xl
                font-medium text-lg hover:bg-gray-100 transition-colors"
            >
              Sign in
            </Link>
          </div>
        </SignedOut>

        <SignedIn>
          <Link
            to="/new-trip"
            className="px-8 py-4 bg-brand-500 text-white rounded-xl font-medium
              text-lg hover:bg-brand-600 transition-colors"
          >
            Plan a new trip ✈️
          </Link>
        </SignedIn>
      </div>

      {/* Feature pills */}
      <div className="max-w-3xl mx-auto px-6 grid grid-cols-3 gap-4">
        {[
          { icon: "🗺", label: "Real drive times" },
          { icon: "🌦", label: "Weather aware" },
          { icon: "💰", label: "Budget tracking" },
        ].map((f) => (
          <div
            key={f.label}
            className="bg-white border border-gray-200 rounded-xl p-5 text-center"
          >
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="text-sm font-medium text-gray-700">{f.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}