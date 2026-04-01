import Link from "next/link";
import Image from "next/image";
import { ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";

const siteUrl = "https://www.safroncity.com";
const pageUrl = `${siteUrl}/blog/saffron-city-location-guide`;
const pageTitle = "Saffron City Location Guide: Connectivity and Nearby Landmarks";
const pageDescription =
  "A practical Saffron City location guide covering connectivity, nearby destinations, and why access matters for buyers and investors.";

export const metadata = {
  title: "Saffron City Location Guide",
  description: pageDescription,
  alternates: {
    canonical: "/blog/saffron-city-location-guide"
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "article",
    images: [
      {
        url: `${siteUrl}/images/master-plan.jpg`,
        width: 1200,
        height: 700,
        alt: "Saffron City location map"
      },
      {
        url: `${siteUrl}/images/logo.png`,
        width: 200,
        height: 200,
        alt: "Saffron City Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Saffron City Location Guide: Connectivity and Nearby Landmarks",
    description:
      "Location advantages, travel convenience, and why connectivity plays a key role.",
    image: `${siteUrl}/images/master-plan.jpg`
  }
};

const keyPoints = [
  "Direct access to major city routes",
  "Close reach to DHA Islamabad and Bahria Town",
  "Reasonable drive to Zero Point and airport corridors",
  "Improved convenience for daily commuters",
  "Stronger demand potential from location-focused buyers"
];

export default function SaffronCityLocationGuidePage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: siteUrl },
          { name: "Blog", item: `${siteUrl}/blog` },
          { name: "Saffron City Location Guide", item: pageUrl }
        ]}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={pageUrl}
        headline={pageTitle}
        image={`${siteUrl}/images/master-plan.jpg`}
        datePublished="2026-03-20T00:00:00.000Z"
        dateModified={new Date().toISOString()}
        author="Saffron City"
        description={pageDescription}
      />
      <section className="section page-hero blog-hero">
        <div className="container reveal">
          <p className="kicker">Location Blog</p>
          <h1>Saffron City Location Guide: Connectivity and Nearby Landmarks</h1>
          <p>
            Location is one of the strongest decision factors in real estate. This guide
            explains why Saffron City connectivity supports both practical living and
            long-term investment confidence.
          </p>
        </div>
      </section>

      <section className="section section-surface blog-visuals-section">
        <div className="container reveal">
          <figure className="blog-image-card">
            <Image
              src="/images/master-plan.jpg"
              alt="Master plan and surrounding connectivity"
              width={1200}
              height={700}
              sizes="(max-width: 900px) 100vw, 70vw"
              quality={88}
            />
            <figcaption>Connectivity-focused view of Saffron City.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container blog-content reveal">
          <h2>Why Connectivity Matters</h2>
          <p>
            Projects with better access usually attract stronger buyer interest because
            they reduce travel friction and improve day-to-day convenience.
          </p>

          <h2>Key Location Highlights</h2>
          <ul className="check-list blog-list">
            {keyPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Final Note</h2>
          <p>
            If location is your priority, Saffron City offers a balanced position near
            major urban destinations while maintaining long-term growth potential.
          </p>

          <div className="hero-cta">
            <Link className="btn btn-primary" href="/location">Explore Full Location Page</Link>
            <Link className="btn btn-ghost" href="/contact">Book Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
