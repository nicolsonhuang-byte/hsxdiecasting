import Link from "next/link";

import {
  ArticleStructuredData,
  buildArticleMetadata,
} from "../article-structured-data";

const articleTitle =
  "OEM Decorative Brake Caliper Covers for Tesla Model 3 / Model Y: RFQ Checklist";
const articleDescription =
  "RFQ checklist for Tesla Model 3 and Model Y accessory resellers sourcing OEM decorative brake caliper appearance covers, including color, logo, packaging, samples, and requirements.";
const articlePath =
  "/blog/oem-decorative-brake-caliper-covers-tesla-model-3-model-y-rfq-checklist";

export const metadata = buildArticleMetadata({
  title: articleTitle,
  description: articleDescription,
  path: articlePath,
});

const relatedLinks = [
  {
    label: "Decorative Brake Caliper Covers",
    href: "/products/decorative-brake-caliper-covers",
  },
  {
    label: "OEM Aluminum Die Casting Parts",
    href: "/products/oem-aluminum-die-casting-parts",
  },
  {
    label: "Contact HSX",
    href: "/contact",
  },
  {
    label: "Tesla Accessory Brand Guide",
    href: "/blog/decorative-brake-caliper-covers-tesla-model-3-model-y-accessory-brands",
  },
  {
    label: "Customization Guide",
    href: "/blog/how-to-customize-decorative-brake-caliper-covers-aftermarket-brands",
  },
  {
    label: "Surface Finishing Guide",
    href: "/blog/powder-coating-vs-anodizing-aluminum-die-casting",
  },
];

const checklistItems = [
  "Exact vehicle model, model year, and version: Tesla Model 3, Tesla Model Y, or both",
  "Wheel design and size, caliper clearance, and installation-area references",
  "Target sales channel: EV accessory shop, aftermarket reseller, distributor, or private-label brand",
  "Reference photos, sample photos, dimensions, or product requirements",
  "Color and surface finishing requirements for decorative appearance use",
  "Logo file, logo font request, logo color request, and placement notes",
  "Packaging plan, label requirements, barcode needs, and carton requirements",
  "Sample-stage evaluation needs and small-to-medium batch quantity plan",
  "Contact person, destination market, and preferred email or WhatsApp contact",
];

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <ArticleStructuredData
        title={articleTitle}
        description={articleDescription}
        path={articlePath}
      />
      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <Link href="/blog" className="text-sm font-semibold text-[#f4d27a]">
          Back to Blog
        </Link>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.34em] text-[#d4ac67]">
          RFQ Checklist for Tesla Accessory Resellers
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          OEM Decorative Brake Caliper Covers for Tesla Model 3 / Model Y: RFQ
          Checklist
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#d4cdc0]">
          This checklist is for Tesla Model 3 accessory resellers, Tesla Model Y
          accessory resellers, EV accessory shops, aftermarket auto accessory
          brands, private-label buyers, and B2B buyers preparing an RFQ for OEM
          decorative brake caliper appearance covers.
        </p>

        <div className="mt-10 space-y-10 text-base leading-8 text-[#cfc6b6]">
          <section>
            <h2 className="text-2xl font-semibold !text-white">
              1. Introduction: Who This RFQ Checklist Is For
            </h2>
            <p className="mt-4">
              A clear RFQ helps the factory understand the buyer&apos;s product
              direction before sample-stage evaluation or small-to-medium batch
              planning. For Tesla accessory resellers and EV accessory shops, the
              most useful RFQ details are practical: target model, photos,
              samples, color direction, logo request, packaging plan, and
              quantity plan.
            </p>
            <p className="mt-4">
              This article is not a general sourcing article. It is a preparation
              checklist for buyers who want to contact HSX DIECASTING with
              enough information for a focused project review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              2. Product Positioning: Decorative Appearance Covers Only
            </h2>
            <p className="mt-4">
              Decorative brake caliper covers must be described as decorative
              appearance covers only. They are not functional brake parts,
              braking performance components, load-bearing brake parts, or
              structural brake parts.
            </p>
            <p className="mt-4">
              Buyer communication should focus on appearance, color, logo
              presentation, packaging, sample confirmation, and product-line
              positioning. They are not presented as products that change braking
              performance, brake-system behavior, or vehicle operation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              3. Target Vehicle and Product Scope
            </h2>
            <p className="mt-4">
              Start the RFQ by stating whether the project is for Tesla Model 3,
              Tesla Model Y, or both. If the buyer has reference photos, sample
              photos, dimensions, target model years, or product requirements,
              these should be included before quotation review.
            </p>
            <p className="mt-4">
              Buyers should also explain the target channel: Tesla accessory
              shop, EV accessory reseller, online aftermarket brand,
              private-label program, distributor order, or trial launch. This
              helps HSX review packaging, presentation, and batch planning in the
              correct business context.
            </p>
            <p className="mt-4">
              Tesla, Model 3, and Model Y are referenced only to identify the
              buyer&apos;s target vehicle application. HSX is not affiliated with,
              authorized by, or endorsed by Tesla.
            </p>
            <p className="mt-4">
              Model 3 and Model Y scopes should be reviewed separately. Fitment
              must be verified for the exact model year and version, wheel design
              and size, caliper clearance, and installation area using
              buyer-supplied drawings, dimensions, samples, or clear photos.
            </p>
            <p className="mt-4">
              A result from one sample or previous project does not establish
              fitment for every Model 3 or Model Y configuration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              4. Color and Surface Finishing Requirements
            </h2>
            <p className="mt-4">
              Color and surface finishing are important for decorative appearance
              cover projects. Buyers can prepare requests such as red, black,
              blue, silver, gold, buyer-defined colors, powder coating, paint
              spraying, polishing, or other appearance-focused surface finishing
              needs.
            </p>
            <p className="mt-4">
              The RFQ should describe these as color and surface finishing
              options for decorative appearance use. Buyers can also review the
              HSX{" "}
              <Link
                href="/blog/powder-coating-vs-anodizing-aluminum-die-casting"
                className="font-semibold text-[#f4d27a]"
              >
                surface finishing guide
              </Link>{" "}
              for related finishing language.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              5. Logo, Font, and Logo Color Requirements
            </h2>
            <p className="mt-4">
              Private-label buyers should prepare logo files, logo placement
              notes, logo font requests, and logo color requirements. If the
              buyer has a preferred visual direction, a reference photo or
              product-line image can help the factory understand the intended
              presentation.
            </p>
            <p className="mt-4">
              A clear logo request is especially useful for Tesla Model 3 and
              Model Y accessory resellers who need consistent branding across
              product listings, retail boxes, and reseller catalogs.
            </p>
            <p className="mt-4">
              Buyers are responsible for providing only logos and trademarks that
              they own or are authorized to use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              6. Packaging and Private-Label Planning
            </h2>
            <p className="mt-4">
              Packaging should be included in the RFQ if the buyer needs
              private-label boxes, neutral cartons, barcode labels, model labels,
              product inserts, or language-specific packaging notes. Packaging
              information helps the factory review the project beyond the product
              itself.
            </p>
            <p className="mt-4">
              For more detail on customization planning, buyers can read the HSX{" "}
              <Link
                href="/blog/how-to-customize-decorative-brake-caliper-covers-aftermarket-brands"
                className="font-semibold text-[#f4d27a]"
              >
                decorative brake caliper cover customization guide
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              7. Quantity and Small-to-Medium Batch Plan
            </h2>
            <p className="mt-4">
              HSX can review small-to-medium batch OEM customization based on the
              part, tooling, finishing, packaging, sample approval, and order
              plan. Buyers should include an estimated quantity plan, sample-stage
              needs, and expected product direction for first review.
            </p>
            <p className="mt-4">
              For resellers and EV accessory shops, it is useful to explain
              whether the project is a market test, first private-label order,
              repeat order, or distributor program.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              8. Sample-Stage Evaluation
            </h2>
            <p className="mt-4">
              Sample-stage evaluation can help the buyer review appearance,
              color, logo presentation, packaging direction, and visible product
              details before small-to-medium batch planning. Buyers should send
              any existing sample photos, product photos, dimensions, or
              reference requirements.
            </p>
            <p className="mt-4">
              The HSX{" "}
              <Link
                href="/products/decorative-brake-caliper-covers"
                className="font-semibold text-[#f4d27a]"
              >
                decorative brake caliper covers
              </Link>{" "}
              page shows the main product scope for automotive appearance
              projects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              9. Core Manufacturing Scope: Custom OEM Aluminum Die Casting Parts
            </h2>
            <p className="mt-4">
              HSX&apos;s core manufacturing scope is custom OEM aluminum die casting.
              Decorative brake caliper cover projects are reviewed as an
              additional appearance-focused application. In-house capability
              includes aluminum die casting for suitable small-to-medium parts,
              together with drilling, tapping, polishing, powder coating, and
              spray painting. Anodizing can be coordinated through
              partner-supported resources for selected suitable parts.
            </p>
            <p className="mt-4">
              Custom aluminum die casting projects can be evaluated based on
              drawings, 3D files, sample photos, or requirements. Buyers can
              review the HSX{" "}
              <Link
                href="/products/oem-aluminum-die-casting-parts"
                className="font-semibold text-[#f4d27a]"
              >
                OEM aluminum die casting parts
              </Link>{" "}
              page for the custom order scope.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              10. RFQ Checklist Summary
            </h2>
            <p className="mt-4">
              Before contacting HSX, prepare the following information:
            </p>
            <ul className="mt-5 space-y-3">
              {checklistItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5">
              Buyers can also compare this checklist with the HSX{" "}
              <Link
                href="/blog/decorative-brake-caliper-covers-tesla-model-3-model-y-accessory-brands"
                className="font-semibold text-[#f4d27a]"
              >
                Tesla accessory brand guide
              </Link>{" "}
              before sending project details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              11. Send Your RFQ to HSX
            </h2>
            <p className="mt-4">
              Buyers can send RFQ details by email or WhatsApp. Include target
              models, photos, samples, logo and packaging requirements, color and
              surface finishing requests, sample-stage needs, and quantity plan.
            </p>
            <p className="mt-4">
              Each new project is reviewed independently using the buyer&apos;s own
              vehicle details, drawings, dimensions, samples, appearance
              requirements, quantity, and packaging needs.
            </p>
            <p className="mt-4">
              Customer-funded tooling and project-specific designs remain
              dedicated to the original customer and are not reused for
              third-party production or sale without the original customer&apos;s
              written authorization.
            </p>
            <p className="mt-4">
              This checklist helps buyers organize the information needed for
              review. For direct contact details, visit the{" "}
              <Link href="/contact" className="font-semibold text-[#f4d27a]">
                HSX contact page
              </Link>
              {". "}To start a formal project review, use the NEXT STEP section
              below.
            </p>
          </section>
        </div>

        <section className="mt-14 rounded-[2rem] border border-[#d7b56d]/25 bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold !text-white">Related HSX pages</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm font-semibold text-[#efe7d9] hover:text-[#f4d27a]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
