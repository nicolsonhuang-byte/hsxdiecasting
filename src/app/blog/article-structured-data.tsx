import type { Metadata } from "next";

type ArticleStructuredDataProps = {
  title: string;
  description: string;
  path: string;
};

const articleImage =
  "/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg";

export function buildArticleMetadata({
  title,
  description,
  path,
}: ArticleStructuredDataProps): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title,
      description,
      url: path,
      images: [
        {
          url: articleImage,
          alt: "HSX aluminum die casting workshop",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [articleImage],
    },
  };
}

export function ArticleStructuredData({
  title,
  description,
  path,
}: ArticleStructuredDataProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: `https://www.hsxdiecasting.com${articleImage}`,
    mainEntityOfPage: `https://www.hsxdiecasting.com${path}`,
    author: {
      "@type": "Organization",
      name: "HSX DIECASTING",
      url: "https://www.hsxdiecasting.com",
    },
    publisher: {
      "@type": "Organization",
      name: "HSX DIECASTING",
      url: "https://www.hsxdiecasting.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
