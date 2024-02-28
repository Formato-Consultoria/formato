'use client';
import { Toaster } from "react-hot-toast";
import { inter } from "@/utils/_fonts";

import { Main } from "@/components/main";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Analytics } from "@vercel/analytics/react"

const queryClient = new QueryClient();

import { QueryClient, QueryClientProvider } from "react-query";

export const CustomRootLayout = ({ children }: { children: React.ReactNode }) => {
    return (<>
        <Analytics />
        
        <QueryClientProvider client={queryClient}>
            <div className={inter.className}>                    
                <Navbar />

                <Main>
                    {children}

                    <Toaster
                        position="bottom-left"
                        reverseOrder={true}
                    />
                </Main>
                <Footer />
            </div>
        </QueryClientProvider>
    </>)
}