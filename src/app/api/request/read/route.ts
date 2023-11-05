import { NextResponse,NextRequest } from "next/server";
import connect from "@/dbConnect";
import Message from "@/models/messageModel";

connect()

export async function POST(request:NextRequest) {
    try {
        const messages = await Message.find({})

        return NextResponse.json({
            message: "Data bazada olan bütün mesajlar",
            status:200,
            data:messages
        })
        
    } catch (error:any) {
        return NextResponse.json({
            message: "Xəta baş verdi",
            status:402
        })        
    }
}