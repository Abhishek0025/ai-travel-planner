import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import { clerkAuth, requireAuth } from "./middleware/authMiddleware.js";

const app = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ──────────────────────────────────────────
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(clerkAuth); // attach Clerk to every request

// ── Public routes ───────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ── Protected test route ────────────────────────────────
// Use this to verify auth is working end-to-end
app.get("/api/me", requireAuth, (req, res) => {
  res.json({ userId: req.userId, message: "Auth is working!" });
});

// ── Start ───────────────────────────────────────────────
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});