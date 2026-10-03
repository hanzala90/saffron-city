import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LeadForm from "@/components/LeadForm";
import PlotBookingForm from "@/components/PlotBookingForm";
import MasterPlanSection from "@/components/MasterPlanSection";

export const metadata = {
  title: "Saffron City Islamabad | Premium Housing Society & Real Estate",
  description:
    "Saffron City Islamabad is a premium RDA-approved housing society on GT Road offering residential & commercial plots, flexible payment plans, and modern infrastructure. Book your Saffron City plot today.",
  alternates: {
    canonical: "https://www.safroncity.com"
  },
  openGraph: {
    title: "Saffron City Islamabad | Premium Housing Society & Real Estate",
    description:
      "Saffron City Islamabad is a premium RDA-approved housing society on GT Road offering residential & commercial plots, flexible payment plans, and modern infrastructure. Book your Saffron City plot today.",
    url: "https://www.safroncity.com",
    siteName: "Saffron City Islamabad",
    locale: "en_PK",
    type: "website"
  }
};

/* ─── JSON-LD Schemas ─────────────────────────────────────── */
const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://www.safroncity.com/#organization",
  name: "Saffron City Islamabad",
  url: "https://www.safroncity.com",
  logo: "https://www.safroncity.com/images/logo.png",
  image: "https://www.safroncity.com/images/master-plan.jpg",
  areaServed: "Islamabad-Rawalpindi",
  description:
    "Saffron City Islamabad is a premium RDA-approved housing society on GT Road offering residential and commercial plots with flexible payment plans and modern infrastructure.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "GT Road",
    addressLocality: "Islamabad",
    addressRegion: "Punjab",
    addressCountry: "PK"
  },
  telephone: "+923315408089",
  sameAs: ["https://www.facebook.com/SaffronCityGTroad"]
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.safroncity.com/"
    }
  ]
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Saffron City Islamabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saffron City Islamabad is a premium planned housing society located on GT Road near the Islamabad–Rawalpindi metropolitan area. It offers RDA-approved residential and commercial plots with modern infrastructure, wide roads, green spaces, and a flexible installment-based payment plan."
      }
    },
    {
      "@type": "Question",
      name: "Is Saffron City Islamabad RDA approved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Saffron City Islamabad holds a valid No Objection Certificate (NOC) from the Rawalpindi Development Authority (RDA), making it a legally secured project for buyers and investors."
      }
    },
    {
      "@type": "Question",
      name: "Where is Saffron City Islamabad located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saffron City Islamabad is located on GT Road in the growth corridor between Islamabad and Rawalpindi. It is easily accessible from DHA, Bahria Town, and the Islamabad Expressway within a short drive."
      }
    },
    {
      "@type": "Question",
      name: "What plot sizes are available in Saffron City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saffron City Islamabad offers residential plots in multiple sizes including 5 Marla, 8 Marla, 10 Marla, and 1 Kanal. Commercial plots are also available for investors looking for business or rental income opportunities."
      }
    },
    {
      "@type": "Question",
      name: "What is the payment plan for Saffron City Islamabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Saffron City Islamabad offers an easy installment-based payment plan with a down payment followed by quarterly or monthly installments. The plan is designed to be accessible for first-time buyers and seasoned investors alike. Visit our Payment Plan page for current pricing."
      }
    },
    {
      "@type": "Question",
      name: "How can I book a plot in Saffron City Islamabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book a plot in Saffron City Islamabad by filling out our online inquiry form, calling our sales office, or visiting our contact page. Our advisors will guide you through the booking process, documentation, and payment options."
      }
    }
  ]
};

/* ─── Data ──────────────────────────────────────────────────── */
const stats = [
  { value: "Multiple", label: "Sectors Planned" },
  { value: "RDA", label: "NOC Approved" },
  { value: "5–1 Kanal", label: "Plot Sizes" },
  { value: "GT Road", label: "Prime Location" }
];

const amenities = [
  { icon: "🕌", label: "Grand Mosque" },
  { icon: "🏫", label: "Schools & Colleges" },
  { icon: "🌳", label: "Parks & Green Belts" },
  { icon: "🏥", label: "Healthcare Facilities" },
  { icon: "🛒", label: "Commercial Zone" },
  { icon: "🛣️", label: "Wide Carpeted Roads" },
  { icon: "🔐", label: "Gated Security" },
  { icon: "💧", label: "Water, Gas & Electricity" }
];

const highlights = [
  "RDA-approved NOC for full legal security",
  "Prime GT Road location minutes from Islamabad",
  "Flexible installment-based payment plan"
];

const ceoVisionPoints = [
  "Build a trusted, legally secure community for families and investors.",
  "Deliver a modern Islamabad-adjacent lifestyle with long-term value.",
  "Keep the project transparent, aspirational, and buyer-friendly from day one."
];

const guideLinks = [
  {
    title: "Saffron City Islamabad — Complete Guide",
    href: "/saffron-city-islamabad",
    text: "Read the full overview of Saffron City Islamabad covering NOC details, sectors, plot categories, location map, and investment potential."
  },
  {
    title: "Saffron City Payment Plan 2024–25",
    href: "/payment-plan",
    text: "View the current Saffron City payment plan with plot-wise pricing, down payment requirements, and quarterly installment schedules."
  },
  {
    title: "Saffron City Islamabad Location",
    href: "/location",
    text: "Explore Saffron City's location on GT Road, nearby landmarks, distance from DHA & Bahria Town, and access routes from Islamabad."
  },
  {
    title: "Why Invest in Saffron City Islamabad",
    href: "/investment",
    text: "Understand why Saffron City Islamabad is considered a top investment opportunity in the Islamabad–Rawalpindi real estate market."
  }
];

const faqs = [
  {
    q: "What is Saffron City Islamabad?",
    a: "Saffron City Islamabad is a premium RDA-approved housing society on GT Road, offering residential and commercial plots with a flexible payment plan, modern amenities, and a legally secured NOC."
  },
  {
    q: "Is Saffron City Islamabad RDA approved?",
    a: "Yes. Saffron City holds a valid No Objection Certificate (NOC) from the Rawalpindi Development Authority (RDA), giving buyers full legal confidence."
  },
  {
    q: "Where is Saffron City located?",
    a: "Saffron City is located on GT Road in the Islamabad–Rawalpindi growth corridor, with easy access to DHA, Bahria Town, and the Islamabad Expressway."
  },
  {
    q: "What plot sizes are available?",
    a: "Saffron City offers 5 Marla, 8 Marla, 10 Marla, and 1 Kanal residential plots, as well as commercial plots for investors."
  },
  {
    q: "What is the payment plan for Saffron City?",
    a: "The project features an easy installment plan with a down payment and quarterly/monthly installments. Visit our Payment Plan page for current pricing."
  },
  {
    q: "How do I book a plot in Saffron City Islamabad?",
    a: "Fill out our inquiry form, call our sales office, or visit the Contact page. Our advisors will guide you through booking and documentation."
  }
];

/* ─── Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <SiteHeader />

      <main>
        {/* ── 1. HERO ──────────────────────────────────────────── */}
        <section id="home" className="hero section" aria-label="Saffron City Islamabad hero">
          <div className="bg-orb orb-1" aria-hidden="true" />
          <div className="bg-orb orb-2" aria-hidden="true" />
          <div className="container hero-grid">
            {/* Left: copy */}
            <div className="hero-copy reveal">
              <p className="kicker">RDA-Approved Housing Society • GT Road, Islamabad</p>
              <h1>
                Saffron City Islamabad — Premium Plots in a Modern, Gated Community
              </h1>
              <p>
                Saffron City is a legally approved, premium housing society near
                Islamabad offering residential and commercial plots with a flexible
                payment plan. Located on GT Road in the heart of the
                Islamabad–Rawalpindi growth corridor, Saffron City is designed for
                families and investors who want long-term value and a modern lifestyle.
              </p>
              <ul className="check-list hero-points">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="/saffron-city-islamabad">
                  Read Full Guide
                </Link>
                <Link className="btn btn-ghost" href="/payment-plan">
                  View Payment Plan
                </Link>
              </div>
            </div>

            {/* Right: master plan + inline form */}
            <div className="hero-right reveal delay-1">
              <Image
                src="/images/master-plan.jpg"
                alt="Saffron City Islamabad master plan — residential and commercial sectors"
                width={1000}
                height={660}
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                quality={90}
                className="hero-master-plan"
              />
              <div className="hero-form-wrap">
                <p className="kicker" style={{ textAlign: "center" }}>
                  Book a Free Consultation
                </p>
                <h2 className="hero-form-title">
                  Get Saffron City Pricing & Availability
                </h2>
                <LeadForm className="lead-form hero-inline-form" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. STATS STRIP ───────────────────────────────────── */}
        <section className="stats-strip" aria-label="Saffron City key facts">
          <div className="container stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. PROJECT OVERVIEW ──────────────────────────────── */}
        <section className="section section-surface" aria-label="Saffron City project overview">
          <div className="container two-col">
            <div className="reveal">
              <p className="kicker">Project Overview</p>
              <h2>Saffron City Islamabad — A Complete, Future-Ready Community</h2>
              <p>
                Saffron City Islamabad is more than a housing society — it is a fully
                planned urban community designed to meet the evolving needs of
                Islamabad's growing population. Spread across multiple sectors on
                GT Road, the project blends smart infrastructure with natural green
                spaces to create a living environment that is both modern and
                family-oriented.
              </p>
              <p>
                The society features wide carpeted roads, an underground utilities
                network, dedicated commercial zones, educational institutions,
                healthcare facilities, and 24/7 gated security. With an
                RDA-approved NOC and a transparent development timeline, Saffron City
                Islamabad stands out as one of the most credible housing investments
                in the Islamabad–Rawalpindi corridor.
              </p>
              <p>
                Whether you are purchasing your first home, upgrading your family
                lifestyle, or diversifying your investment portfolio, Saffron City
                offers the right plot size, the right location, and the right price.
              </p>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="/investment">
                  Why Invest in Saffron City
                </Link>
                <Link className="btn btn-ghost" href="/contact">
                  Book Consultation
                </Link>
              </div>
            </div>
            <aside className="trust-card reveal delay-1" aria-label="Key project highlights">
              <h3>Why Saffron City Stands Out</h3>
              <ul>
                <li>✅ RDA NOC — legally secure for all buyers</li>
                <li>✅ GT Road location — prime Islamabad connectivity</li>
                <li>✅ Multiple plot sizes — 5 Marla to 1 Kanal</li>
                <li>✅ Flexible payment plan with easy installments</li>
                <li>✅ Modern infrastructure & wide roads</li>
                <li>✅ Green belts, parks & open spaces</li>
                <li>✅ Commercial zones for business investment</li>
                <li>✅ 24/7 security & controlled access</li>
              </ul>
            </aside>
          </div>
        </section>

        {/* ── 4. AMENITIES GRID ────────────────────────────────── */}
        <section className="section" aria-label="Saffron City amenities">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">World-Class Amenities</p>
              <h2>Everything a Modern Community Needs — Built into Saffron City</h2>
              <p>
                From spiritual spaces to smart infrastructure, Saffron City Islamabad
                is designed to deliver a complete lifestyle within a single,
                well-planned community.
              </p>
            </div>
            <div className="amenity-grid">
              {amenities.map((a) => (
                <div key={a.label} className="amenity-card reveal">
                  <span className="amenity-icon" aria-hidden="true">{a.icon}</span>
                  <span className="amenity-label">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. LOCATION HIGHLIGHTS ───────────────────────────── */}
        <section className="section section-surface" aria-label="Saffron City location">
          <div className="container two-col">
            <figure className="hero-media reveal">
              <Image
                src="/images/location.jpg"
                alt="Saffron City Islamabad location map — GT Road access and nearby landmarks"
                width={900}
                height={600}
                sizes="(max-width: 900px) 100vw, 46vw"
                quality={90}
              />
            </figure>
            <div className="reveal delay-1">
              <p className="kicker">Location & Connectivity</p>
              <h2>Saffron City Islamabad — Perfectly Positioned on GT Road</h2>
              <p>
                Location is the single biggest driver of real estate value, and
                Saffron City Islamabad is positioned at one of the most strategic
                points in the greater Islamabad area. Situated on GT Road, the
                society enjoys direct access to the Islamabad Expressway, making
                commutes to the city centre fast and convenient.
              </p>
              <ul className="check-list top-gap">
                <li>Minutes from DHA Islamabad & Bahria Town</li>
                <li>Direct GT Road frontage — no service road needed</li>
                <li>Close to Islamabad Expressway & Ring Road</li>
                <li>Nearby schools, hospitals & shopping centres</li>
                <li>Rapid appreciation due to urban expansion</li>
              </ul>
              <div className="hero-cta">
                <Link className="btn btn-primary" href="/location">
                  View Full Location Map
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5.5 MASTER PLAN SECTION ─────────────────────────── */}
        <MasterPlanSection />

        {/* ── 5.6 PLOT AVAILABILITY & BOOKING ─────────────────── */}
        <section
          id="book-plot"
          className="section section-surface plot-booking-section"
          aria-label="Check available plots and book in Saffron City"
        >
          <div className="container">
            <div className="plot-booking-grid">
              {/* Left: info */}
              <div className="reveal">
                <p className="kicker">Available Plots — Book Now</p>
                <h2>Check Plot Availability & Book Your Saffron City Plot Today</h2>
                <p>
                  Saffron City Islamabad has a limited number of residential and
                  commercial plots available across Sector A and Sector B. Plot
                  inventory moves fast — fill in the form and our advisor will
                  confirm availability, share the latest pricing, and guide you
                  through the booking process within hours.
                </p>

                <ul className="check-list top-gap">
                  <li>5 Marla, 8 Marla, 10 Marla & 1 Kanal plots available</li>
                  <li>Corner plots &amp; park-facing options on request</li>
                  <li>Easy installment plan — low down payment</li>
                  <li>Balloting done — possession plots available</li>
                  <li>Dedicated advisor assigned after form submission</li>
                </ul>

                <div className="booking-direct-cta">
                  <p className="kicker" style={{ marginTop: "1.5rem" }}>
                    Prefer to call?
                  </p>
                  <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "0.4rem" }}>
                    <a href="tel:+923315408089" className="btn btn-primary">
                      📞 Call: +92 331 5408089
                    </a>
                    <a
                      href="https://wa.me/923315408089"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                    >
                      💬 WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: booking form */}
              <div className="reveal delay-1">
                <PlotBookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. CEO VISION ────────────────────────────────────── */}
        <section className="section" aria-label="CEO vision for Saffron City">
          <div className="container two-col reverse">
            <div className="reveal">
              <p className="kicker">Leadership Vision</p>
              <h2>Malik Tariq&apos;s Vision for Saffron City Islamabad</h2>
              <p>
                Malik Tariq, CEO of Saffron City, built this project around a single
                principle: every buyer deserves a premium, transparent, and
                aspirational real estate experience. His vision for Saffron City
                Islamabad goes beyond roads and plots — it is about creating a
                community where families feel safe, connected, and proud.
              </p>
              <ul className="check-list top-gap">
                {ceoVisionPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <figure className="hero-media reveal delay-1">
              <Image
                src="/images/Malik-Tariq-Ceo.jpg"
                alt="Malik Tariq, CEO and founder of Saffron City Islamabad housing society"
                width={900}
                height={1100}
                sizes="(max-width: 900px) 100vw, 46vw"
                quality={90}
              />
            </figure>
          </div>
        </section>

        {/* ── 7. RELATED PAGES ─────────────────────────────────── */}
        <section className="section" aria-label="Saffron City Islamabad guide pages">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Explore More</p>
              <h2>Everything About Saffron City Islamabad — In One Place</h2>
              <p>
                Whether you want to check the latest Saffron City payment plan,
                verify the NOC, or understand the investment potential, these pages
                have everything you need.
              </p>
            </div>
            <div className="card-grid">
              {guideLinks.map((item) => (
                <article key={item.href} className="feature-card reveal">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link className="btn btn-ghost" href={item.href}>
                    {item.title.includes("Payment")
                      ? "View Payment Plan"
                      : item.title.includes("Location")
                      ? "View Location Map"
                      : item.title.includes("Invest")
                      ? "Read Investment Guide"
                      : "Read Full Guide"}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ───────────────────────────────────────────── */}
        <section className="section section-surface faq-section" aria-label="Saffron City FAQs">
          <div className="container">
            <div className="section-head reveal">
              <p className="kicker">Frequently Asked Questions</p>
              <h2>Common Questions About Saffron City Islamabad</h2>
              <p>
                Everything buyers and investors ask about Saffron City — answered
                clearly and honestly.
              </p>
            </div>
            <div className="faq-list reveal">
              {faqs.map((faq) => (
                <details key={faq.q} className="faq-item">
                  <summary className="faq-question">{faq.q}</summary>
                  <p className="faq-answer">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. FOOTER CTA ────────────────────────────────────── */}
        <section className="section footer-cta-section" aria-label="Book Saffron City consultation">
          <div className="container footer-cta-inner reveal">
            <div>
              <p className="kicker">Ready to Invest?</p>
              <h2>Book Your Saffron City Islamabad Consultation Today</h2>
              <p>
                Our advisors are available to help you pick the right plot size,
                understand the Saffron City payment plan, and complete your booking —
                all with zero hassle.
              </p>
            </div>
            <div className="footer-cta-actions">
              <Link className="btn btn-primary" href="/contact">
                Book a Free Consultation
              </Link>
              <Link className="btn btn-ghost" href="/payment-plan">
                See Payment Plan
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
