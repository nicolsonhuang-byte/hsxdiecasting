import type { ReactNode } from "react";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "OEM Aluminum Die Casting Parts",
  url: "https://www.hsxdiecasting.com/products/oem-aluminum-die-casting-parts",
  image: [
    "https://www.hsxdiecasting.com/images/hero-factory-200t-300t.png"
  ],
  description:
    "OEM small-to-medium aluminum die casting parts, custom aluminum hardware parts, aluminum housings, decorative covers, and compact cast components for global B2B buyers.",
  brand: {
    "@type": "Brand",
    name: "HSX DIECASTING",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Foshan Huashunxiang Hardware Products Factory",
    url: "https://www.hsxdiecasting.com",
  },
  material: "Aluminum alloy",
  category: "OEM Aluminum Die Casting Parts",
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Die Casting Machine Scope",
      value: "200-ton and 300-ton aluminum die casting machines",
    },
    {
      "@type": "PropertyValue",
      name: "Secondary Processing",
      value: "Multi-axis drilling, tapping, polishing, grinding, powder coating, painting, anodizing",
    },
    {
      "@type": "PropertyValue",
      name: "Buyer Type",
      value: "OEM buyers, wholesalers, importers, distributors, aftermarket brands",
    }
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
          __html: JSON.stringify(productJsonLd),
        }}
      />
      {children}
    </>
  );
}
