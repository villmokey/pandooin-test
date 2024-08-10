import type { Metadata } from "next";
import "./globals.css";
import { Unbounded } from 'next/font/google'
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const unbounded = Unbounded({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unbounded',
})
 
export const metadata: Metadata = {
  title: "Zamrood by Pandooin",
  description: "Customize your trip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en" className={`${unbounded.variable}`}>
        <body>{children}</body>
      </html>
    </ReactQueryClientProvider>
  );
}
