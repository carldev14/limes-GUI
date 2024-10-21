import axios from "axios";
import { NextRequest } from "next/server";

export async function checkAuth(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    // Token is missing
    return { success: false };
  }

  try {
    const response = await axios.get("http://localhost:5000/api/check-auth", {
      headers: {
        Cookie: `token=${token}`, // pass the token to the express (backend)
      },
      withCredentials: true, // Allows sending cookies with the request
    });

    return response.data; 
  } catch (error) {
    console.error("Error during authentication check:", error);
    return { success: false };
  }
}
