"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUp,
  Facebook,
  Instagram,
  Mail,
  TwitterIcon as TikTok,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="px-6 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Logo */}
          <div className=" font-bold text-3xl">DermAI</div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-light">Subscribe to Our Newsletter</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-6 py-3 rounded-full border border-gray-200 pr-12"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-yellow-500 rounded-full text-white hover:bg-yellow-400 transition-colors">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Links */}
          <div className="flex gap-8 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Terms and Condition
            </Link>
            <Link href="/" className="hover:text-gray-900">
              Privacy Policy
            </Link>
          </div>

          {/* Social Links and Back to Top */}
          <div className=" mt-5 flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="p-2 hover:text-yellow-500 transition-colors"
              >
                <TikTok className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 hover:text-yellow-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 hover:text-yellow-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="p-2 hover:text-yellow-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
