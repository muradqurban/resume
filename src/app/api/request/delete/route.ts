import connect from "@/dbConnect";
import Message from "@/models/messageModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json()
        const {filter} = reqBody
        console.log(filter)

        await Message.findOneAndDelete(filter)

        return NextResponse.json({
            message: "Mesaj silindi",
            success:true
        })

    } catch (error:any) {
        return NextResponse.json({error:error.message, status:400})        
    }
}