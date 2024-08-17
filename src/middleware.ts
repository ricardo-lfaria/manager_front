import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

// middleware.ts
export function middleware(request: NextRequest): NextResponse {
    console.log("Middleware triggered");
    try {
      const cookieStore = cookies();
      const tokenCookie = cookieStore.get("authToken");
  
      // 1. Check for authToken - if missing, redirect to /login
      if (!tokenCookie) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
  
      const isAdminCookie = cookieStore.get("isAdmin");
      console.log("isAdmin cookie:", isAdminCookie?.value);
  
      // 2. Check if the request is for /manager/admin
      if (request.nextUrl.pathname === "/manager/admin") {
        if (!isAdminCookie || isAdminCookie.value !== "true") {
          console.log("Redirecting to /manager due to missing/invalid isAdmin cookie");
          return NextResponse.redirect(new URL("/manager", request.url));
        } else {
          // Allow access to /manager/admin for admins
          return NextResponse.next(); 
        }
      }
  
      // 3. If the request is for any other path within /manager, allow access since the user is authenticated
      if (request.nextUrl.pathname.startsWith("/manager/")) {
        return NextResponse.next();
      }
  
      // 4. For all other requests, continue as normal
      return NextResponse.next();
  
    } catch (error) {
      console.error("Error in middleware:", error);
      return NextResponse.next();
    }
  }
  
  // matcher configuration
  export const config = {
    matcher: ['/manager/:path*'], 
  };