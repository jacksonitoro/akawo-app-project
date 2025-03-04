"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [transactions, setTransactions] = useState([]);
  const [bills, setBills] = useState([]);
  const [budgetProgress, setBudgetProgress] = useState(75); // Example percentage

  useEffect(() => {
    async function fetchTransactions() {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      setTransactions(data);
    }

    async function fetchBills() {
      const res = await fetch("/api/bills");
      const data = await res.json();
      setBills(data);
    }

    fetchTransactions();
    fetchBills();
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 flex justify-between rounded-lg mb-6">
        <div className="flex gap-6">
          <Link href="/dashboard" className="text-blue-600 font-bold">Dashboard</Link>
          <Link href="/savings" className="text-green-600 font-bold">Savings</Link>
          <Link href="/income" className="text-purple-600 font-bold">Income</Link>
          <Link href="/expense" className="text-red-600 font-bold">Expense</Link>
          <Link href="/debt-loan" className="text-yellow-600 font-bold">Debt & Loan</Link>
          <Link href="/business-investment" className="text-teal-600 font-bold">Business & Investment</Link>
        </div>
      </nav>

      {/* Budget Summary Widget */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Budget Summary</h2>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${budgetProgress}%` }}></div>
        </div>
        <p className="mt-2 text-sm text-gray-600">{budgetProgress}% of your monthly budget used</p>
      </div>

      {/* Recent Transactions Feed */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <ul>
          {transactions.map((tx, index) => (
            <li key={index} className="flex justify-between py-2 border-b">
              <span>{tx.category}</span>
              <span className="font-bold">${tx.amount}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Upcoming Bills Alert */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Bills</h2>
        <ul>
          {bills.map((bill, index) => (
            <li key={index} className="flex justify-between py-2 border-b">
              <span>{bill.name}</span>
              <span className="text-red-600 font-bold">Due: {bill.dueDate}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick-Add Expense Button */}
      <button className="fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg text-lg">
        + Add Expense
      </button>
    </div>
  );
}
