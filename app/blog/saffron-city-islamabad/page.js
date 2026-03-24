import Link from "next/link";

export const metadata = {
  title: "Saffron City Islamabad Guide",
  description:
    "Saffron City Islamabad guide covering location highlights, amenities, Sector A payment plan, and long-term investment perspective.",
  keywords: [
    "Saffron City",
    "Saffron City Islamabad",
    "Saffron City payment plan",
    "Saffron City location",
    "Saffron City investment"
  ],
  alternates: {
    canonical: "/blog/saffron-city-islamabad"
  }
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

const paymentSnapshot = [
  "Booking (10%): Rs 400,000 for 5 Marla, Rs 750,000 for 10 Marla, Rs 1,400,000 for 1 Kanal",
  "30 monthly installments: Rs 40,000 for 5 Marla, Rs 75,000 for 10 Marla, Rs 140,000 for 1 Kanal",
  "On possession: Rs 500,000 for 5 Marla, Rs 1,500,000 for 10 Marla, Rs 2,800,000 for 1 Kanal",
  "Total plan value: Rs 2,100,000 for 5 Marla, Rs 4,500,000 for 10 Marla, Rs 8,400,000 for 1 Kanal"
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Saffron City Islamabad: Location, Payment Plan, and Investment Outlook",
  description:
    "A factual Saffron City Islamabad guide based on current website information, including location, amenities, and payment plan details.",
  mainEntityOfPage: "https://saffroncity.pk/blog/saffron-city-islamabad",
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
  },
  about: ["Saffron City", "Islamabad real estate", "payment plan", "property investment"]
};

export default function SaffronCityIslamabadBlogPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section page-hero blog-hero">
        <div className="container reveal">
          <p className="kicker">SEO Blog Post</p>
          <h1>Saffron City Islamabad: Location, Payment Plan, and Investment Outlook</h1>
          <p>
            If you are searching for Saffron City in the Islamabad market, this guide
            brings together the current project information in one place. It is useful
            for both end-users and investors who want a quick, factual overview.
          </p>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container blog-content reveal">
          <h2>Why Saffron City Is Getting Attention</h2>
          <p>
            Saffron City is positioned in a growing urban corridor near Islamabad,
            with a project vision focused on modern planning, practical infrastructure,
            and accessibility to major city points. The development messaging on the
            site consistently highlights premium community planning and long-term value.
          </p>

          <h2>Saffron City Location Highlights</h2>
          <p>
            Location is one of the strongest parts of the project. Based on the current
            location page, Saffron City offers close access to key destinations:
          </p>
          <ul className="check-list blog-list">
            {locationHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            This level of connectivity can support both comfortable daily movement for
            residents and broader demand potential from buyers who prioritize travel time.
          </p>

          <h2>Planned Lifestyle Infrastructure</h2>
          <p>
            The project also communicates a balanced lifestyle setup through community
            and utility planning. Current listed features include:
          </p>
          <ul className="check-list blog-list">
            {amenities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Saffron City Payment Plan Snapshot (Sector A)</h2>
          <p>
            For buyers focused on affordability and cash-flow planning, the available
            Sector A structure includes booking, monthly installments, and possession
            charges. The current published snapshot is:
          </p>
          <ul className="check-list blog-list">
            {paymentSnapshot.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            The payment plan page also notes that pre-launch rates may change and that
            buyers should confirm latest inventory and terms with the sales team.
          </p>

          <h2>Investment Perspective</h2>
          <p>
            The investment section frames Saffron City as a long-term opportunity linked
            with growth-corridor positioning, installment-friendly entry, and future
            resale relevance supported by location and infrastructure planning.
          </p>
          <p>
            In simple terms, the project positioning can suit multiple profiles: families
            planning a home, installment-based buyers, and investors building medium- to
            long-term portfolios.
          </p>

          <h2>Final Takeaway on Saffron City</h2>
          <p>
            Saffron City presents a focused proposition: strategic connectivity,
            planned amenities, and structured payment options near Islamabad. For anyone
            evaluating Saffron City, the next practical step is to verify current
            availability and pricing directly with the official team.
          </p>

          <div className="hero-cta">
            <Link className="btn btn-primary" href="/contact">Request Latest Availability</Link>
            <Link className="btn btn-ghost" href="/payment-plan">View Payment Plan</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
