import connect from "@/dbConnect";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"


connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {name, surname, email ,password} = reqBody
        
        // check if user already registered 
        const user = await User.findOne({email})
        
        if(user){
            return NextResponse.json({error:"İstifadəçi artıq qeydiyyatdan keçib."},{status:400})
        }

        // hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt)

        const newUser = new User({
            name,
            surname,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser)

        return NextResponse.json({
            message: "Uğurlu qeydiyyat",
            status:200,
            savedUser
        })
    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:402})
    }
}