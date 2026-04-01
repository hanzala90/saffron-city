import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const highlights = [
  "Prime location near Islamabad growth corridor",
  "Modern planning with lifestyle-ready zones",
  "Clear project information for buyers and investors"
];

const mainInfo = [
  {
    title: "Saffron City Islamabad Guide",
    text: "Read our complete Saffron City Islamabad page with NOC, location, and investment details.",
    href: "/saffron-city-islamabad",
    cta: "Open Full Guide"
  },
  {
    title: "Location",
    text: "Minutes away from DHA, Bahria Town, and Islamabad Expressway.",
    href: "/location",
    cta: "View Connectivity"
  },
  {
    title: "Project Overview",
    text: "Understand the Saffron City Islamabad story, from planning to long-term buyer fit.",
    href: "/blog/saffron-city-islamabad",
    cta: "Read Overview"
  },
  {
    title: "Investment",
    text: "Positioned for long-term value in a developing urban corridor.",
    href: "/investment",
    cta: "Read Insights"
  }
];

const guideLinks = [
  {
    title: "Saffron City Islamabad Main Guide",
    href: "/saffron-city-islamabad",
    text: "Read the complete overview of Saffron City Islamabad, including NOC, location, and investment fit."
  },
  {
    title: "Saffron City Islamabad Project Overview",
    href: "/blog/saffron-city-islamabad",
    text: "Open the long-form guide built around the Saffron City Islamabad keyword."
  },
  {
    title: "Saffron City Islamabad Location",
    href: "/location",
    text: "Review access routes, nearby landmarks, and why the location matters for buyers."
  },
  {
    title: "Saffron City Islamabad Blog",
    href: "/blog/saffron-city-islamabad",
    text: "Open the long-form article built around the Saffron City Islamabad keyword."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Saffron City",
  url: "https://www.safroncity.com",
  logo: "https://www.safroncity.com/images/logo.png",
  image: "https://www.safroncity.com/images/master-plan.jpg",
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
              <h1>Saffron City Islamabad: Your Signature Address in the Emerging Urban Belt</h1>
              <p>
                Saffron City is crafted for families and investors who value location,
                planning, and long-term upside. Every zone is built to support a
                premium, secure, and future-focused lifestyle.
              </p>
              <ul className="check-list hero-points">
                <li>Saffron City Islamabad location near key growth corridors</li>
                <li>Saffron City Islamabad project overview for buyers and investors</li>
                <li>Dedicated pages for location, investment, and project details</li>
              </ul>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="/saffron-city-islamabad">Read Main Guide</Link>
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
                sizes="(max-width: 900px) 100vw, 52vw"
                quality={90}
              />
            </div>
          </div>
        </section>

        <section className="section section-surface">
          <div className="container two-col">
            <div className="reveal">
              <p className="kicker">Project Overview</p>
              <h2>Saffron City Islamabad is Designed as a Complete, Future-Ready Community</h2>
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
              <p className="kicker">Internal Links</p>
              <h2>Saffron City Islamabad Pages You Should Read Next</h2>
            </div>
            <div className="card-grid">
              {guideLinks.map((item) => (
                <article key={item.href} className="feature-card reveal">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link className="btn btn-ghost" href={item.href}>Open Page</Link>
                </article>
              ))}
            </div>
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
