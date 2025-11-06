"use client"; // si tu veux interagir avec le state ou la navigation

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white shadow px-6 py-4">
      <h1 className="text-xl font-bold">MonSite</h1>

      <ul className="flex space-x-6">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/about">À propos</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
