import axios from "axios";
import { NextRequest } from "next/server";

export async function checkAuth(req: NextRequest) {
    const token = req.cookies.get('token')?.value;

    if (!token) {
        // Token is missing
        return { success: false };
    }

    try {
        const response = await axios.post('http://localhost:5000/api/auth/check-auth', { token });
        return response.data; // Assuming the response structure has 'success'
    } catch (error) {
        console.error('Error during authentication check:', error);
        return { success: false };
    }
}
