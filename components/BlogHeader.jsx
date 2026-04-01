"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const blogNavItems = [
  { href: "/", label: "Main Site" },
  { href: "/blog", label: "Blog Home" },
  { href: "/blog/saffron-city-islamabad", label: "Saffron City Guide" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" }
];

export default function BlogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header blog-header">
      <div className="container nav-row">
        <Link className="brand" href="/blog" aria-label="Saffron City blog home" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt="Saffron City logo"
            width={52}
            height={44}
            sizes="52px"
            quality={90}
          />
          <span>Saffron City Blog</span>
        </Link>

        <nav aria-label="Blog Primary" className="desktop-nav">
          <ul className="nav-list">
            {blogNavItems.map((item) => (
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
          aria-controls="blog-mobile-nav"
          aria-label="Toggle blog navigation menu"
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

      <nav id="blog-mobile-nav" className={`mobile-nav ${isMenuOpen ? "open" : ""}`} aria-label="Blog Mobile Primary">
        <ul>
          {blogNavItems.map((item) => (
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
