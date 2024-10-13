import { NextRequest, NextResponse } from "next/server";

export default async function ifNotAuthenticated(req: NextRequest, isAuthenticated: { success: boolean }) {
    if (isAuthenticated.success === true) {
        // If authenticated, redirect to home
        return NextResponse.redirect(new URL('/p/home', req.url));
    }

    return NextResponse.next(); // Allow access to protected pages if not authenticated
}
