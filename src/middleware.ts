import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabaseClient'; 

export async function middleware(request: NextRequest) {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
        alert('Error fetching user: ' + error.message);
    }

    const protectedRoutes = ['/dashboard'];

    if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route)) && !user) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    // I have to add the dashboard path here but I couldn't because of the SMTP issue with supabase
  matcher: [ '/x/:path*'],
};
