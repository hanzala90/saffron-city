import Link from "next/link";

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
    excerpt:
      "A practical breakdown of Saffron City covering connectivity, planned amenities, Sector A payment structure, and who can benefit from this project."
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
