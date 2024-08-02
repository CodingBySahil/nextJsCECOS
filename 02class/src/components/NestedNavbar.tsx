import Link from "next/link";
import React from "react";

export function NestedNavBar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="zia">
            <span className="text-white hover:text-gray-300 cursor-pointer">Zia</span>
          </Link>
        </li>
        <li>
          <Link href="khubaib">
            <span className="text-white hover:text-gray-300 cursor-pointer">Khubaib</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
