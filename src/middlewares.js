// Middlewares.js

import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  try {
    const secretKey = process.env.SECRET_KEY;
    const jwt = req.cookies["access_token"];

    if (!jwt) {
      return NextResponse.redirect(new URL("/", req.url).toString());
    }

    const { roles } = await jwtVerify(jwt, secretKey);

    if (!roles.includes("SUPER_ADMIN")) {
      return NextResponse.redirect(new URL("/", req.url).toString());
    }

    return NextResponse.next();
  } catch (e) {
    console.error("JWT verification failed:", e);
    return NextResponse.redirect(new URL("/", req.url).toString());
  }
}
