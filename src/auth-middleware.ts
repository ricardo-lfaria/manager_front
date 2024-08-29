import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export function authMiddleware(request: NextRequest): NextResponse {
  console.log("Middleware triggered");
  try {
    const cookieStore = cookies();
    const tokenCookie = cookieStore.get("authToken");

    if (!tokenCookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const isAdminCookie = cookieStore.get("isAdmin");
    console.log("isAdmin cookie:", isAdminCookie?.value);

    if (request.nextUrl.pathname === "/manager/admin") {
      if (!isAdminCookie || isAdminCookie.value !== "true") {
        console.log(
          "Redirecting to /manager due to missing/invalid isAdmin cookie"
        );
        return NextResponse.redirect(new URL("/manager", request.url));
      } else {
        return NextResponse.next();
      }
    }

    if (request.nextUrl.pathname.startsWith("/manager/")) {
      return NextResponse.next();
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Error in middleware:", error);
    return NextResponse.next();
  }
}
export const config = {
  matcher: ["/manager/:path*"],
};
