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
    "Custom OEM aluminum die-cast parts based on drawings, samples, and project requirements. HSX supports aluminum die casting, selected secondary operations, finishing, QC, and packing in Foshan, China.",
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
  "HSX DIECASTING | OEM Aluminum Die Casting Manufacturer";

const siteDescription =
  "Custom OEM aluminum die-cast parts based on drawings, samples, and project requirements. HSX supports aluminum die casting, selected secondary operations, finishing, QC, and packing in Foshan, China.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hsxdiecasting.com"),
  title: siteTitle,
  description: siteDescription,
  applicationName: "HSX DIECASTING",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "OEM aluminum die casting manufacturer",
    "custom aluminum die casting",
    "aluminum die cast parts",
    "aluminum die casting factory",
    "custom die cast parts",
    "aluminum die casting supplier",
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
        {/* HSX GA4 conversion click tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function getAnalyticsLinkPath(href) {
                try {
                  var url = new URL(href, window.location.href);
                  var pathname = url.pathname;

                  while (pathname.length > 1 && pathname.endsWith('/')) {
                    pathname = pathname.slice(0, -1);
                  }

                  return pathname;
                } catch (error) {
                  return '';
                }
              }

              function getAnalyticsLinkUrl(eventName, href) {
                if (eventName === 'email_click') return 'mailto:';
                if (eventName === 'whatsapp_click') return 'whatsapp:';
                if (eventName === 'phone_click') return 'tel:';

                try {
                  var url = new URL(href, window.location.href);
                  return url.origin === window.location.origin
                    ? url.pathname
                    : url.origin + url.pathname;
                } catch (error) {
                  return '';
                }
              }

              function getAnalyticsCtaLocation(link) {
                if (link.closest('footer')) return 'footer';
                if (link.closest('header')) return 'header';

                var pagePath = window.location.pathname;
                if (pagePath === '/b2b-oem-project-review') return 'project_review';
                if (pagePath.indexOf('/products/') === 0) return 'product_page';
                if (pagePath.indexOf('/blog/') === 0) return 'blog';
                if (pagePath === '/') return 'homepage';

                return 'page';
              }

              document.addEventListener('click', function(event) {
                var target = event.target;
                var link = target && target.closest ? target.closest('a') : null;
                if (!link || !window.gtag) return;

                var href = link.getAttribute('href') || '';
                var label = (link.innerText || link.textContent || '').trim();
                var lowerHref = href.toLowerCase();
                var linkPath = getAnalyticsLinkPath(href);
                var currentPagePath = getAnalyticsLinkPath(window.location.href);
                var explicitEvent = link.getAttribute('data-ga-event') || '';
                var eventName = '';

                if (lowerHref.indexOf('wa.me') !== -1 || lowerHref.indexOf('whatsapp') !== -1) {
                  eventName = 'whatsapp_click';
                } else if (lowerHref.indexOf('mailto:') === 0) {
                  eventName = 'email_click';
                } else if (lowerHref.indexOf('tel:') === 0) {
                  eventName = 'phone_click';
                } else if (
                  linkPath === '/b2b-oem-project-review' &&
                  currentPagePath !== '/b2b-oem-project-review'
                ) {
                  eventName = 'request_project_review';
                } else if (explicitEvent === 'inquiry_click') {
                  eventName = 'inquiry_click';
                }

                if (eventName) {
                  var safeLabel = label;
                  if (eventName === 'email_click') safeLabel = 'Email';
                  if (eventName === 'whatsapp_click') safeLabel = 'WhatsApp';
                  if (eventName === 'phone_click') safeLabel = 'Phone';

                  gtag('event', eventName, {
                    link_url: getAnalyticsLinkUrl(eventName, href),
                    link_text: safeLabel,
                    page_path: window.location.pathname,
                    cta_location: getAnalyticsCtaLocation(link)
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
