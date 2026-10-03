import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "HTML Sitemap | Saffron City Islamabad",
  description: "Navigate all pages of Saffron City Islamabad website with our complete HTML sitemap.",
  alternates: {
    canonical: "/sitemap"
  }
};

export default function HTMLSitemap() {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Saffron City Location", path: "/location" },
    { name: "Investment Guide", path: "/investment" },
    { name: "Payment Plan", path: "/payment-plan" },
    { name: "Contact Us", path: "/contact" },
    { name: "Saffron City Islamabad Complete Guide", path: "/saffron-city-islamabad" },
    { name: "Saffron City Islamabad Booking", path: "/saffron-city-islamabad-booking" },
    { name: "Saffron City Islamabad Reviews", path: "/saffron-city-islamabad-reviews" },
    { name: "Saffron City Contact Number", path: "/saffron-city-islamabad-contact-number" },
    { name: "Saffron City Development Updates", path: "/saffron-city-islamabad-development-updates" }
  ];

  const blogPosts = [
    { name: "Blog Home", path: "/blog" },
    { name: "Saffron City Islamabad Overview", path: "/blog/saffron-city-islamabad" },
    { name: "5 Marla Plot Price", path: "/blog/saffron-city-islamabad-5-marla-price" },
    { name: "Saffron City vs Bahria Town", path: "/blog/saffron-city-islamabad-vs-bahria-town" },
    { name: "Overseas Investment Guide", path: "/blog/saffron-city-islamabad-overseas-guide" },
    { name: "Location Details", path: "/blog/saffron-city-location-guide" },
    { name: "NOC Approval Status", path: "/blog/saffron-city-noc-approval" },
    { name: "Payment Plan Breakdowns", path: "/blog/saffron-city-payment-plan-guide" }
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="section section-surface" style={{ minHeight: "60vh" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <h1 style={{ marginBottom: "2rem" }}>Website Sitemap</h1>
            
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Main Pages</h2>
              <ul style={{ listStyleType: "disc", paddingLeft: "2rem" }}>
                {pages.map((link, idx) => (
                  <li key={idx} style={{ marginBottom: "0.5rem" }}>
                    <Link href={link.path} style={{ color: "var(--brand)", textDecoration: "underline" }}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Blog & Guides</h2>
              <ul style={{ listStyleType: "disc", paddingLeft: "2rem" }}>
                {blogPosts.map((link, idx) => (
                  <li key={idx} style={{ marginBottom: "0.5rem" }}>
                    <Link href={link.path} style={{ color: "var(--brand)", textDecoration: "underline" }}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ marginTop: "3rem" }}>
              <p>Looking for the XML Sitemap for search engines? <Link href="/sitemap.xml" style={{ color: "var(--brand)" }}>Click here</Link>.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
