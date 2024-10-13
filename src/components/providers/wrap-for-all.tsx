"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"


const queryClient = new QueryClient()


export default function Providers({ children }: { children: React.ReactNode }) {

    return (

        <QueryClientProvider client={queryClient} >
            <main className={``} >
                {children}
            </main>

        </QueryClientProvider>


    );
} 