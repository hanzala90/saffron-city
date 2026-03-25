import Link from "next/link";
import Image from "next/image";

const siteUrl = "https://www.safroncity.com";

export const metadata = {
  title: "Saffron City Payment Plan Guide",
  description:
    "A simple guide to Saffron City payment plan structure including booking, installments, and possession charges.",
  alternates: {
    canonical: "/blog/saffron-city-payment-plan-guide"
  },
  openGraph: {
    title: "Saffron City Payment Plan Explained for New Buyers",
    description:
      "Understand booking, installments, and possession charges in a simple format so you can plan your budget with confidence.",
    url: `${siteUrl}/blog/saffron-city-payment-plan-guide`,
    type: "article",
    images: [
      {
        url: `${siteUrl}/images/payment-plan-sector-a.jpeg`,
        width: 900,
        height: 1200,
        alt: "Saffron City payment plan"
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
    title: "Saffron City Payment Plan Explained for New Buyers",
    description:
      "Understand booking, installments, and possession charges in a simple format.",
    image: `${siteUrl}/images/payment-plan-sector-a.jpeg`
  }
};

const planPoints = [
  "Booking amount secures your selected plot category",
  "Monthly installments spread the payment load",
  "Possession charges complete the payment cycle",
  "Different plot sizes follow different payment values",
  "Confirm latest inventory and rates before booking"
];

export default function SaffronCityPaymentPlanGuidePage() {
  return (
    <main>
      <section className="section page-hero blog-hero">
        <div className="container reveal">
          <p className="kicker">Payment Blog</p>
          <h1>Saffron City Payment Plan Explained for New Buyers</h1>
          <p>
            This overview explains the payment plan in plain language so first-time
            buyers can understand the flow from booking to possession.
          </p>
        </div>
      </section>

      <section className="section section-surface blog-visuals-section">
        <div className="container reveal">
          <figure className="blog-image-card">
            <Image
              src="/images/payment-plan-sector-a.jpeg"
              alt="Saffron City Sector A payment plan"
              width={900}
              height={1200}
            />
            <figcaption>Payment plan snapshot for Sector A.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container blog-content reveal">
          <h2>How the Plan Is Structured</h2>
          <p>
            Most payment plans are broken into stages. This gives buyers a clear path
            to manage budget planning over time.
          </p>

          <h2>What to Check Before You Book</h2>
          <ul className="check-list blog-list">
            {planPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Final Note</h2>
          <p>
            Always confirm the latest rates and available inventory before making a
            final decision so your plan matches current project terms.
          </p>

          <div className="hero-cta">
            <Link className="btn btn-primary" href="/payment-plan">View Payment Plan Page</Link>
            <Link className="btn btn-ghost" href="/contact">Request Updated Details</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
