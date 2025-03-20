"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between p-4 bg-slate-900">
        <h1 className="text-xl font-bold text-emerald-400">GitGuardian</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-400 hover:text-slate-200"
        >
          <Menu size={24} />
        </button>
      </div>

      {isOpen && (
        <nav className="bg-slate-900 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 px-4 rounded-md ${
                    pathname === item.href
                      ? "bg-slate-800 text-emerald-400"
                      : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
