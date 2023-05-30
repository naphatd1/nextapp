import { createNewsType, findAllNewsType } from "@/services/newstype.service";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data = await findAllNewsType();
  return NextResponse.json({ data: data });
}

export async function POST(request: NextRequest) {
  const bodyJson = (await request.json()) as Prisma.NewsTypeCreateInput;

  const data = await createNewsType(bodyJson);

  return NextResponse.json(
    {
      message: "เพิ่มข้อมูลสำเร็จ",
      data: data,
    },
    { status: 201 }
  );
}
