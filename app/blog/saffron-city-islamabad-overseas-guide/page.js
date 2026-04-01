import Link from "next/link";
import Image from "next/image";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "next-seo";

const siteUrl = "https://www.safroncity.com";
const pageUrl = `${siteUrl}/blog/saffron-city-islamabad-overseas-guide`;
const pageTitle = "Saffron City Islamabad for Overseas Pakistanis: Buyer Guide";
const pageDescription =
  "A practical overseas buyer guide for Saffron City Islamabad covering due diligence steps, documentation checks, and remote booking workflow.";

export const metadata = {
  title: "Saffron City Islamabad Overseas Buyer Guide",
  description: pageDescription,
  keywords: [
    "Saffron City Islamabad overseas Pakistanis",
    "overseas property investment Islamabad",
    "Saffron City booking process"
  ],
  alternates: {
    canonical: "/blog/saffron-city-islamabad-overseas-guide"
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "article",
    images: [
      {
        url: `${siteUrl}/images/logo.png`,
        width: 200,
        height: 200,
        alt: "Saffron City Logo"
      }
    ]
  }
};

const faqs = [
  {
    question: "Can overseas Pakistanis book in Saffron City Islamabad remotely?",
    answer: "Yes, overseas buyers can usually complete the process remotely by coordinating with the official sales team and verified documentation flow."
  },
  {
    question: "What should overseas buyers verify first?",
    answer: "NOC status, developer documentation, payment schedule details, and official receipt process should be verified first."
  }
];

export default function SaffronCityOverseasGuidePage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: siteUrl },
          { name: "Blog", item: `${siteUrl}/blog` },
          { name: "Saffron City Islamabad Overseas Guide", item: pageUrl }
        ]}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={pageUrl}
        headline={pageTitle}
        image={`${siteUrl}/images/logo.png`}
        datePublished="2026-04-01T00:00:00.000Z"
        dateModified={new Date().toISOString()}
        author="Saffron City"
        description={pageDescription}
      />
      <FAQJsonLd
        questions={faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))}
      />

      <section className="section page-hero blog-hero">
        <div className="container reveal">
          <p className="kicker">Overseas Guide</p>
          <h1>Saffron City Islamabad for Overseas Pakistanis</h1>
          <p>
            This guide is for overseas Pakistanis who want to evaluate Saffron City Islamabad
            without being physically present in Pakistan during the initial process.
          </p>
        </div>
      </section>

      <section className="section section-surface blog-visuals-section">
        <div className="container reveal">
          <figure className="blog-image-card">
            <Image
              src="/images/logo.png"
              alt="Saffron City project brand"
              width={600}
              height={600}
              sizes="(max-width: 900px) 100vw, 50vw"
              quality={90}
            />
            <figcaption>Overseas buyer checklist for Saffron City Islamabad.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container blog-content reveal">
          <h2>Overseas Buyer Checklist</h2>
          <ul className="check-list blog-list">
            <li>Request latest official payment plan and inventory sheet.</li>
            <li>Verify NOC and project approvals with relevant authority references.</li>
            <li>Confirm booking process, receipt issuance, and transfer policy.</li>
            <li>Keep digital copies of all payment proofs and correspondence.</li>
          </ul>

          <h2>Why This Matters</h2>
          <p>
            Remote buyers need clarity and process discipline. A documented, step-by-step
            approach reduces confusion and helps protect capital when investing from abroad.
          </p>

          <div className="hero-cta">
            <Link className="btn btn-primary" href="/saffron-city-islamabad">Read Main Saffron City Islamabad Page</Link>
            <Link className="btn btn-ghost" href="/contact">Contact Official Team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
