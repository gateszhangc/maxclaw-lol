import { NextResponse } from "next/server";

export async function GET() {
  const isProduction = process.env.NODE_ENV === "production";

  return NextResponse.json(
    {
      googleAnalyticsId: isProduction
        ? process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.trim() || null
        : null,
      clarityProjectId: isProduction
        ? process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() || null
        : null,
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}
