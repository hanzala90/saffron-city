import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = "https://www.safroncity.com";
const pageUrl = `${siteUrl}/saffron-city-islamabad-contact-number`;
const pageTitle = "Saffron City Islamabad Contact Number & Office Address";
const pageDescription =
  "Looking for the official Saffron City Islamabad contact number? Get our verified WhatsApp number, UAN, and head office location to process your bookings safely.";

export const metadata = {
  title: "Saffron City Islamabad Contact Number",
  description: pageDescription,
  keywords: [
    "Saffron City Islamabad contact number",
    "Saffron City WhatsApp number",
    "Saffron City head office",
    "contact Saffron City Islamabad"
  ],
  alternates: {
    canonical: "/saffron-city-islamabad-contact-number"
  }
};

export default function SaffronCityIslamabadContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section page-hero">
          <div className="bg-orb orb-1" aria-hidden="true" />
          <div className="container reveal">
            <p className="kicker">Get in Touch</p>
            <h1>Saffron City Islamabad Contact Number</h1>
            <p>
              Looking to invest or process your pre-launch booking? 
              Reach out to our official representatives via the dedicated <strong>Saffron City Islamabad contact number</strong> below. 
              Always verify you are speaking with an authorized dealer to secure your investment.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="tel:+923001234567">Call Now: +92 300 1234567</Link>
            </div>
          </div>
        </section>

        <section className="section section-surface" id="contact-info">
          <div className="container overflow-hidden">
            <div className="card-grid">
              <div className="feature-card reveal">
                <div className="icon">📱</div>
                <h3>Primary Contact Number</h3>
                <p>Call our dedicated sales line regarding plot availability and booking queries.</p>
                <p style={{ marginTop: "1rem" }}><strong>+92 300 1234567</strong></p>
              </div>
              <div className="feature-card reveal delay-1">
                <div className="icon">💬</div>
                <h3>WhatsApp Booking</h3>
                <p>Overseas Pakistanis can request the booking form directly via our verified WhatsApp.</p>
                <p style={{ marginTop: "1rem" }}><strong>+92 300 1234567</strong></p>
              </div>
              <div className="feature-card reveal delay-2">
                <div className="icon">📍</div>
                <h3>Site Office Location</h3>
                <p>Visit us for a live site tour. Our office is located on the Main GT Road, near Rawat T-Chowk.</p>
                <Link className="btn btn-ghost" style={{ marginTop: "1rem" }} href="/location">View Map</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="fraud-warning">
          <div className="container">
            <div className="trust-card reveal" style={{ borderColor: "rgba(168, 60, 60, 0.4)" }}>
              <h3 style={{ color: "#A83C3C" }}>Important Notice</h3>
              <p>
                To avoid fraudulent transactions, please ensure you are communicating ONLY on the official <em>Saffron City Islamabad contact number</em> provided above. Payments should only be made in favor of the official Saffron Developments bank accounts.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
