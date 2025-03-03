// src/app/home/layout.tsx


import Link from "next/link";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-gray-600 text-white py-4 px-6 flex justify-between">
        <h1 className="text-lg font-bold">Akawo</h1>
        <div className="flex gap-4">
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/savings" className="hover:underline">Savings</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Akawo. All rights reserved.
      </footer>
    </div>
  );
}
