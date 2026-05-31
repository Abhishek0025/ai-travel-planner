import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp, useAuth } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import NewTrip from "./pages/NewTrip";

// Wrapper that redirects to /sign-in if not authenticated
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useAuth();

  // Wait for Clerk to finish loading auth state
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  // Not signed in — redirect to sign-in page
  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return <>{children}</>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />

        {/* Clerk's pre-built sign-in and sign-up pages */}
        <Route
          path="/sign-in/*"
          element={
            <div className="flex justify-center pt-20">
              <SignIn routing="path" path="/sign-in" />
            </div>
          }
        />
        <Route
          path="/sign-up/*"
          element={
            <div className="flex justify-center pt-20">
              <SignUp routing="path" path="/sign-up" />
            </div>
          }
        />

        {/* Protected routes — require sign in */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/new-trip"
          element={
            <ProtectedRoute>
              <NewTrip />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}