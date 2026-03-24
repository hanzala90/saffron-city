import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = "https://saffroncity.pk";
const logoUrl = "https://saffroncity.pk/images/logo.png";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Blog",
    template: "%s | Saffron City Blog"
  },
  description:
    "Read Saffron City blog updates covering location, investment potential, NOC approval, and payment plan insights near Islamabad.",
  keywords: [
    "Saffron City blog",
    "Saffron City NOC",
    "Saffron City payment plan",
    "Saffron City location",
    "Islamabad real estate"
  ],
  openGraph: {
    title: "Saffron City Blog",
    description:
      "Read Saffron City blog updates covering location, investment potential, NOC approval, and payment plan insights near Islamabad.",
    url: `${siteUrl}/blog`,
    siteName: "Saffron City",
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: logoUrl,
        width: 200,
        height: 200,
        alt: "Saffron City Logo",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Saffron City Blog",
    description:
      "Read Saffron City blog updates covering location, investment potential, NOC approval, and payment plan insights.",
    images: [logoUrl],
    creator: "@saffroncity"
  }
};

export default function BlogLayout({ children }) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
