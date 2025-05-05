"use client";
import Link from "next/link";
import { getSession, logout } from "../utils/auth";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getSession());
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    window.location.reload(); // Refresh page to reflect logout
  };

  return (
    <nav className="flex justify-between p-4 bg-white shadow">
      <h1 className="text-xl font-bold">MyShop</h1>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sm">Welcome, {user.email}</span>
            <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="text-blue-600 underline">
              Log In
            </Link>
            <Link href="/signup" className="text-green-600 underline">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
