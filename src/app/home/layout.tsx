"use client";

import Link from "next/link";
import { FiHome, FiDollarSign, FiClock, FiUser, FiSettings, FiDownload, FiLogIn, FiLogOut } from "react-icons/fi";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Akawo</h2>
        <nav className="space-y-4">
          <Link href="/home" className="flex items-center text-gray-700 hover:text-blue-500">
            <FiHome className="mr-2" /> Home
          </Link>
          <Link href="/budget-tracking" className="flex items-center text-gray-700 hover:text-blue-500">
            <FiDollarSign className="mr-2" /> Budget Tracking
          </Link>
          <Link href="/transaction-history" className="flex items-center text-gray-700 hover:text-blue-500">
            <FiClock className="mr-2" /> Transaction History
          </Link>
          <Link href="/profile" className="flex items-center text-gray-700 hover:text-blue-500">
            <FiUser className="mr-2" /> User Profile
          </Link>
          <Link href="/settings" className="flex items-center text-gray-700 hover:text-blue-500">
            <FiSettings className="mr-2" /> Settings
          </Link>
          <Link href="/export" className="flex items-center text-gray-700 hover:text-blue-500">
            <FiDownload className="mr-2" /> Export Data
          </Link>
          <Link href="/login" className="flex items-center text-gray-700 hover:text-green-500">
            <FiLogIn className="mr-2" /> Login
          </Link>
          <Link href="/logout" className="flex items-center text-gray-700 hover:text-red-500">
            <FiLogOut className="mr-2" /> Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
