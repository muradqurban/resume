import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"

export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get('token')?.value || '';
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
        const user = {
            id        : decodedToken.id,
            email     : decodedToken.email,
            name      : decodedToken.name,
            surname   : decodedToken.surname,
            image     : decodedToken.image,
            isVerfied : decodedToken.isVerfied,
            role      : decodedToken.role
        }
        return user
    } catch (error: any) {
        throw new Error(error.message)
    }
}