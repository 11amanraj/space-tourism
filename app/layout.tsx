'use client';

import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const backgrounds: { [key: string]: string } = {
    '/': "bg-[url('/home/background-home-mobile.jpg')] sm:bg-[url('/home/background-home-tablet.jpg')] md:bg-[url('/home/background-home-desktop.jpg')]",
    '/destination': "bg-[url('/destination/background-destination-mobile.jpg')] sm:bg-[url('/destination/background-destination-tablet.jpg')] md:bg-[url('/destination/background-destination-desktop.jpg')]",
    '/crew': "bg-[url('/crew/background-crew-mobile.jpg')] sm:bg-[url('/crew/background-crew-tablet.jpg')] md:bg-[url('/crew/background-crew-desktop.jpg')]",
    '/technology': "bg-[url('/technology/background-technology-mobile.jpg')] sm:bg-[url('/technology/background-technology-tablet.jpg')] md:bg-[url('/technology/background-technology-desktop.jpg')]",
  };

  return (
    <html lang="en">
      <body>
        <div className={`h-[100dvh] ${backgrounds[pathname]} bg-cover bg-center bg-no-repeat bg-fixed lg:pt-10`}>
          <NavBar/>
          <div className={`max-w-277 mx-auto p-6 flex flex-col justify-center items-center gap-6 self-center sm:pt-10 md:pt-12 md:flex-row`}>
              {children}
          </div>
        </div>
      </body>
    </html>
  );
}