import type { ReactNode } from "react";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "LED Work Light Aluminum Die-Cast Housing",
  url: "https://www.hsxdiecasting.com/products/led-work-lights",
  image: [
    "https://www.hsxdiecasting.com/images/hsx-factory/oem-aluminum-die-cast-housing.jpg",
    "https://www.hsxdiecasting.com/images/hsx-factory/hsx-aluminum-die-casting-workshop-horizontal.jpg",
  ],
  description:
    "Custom aluminum die-cast housings and related structural parts for LED work light applications, based on drawings, samples, and project requirements.",
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
  category: "Aluminum Die-Cast Lighting Housing",
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Application",
      value: "LED work light aluminum housing applications",
    },
    {
      "@type": "PropertyValue",
      name: "Supply Scope",
      value:
        "Aluminum die-cast housing and related die-cast mounting or structural parts",
    },
    {
      "@type": "PropertyValue",
      name: "Factory Capability",
      value:
        "In-house aluminum die casting, gate removal, deburring, drilling, tapping, polishing, powder coating, spray painting, QC, and packing. CNC machining, anodizing, and electroplating can be coordinated through partner-supported resources when required by a suitable project.",
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
          __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
