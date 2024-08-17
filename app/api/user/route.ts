import { NextRequest, NextResponse } from "next/server";
import client from '@/db/index';

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

export async function GET(req: NextRequest) {
    const details = await client.user.findFirst({});

    return NextResponse.json({
        name: details?.username,
        email: 'demo@demo.com'
    })
}