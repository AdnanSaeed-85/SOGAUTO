import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sogauto",
  description: "Algeria's #1 automotive classifieds website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="bg-white shadow-md px-4 md:px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-orange-600 font-semibold text-2xl">SOGAUTO</Link>
            <nav className="hidden md:flex gap-4 text-black">
              <Link href="/buy" className="border border-gray-300 hover:border-orange-500 hover:text-orange-500 rounded-md px-3 py-1">Buy</Link>
              <Link href="/sell" className="border border-gray-300 hover:border-orange-500 hover:text-orange-500 rounded-md px-3 py-1">Sell</Link>
              <Link href="/showroom" className="border border-gray-300 hover:border-orange-500 hover:text-orange-500 rounded-md px-3 py-1">Showroom</Link>
            </nav>
          </div>

          {/* Mobile Nav */}
          <nav className="flex md:hidden gap-2 text-black text-sm">
            <Link href="/buy" className="border border-gray-300 hover:border-orange-500 hover:text-orange-500 rounded-md px-2 py-1">Buy</Link>
            <Link href="/sell" className="border border-gray-300 hover:border-orange-500 hover:text-orange-500 rounded-md px-2 py-1">Sell</Link>
            <Link href="/showroom" className="border border-gray-300 hover:border-orange-500 hover:text-orange-500 rounded-md px-2 py-1">Showroom</Link>
          </nav>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="bg-black border-t border-gray-200 px-4 md:px-10 py-10 text-white text-sm">
          <section className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 mb-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-white text-base mb-2">Buy & Sell</h3>
              <Link href="/buy" className="text-gray-400 hover:text-orange-500">Buy a vehicle</Link>
              <Link href="/sell" className="text-gray-400 hover:text-orange-500">Sell your vehicle</Link>
              <Link href="/showroom" className="text-gray-400 hover:text-orange-500">Showrooms list</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-white text-base mb-2">Company</h3>
              <Link href="/about" className="text-gray-400 hover:text-orange-500">About us</Link>
              <Link href="/privacy_policy" className="text-gray-400 hover:text-orange-500">Privacy Policy</Link>
              <Link href="/terms_&_condition" className="text-gray-400 hover:text-orange-500">Terms and conditions</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-white text-base mb-2">Contact</h3>
              <p className="text-gray-400">Contact us</p>
              <p className="text-gray-400">+213 542 648 003</p>
            </div>
          </section>
          <p className="text-center text-gray-500">© 2026 SOGAUTO. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}