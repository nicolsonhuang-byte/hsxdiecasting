import type { ReactNode } from "react";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "OEM Aluminum Die Casting Parts Manufacturing",
  serviceType: "OEM Aluminum Die Casting Manufacturing",
  url: "https://www.hsxdiecasting.com/products/oem-aluminum-die-casting-parts",
  description:
    "OEM aluminum die casting manufacturing service for lighting housings, lamp brackets, light enclosure shells, covers, end caps, compact aluminum parts, drilling, tapping, finishing, and RFQ evaluation from drawings, 3D files, sample photos, or project requirements.",
  provider: {
    "@type": "Organization",
    name: "Foshan Huashunxiang Hardware Products Factory",
    url: "https://www.hsxdiecasting.com/",
    brand: {
      "@type": "Brand",
      name: "HSX DIECASTING",
    },
  },
  areaServed: "Worldwide",
  audience: [
    {
      "@type": "BusinessAudience",
      audienceType:
        "B2B buyers, wholesalers, importers, distributors, lighting brands, and OEM project buyers",
    },
  ],
};

export default function OemAluminumDieCastingPartsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      {children}
    </>
  );
}
