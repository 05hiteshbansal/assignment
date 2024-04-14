import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const path=request.nextUrl.pathname

    const public_access=path==='/login' || path==='/';
    let id
    
    if(request.cookies.get("token")){
        id=request.cookies.get("token").value
    }
if(id && public_access ){
    return NextResponse.redirect(new URL('/profile', request.url))
}
if(!public_access && !id )
{
    return NextResponse.redirect(new URL('/login', request.url))
}
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/mode',
    '/profile',
    '/verify'
  ],
}