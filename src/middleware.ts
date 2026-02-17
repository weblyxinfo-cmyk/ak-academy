import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect /admin routes (except /admin/login)
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    // Skip auth check if auth is not configured
    if (!process.env.AUTH_SECRET) {
      return NextResponse.next();
    }

    // Dynamically import auth to avoid breaking when env vars are missing
    const { auth } = await import("@/lib/auth");
    const session = await auth();

    if (!session) {
      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
