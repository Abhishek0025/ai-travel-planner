import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-brand-600">
        ✈️ TravelAI
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Only show these links when signed in */}
        <SignedIn>
          <Link
            to="/dashboard"
            className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
          >
            My Trips
          </Link>
          <Link
            to="/new-trip"
            className="text-sm bg-brand-500 text-white px-4 py-2 rounded-lg
              hover:bg-brand-600 transition-colors"
          >
            New Trip
          </Link>
          {/* Clerk's built-in user avatar + dropdown */}
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        {/* Only show Sign In when signed out */}
        <SignedOut>
          <Link
            to="/sign-in"
            className="text-sm text-gray-600 hover:text-brand-600 transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/sign-up"
            className="text-sm bg-brand-500 text-white px-4 py-2 rounded-lg
              hover:bg-brand-600 transition-colors"
          >
            Get started
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
}