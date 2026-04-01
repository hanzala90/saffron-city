import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Saffron City Islamabad Payment Plan",
  description:
    "Review Saffron City Sector A pre-launch payment plan with booking amount, monthly installments, and possession charges."
};

const planRows = [
  {
    label: "Booking (10%)",
    fiveMarla: 400000,
    tenMarla: 750000,
    oneKanal: 1400000
  },
  {
    label: "30 Monthly Installments",
    fiveMarla: 40000,
    tenMarla: 75000,
    oneKanal: 140000
  },
  {
    label: "On Possession",
    fiveMarla: 500000,
    tenMarla: 1500000,
    oneKanal: 2800000
  }
];

const totals = {
  fiveMarla: 2100000,
  tenMarla: 4500000,
  oneKanal: 8400000
};

const paymentCards = [
  {
    title: "Booking",
    value: "10% upfront",
    note: "Secures your selected plot category."
  },
  {
    title: "Installments",
    value: "30 monthly parts",
    note: "Spread the cost over a manageable schedule."
  },
  {
    title: "Possession",
    value: "Final stage payment",
    note: "Completes the payment cycle at possession."
  }
];

const planSizes = [
  { label: "5 Marla", booking: 400000, monthly: 40000, possession: 500000, total: 2100000 },
  { label: "10 Marla", booking: 750000, monthly: 75000, possession: 1500000, total: 4500000 },
  { label: "1 Kanal", booking: 1400000, monthly: 140000, possession: 2800000, total: 8400000 }
];

const terms = [
  "Development charges are included.",
  "Form processing fee is Rs 5,000 (non-refundable).",
  "Prices above are for general plots only.",
  "Pre-launch rates are available for a limited time.",
  "Category charges apply extra in multiples of 10% per category.",
  "Installments must be paid before the 5th of each month.",
  "Payment can be deposited through cheque or pay order.",
  "Prices may change without prior notice during pre-launch.",
  "Utility and possession-related charges are separate where applicable."
];

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-PK", {
    maximumFractionDigits: 0
  }).format(value);

export default function PaymentPlanPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section page-hero">
          <div className="container reveal">
            <p className="kicker">Saffron City Islamabad Payment Plan</p>
            <h1>Saffron City Islamabad Payment Plan</h1>
            <p>
              A clear pricing overview for buyers looking at Saffron City Islamabad. The plan below
              breaks the Sector A structure into booking, monthly installments, and possession stages.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/saffron-city-islamabad">Read Main Guide</Link>
              <Link className="btn btn-ghost" href="/contact">Request Callback</Link>
            </div>
          </div>
        </section>

        <section className="section section-surface">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Plan Overview</p>
              <h2>Saffron City Islamabad Payment Plan Snapshot</h2>
            </div>

            <div className="payment-meta-grid">
              {paymentCards.map((item) => (
                <article key={item.title} className="payment-meta-card reveal">
                  <p className="kicker">{item.title}</p>
                  <h3>{item.value}</h3>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>

            <div className="payment-layout">
              <div className="table-wrap reveal">
                <table className="pricing-table payment-table">
                  <thead>
                    <tr>
                      <th>Plot Size</th>
                      <th>Booking</th>
                      <th>Installments</th>
                      <th>Possession</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planSizes.map((row) => (
                      <tr key={row.label}>
                        <td><strong>{row.label}</strong></td>
                        <td>Rs {formatCurrency(row.booking)}</td>
                        <td>Rs {formatCurrency(row.monthly)}</td>
                        <td>Rs {formatCurrency(row.possession)}</td>
                        <td>Rs {formatCurrency(row.total)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="image-wrap reveal delay-1 payment-image-wrap">
              <Image
                src="/images/payment-plan-sector-a.jpeg"
                alt="Saffron City Sector A payment plan reference"
                width={900}
                height={600}
                sizes="(max-width: 900px) 100vw, 42vw"
                quality={90}
                priority
              />
                <div className="payment-image-caption">
                  <p className="kicker">Sector A Reference</p>
                  <p>Pre-launch plan published for Saffron City Islamabad buyers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div className="reveal">
              <p className="kicker">Terms and Conditions</p>
              <h2>Important Notes for Saffron City Islamabad Buyers</h2>
              <ul className="check-list">
                {terms.map((term) => (
                  <li key={term}>{term}</li>
                ))}
              </ul>
            </div>
            <aside className="trust-card reveal delay-1">
              <h3>Need a booking walkthrough?</h3>
              <p>
                Share your budget and preferred plot category. Our advisor will guide you
                through booking requirements and latest sector inventory.
              </p>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="/contact">Request Callback</Link>
                <Link className="btn btn-ghost" href="/investment">View Investment Insights</Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-surface">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Related Reading</p>
              <h2>Helpful Pages for Saffron City Islamabad Buyers</h2>
            </div>
            <div className="card-grid">
              <article className="feature-card reveal">
                <h3>Saffron City Islamabad Main Guide</h3>
                <p>Understand the broader project context including NOC, location, and investment outlook.</p>
                <Link className="btn btn-ghost" href="/saffron-city-islamabad">Open Main Guide</Link>
              </article>
              <article className="feature-card reveal">
                <h3>Sector A 5 Marla Price Guide</h3>
                <p>Review the focused 5 Marla booking, installment, and total price details.</p>
                <Link className="btn btn-ghost" href="/blog/saffron-city-islamabad-5-marla-price">Read 5 Marla Guide</Link>
              </article>
              <article className="feature-card reveal">
                <h3>Payment Plan Explanation</h3>
                <p>See a plain-language breakdown for first-time buyers researching the plan.</p>
                <Link className="btn btn-ghost" href="/blog/saffron-city-payment-plan-guide">Read Payment Guide</Link>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
