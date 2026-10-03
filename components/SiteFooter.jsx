import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/saffron-city-islamabad", label: "Saffron City Islamabad" },
  { href: "/location", label: "Location & Map" },
  { href: "/payment-plan", label: "Payment Plan" },
  { href: "/investment", label: "Investment Guide" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

const legalLinks = [
  { href: "/sitemap", label: "Sitemap" },
  { href: "/saffron-city-islamabad-booking", label: "Booking" },
  { href: "/saffron-city-islamabad-reviews", label: "Reviews" },
  { href: "/saffron-city-islamabad-development-updates", label: "Development Updates" },
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand column */}
        <div className="footer-brand-col">
          <Link href="/" className="footer-brand" aria-label="Saffron City Home">
            <Image
              src="/images/logo.png"
              alt="Saffron City Islamabad logo"
              width={44}
              height={44}
              quality={90}
            />
            <span>Saffron City</span>
          </Link>
          <p className="footer-tagline">
            Saffron City is a premium planned housing society near Islamabad,
            offering modern infrastructure, RDA-approved plots, and flexible
            payment plans on the GT Road growth corridor.
          </p>
          <address className="footer-address">
            <span>GT Road, Near Islamabad–Rawalpindi Metropolitan Area</span>
            <span>Punjab, Pakistan</span>
          </address>
          <a
            href="https://www.facebook.com/SaffronCityGTroad"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="Saffron City on Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
            Facebook
          </a>
        </div>

        {/* Quick links column */}
        <div className="footer-links-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-link-list">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal / extra links column */}
        <div className="footer-links-col">
          <h3 className="footer-heading">More Pages</h3>
          <ul className="footer-link-list">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div className="footer-contact-col">
          <h3 className="footer-heading">Contact & Booking</h3>
          <ul className="footer-contact-list">
            <li>
              <a href="tel:+923315408089" aria-label="Call Saffron City">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                +93 315 408 089
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/923315408089"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Saffron City"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.549 4.099 1.51 5.819L.055 23.24l5.54-1.453A11.953 11.953 0 0012 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm6.001 16.917c-.252.71-1.474 1.356-2.018 1.4-.527.042-1.03.208-3.476-.724-2.94-1.104-4.83-4.066-4.976-4.257-.147-.19-1.196-1.59-1.196-3.034 0-1.444.756-2.154 1.024-2.448.268-.294.584-.368.779-.368.195 0 .39.001.56.01.179.009.42-.068.657.502.246.592.834 2.04.907 2.187.073.147.12.319.024.513-.097.195-.146.316-.292.487-.147.17-.308.38-.44.511-.146.147-.299.307-.128.602.17.293.757 1.247 1.625 2.02 1.116.994 2.057 1.302 2.35 1.448.293.147.463.122.634-.073.17-.196.73-.853.924-1.146.195-.292.389-.243.657-.146.268.098 1.703.804 1.996.951.293.147.487.22.56.341.073.122.073.707-.18 1.417z"/>
                </svg>
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href="mailto:info@safroncity.com" aria-label="Email Saffron City">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                info@safroncity.com
              </a>
            </li>
          </ul>
          <Link className="btn btn-primary footer-cta" href="/contact">
            Book a Free Consultation
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-row">
          <p>© {new Date().getFullYear()} Saffron City. All rights reserved.</p>
          <p className="footer-disclaimer">
            Saffron City Islamabad is a registered housing project. All investment decisions should be made after personal verification.
          </p>
        </div>
      </div>
    </footer>
  );
}
