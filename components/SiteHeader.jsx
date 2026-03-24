"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/location", label: "Location" },
  { href: "/investment", label: "Investment" },
  { href: "/payment-plan", label: "Payment Plan" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container nav-row">
        <Link className="brand" href="/" aria-label="Saffron City home" onClick={closeMenu}>
          <Image src="/images/logo.png" alt="Saffron City logo" width={52} height={44} />
          <span>Saffron City</span>
        </Link>

        <nav aria-label="Primary" className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link className="btn btn-nav" href="/contact">Book Consultation</Link>

        <button
          className={`mobile-menu-toggle ${isMenuOpen ? "open" : ""}`}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-nav-backdrop ${isMenuOpen ? "show" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav id="mobile-nav" className={`mobile-nav ${isMenuOpen ? "open" : ""}`} aria-label="Mobile Primary">
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeMenu}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <Link className="btn btn-primary mobile-nav-cta" href="/contact" onClick={closeMenu}>
          Book Consultation
        </Link>
      </nav>
    </header>
  );
}
