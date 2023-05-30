import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { hash, genSalt } from "bcrypt";

export async function POST(request: NextRequest) {
    const body = await request.json() as Prisma.UserCreateInput;
    
    //1. เช็คอีเมล์ซ้ำ
    const userExist = await prisma.user.findUnique({ where: { email: body.email } });
    if (userExist !== null) {
        return NextResponse.json({ message: "มีอีเมล์นี้ในระบบแล้ว" }, { status: 400 });
    }

    //2. เข้ารหัส password
    const salt = await genSalt(10);
    const hashPassword = await hash(body.password, salt);

    //3. เพิ่มข้อมูลลงในตาราง users
    await prisma.user.create({
        data: {
            fullname: body.fullname,
            email: body.email,
            password: hashPassword
        }
    });

    return NextResponse.json({ message: "สมัครสมาชิกสำเร็จ" }, { status: 201 });
}