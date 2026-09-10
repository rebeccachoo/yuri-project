import { createHmac, timingSafeEqual } from "crypto";

// A lightweight, no-database session gate: a single shared admin password
// (from a local env file) and a stateless signed cookie. There is no user
// table and no session store — this just proves the visitor knows the
// password, nothing more.

export const SESSION_COOKIE_NAME = "ekc_admin_session";

function getSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not set (check .env.local)");
  }
  return secret;
}

export function verifyAdminPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  return Boolean(expected) && password === expected;
}

export function createSessionToken(): string {
  return createHmac("sha256", getSessionSecret()).update("admin-session").digest("hex");
}

export function isValidSessionToken(token: string | undefined): boolean {
  if (!token) return false;

  const expected = createSessionToken();
  const provided = Buffer.from(token);
  const expectedBuffer = Buffer.from(expected);

  if (provided.length !== expectedBuffer.length) return false;
  return timingSafeEqual(provided, expectedBuffer);
}
