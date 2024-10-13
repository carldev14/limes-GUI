import { NextRequest, NextResponse } from "next/server";
import { checkAuth } from '../utils/check-auth';
import ifAuthenticated from '../middlewares/ifAuthenticated';
import ifNotAuthenticated from "../middlewares/ifNotAuthenticated";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Check for routes starting with `/p`
    if (pathname.startsWith('/p')) {
        const isAuthenticated = await checkAuth(req);

        // Handle authenticated routes
        return await ifAuthenticated(req, isAuthenticated);
    }

    // Check for routes starting with `/auth`
    if (pathname.startsWith('/auth')) {
        const isAuthenticated = await checkAuth(req);

        // Handle unauthenticated routes
        return await ifNotAuthenticated(req, isAuthenticated);
    }

}
