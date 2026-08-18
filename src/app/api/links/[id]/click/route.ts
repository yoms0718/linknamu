import { NextResponse } from "next/server";

// TODO: MongoDB Atlas 연결 후 영구 저장소로 교체 (현재는 서버 재시작 시 초기화되는 임시 카운터)
const clickCounts = new Map<string, number>();

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const count = (clickCounts.get(id) ?? 0) + 1;
  clickCounts.set(id, count);
  return NextResponse.json({ id, count });
}
