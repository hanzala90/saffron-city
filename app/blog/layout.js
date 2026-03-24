import BlogHeader from "@/components/BlogHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: {
    default: "Blog",
    template: "%s | Saffron City Blog"
  },
  description:
    "Read Saffron City blog updates covering location, investment potential, and payment plan insights near Islamabad."
};

export default function BlogLayout({ children }) {
  return (
    <>
      <BlogHeader />
      {children}
      <SiteFooter />
    </>
  );
}
