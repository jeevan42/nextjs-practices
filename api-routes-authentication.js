/**
 * 📘 Topic: Building Secure API Routes in Next.js + Authentication Basics
 * 
 * Next.js allows you to define **serverless API routes** inside `pages/api`.
 * These run on the server (Node.js) and can be used for:
 * - Data fetching
 * - Form handling
 * - Authentication
 * - Sending emails, etc.
 * 
 * 🔐 We'll also learn how to protect these APIs using a token-based method.
 */

import jwt from 'jsonwebtoken';

/**
 * 🔐 Secret key (store securely in env file)
 * In real app, use process.env.JWT_SECRET
 */
const SECRET_KEY = 'MY_SUPER_SECRET';

/**
 * 🧪 Example API Route: /api/protected
 * Accepts token in Authorization header (Bearer <token>)
 */
export default function handler(req, res) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return res.status(200).json({ message: 'Welcome!', user: decoded });
  } catch (err) {
    return res.status(403).json({ error: 'Invalid token' });
  }
}

/**
 * 🧠 Creating a Token (simulate login):
 * 
 * const user = { id: 1, name: 'Jeevan' };
 * const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
 * console.log(token);
 * 
 * Then send this token in request headers:
 * Authorization: Bearer <token>
 */

/**
 * ⚠️ Don't Do:
 * - Don't expose your SECRET key in frontend
 * - Don't use insecure tokens (no expiry or plain text)
 * - Don't store tokens in localStorage without understanding XSS risk
 * 
 * ✅ Do:
 * - Use HttpOnly cookies for tokens (in production)
 * - Use proper middleware for protecting routes
 * - Use libraries like NextAuth.js for full auth flows
 * 
 * 🛡️ Real-World Tools:
 * - next-auth (OAuth + email/password)
 * - Firebase Auth
 * - Clerk/Auth0/Supabase/Auth.js
 */
