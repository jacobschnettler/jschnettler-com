"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white"
            >
              <span className="sr-only">Open main menu</span>

              {!mobileOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo + desktop nav */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg"
                alt="Logo"
                width={32}
                height={32}
              />
            </div>

            <div className="hidden sm:ml-6 sm:flex space-x-4">
              <Link href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm text-white">
                Dashboard
              </Link>
              <Link href="#" className="rounded-md px-3 py-2 text-sm text-gray-300 hover:text-white">
                Team
              </Link>
              <Link href="#" className="rounded-md px-3 py-2 text-sm text-gray-300 hover:text-white">
                Projects
              </Link>
              <Link href="#" className="rounded-md px-3 py-2 text-sm text-gray-300 hover:text-white">
                Calendar
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            {/* Notifications */}
            <button className="relative rounded-full p-1 text-gray-400 hover:text-white">
              <span className="sr-only">View notifications</span>
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* User menu */}
            <div className="relative ml-3">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex rounded-full focus:outline-none"
              >
                image
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your profile
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1">
          <Link href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-white">
            Dashboard
          </Link>
          <Link href="#" className="block rounded-md px-3 py-2 text-gray-300 hover:text-white">
            Team
          </Link>
          <Link href="#" className="block rounded-md px-3 py-2 text-gray-300 hover:text-white">
            Projects
          </Link>
          <Link href="#" className="block rounded-md px-3 py-2 text-gray-300 hover:text-white">
            Calendar
          </Link>
        </div>
      )}
    </nav>
  );
}