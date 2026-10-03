import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { OrganizationJsonLd } from "next-seo";
import MobileLeadPopup from "@/components/MobileLeadPopup";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";


const headingFont = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const siteUrl = "https://www.safroncity.com";
const title = "Saffron City Islamabad | Premium Housing Society & Real Estate";
const description =
  "Saffron City Islamabad is a premium RDA-approved housing society on GT Road offering residential & commercial plots, flexible payment plans, and modern infrastructure. Book your Saffron City plot today.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Saffron City Islamabad"
  },
  description,
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" }
    ],
    shortcut: ["/images/logo.png"],
    apple: [
      { url: "/images/logo.png", type: "image/png" }
    ]
  },
  applicationName: "Saffron City Islamabad",
  keywords: [
    "Saffron City",
    "Saffron City Islamabad",
    "Saffron City housing society",
    "Saffron City plots for sale",
    "Saffron City payment plan",
    "Saffron City Islamabad booking",
    "Saffron City Islamabad location",
    "RDA approved housing Islamabad",
    "housing society GT Road Islamabad",
    "property investment Islamabad",
    "residential plots near Islamabad",
    "Islamabad real estate"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Saffron City Islamabad",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/master-plan.jpg",
        width: 1200,
        height: 630,
        alt: "Saffron City Islamabad master plan — premium housing society"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/master-plan.jpg"]
  },
  category: "real estate",
  creator: "Saffron City Islamabad",
  publisher: "Saffron City Islamabad",
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Islamabad",
    "geo.position": "33.6844;73.0479",
    "ICBM": "33.6844, 73.0479"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <OrganizationJsonLd
          type="RealEstateAgent"
          id={`${siteUrl}/#organization`}
          name="Saffron City Islamabad"
          legalName="Saffron City"
          url={siteUrl}
          logo={`${siteUrl}/images/logo.png`}
          image={`${siteUrl}/images/master-plan.jpg`}
          description={description}
          areaServed="Islamabad-Rawalpindi"
          sameAs={["https://www.facebook.com/SaffronCityGTroad"]}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18051387680"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18051387680');
          `}
        </Script>
        {children}
        <MobileLeadPopup />
        <WhatsAppButton />
      </body>
    </html>
  );
}
