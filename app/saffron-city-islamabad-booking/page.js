import Image from "next/image";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "next-seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = "https://www.safroncity.com";
const pageUrl = `${siteUrl}/saffron-city-islamabad-booking`;
const pageTitle = "Saffron City Islamabad Booking | Pre-Launch Rates & Process";
const pageDescription =
  "Secure your Saffron City Islamabad booking today at exclusive pre-launch rates. Complete guide to 5 Marla, 10 Marla & 1 Kanal plot bookings.";

export const metadata = {
  title: "Saffron City Islamabad Booking",
  description: pageDescription,
  keywords: [
    "Saffron City Islamabad booking",
    "Saffron City pre-launch booking",
    "book plot in Saffron City Islamabad",
    "Saffron City Islamabad booking process"
  ],
  alternates: {
    canonical: "/saffron-city-islamabad-booking"
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
        alt: "Saffron City Islamabad Booking"
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

const bookingCosts = [
  { size: "5 Marla", booking: "Rs 400,000", total: "Rs 2,100,000" },
  { size: "10 Marla", booking: "Rs 750,000", total: "Rs 4,500,000" },
  { size: "1 Kanal", booking: "Rs 1,400,000", total: "Rs 8,400,000" }
];

const faqs = [
  {
    question: "How can I process my Saffron City Islamabad booking?",
    answer: "You can book by visiting our authorized sales partners or our corporate office on Main GT Road. You only need to pay the booking amount along with a copy of your CNIC and passport size photos."
  },
  {
    question: "Do you entertain overseas bookings?",
    answer: "Yes, overseas Pakistanis can easily process their Saffron City Islamabad booking online via official bank channel remittances."
  },
  {
    question: "Are these pre-launch prices final?",
    answer: "The current rates are strictly pre-launch. Saffron City Islamabad booking prices will be revised upwards significantly upon official launch."
  }
];

export default function SaffronCityIslamabadBookingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: siteUrl },
          { name: "Saffron City Islamabad", item: `${siteUrl}/saffron-city-islamabad` },
          { name: "Booking", item: pageUrl }
        ]}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={pageUrl}
        headline={pageTitle}
        images={[`${siteUrl}/images/hero-bg.jpg`]}
        datePublished="2026-04-11T00:00:00.000Z"
        dateModified={new Date().toISOString()}
        author="Saffron City"
        description={pageDescription}
      />
      <FAQJsonLd
        questions={faqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer
        }))}
      />
      <SiteHeader />
      <main>
        <section className="section page-hero">
          <div className="bg-orb orb-1" aria-hidden="true" />
          <div className="container reveal">
            <p className="kicker">Secure Your Future Now</p>
            <h1>Saffron City Islamabad Booking Guide</h1>
            <p>
              The highly anticipated pre-launch phase of Saffron City Islamabad is live. 
              As an RDA-approved housing society, early bookings offer unparalleled ROI potential. 
              Explore how you can initiate your Saffron City Islamabad booking process today.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/contact">Book Now</Link>
            </div>
          </div>
        </section>

        <section className="section section-surface" id="booking-costs">
          <div className="container two-col">
            <div className="reveal">
              <p className="kicker">Pre-Launch Rates</p>
              <h2>Booking Amounts & Plot Sizes</h2>
              <p>
                Saffron City Islamabad offers versatile plot sizes. 
                Below are the minimum down payments required to lock your unit before the official price hike.
              </p>
              <table className="pricing-table" style={{ marginTop: "1.5rem" }}>
                <thead>
                  <tr>
                    <th>Plot Size</th>
                    <th>Booking Amount</th>
                    <th>Total Value</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingCosts.map((row) => (
                    <tr key={row.size}>
                      <td><strong>{row.size}</strong></td>
                      <td>{row.booking}</td>
                      <td>{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="trust-card reveal delay-1">
              <h3>Required Documents</h3>
              <p>To finalize your Saffron City Islamabad booking, please prepare:</p>
              <ul className="check-list top-gap">
                <li>2 Passport-sized Photographs</li>
                <li>1 Copy of your CNIC or NICOP</li>
                <li>1 Copy of Next of Kin (Nominee) CNIC</li>
                <li>Booking payment receipt/pay order</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="faqs">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Booking FAQs</p>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="contact-grid">
              <div className="mini-faq reveal delay-1" style={{ width: "100%" }}>
                {faqs.map((faq, idx) => (
                  <details key={idx}>
                    <summary>{faq.question}</summary>
                    <p style={{ marginTop: "0.6rem" }}>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
