"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", label: "Introduction" },
  { href: "/installation", label: "Installation & Setup" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/api-reference", label: "API Reference" },
  { href: "/frontend-ui", label: "Frontend UI" },
  { href: "/deployment", label: "Deployment Guide" },
  { href: "/future", label: "Future Improvements" },
  { href: "/contributing", label: "Contributing Guide" },
  { href: "/troubleshooting", label: "Troubleshooting & FAQs" },
  { href: "/license", label: "License & Credits" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:block w-64 h-screen bg-slate-900 p-6 fixed">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-emerald-400">GitGuardian</h1>
        <p className="text-sm text-slate-400">Repository Security Scanner</p>
      </div>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-2 px-4 rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-slate-800 text-emerald-400"
                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
