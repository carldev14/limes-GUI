import { useMutation } from "@tanstack/react-query";

interface UseApiProps {
  url: string;
  methodv?: "POST" | "GET" | "PUT" | "DELETE";
}

export default function useApi({ url, methodv = "POST" }: UseApiProps) {
  return useMutation({
    mutationKey: [url],
    mutationFn: async (data: object) => {
      try {
        const response = await fetch(url, {
          method: methodv,
          headers: {
            "Content-Type": "application/json", // Specify the content type
          },
          body: JSON.stringify(data),
          credentials: 'include' // Include credentials (cookies) in the request
        });
        const result = await response.json();
        return result;
      } catch (error) {
        console.log(error)
      }
    },
  });
}