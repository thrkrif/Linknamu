import { NextResponse } from "next/server";
import { getMongoClientPromise } from "@/lib/mongodb";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    const client = await getMongoClientPromise();
    const db = client.db("link-namu");

    await db
      .collection("linkClicks")
      .updateOne(
        { linkId: id },
        { $inc: { count: 1 }, $set: { lastClickedAt: new Date() } },
        { upsert: true },
      );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("클릭 수 기록 실패:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
