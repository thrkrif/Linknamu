import { NextResponse } from "next/server";
import { getMongoDb } from "@/lib/mongodb";

interface LinkClickDoc {
  linkId: string;
  count: number;
}

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const db = await getMongoDb();

    const result = await db
      .collection<LinkClickDoc>("linkClicks")
      .findOneAndUpdate(
        { linkId: id },
        { $inc: { count: 1 }, $set: { lastClickedAt: new Date() } },
        { upsert: true, returnDocument: "after" },
      );

    return NextResponse.json({ ok: true, count: result?.count ?? 0 });
  } catch (error) {
    console.error("클릭 수 기록 실패:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
