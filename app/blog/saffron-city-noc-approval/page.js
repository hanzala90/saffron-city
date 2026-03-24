import Link from "next/link";
import Image from "next/image";

const siteUrl = "https://saffroncity.pk";

export const metadata = {
  title: "Is Saffron City NOC Approved by RDA",
  description:
    "Verify Saffron City NOC approval status from RDA and understand what NOC approval means for your investment and property security.",
  alternates: {
    canonical: "/blog/saffron-city-noc-approval"
  },
  openGraph: {
    title: "Is Saffron City NOC Approved by RDA?",
    description:
      "Verify Saffron City NOC approval status from RDA and understand what regulatory approval means for your investment security.",
    url: `${siteUrl}/blog/saffron-city-noc-approval`,
    type: "article",
    images: [
      {
        url: `${siteUrl}/images/noc.jpg`,
        width: 1200,
        height: 700,
        alt: "Saffron City NOC approval"
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
    title: "Is Saffron City NOC Approved by RDA?",
    description:
      "Verify NOC approval status and understand what regulatory approval means for your investment.",
    image: `${siteUrl}/images/noc.jpg`
  }
};

const nocPoints = [
  "NOC stands for No Objection Certificate issued by the relevant authority",
  "RDA approval confirms the project follows planning and legal guidelines",
  "NOC clearance gives buyers confidence about project legitimacy",
  "Approved projects have undergone regulatory review and compliance checks",
  "Always verify current NOC status directly with the sales team"
];

export default function SaffronCityNocApprovalPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Is Saffron City NOC Approved by RDA",
            description:
              "Verify Saffron City NOC approval status and understand the importance of project regulatory clearance.",
            mainEntityOfPage: "https://saffroncity.pk/blog/saffron-city-noc-approval",
            author: {
              "@type": "Organization",
              name: "Saffron City"
            },
            publisher: {
              "@type": "Organization",
              name: "Saffron City",
              logo: {
                "@type": "ImageObject",
                url: "https://saffroncity.pk/images/logo.png"
              }
            }
          })
        }}
      />

      <section className="section page-hero blog-hero">
        <div className="container reveal">
          <p className="kicker">Regulatory Blog</p>
          <h1>Is Saffron City NOC Approved by RDA?</h1>
          <p>
            NOC approval is a critical factor for any real estate project. This guide
            explains what NOC means, why it matters, and how it relates to your investment
            confidence.
          </p>
        </div>
      </section>

      <section className="section section-surface blog-visuals-section">
        <div className="container reveal">
          <figure className="blog-image-card">
            <Image
              src="/images/noc.jpg"
              alt="Saffron City NOC approval document from RDA"
              width={1200}
              height={700}
            />
            <figcaption>RDA NOC approval for Saffron City project.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container blog-content reveal">
          <h2>What Is NOC and Why Does It Matter?</h2>
          <p>
            NOC (No Objection Certificate) is formal approval from the relevant regulatory
            authority confirming that a real estate project meets planning, legal, and
            infrastructure standards. For Saffron City, NOC from RDA (Rawalpindi Development
            Authority) or similar Islamabad-area regulators is a key compliance milestone.
          </p>

          <h2>Key Points About NOC Approval</h2>
          <ul className="check-list blog-list">
            {nocPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Why Buyers Should Care</h2>
          <p>
            Projects with NOC approval have passed regulatory scrutiny. This reduces legal
            and compliance risk, making them more attractive to both end-users and investors.
            It signals that the developer has followed proper channels and planning rules.
          </p>

          <h2>How to Verify</h2>
          <p>
            If you are considering Saffron City, ask the sales team to provide proof of
            current NOC status. This is a legitimate question and a sign of a serious buyer.
            Reputable projects welcome this inquiry and provide documentation.
          </p>

          <h2>Final Takeaway</h2>
          <p>
            NOC approval is a positive signal. For Saffron City, it demonstrates that the
            project has met regulatory standards. Always verify the current status and keep
            proof of approval for your records.
          </p>

          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">Request NOC Documentation</Link>
            <Link className="btn btn-ghost" href="/investment">Explore Investment Details</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
