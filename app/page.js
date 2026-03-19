import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const highlights = [
  "Prime location near Islamabad growth corridor",
  "Modern planning with lifestyle-ready zones",
  "Flexible payment structure for multiple buyer profiles"
];

const mainInfo = [
  {
    title: "Location",
    text: "Minutes away from DHA, Bahria Town, and Islamabad Expressway.",
    href: "/location",
    cta: "View Connectivity"
  },
  {
    title: "Payment Plan",
    text: "Sector A structure includes booking, installments, and possession slabs.",
    href: "/payment-plan",
    cta: "See Pricing"
  },
  {
    title: "Investment",
    text: "Positioned for long-term value in a developing urban corridor.",
    href: "/investment",
    cta: "Read Insights"
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Saffron City",
  url: "https://saffroncity.pk",
  logo: "https://saffroncity.pk/images/logo.png",
  image: "https://saffroncity.pk/images/master-plan.jpg",
  areaServed: "Islamabad-Rawalpindi",
  description:
    "Saffron City is a premium planned real estate project near Islamabad offering modern infrastructure, strategic connectivity, and investment opportunities.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK"
  },
  sameAs: ["https://www.facebook.com/SaffronCityGTroad"]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <section id="home" className="hero section">
          <div className="bg-orb orb-1" aria-hidden="true" />
          <div className="bg-orb orb-2" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="kicker">Premium Real Estate Destination</p>
              <h1>Own a Signature Address in Islamabad&apos;s Emerging Urban Belt</h1>
              <p>
                Saffron City is crafted for families and investors who value location,
                planning, and long-term upside. Every zone is built to support a
                premium, secure, and future-focused lifestyle.
              </p>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="/payment-plan">View Payment Plan</Link>
                <Link className="btn btn-ghost" href="/location">Explore Location</Link>
              </div>
              <ul className="metrics" aria-label="Project highlights">
                <li><strong>Prime</strong><span>Expressway Access</span></li>
                <li><strong>High</strong><span>Infrastructure Focus</span></li>
                <li><strong>Flexible</strong><span>Payment Options</span></li>
              </ul>
            </div>
            <div className="hero-media reveal delay-1">
              <Image
                src="/images/master-plan.jpg"
                alt="Master plan visual for Saffron City"
                width={1000}
                height={700}
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="section section-surface">
          <div className="container two-col">
            <div className="reveal">
              <p className="kicker">Project Overview</p>
              <h2>Designed as a Complete, Future-Ready Community</h2>
              <p>
                Saffron City combines premium everyday convenience with a structured
                urban vision. From green spaces and commercial activity to modern road
                planning, the project is positioned for both quality living and durable
                value.
              </p>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="/investment">Why Invest</Link>
                <Link className="btn btn-ghost" href="/contact">Book Consultation</Link>
              </div>
            </div>
            <aside className="trust-card reveal delay-1" aria-label="Core reasons">
              <h3>What makes Saffron City stand out</h3>
              <ul>
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Main Information</p>
              <h2>Everything Important at a Glance</h2>
            </div>
            <div className="card-grid">
              {mainInfo.map((item) => (
                <article key={item.title} className="feature-card reveal">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link className="btn btn-ghost" href={item.href}>{item.cta}</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
