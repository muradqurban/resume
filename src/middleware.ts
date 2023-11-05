import { JwtPayload, decode } from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";




export function middleware(request:NextRequest,) {

    const path = request.nextUrl.pathname
    const isPublicPath = path === '/user/login' || path === '/user/register' 
    const token = request.cookies.get('token')?.value || '';
    const decodedToken = decode(token);
    

    if (decodedToken && typeof decodedToken !== 'string') {
        const tokenExp = new Date((decodedToken as JwtPayload).exp! * 1000);
         const currentTime = new Date();

        if (currentTime > tokenExp) {
            const response = NextResponse.redirect(new URL('/user/login', request.nextUrl))
            response.cookies.set("token", "", 
            { httpOnly: true, expires: new Date(0) 
            });
            console.log('Sessiyanız bitib. yenidən giriş edin.');
            return response;
        }
    }        
    
    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/control', request.nextUrl))
    }

    if(!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/user/login',request.nextUrl))
    }
}


export const config = {
    matcher: [
      '/control/',
      '/user/login',
      '/user/register',
    ]
  }