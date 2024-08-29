import { NextRequest, NextResponse } from "next/server";
import { authMiddleware } from "./auth-middleware";
import { cspMiddleware } from "./csp-middleware";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const cspResponse = await cspMiddleware(request);
  const authResponse = authMiddleware(request);

  if (authResponse.status === 200) {
    return NextResponse.next({
      request: {
        headers: cspResponse.headers,
      },
    });
  } else {
    return authResponse;
  }
}

export const config = {
  matcher: ["/manager/:path*"],
};
