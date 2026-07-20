"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#2F6BFF] text-white">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">

        {/* LEFT SIDE (mobile menu button) */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl font-bold"
          >
            ☰
          </button>
        </div>

        {/* DESKTOP LEFT NAV */}
        <div className="hidden md:flex items-center space-x-6 font-bold">
          <Link href="/" className="hover:text-white/80">
            Home
          </Link>

          <Link href="/#services" className="hover:text-white/80">
            Services
          </Link>

          <Link href="/#about" className="hover:text-white/80">
            About
          </Link>
        </div>

        {/* RIGHT SIDE (always Contact button) */}
        <div>
          <Link
            href={"/book-service"}
            className="mr-5 bg-white text-[#2F6BFF] px-4 py-2 rounded-md font-bold hover:bg-white/90"
          >
            Book Service
          </Link>
          {/* <Link
            href="/book-service"
            className="bg-white text-[#2F6BFF] px-4 py-2 rounded-md font-bold hover:bg-white/90"
          >
            Vehicle Invetory{' '}
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              NEW
            </span>
          </Link> */}
        </div>
      </div>

      {/* MOBILE DROPDOWN (left menu) */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 font-bold bg-[#2F6BFF]">
          <Link
            href="/"
            className="block hover:text-white/80"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/#services"
            className="block hover:text-white/80"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>

          <Link
            href="/#about"
            className="block hover:text-white/80"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}