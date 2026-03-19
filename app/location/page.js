import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Location Highlights",
  description:
    "Explore Saffron City location highlights, nearby landmarks, and accessibility advantages across Islamabad and Rawalpindi."
};

const locationHighlights = [
  "5 minutes from DHA Islamabad",
  "10 minutes from Bahria Town",
  "Direct access to Islamabad Expressway",
  "Approx. 20 minutes from Zero Point",
  "Seamless route to New Islamabad International Airport"
];

const amenities = [
  "Community parks and family recreation zones",
  "Dedicated commercial activity district",
  "Education and healthcare-ready zones",
  "Underground utility corridors",
  "Smart security and managed access points",
  "Wide roads for smooth mobility"
];

export default function LocationPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section page-hero">
          <div className="container reveal">
            <p className="kicker">Location & Connectivity</p>
            <h1>Well-Connected to Everything That Matters</h1>
            <p>
              Saffron City sits in a strategic growth zone with direct city access,
              helping residents cut commute time while staying close to core urban
              destinations.
            </p>
          </div>
        </section>

        <section className="section section-surface">
          <div className="container two-col reverse">
            <div className="image-wrap reveal">
              <Image
                src="/images/location.jpg"
                alt="Map-style location overview of Saffron City"
                width={950}
                height={600}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="reveal delay-1">
              <h2>Nearby Landmarks</h2>
              <ul className="check-list">
                {locationHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Lifestyle Infrastructure</p>
              <h2>Amenities for Daily Convenience</h2>
            </div>
            <div className="card-grid">
              {amenities.map((item) => (
                <article key={item} className="feature-card reveal">
                  <h3>{item}</h3>
                  <p>
                    Planned to support comfortable and modern family living with long-term usability.
                  </p>
                </article>
              ))}
            </div>
            <div className="hero-cta reveal top-gap">
              <Link className="btn btn-primary" href="/payment-plan">Check Payment Plan</Link>
              <Link className="btn btn-ghost" href="/contact">Talk to Advisor</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
