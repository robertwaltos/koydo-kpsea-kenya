import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Wire to Supabase — parallel fetch dashboard payload
  return NextResponse.json({
    examId: "EXAM124",
    slug: "kpsea-kenya",
    examName: "KPSEA Kenya",
    stats: { totalQuestions: 0, completedQuestions: 0, averageScore: 0 },
    recentAttempts: [],
  });
}
