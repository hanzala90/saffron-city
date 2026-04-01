import Link from "next/link";
import Image from "next/image";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "next-seo";

const siteUrl = "https://www.safroncity.com";
const pageUrl = `${siteUrl}/blog/saffron-city-islamabad-5-marla-price`;
const pageTitle = "Saffron City Islamabad 5 Marla Plot Price Guide";
const pageDescription =
  "Understand Saffron City Islamabad 5 Marla pricing structure, booking amount, monthly installments, and total payment outlook.";

export const metadata = {
  title: "Saffron City Islamabad 5 Marla Plot Price",
  description: pageDescription,
  keywords: [
    "Saffron City Islamabad 5 Marla price",
    "Saffron City 5 Marla installment",
    "Saffron City payment plan"
  ],
  alternates: {
    canonical: "/blog/saffron-city-islamabad-5-marla-price"
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "article",
    images: [
      {
        url: `${siteUrl}/images/payment-plan-sector-a.jpeg`,
        width: 900,
        height: 1200,
        alt: "Saffron City payment plan"
      }
    ]
  }
};

const faqs = [
  {
    question: "What is the booking amount for 5 Marla in Saffron City Islamabad?",
    answer: "The current published booking amount for 5 Marla is Rs 400,000."
  },
  {
    question: "What is the monthly installment for 5 Marla?",
    answer: "The current published monthly installment is Rs 40,000 for 30 months."
  },
  {
    question: "Where can I verify updated prices?",
    answer: "Use the official payment plan page or contact the sales team for latest rates and availability."
  }
];

export default function SaffronCity5MarlaPricePage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: siteUrl },
          { name: "Blog", item: `${siteUrl}/blog` },
          { name: "Saffron City Islamabad 5 Marla Price", item: pageUrl }
        ]}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={pageUrl}
        headline={pageTitle}
        image={`${siteUrl}/images/payment-plan-sector-a.jpeg`}
        datePublished="2026-04-01T00:00:00.000Z"
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

      <section className="section page-hero blog-hero">
        <div className="container reveal">
          <p className="kicker">Price Guide</p>
          <h1>Saffron City Islamabad 5 Marla Plot Price Guide</h1>
          <p>
            If you are searching specifically for Saffron City Islamabad 5 Marla price,
            this page gives you the current published structure and what to check before booking.
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
              sizes="(max-width: 900px) 100vw, 70vw"
              quality={88}
            />
            <figcaption>Published payment plan reference for Sector A.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container blog-content reveal">
          <h2>Current 5 Marla Snapshot</h2>
          <ul className="check-list blog-list">
            <li>Booking: Rs 400,000</li>
            <li>30 Monthly Installments: Rs 40,000</li>
            <li>On Possession: Rs 500,000</li>
            <li>Total Plan Value: Rs 2,100,000</li>
          </ul>

          <h2>What Buyers Should Verify</h2>
          <p>
            Before booking, always verify latest inventory, category charges, and timeline details.
            Pre-launch rates can update as development milestones progress.
          </p>

          <div className="hero-cta">
            <Link className="btn btn-primary" href="/payment-plan">View Official Payment Plan</Link>
            <Link className="btn btn-ghost" href="/saffron-city-islamabad">Read Full Saffron City Islamabad Guide</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
