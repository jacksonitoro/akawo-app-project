// src/app/home/layout.tsx


import Link from "next/link";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-lg font-bold text-blue-600">Akawo</h1>
        <div className="flex gap-6">
          <Link href="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
          <Link href="/savings" className="text-gray-700 hover:text-green-500">Savings</Link>
          <Link href="/income" className="text-gray-700 hover:text-purple-500">Income</Link>
          <Link href="/expense" className="text-gray-700 hover:text-red-500">Expense</Link>
          <Link href="/debt-loan" className="text-gray-700 hover:text-yellow-500">Debt & Loan</Link>
          <Link href="/business-investment" className="text-gray-700 hover:text-teal-500">Business & Investment</Link>
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
