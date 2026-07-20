// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const mode = process.env.APP_MODE;

  if (mode === "inventory") {
    return NextResponse.rewrite(new URL("/inventory" + request.nextUrl.pathname, request.url));
  }

  if (mode === "parts") {
    return NextResponse.rewrite(new URL("/parts" + request.nextUrl.pathname, request.url));
  }

  return NextResponse.rewrite(new URL(request.nextUrl.pathname, request.url));
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};