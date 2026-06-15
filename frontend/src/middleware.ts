import { NextRequest } from "next/server";

import { NextResponse } from "next/server";

import { jwtDecode } from "jwt-decode";

const adminRoutes = [
  "/admin",
];

const userRoutes = [
  "/user",
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

  let role = "";

  if (token) {

    try {

      const decoded: any =
        jwtDecode(token);

      role =
        decoded.role;

    } catch (error) {

      console.log(error);

    }

  }

  const isAdminRoute =
    adminRoutes.some(
      (route) =>
        pathname.startsWith(route)
    );

  const isUserRoute =
    userRoutes.some(
      (route) =>
        pathname.startsWith(route)
    );

  const isGuestRoute =
    guestRoutes.includes(
      pathname
    );

  // BELUM LOGIN
  if (
    (isAdminRoute || isUserRoute) &&
    !token
  ) {

    return NextResponse.redirect(
      new URL(
        "/login",
        request.url
      )
    );

  }

  // USER MASUK ADMIN
  if (
    isAdminRoute &&
    role !== "ADMIN"
  ) {

    return NextResponse.redirect(
      new URL(
        "/user/dasboard",
        request.url
      )
    );

  }

  // ADMIN MASUK USER
  if (
    isUserRoute &&
    role === "ADMIN"
  ) {

    return NextResponse.redirect(
      new URL(
        "/admin/dashboard",
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
  "/user/:path*",
  "/login",
  "/register",
],};