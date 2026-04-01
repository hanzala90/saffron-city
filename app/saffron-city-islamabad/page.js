import Image from "next/image";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "next-seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = "https://www.safroncity.com";
const pageUrl = `${siteUrl}/saffron-city-islamabad`;
const pageTitle = "Saffron City Islamabad | Location, NOC and Investment Guide";
const pageDescription =
  "Explore Saffron City Islamabad in detail, including NOC status, exact location connectivity, and investment outlook for buyers.";

export const metadata = {
  title: "Saffron City Islamabad",
  description: pageDescription,
  keywords: [
    "Saffron City Islamabad",
    "Saffron City location",
    "Saffron City NOC",
    "Saffron City Islamabad investment"
  ],
  alternates: {
    canonical: "/saffron-city-islamabad"
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
        alt: "Saffron City Islamabad master plan"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [`${siteUrl}/images/master-plan.jpg`]
  }
};

const paymentPlan = [
  { size: "5 Marla", booking: "Rs 400,000", monthly: "Rs 40,000", total: "Rs 2,100,000" },
  { size: "10 Marla", booking: "Rs 750,000", monthly: "Rs 75,000", total: "Rs 4,500,000" },
  { size: "1 Kanal", booking: "Rs 1,400,000", monthly: "Rs 140,000", total: "Rs 8,400,000" }
];

const faqs = [
  {
    question: "Is Saffron City Islamabad RDA approved?",
    answer: "Yes, Saffron City is officially approved by the Rawalpindi Development Authority (RDA). This ensures a 100% legal and secure investment environment."
  },
  {
    question: "Where is Saffron City exactly located?",
    answer: "It is situated at a highly strategic location on the Main GT Road, near the Rawat T-Chowk. It is highly accessible from DHA Islamabad, Bahria Town, and Zero Point."
  },
  {
    question: "Who is the developer behind Saffron City?",
    answer: "The project is spearheaded by Saffron Developments, an alliance of industry-leading real estate developers, renowned contractors, and top-tier urban planners."
  },
  {
    question: "What plot sizes are currently available?",
    answer: "You can book residential plots in sizes of 5 Marla, 10 Marla, and 1 Kanal on a very flexible 30-month installment plan."
  }
];

const relatedPages = [
  {
    title: "Saffron City Islamabad Payment Plan",
    href: "/payment-plan",
    text: "Review booking amounts, installments, and possession charges in one place."
  },
  {
    title: "Saffron City Islamabad Location",
    href: "/location",
    text: "Check access routes and nearby landmarks for daily convenience."
  },
  {
    title: "Saffron City Islamabad 5 Marla Price Guide",
    href: "/blog/saffron-city-islamabad-5-marla-price",
    text: "See the focused 5 Marla price snapshot for Saffron City Islamabad buyers."
  },
  {
    title: "Saffron City Islamabad vs Bahria Town",
    href: "/blog/saffron-city-islamabad-vs-bahria-town",
    text: "Compare Saffron City Islamabad against a known market name for better context."
  }
];

export default function SaffronCityIslamabadPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Home",
            item: siteUrl
          },
          {
            name: "Saffron City Islamabad",
            item: pageUrl
          }
        ]}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={pageUrl}
        headline={pageTitle}
        images={[`${siteUrl}/images/master-plan.jpg`]}
        datePublished="2026-03-01T00:00:00.000Z"
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
        {/* HERO / OVERVIEW */}
        <section className="section page-hero">
          <div className="bg-orb orb-1" aria-hidden="true" />
          <div className="container reveal">
            <p className="kicker">Complete Project Guide</p>
            <h1>Saffron City Islamabad: Location, NOC and Investment Guide</h1>
            <p>
              Saffron City Islamabad is rapidly emerging as the twin cities&apos; most anticipated, RDA-approved luxury housing society. 
              Designed for modern families and smart investors, it bridges the gap between premium living standards and affordable, installment-based pricing. 
              With rapid on-ground development and an impeccable geographical location on the main GT road corridor, Saffron City is rewriting the rules of modern urban living.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/location">View Location Details</Link>
              <Link className="btn btn-ghost" href="/contact">Book Consultation</Link>
            </div>
          </div>
        </section>

        {/* NOC STATUS */}
        <section className="section section-surface" id="noc-status">
          <div className="container two-col">
            <div className="reveal">
              <p className="kicker">Legal & Secure</p>
              <h2>Saffron City Islamabad RDA Approved NOC Status</h2>
              <p>
                One of the most critical factors for any real estate investor is legal security. 
                Saffron City proudly holds an official <strong>No Objection Certificate (NOC)</strong> from the Rawalpindi Development Authority (RDA). 
                This milestone guarantees that the land has been legally acquired, the master planning aligns with urban standards, and your investment remains unconditionally secure.
              </p>
              <ul className="check-list top-gap">
                <li>100% legitimate and safe for overseas Pakistanis</li>
                <li>Clear land ownership titles</li>
                <li>Approved utility allocations for future</li>
              </ul>
            </div>
            <div className="trust-card reveal delay-1">
              <h3>Why an RDA NOC Matters?</h3>
              <p>
                Investing in an approved society prevents legal litigations, guarantees better resale value, and ensures that promised infrastructure—like wide roads and green belts—are enforced by municipal laws.
              </p>
            </div>
          </div>
        </section>

        {/* LOCATION & MAP */}
        <section className="section" id="location">
          <div className="container two-col reverse">
            <div className="reveal">
              <p className="kicker">Strategic Connectivity</p>
              <h2>Saffron City Islamabad Location and Connectivity</h2>
              <p>
                Saffron City is brilliantly situated on the main GT Road, positioned right at the edge of Islamabad’s expansion corridor. 
                It grants immediate access to both Rawalpindi and Islamabad via the Expressway.
              </p>
              <ul className="check-list top-gap">
                <li><strong>10 Minutes</strong> to Rawat T-Chowk</li>
                <li><strong>15 Minutes</strong> to Giga Mall & DHA</li>
                <li><strong>20 Minutes</strong> to Zero Point Islamabad</li>
                <li>Easy connectivity to the New Islamabad International Airport via Rawalpindi Ring Road</li>
              </ul>
            </div>
            <div className="hero-media reveal delay-1">
              <Image
                src="/images/master-plan.jpg"
                alt="Saffron City Islamabad Location Map"
                width={800}
                height={550}
                sizes="(max-width: 900px) 100vw, 50vw"
                quality={88}
                priority
              />
            </div>
          </div>
        </section>

        {/* PAYMENT PLAN */}
        <section className="section section-surface" id="payment-plan">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Project Pricing</p>
              <h2>Saffron City Islamabad Pricing Snapshot</h2>
              <p>
                The current pricing snapshot helps buyers understand the Saffron City Islamabad entry structure and current sector values.
              </p>
            </div>
            <div className="table-wrap reveal delay-1">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Plot Size</th>
                    <th>Booking (Down Payment)</th>
                    <th>Monthly Installment (x30)</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentPlan.map((row) => (
                    <tr key={row.size}>
                      <td><strong>{row.size}</strong></td>
                      <td>{row.booking}</td>
                      <td>{row.monthly}</td>
                      <td>{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="top-gap" style={{ fontSize: "0.85rem", opacity: 0.8 }}>
              * Note: Above prices are exclusive of category charges and may be subject to revision upon official launch.
            </p>
          </div>
        </section>

        {/* DEVELOPERS & LATEST UPDATES TWO-COL */}
        <section className="section" id="developers-updates">
          <div className="container two-col">
            <div className="feature-card reveal">
              <p className="kicker" style={{ color: "var(--brand)" }}>The Team</p>
              <h3>Developers Information</h3>
              <p>
                Saffron City operates under the visionary leadership of <strong>Saffron Developments</strong> in collaboration with reputed town planners, engineering experts, and master architects. 
                The development consortium is known for an aggressive delivery timeline, strict adherence to quality benchmarks, and deploying massive heavy machinery on-site immediately after land acquisition to ensure promises are turned into reality.
              </p>
            </div>
            <div className="feature-card reveal delay-1">
              <p className="kicker" style={{ color: "var(--brand)" }}>Ground Reality</p>
              <h3>Latest Development Updates</h3>
              <p>
                The pace of development at Saffron City is unprecedented. 
                Currently, massive earthwork operations are underway. The grand entrance gate is actively being constructed alongside the main boulevard structure. 
                Land leveling for Sector A and preliminary demarcations for residential plots are being prioritized to offer early possession to pioneer investors.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-surface" id="related-pages">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Related Pages</p>
              <h2>More Pages About Saffron City Islamabad</h2>
            </div>
            <div className="card-grid">
              {relatedPages.map((page) => (
                <article key={page.href} className="feature-card reveal">
                  <h3>{page.title}</h3>
                  <p>{page.text}</p>
                  <Link className="btn btn-ghost" href={page.href}>Open Guide</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROS AND CONS */}
        <section className="section section-surface" id="pros-cons">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Expert Analysis</p>
              <h2>Pros & Cons of Investing</h2>
              <p>An honest evaluation helps you make an informed financial decision.</p>
            </div>
            <div className="two-col">
              <div className="trust-card reveal">
                <h3 style={{ color: "#548857" }}>The Pros (Advantages)</h3>
                <ul className="check-list">
                  <li><strong>100% RDA Approved:</strong> No risk of legal shutdowns.</li>
                  <li><strong>Strategic Location:</strong> Immediate access to the twin cities&apos; main arteries.</li>
                  <li><strong>Affordability:</strong> Excellent pre-launch rates that guarantee high ROI upon maturation.</li>
                  <li><strong>Fast-Paced Development:</strong> Visible on-ground work builds immense credibility.</li>
                </ul>
              </div>
              <div className="trust-card reveal delay-1" style={{ borderColor: "rgba(168, 60, 60, 0.4)" }}>
                <h3 style={{ color: "#A83C3C", marginBottom: "1.3rem" }}>The Cons (Drawbacks)</h3>
                <ul className="check-list check-list-cons">
                  <li style={{ color: "var(--text)" }}><strong>Early Development Stage:</strong> Not suited for buyers looking to construct a house immediately; possession will take time.</li>
                  <li style={{ color: "var(--text)" }}><strong>Price Increases:</strong> The highly lucrative pre-launch rates are temporary and will surge very soon, creating FOMO.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="section" id="faqs">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Have Questions?</p>
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
              <aside className="trust-card reveal delay-1">
                <h3>Still Unsure?</h3>
                <p>If you have any specific query regarding commercial plots or overseas bookings, our expert real estate agents are standing by.</p>
                <Link className="btn btn-primary" style={{ marginTop: "1rem" }} href="/contact">Contact Us Now</Link>
              </aside>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
