export default function sitemap() {
  return [
    {
      url: "https://www.safroncity.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: "https://www.safroncity.com/location",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: "https://www.safroncity.com/investment",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: "https://www.safroncity.com/payment-plan",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95
    },
    {
      url: "https://www.safroncity.com/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: "https://www.safroncity.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85
    },
    {
      url: "https://www.safroncity.com/blog/saffron-city-islamabad",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.88
    }
  ];
}
