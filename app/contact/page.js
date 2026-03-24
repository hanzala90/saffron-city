import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Contact & Booking",
  description:
    "Contact Saffron City team to get payment details, inventory updates, and booking assistance."
};

const faqs = [
  {
    q: "What details will I receive after submitting the form?",
    a: "You will get a callback with available plot options, current pricing, and booking guidance based on your selected interest."
  },
  {
    q: "Can I book with installments?",
    a: "Yes, installment-based options are available under the current payment plan structure."
  },
  {
    q: "How quickly does the team respond?",
    a: "Most leads are contacted within business hours, often on the same day."
  }
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section contact-section">
          <div className="container contact-grid">
            <div className="reveal">
              <p className="kicker">Lead Consultation</p>
              <h1>Get Current Pricing, Availability, and Booking Guidance</h1>
              <p>
                Fill out the form and our property advisor will contact you with updated
                options, payment schedules, and next-step booking support.
              </p>
              <div className="mini-faq">
                {faqs.map((item) => (
                  <details key={item.q}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
