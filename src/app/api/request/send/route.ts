import { NextResponse,NextRequest } from "next/server";
import connect from "@/dbConnect";
import Message from "@/models/messageModel";

connect()

export async function POST(request:NextRequest) {
    const reqBody = await request.json()
    const {name, email, subject, message } = reqBody
    if(!name || !email || !message) {
        return NextResponse.json({
            message: "Sorğunu tam doldurmağınızı xahiş edirəm",
            status:401
        })
    }

    const newMessage = new Message({
        name,
        email,
        message
    })

    try {
        await newMessage.save()
        return NextResponse.json({
            message: "Sorgu göndərildi.",
            status:200
        })
    } catch (error:any) {
        return NextResponse.json({
            message: error.message,
            status:402
        })        
    }
}