import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog",
  description:
    "Explore blog articles about Saffron City, including location benefits, payment plan details, and investment insights.",
  alternates: {
    canonical: "/blog"
  }
};

const posts = [
  {
    title: "Saffron City Islamabad: Location, Payment Plan, and Investment Outlook",
    href: "/blog/saffron-city-islamabad",
    image: "/images/master-plan.jpg",
    imageAlt: "Saffron City master plan map",
    excerpt:
      "A practical breakdown of Saffron City covering connectivity, planned amenities, Sector A payment structure, and who can benefit from this project."
  },
  {
    title: "Saffron City Location Guide: Connectivity and Nearby Landmarks",
    href: "/blog/saffron-city-location-guide",
    image: "/images/master-plan.jpg",
    imageAlt: "Saffron City location and nearby access routes",
    excerpt:
      "A quick guide to Saffron City location advantages, travel convenience, and why connectivity plays a key role for residents and investors."
  },
  {
    title: "Saffron City Payment Plan Explained for New Buyers",
    href: "/blog/saffron-city-payment-plan-guide",
    image: "/images/payment-plan-sector-a.jpeg",
    imageAlt: "Saffron City Sector A payment plan chart",
    excerpt:
      "Understand booking, installments, and possession charges in a simple format so you can plan your budget with confidence."
  },
  {
    title: "Is Saffron City NOC Approved by RDA?",
    href: "/blog/saffron-city-noc-approval",
    image: "/images/noc.jpg",
    imageAlt: "Saffron City NOC approval document",
    excerpt:
      "Verify Saffron City NOC approval status from RDA and understand what regulatory approval means for your investment security."
  }
];

export default function BlogIndexPage() {
  return (
    <main>
      <section className="section page-hero blog-hero">
        <div className="container reveal">
          <p className="kicker">Saffron City Insights</p>
          <h1>Saffron City Blog</h1>
          <p>
            Explore updated, easy-to-read guides based on the current information available
            on our website. This section is designed for buyers and investors researching
            Saffron City near Islamabad.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="feature-card reveal" key={post.href}>
                <div className="blog-card-image">
                  <Image src={post.image} alt={post.imageAlt} width={1200} height={700} />
                </div>
                <p className="kicker">Featured Post</p>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link className="btn btn-primary" href={post.href}>Read Article</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
