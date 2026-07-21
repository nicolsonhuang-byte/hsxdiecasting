import type { ReactNode } from "react";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "LED Work Lights",
  url: "https://www.hsxdiecasting.com/products/led-work-lights",
  image: [
    "https://www.hsxdiecasting.com/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg",
  ],
  description:
    "OEM LED work lights and aluminum lighting-related parts for automotive, motorcycle, off-road, industrial, and wholesale B2B buyers.",
  brand: {
    "@type": "Brand",
    name: "HSX DIECASTING",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Foshan Huashunxiang Hardware Products Factory",
    url: "https://www.hsxdiecasting.com",
  },
  material: "Aluminum alloy and LED lighting components",
  category: "Automotive LED Lighting",
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Application",
      value: "Automotive LED lights, motorcycle LED lights, LED work lights",
    },
    {
      "@type": "PropertyValue",
      name: "Supply Type",
      value: "OEM and wholesale supply",
    },
    {
      "@type": "PropertyValue",
      name: "Factory Capability",
      value:
        "In-house aluminum die casting, trimming, deburring, drilling, tapping, polishing, powder coating, spray painting, QC, and packing. CNC machining can be coordinated through partner-supported resources when required. Anodizing can be coordinated through partner-supported resources for selected suitable parts.",
    },
  ],
};

export default function LedWorkLightsLayout({
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
