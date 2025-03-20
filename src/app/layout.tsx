import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GitGuardian Docs",
  description:
    "Documentation for GitGuardian - GitHub Repository Security Scanner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </head>
      <body
        className={`${inter.className} bg-slate-950 text-slate-200 min-h-screen overflow-x-hidden`}
      >
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <div className="w-full md:ml-64 flex-1">
            <MobileNav />
            <main className="p-4 md:p-6 lg:p-10 max-w-5xl mx-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
