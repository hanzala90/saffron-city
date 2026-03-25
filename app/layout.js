import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
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
const title = "Saffron City Islamabad | Premium Real Estate & Housing Society";
const description =
  "Invest in Saffron City Islamabad, the top premium housing society offering modern infrastructure, prime location, and flexible payment plans. Book your Saffron City plot today.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Saffron City"
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
  applicationName: "Saffron City",
  keywords: [
    "Saffron City",
    "Islamabad real estate",
    "housing society near Islamabad",
    "RDA approved project",
    "property investment Pakistan"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Saffron City",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/master-plan.jpg",
        width: 1200,
        height: 630,
        alt: "Master plan view of Saffron City"
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
  creator: "Saffron City",
  publisher: "Saffron City"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        {children}
        <MobileLeadPopup />
        <WhatsAppButton />
      </body>
    </html>
  );
}
