import React from "react";
import type { Metadata } from "next";
import "./globals.css";

const gaMeasurementId = "G-JC89FFK3TM";

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HSX DIECASTING",
  legalName: "Foshan Huashunxiang Hardware Products Factory",
  url: "https://www.hsxdiecasting.com",
  image:
    "https://www.hsxdiecasting.com/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg",
  description:
    "HSX DIECASTING is a Foshan manufacturing factory supplying OEM aluminum die casting parts, LED work lights, automotive and motorcycle LED lights, aluminum light housings, and decorative brake caliper covers for global B2B buyers.",
  email: "mailto:nicolson@hsxdiecasting.com",
  telephone: "+8617666155283",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Huayue Road, National Eco-Industrial Park, Danzao Town",
    addressLocality: "Foshan",
    addressRegion: "Guangdong",
    addressCountry: "CN",
  },
  areaServed: [
    "United States",
    "Europe",
    "Japan",
    "Canada",
    "Australia",
    "Middle East",
    "Southeast Asia",
    "Global B2B Markets",
  ],
  sameAs: ["https://www.linkedin.com/company/hsxdiecasting"],
};


const siteTitle =
  "HSX DIECASTING | OEM Aluminum Die Casting Parts & LED Lights";

const siteDescription =
  "HSX DIECASTING supplies OEM aluminum die casting parts, LED work lights, automotive and motorcycle LED lights, aluminum housings, and decorative caliper covers.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hsxdiecasting.com"),
  title: siteTitle,
  description: siteDescription,
  applicationName: "HSX DIECASTING",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "OEM aluminum die casting parts",
    "small-to-medium aluminum die casting",
    "custom aluminum hardware parts",
    "automotive LED lights supplier",
    "motorcycle LED lights supplier",
    "LED work lights supplier",
    "decorative brake caliper covers",
    "Foshan aluminum die casting factory",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "HSX DIECASTING",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg",
        width: 3159,
        height: 2074,
        alt: "HSX aluminum die casting workshop in Foshan, Guangdong, China",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      "/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "p5-A9neJFC6VmI1MFQeqpYE9U1RYVDYOokamxVXMiu0",
  },
  category: "manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}');
            `,
          }}
        />
              {/* HSX GA4 inquiry click tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function(event) {
                var target = event.target;
                var link = target && target.closest ? target.closest('a') : null;
                if (!link || !window.gtag) return;

                var href = link.getAttribute('href') || '';
                var label = (link.innerText || link.textContent || '').trim();
                var lowerHref = href.toLowerCase();
                var lowerLabel = label.toLowerCase();
                var eventName = '';

                if (lowerHref.indexOf('wa.me') !== -1 || lowerHref.indexOf('whatsapp') !== -1) {
                  eventName = 'whatsapp_click';
                } else if (lowerHref.indexOf('mailto:') === 0) {
                  eventName = 'email_click';
                } else if (lowerHref.indexOf('tel:') === 0) {
                  eventName = 'phone_click';
                } else if (
                  lowerLabel.indexOf('rfq') !== -1 ||
                  lowerLabel.indexOf('inquiry') !== -1 ||
                  lowerLabel.indexOf('quote') !== -1 ||
                  lowerLabel.indexOf('drawings') !== -1 ||
                  lowerLabel.indexOf('contact') !== -1 ||
                  lowerHref.indexOf('#rfq') !== -1 ||
                  lowerHref.indexOf('/contact') !== -1
                ) {
                  eventName = 'inquiry_click';
                }

                if (eventName) {
                  gtag('event', eventName, {
                    link_url: href,
                    link_text: label,
                    page_location: window.location.href
                  });
                }
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
