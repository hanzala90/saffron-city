import Image from "next/image";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = "https://www.safroncity.com";
const pageUrl = `${siteUrl}/saffron-city-islamabad-development-updates`;
const pageTitle = "Saffron City Islamabad Development Updates | Latest Progress";
const pageDescription =
  "Catch the latest Saffron City Islamabad development updates. View ground reality, fast-paced earthwork progress, and expected possession timelines.";

export const metadata = {
  title: "Saffron City Islamabad Development Updates",
  description: pageDescription,
  keywords: [
    "Saffron City Islamabad development updates",
    "Saffron City latest progress",
    "Saffron City possession timeline",
    "Saffron City construction status"
  ],
  alternates: {
    canonical: "/saffron-city-islamabad-development-updates"
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "article",
    images: [
      {
        url: `${siteUrl}/images/hero-bg.jpg`,
        width: 1200,
        height: 700,
        alt: "Saffron City Islamabad Development"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${siteUrl}/images/hero-bg.jpg`]
  }
};

export default function SaffronCityIslamabadDevelopmentPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: siteUrl },
          { name: "Saffron City Islamabad", item: `${siteUrl}/saffron-city-islamabad` },
          { name: "Development Updates", item: pageUrl }
        ]}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={pageUrl}
        headline={pageTitle}
        datePublished="2026-04-11T00:00:00.000Z"
        dateModified={new Date().toISOString()}
        author="Saffron City"
        description={pageDescription}
      />
      
      <SiteHeader />
      <main>
        <section className="section page-hero">
          <div className="bg-orb orb-1" aria-hidden="true" />
          <div className="container reveal">
            <p className="kicker">Ground Reality</p>
            <h1>Saffron City Islamabad Development Updates</h1>
            <p>
              Witness the transformation. The latest <strong>Saffron City Islamabad development updates</strong> showcase an aggressive construction pace, proving developer commitment and securing early possession for investors.
            </p>
          </div>
        </section>

        <section className="section section-surface" id="current-status">
          <div className="container two-col">
            <div className="reveal">
              <p className="kicker">Phase 1 Delivery</p>
              <h2>Current Earthwork & Construction Status</h2>
              <p>
                Unlike projects that sell on paper alone, Saffron City mobilized heavy machinery onto the site immediately following official NOC approval.
              </p>
              <ul className="check-list top-gap">
                <li><strong>Main Boulevard:</strong> Extensive leveling and paving work is currently underway.</li>
                <li><strong>Sector A Demarcations:</strong> Land mapping for the earliest balloting is in the final stages.</li>
                <li><strong>Grand Entrance:</strong> The iconic gate architecture is receiving structural framing.</li>
              </ul>
            </div>
            <div className="trust-card reveal delay-1">
              <h3>Expected Possession Timeline</h3>
              <p>
                With the current pace of these Saffron City Islamabad development updates, experts project that early possession for Phase 1 (Sector A) blocks may be granted well ahead of the official 30-month payment plan conclusion.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="call-to-action">
          <div className="container" style={{ textAlign: "center" }}>
            <div className="trust-card reveal" style={{ maxWidth: "700px", margin: "0 auto" }}>
              <h2>Book Before The Price Hikes</h2>
              <p>
                As development milestones are rapidly achieved, property values inevitably increase. 
                Secure your booking today at pre-launch rates.
              </p>
              <Link className="btn btn-primary" style={{ marginTop: "1.5rem" }} href="/saffron-city-islamabad-booking">
                View Pre-Launch Rates
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
