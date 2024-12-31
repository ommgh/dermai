"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/hooks/use-current-user";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const user = useCurrentUser();

  return (
    <header className="relative py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className="text-yellow-600 font-light hover:text-yellow-700"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-gray-800 font-light hover:text-gray-600"
          >
            Product
          </Link>
          <Link
            href="/"
            className="text-gray-800 font-light hover:text-gray-600"
          >
            Features
          </Link>
          <Link
            href="/"
            className="text-gray-800 font-light hover:text-gray-600"
          >
            Demo
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {user ? (
            <Button onClick={() => router.push("/dashboard")}>Dashboard</Button>
          ) : (
            <Button onClick={() => router.push("/auth/login")}>Login</Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden shadow-lg z-50">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-yellow-600 font-light hover:text-yellow-700 py-2 px-4 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-gray-800 font-light hover:text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/"
              className="text-gray-800 font-light hover:text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/"
              className="text-gray-800 font-light hover:text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
