import { NextRequest, NextResponse } from "next/server";

export default async function ifAuthenticated(req: NextRequest, isAuthenticated: { success: boolean }) {
    if (isAuthenticated.success === false) {
        // If not authenticated, redirect to login
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    return NextResponse.next(); // Allow access to protected pages if authenticated
}
