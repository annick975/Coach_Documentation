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
      <body
        className={`${inter.className} bg-slate-950 text-slate-200 min-h-screen`}
      >
        <div className="flex">
          <Sidebar />
          <div className="md:ml-64 flex-1">
            <MobileNav />
            <main className="p-6 md:p-10 max-w-5xl mx-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
