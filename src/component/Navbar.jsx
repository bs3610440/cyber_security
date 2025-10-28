// Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Nav links generated using map()
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#menu" },
    { name: "Deals", href: "#deals" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-red-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          🍔 <span>FastBite</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-yellow-300 transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Cart / CTA */}
        <div className="hidden md:flex items-center">
          <button className="bg-yellow-300 text-red-700 font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition">
            Order Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none text-2xl"
        >
          {open ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-red-600 px-4 py-2 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 text-white hover:text-yellow-300"
            >
              {item.name}
            </a>
          ))}

          <button className="w-full bg-yellow-300 text-red-700 font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
