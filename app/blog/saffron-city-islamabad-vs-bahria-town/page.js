import Link from "next/link";
import Image from "next/image";
import { ArticleJsonLd, BreadcrumbJsonLd } from "next-seo";

const siteUrl = "https://www.safroncity.com";
const pageUrl = `${siteUrl}/blog/saffron-city-islamabad-vs-bahria-town`;
const pageTitle = "Saffron City Islamabad vs Bahria Town: Comparison Guide";
const pageDescription =
  "Compare Saffron City Islamabad with Bahria Town across location, entry cost, and investment positioning for smarter decision-making.";

export const metadata = {
  title: "Saffron City Islamabad vs Bahria Town",
  description: pageDescription,
  keywords: [
    "Saffron City Islamabad vs Bahria Town",
    "Saffron City comparison",
    "Islamabad housing society comparison"
  ],
  alternates: {
    canonical: "/blog/saffron-city-islamabad-vs-bahria-town"
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
        alt: "Saffron City master plan"
      }
    ]
  }
};

export default function SaffronCityVsBahriaPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: siteUrl },
          { name: "Blog", item: `${siteUrl}/blog` },
          { name: "Saffron City Islamabad vs Bahria Town", item: pageUrl }
        ]}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={pageUrl}
        headline={pageTitle}
        image={`${siteUrl}/images/master-plan.jpg`}
        datePublished="2026-04-01T00:00:00.000Z"
        dateModified={new Date().toISOString()}
        author="Saffron City"
        description={pageDescription}
      />

      <section className="section page-hero blog-hero">
        <div className="container reveal">
          <p className="kicker">Comparison Guide</p>
          <h1>Saffron City Islamabad vs Bahria Town</h1>
          <p>
            This comparison helps buyers evaluate Saffron City Islamabad against Bahria Town
            on factors that usually influence long-term satisfaction and investment outcomes.
          </p>
        </div>
      </section>

      <section className="section section-surface blog-visuals-section">
        <div className="container reveal">
          <figure className="blog-image-card">
            <Image
              src="/images/master-plan.jpg"
              alt="Saffron City location and planning"
              width={1200}
              height={700}
              sizes="(max-width: 900px) 100vw, 70vw"
              quality={88}
            />
            <figcaption>Planning and location perspective for Saffron City Islamabad.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container blog-content reveal">
          <h2>Quick Comparison Points</h2>
          <ul className="check-list blog-list">
            <li>Entry affordability: Saffron City pre-launch structure is designed for installment buyers.</li>
            <li>Location strategy: Saffron City emphasizes GT Road and expansion-corridor access.</li>
            <li>Growth phase: Saffron City offers early-stage upside, while mature projects may carry higher entry cost.</li>
            <li>Buyer profile: Saffron City can suit both first-time buyers and medium-term investors.</li>
          </ul>

          <h2>Decision Framework</h2>
          <p>
            If your priority is lower initial entry with structured monthly payments, Saffron City can be a strong fit.
            If your priority is immediate mature-community settlement, compare timelines and possession readiness carefully.
          </p>

          <div className="hero-cta">
            <Link className="btn btn-primary" href="/saffron-city-islamabad">Explore Saffron City Islamabad Details</Link>
            <Link className="btn btn-ghost" href="/contact">Get One-to-One Advice</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
