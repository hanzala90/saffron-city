import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Investment Potential",
  description:
    "Discover why Saffron City is positioned as a strong long-term investment opportunity near Islamabad."
};

const investmentPoints = [
  {
    title: "Strategic growth corridor",
    text: "Located near expanding urban links, the project benefits from improving infrastructure and rising demand for well-planned communities."
  },
  {
    title: "Balanced entry options",
    text: "Flexible payment structures make participation easier for both first-time buyers and experienced investors building long-term portfolios."
  },
  {
    title: "Lifestyle + value proposition",
    text: "The master-planned layout supports both livability and future resale appeal through practical amenities and connectivity."
  }
];

const buyerTypes = [
  "End-users planning a modern family home",
  "Investors targeting capital growth potential",
  "Clients seeking installment-based acquisition",
  "Portfolio buyers diversifying into plotted developments"
];

export default function InvestmentPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section page-hero">
          <div className="container reveal">
            <p className="kicker">Investment Potential</p>
            <h1>Built for Confidence Today and Appreciation Tomorrow</h1>
            <p>
              Saffron City is positioned to align with modern buyer behavior: legal clarity,
              location leverage, and practical affordability in one coherent project offering.
            </p>
          </div>
        </section>

        <section className="section section-surface">
          <div className="container insight-grid">
            {investmentPoints.map((point, index) => (
              <article className="insight-card reveal" key={point.title} style={{ animationDelay: `${index * 120}ms` }}>
                <h2>{point.title}</h2>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div className="reveal">
              <p className="kicker">Who is this for</p>
              <h2>Buyer Profiles We Commonly Support</h2>
              <ul className="check-list">
                {buyerTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <aside className="trust-card reveal delay-1">
              <h3>Next Smart Step</h3>
              <p>
                Review the latest sector pricing and talk with an advisor to match your
                budget with current inventory.
              </p>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="/payment-plan">Review Pricing</Link>
                <Link className="btn btn-ghost" href="/contact">Request Consultation</Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
