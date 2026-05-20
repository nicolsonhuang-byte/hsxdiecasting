import type { ReactNode } from "react";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "LED Work Lights",
  url: "https://www.hsxdiecasting.com/products/led-work-lights",
  image: [
    "https://www.hsxdiecasting.com/images/hero-factory-200t-300t.png"
  ],
  description:
    "OEM LED work lights and aluminum lighting-related parts for automotive, motorcycle, off-road, industrial, and wholesale B2B buyers.",
  brand: {
    "@type": "Brand",
    name: "HSX DIECASTING",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Foshan Huashunxiang Hardware Products Co., Ltd.",
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
      value: "Aluminum die casting, machining, polishing, powder coating, painting, anodizing",
    }
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
