import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Sector A Payment Plan",
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
            <p className="kicker">Sector A Pricing</p>
            <h1>Saffron City Payment Plan</h1>
            <p>
              Payment details below are structured from your provided Sector A plan image.
              For the latest availability and inventory status, contact the sales team.
            </p>
          </div>
        </section>

        <section className="section section-surface">
          <div className="container two-col">
            <div className="reveal">
              <h2>Plan Snapshot</h2>
              <div className="table-wrap">
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Mode of Payment</th>
                      <th>5 Marla</th>
                      <th>10 Marla</th>
                      <th>1 Kanal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planRows.map((row) => (
                      <tr key={row.label}>
                        <td>{row.label}</td>
                        <td>Rs {formatCurrency(row.fiveMarla)}</td>
                        <td>Rs {formatCurrency(row.tenMarla)}</td>
                        <td>Rs {formatCurrency(row.oneKanal)}</td>
                      </tr>
                    ))}
                    <tr className="table-total">
                      <td>Total Plan Value</td>
                      <td>Rs {formatCurrency(totals.fiveMarla)}</td>
                      <td>Rs {formatCurrency(totals.tenMarla)}</td>
                      <td>Rs {formatCurrency(totals.oneKanal)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="image-wrap reveal delay-1">
              <Image
                src="/images/payment-plan-sector-a.jpeg"
                alt="Saffron City Sector A payment plan reference"
                width={900}
                height={600}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div className="reveal">
              <p className="kicker">Terms and Conditions</p>
              <h2>Important Notes for Buyers</h2>
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
      </main>
      <SiteFooter />
    </>
  );
}
