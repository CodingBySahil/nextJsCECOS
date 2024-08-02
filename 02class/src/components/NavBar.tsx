import Link from "next/link";
import React from "react";

export function NavBar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <span className="text-white hover:text-gray-300 cursor-pointer">
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link href="about">
            <span className="text-white hover:text-gray-300 cursor-pointer">
              About
            </span>
          </Link>
        </li>
        <li>
          <Link href="contact">
            <span className="text-white hover:text-gray-300 cursor-pointer">
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
