import { clerkMiddleware, getAuth } from "@clerk/express";

// Attach Clerk to every request — reads the JWT from the Authorization header
export const clerkAuth = clerkMiddleware();

// Use this on individual routes that require a signed-in user
export const requireAuth = (req, res, next) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized — please sign in" });
  }

  // Attach userId to req so route handlers can use it
  req.userId = userId;
  next();
};