import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body)

    await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })

    return NextResponse.json({
        message: "you are logged in!"
    })
}

export function GET(req: NextRequest) {
    return NextResponse.json({
        name: 'narine',
        email: 'narine420@gmail.com'
    })
}