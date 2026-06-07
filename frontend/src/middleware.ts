import { NextRequest } from "next/server";

import { NextResponse } from "next/server";

const adminRoutes = [
  "/admin",
];

const guestRoutes = [
  "/login",
  "/register",
];

export function middleware(
  request: NextRequest
) {
  const token =
    request.cookies.get(
      "token"
    )?.value;

  const pathname =
    request.nextUrl.pathname;

  // ADMIN ROUTE
  const isAdminRoute =
    adminRoutes.some(
      (route) =>
        pathname.startsWith(
          route
        )
    );

  // GUEST ROUTE
  const isGuestRoute =
    guestRoutes.includes(
      pathname
    );

  // BELUM LOGIN
  if (
    isAdminRoute &&
    !token
  ) {
    return NextResponse.redirect(
      new URL(
        "/login",
        request.url
      )
    );
  }

  // SUDAH LOGIN
  if (
    isGuestRoute &&
    token
  ) {
    return NextResponse.redirect(
      new URL(
        "/",
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/login",
    "/register",
  ],
};