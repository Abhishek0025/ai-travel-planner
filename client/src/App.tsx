import { Routes, Route } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ✈️ AI Travel Planner
        </h1>
        <p className="text-gray-500 text-lg">
          Realistic, book-ready itineraries — powered by AI.
        </p>
        <button className="mt-8 px-6 py-3 bg-brand-500 text-white rounded-lg
          font-medium hover:bg-brand-600 transition-colors">
          Plan a trip
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}