import connect from "@/dbConnect"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody
        console.log(reqBody)

        // check if user exists
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({message: "İstifadəçi tapılmadı"},{status:400})
        }
        if(!user.isVerfied){
            return NextResponse.json({message: "İstifadəçi təsdiq olunmayıb"},{status:402})
            
        }
        console.log('istifadəçi tapıldı')

        // check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({message: "Yanlış şifrə"}, {status: 403})
        }
        console.log(user)

        // create token data
        const tokenData = {
            id        : user._id,
            name      : user.name,
            surname   : user.surname,
            email     : user.email,
            image     : user.image,
            isVerfied : user.isVerfied,
            role      : user.role
        }


        // create token
        const token =  jwt.sign(tokenData, process.env.TOKEN_SECRET! , {expiresIn: "12h"})

        const response =  NextResponse.json({
            message: "Xoş gədiniz",
            success: true,
        })
        response.cookies.set('token',token, {
            httpOnly:true,
        })
        return response
        
    } catch (error:any) {
        return NextResponse.json({message: error.message, status:500})
    }
}