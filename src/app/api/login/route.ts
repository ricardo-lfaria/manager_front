import { NextResponse } from 'next/server';
import { z } from 'zod';
import { cookies } from 'next/headers';

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .refine(
      (value) => /[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value),
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const parsedData = loginSchema.parse(data);

    const response = await fetch("https://667e1d1d297972455f6723ea.mockapi.io/auth/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const { token, isAdmin } = await response.json();

      const cookieStore = cookies();
      cookieStore.set("authToken", token,{ httpOnly: true, secure: true });
      cookieStore.set("isAdmin", isAdmin, { httpOnly: true, secure: true  });

      return NextResponse.json({ success: true, isAdmin });
    } else {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.error || "Unknown error" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
