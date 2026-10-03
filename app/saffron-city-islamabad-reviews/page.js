import Image from "next/image";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "next-seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = "https://www.safroncity.com";
const pageUrl = `${siteUrl}/saffron-city-islamabad-reviews`;
const pageTitle = "Saffron City Islamabad Reviews & Market Analysis";
const pageDescription =
  "Read genuine Saffron City Islamabad reviews, investor feedback, and expert analysis on why it's the fastest-growing housing project on GT Road.";

export const metadata = {
  title: "Saffron City Islamabad Reviews",
  description: pageDescription,
  keywords: [
    "Saffron City Islamabad reviews",
    "Saffron City investor feedback",
    "is Saffron City Islamabad good investment",
    "Saffron City pros and cons"
  ],
  alternates: {
    canonical: "https://www.safroncity.com/saffron-city-islamabad-reviews"
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
        alt: "Saffron City Islamabad Reviews"
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

const faqs = [
  {
    question: "Do investors recommend Saffron City Islamabad?",
    answer: "Yes, the Saffron City Islamabad reviews from early investors are highly positive, primarily due to the RDA NOC approval and aggressive pace of on-ground development."
  },
  {
    question: "What are the common concerns in Saffron City reviews?",
    answer: "The only common concern is that it is a developing society, so possession will take some time compared to fully developed sectors. However, this is offset by the highly affordable pre-launch pricing."
  }
];

export default function SaffronCityIslamabadReviewsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: siteUrl },
          { name: "Saffron City Islamabad", item: `${siteUrl}/saffron-city-islamabad` },
          { name: "Reviews", item: pageUrl }
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
            <p className="kicker">Real Market Feedback</p>
            <h1>Saffron City Islamabad Reviews</h1>
            <p>
              When considering a real estate investment, verified feedback is crucial. 
              The consensus among major real estate consultants and early buyers is that Saffron City Islamabad presents a once-in-a-decade investment opportunity.
            </p>
          </div>
        </section>

        <section className="section section-surface" id="market-analysis">
          <div className="container overflow-hidden">
            <div className="section-head reveal">
              <p className="kicker">Why Investors Trust Us</p>
              <h2>What Saffron City Islamabad Reviews Highlight</h2>
            </div>
            
            <div className="card-grid">
              <div className="feature-card reveal">
                <div className="icon">🏆</div>
                <h3>Regulatory Approval</h3>
                <p>
                  Most <strong>Saffron City Islamabad reviews</strong> praise the society's swift acquisition of the RDA NOC. 
                  This removes the anxiety typically associated with new pre-launch projects in the region.
                </p>
              </div>
              <div className="feature-card reveal delay-1">
                <div className="icon">🚀</div>
                <h3>Pace of Development</h3>
                <p>
                  Reviewers frequently mention the heavy machinery working round the clock. 
                  Unlike many societies that sell files and wait to develop, Saffron City is physically developing the land as we speak.
                </p>
              </div>
              <div className="feature-card reveal delay-2">
                <div className="icon">💸</div>
                <h3>Capital Appreciation</h3>
                <p>
                  Real estate agents note in their <em>Saffron City Islamabad reviews</em> that the strategic location near Rawat T-Chowk inherently guarantees property value appreciation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faqs">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Q&A</p>
              <h2>Review FAQs</h2>
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
