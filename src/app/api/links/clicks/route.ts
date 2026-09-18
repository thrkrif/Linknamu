import { NextResponse } from "next/server";
import { getMongoDb } from "@/lib/mongodb";

interface LinkClickDoc {
  linkId: string;
  count: number;
}

export async function GET() {
  try {
    const db = await getMongoDb();

    const docs = await db
      .collection<LinkClickDoc>("linkClicks")
      .find({}, { projection: { _id: 0, linkId: 1, count: 1 } })
      .toArray();

    const counts = Object.fromEntries(
      docs.map((doc) => [doc.linkId, doc.count]),
    );

    return NextResponse.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json({ counts: {} }, { status: 500 });
  }
}
