"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiPlus, FiDownload, FiFilter, FiSearch, FiHome } from "react-icons/fi";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function DashboardPage() {
  const [transactions, setTransactions] = useState([]);
  const [budgetProgress, setBudgetProgress] = useState(65); // Example progress
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    async function fetchTransactions() {
      try {
        const res = await fetch("/api/transactions");
        if (!res.ok) throw new Error("Failed to fetch transactions");
        const data = await res.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    }
    fetchTransactions();
  }, []);

  // Dummy data for charts
  const incomeExpenseData = [
    { name: "Jan", income: 4000, expenses: 2500 },
    { name: "Feb", income: 4500, expenses: 2700 },
    { name: "Mar", income: 4200, expenses: 3000 },
    { name: "Apr", income: 5000, expenses: 3200 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-700">Dashboard</h1>
        <div className="flex gap-4">
          <Link href="/home">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
              <FiHome className="mr-2" /> Home
            </button>
          </Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
            <FiPlus className="mr-2" /> Add Expense
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center">
            <FiDownload className="mr-2" /> Export Data
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex items-center bg-white shadow p-4 rounded-lg mb-6">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search transactions..."
          className="flex-1 outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="ml-4 bg-gray-200 px-4 py-2 rounded-lg flex items-center">
          <FiFilter className="mr-2" /> Filter
        </button>
      </div>

      {/* Budget Progress Bar */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Budget Usage</h2>
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${budgetProgress}%` }}></div>
        </div>
        <p className="mt-2 text-sm text-gray-600">{budgetProgress}% of your monthly budget used</p>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Income vs Expenses Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Income vs Expenses</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={incomeExpenseData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="income" fill="#4CAF50" name="Income" />
              <Bar dataKey="expenses" fill="#F44336" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Savings Trend Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Savings Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={incomeExpenseData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="income" stroke="#4CAF50" strokeWidth={2} name="Savings" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <ul className="divide-y">
          {transactions
            .filter((tx) => tx.category.toLowerCase().includes(searchQuery.toLowerCase()))
            .slice(0, 5) // Show only the latest 5 transactions
            .map((tx, index) => (
              <li key={index} className="py-2 flex justify-between">
                <span>{tx.category}</span>
                <span className="font-bold text-gray-800">${tx.amount}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
