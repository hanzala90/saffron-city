import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <p>© {new Date().getFullYear()} Saffron City. All rights reserved.</p>
        <Link href="/payment-plan" aria-label="View payment plan">View Payment Plan</Link>
      </div>
    </footer>
  );
}
