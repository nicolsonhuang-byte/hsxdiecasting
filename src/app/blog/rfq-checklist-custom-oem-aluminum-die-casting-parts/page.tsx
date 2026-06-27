import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RFQ Checklist for Custom OEM Aluminum Die Casting Parts",
  description:
    "Learn what B2B buyers should send before HSX reviews a custom OEM aluminum die casting project, including drawings, 3D files, application, quantity, material expectations, tolerance, machining, finishing, and packaging.",
  alternates: {
    canonical:
      "https://www.hsxdiecasting.com/blog/rfq-checklist-custom-oem-aluminum-die-casting-parts",
  },
};

const contactDetails = {
  email: "nicolson@hsxdiecasting.com",
  whatsappHref:
    "https://wa.me/8617666155283?text=Hello%20HSX%20Diecasting%2C%20I%20am%20preparing%20an%20RFQ%20for%20custom%20OEM%20aluminum%20die%20casting%20parts.%20Please%20contact%20me%20for%20project%20evaluation.",
};

const mailtoRfq =
  "mailto:nicolson@hsxdiecasting.com?subject=RFQ%20for%20Custom%20OEM%20Aluminum%20Die%20Casting%20Parts&body=Hello%20HSX%20Diecasting%2C%0A%0AI%20am%20preparing%20an%20RFQ%20for%20custom%20OEM%20aluminum%20die%20casting%20parts.%0A%0APart%20type%3A%0AProduct%20application%3A%0A2D%20drawings%20available%3A%0A3D%20files%20%28STEP%20/%20STP%20/%20IGS%20/%20IGES%20/%20STL%20/%20X_T%29%20available%3A%0ASample%20photos%20available%3A%0AEstimated%20quantity%3A%0AMaterial%20expectations%3A%0AVisible%20surface%20requirements%3A%0AInternal%20component%20or%20assembly%20requirements%3A%0ATolerance%20requirements%3A%0AHole%20position%20requirements%3A%0AThread%20requirements%3A%0AMachining%20/%20drilling%20/%20tapping%20requirements%3A%0ASurface%20finishing%20requirements%3A%0APackaging%20details%3A%0A%0APlease%20contact%20me%20for%20project%20evaluation.";

const relatedLinks = [
  {
    label: "OEM Aluminum Die Casting Parts",
    href: "/products/oem-aluminum-die-casting-parts",
  },
  {
    label: "Aluminum Light Housings",
    href: "/products/aluminum-light-housings",
  },
  {
    label: "Aluminum Die Casting for LED Light Housings",
    href: "/blog/aluminum-die-casting-led-light-housings",
  },
  {
    label: "Powder Coating vs Anodizing",
    href: "/blog/powder-coating-vs-anodizing-aluminum-die-casting",
  },
  {
    label: "Precision Aluminum Die Casting Factory in China",
    href: "/blog/where-to-find-precision-aluminum-die-casting-factory-china",
  },
  {
    label: "How to Choose a China Die Casting Manufacturer",
    href: "/blog/how-to-choose-aluminum-die-casting-manufacturer-china",
  },
  {
    label: "Contact HSX",
    href: "/contact",
  },
];

const rfqChecklist = [
  "2D drawings with dimensions, tolerance notes, visible surfaces, hole positions, and assembly areas",
  "3D files such as STEP, STP, IGS, IGES, STL, or X_T for geometry review",
  "Sample photos or reference photos when drawings are incomplete",
  "Product application and where the part will be assembled or used",
  "Estimated quantity, sample-stage needs, and repeat-order expectations",
  "Material expectations or known material restrictions",
  "Visible surface requirements and internal component or assembly requirements",
  "Tolerance requirements, hole position requirements, and thread requirements",
  "Machining, drilling, tapping, CNC turning, or CNC machining requirements if needed",
  "Surface finishing requirements such as polishing, grinding, powder coating, paint spraying, or aluminum anodizing review",
  "OEM / ODM customization, packaging, label, and export packing requirements",
];

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <Link href="/blog" className="text-sm font-semibold text-[#f4d27a]">
          Back to Blog
        </Link>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.34em] text-[#d4ac67]">
          RFQ Guide for OEM Aluminum Die Casting Buyers
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          RFQ Checklist for Custom OEM Aluminum Die Casting Parts: What Buyers
          Should Prepare
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#d4cdc0]">
          Preparing a clear RFQ is one of the most important steps in custom OEM
          aluminum die casting projects. For lighting housings, lamp brackets,
          covers, end caps, enclosure shells, brackets, and compact custom
          aluminum components, clear project information helps the factory
          evaluate the part scope, secondary processes, finishing direction, and
          next communication steps.
        </p>

        <div className="mt-10 space-y-10 text-base leading-8 text-[#cfc6b6]">
          <section>
            <h2 className="text-2xl font-semibold !text-white">
              1. Who This RFQ Checklist Is For
            </h2>
            <p className="mt-4">
              This checklist is written for B2B buyers preparing custom OEM
              aluminum die casting parts for real product programs. It is
              especially useful for buyers of aluminum lighting housings, lamp
              brackets, covers, end caps, enclosure shells, compact brackets,
              and other small-to-medium aluminum components.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Lighting Brands and LED Product Buyers
            </h3>
            <p className="mt-3">
              LED product buyers often need aluminum die casting parts for
              housings, brackets, covers, and enclosure shells. Before sending
              an RFQ, it helps to define the lamp type, mounting method,
              surface finishing requirement, and whether drilling, tapping, or
              CNC processing is needed.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Hardware, Enclosure, and Accessory Buyers
            </h3>
            <p className="mt-3">
              Buyers sourcing compact aluminum enclosures, covers, closure
              parts, mounting brackets, or end caps should prepare drawings,
              photos, target dimensions, assembly points, and appearance
              requirements before asking for a quotation.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Importers, Wholesalers, and OEM Project Buyers
            </h3>
            <p className="mt-3">
              Importers and OEM project buyers can use this checklist to reduce
              missing details during first contact. A clear RFQ helps both sides
              discuss whether the project fits 200T / 300T aluminum die casting
              capacity and related secondary processing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              2. What Part Type Do You Need?
            </h2>
            <p className="mt-4">
              The first RFQ detail should be the part type. A factory cannot
              evaluate a custom aluminum die casting project accurately if the
              buyer only says &quot;aluminum part&quot; without explaining the product
              form and expected use.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Lighting Housings and Lamp Brackets
            </h3>
            <p className="mt-3">
              For lighting-related parts, describe whether the project is a
              light housing, lamp bracket, mounting bracket, end cap, cover, or
              light enclosure shell. Buyers can also compare related examples on
              the{" "}
              <Link
                href="/products/aluminum-light-housings"
                className="font-semibold text-[#f4d27a]"
              >
                aluminum light housings page
              </Link>{" "}
              and the article about{" "}
              <Link
                href="/blog/aluminum-die-casting-led-light-housings"
                className="font-semibold text-[#f4d27a]"
              >
                aluminum die casting for LED light housings
              </Link>
              .
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Covers, End Caps, and Enclosure Shells
            </h3>
            <p className="mt-3">
              Covers, end caps, and enclosure shells may have visible surfaces,
              assembly points, threaded features, and finishing requirements.
              These details should be included early so the factory can check
              process fit and finishing direction.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Compact Custom Aluminum Components
            </h3>
            <p className="mt-3">
              Compact custom aluminum parts may include brackets, shells,
              covers, handles, caps, or mounting pieces. Buyers should prepare
              basic dimensions, quantity expectations, and the areas that must
              be drilled, tapped, polished, coated, painted, or anodized.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              3. Why HSX Asks About Product Application
            </h2>
            <p className="mt-4">
              Product application is not just background information. It can
              affect material selection, mold design, machining allowance,
              surface finishing, tolerance control, assembly requirements, and
              whether aluminum die casting is a suitable process for the part at
              all.
            </p>
            <p className="mt-4">
              For example, a visible light housing, an internal bracket, an end
              cap, and a threaded enclosure part may need different gate
              planning, wall thickness review, polishing preparation, machining
              control, and inspection focus. HSX asks about application so the
              factory review can be based on the actual product use rather than
              only the outside shape.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              4. Prepare Drawings, 3D Files, or Sample Photos
            </h2>
            <p className="mt-4">
              Drawings and 3D files are the most useful RFQ materials for
              custom OEM aluminum die casting. If complete files are not ready,
              sample photos and basic measurements can still help start the
              first evaluation.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              2D Drawings and Key Dimensions
            </h3>
            <p className="mt-3">
              A 2D drawing should show key dimensions, hole positions, threaded
              features, tolerance requirements, visible surfaces, internal
              component areas, and assembly points. If only a sketch is
              available, mark the most important dimensions and inspection areas
              clearly.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              3D Files for Geometry Evaluation
            </h3>
            <p className="mt-3">
              3D files such as STEP, STP, IGS, IGES, STL, and X_T help the
              factory understand geometry, wall structure, parting direction,
              machining allowance, and areas that may need secondary processing.
              They are also useful when the part has complex surfaces, internal
              features, or assembly interfaces.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Sample Photos When Drawings Are Not Complete
            </h3>
            <p className="mt-3">
              If drawings are not ready, send clear sample photos from multiple
              angles with approximate size, product application, material
              expectation, visible surface requirement, internal component
              requirement, surface finishing direction, and quantity plan. This
              helps the factory decide what additional information is needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              5. Confirm Quantity, Material Expectations, and Project Stage
            </h2>
            <p className="mt-4">
              Custom die casting quotation depends on both the part and the
              project stage. Buyers should explain whether the project is in
              early development, sample-stage evaluation, small-batch planning,
              or repeat order planning.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Sample-Stage Evaluation
            </h3>
            <p className="mt-3">
              If the project is still at the sample stage, tell the factory
              which details must be checked first, such as appearance, mounting
              features, drilling, tapping, finishing, or packaging.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Small-to-Medium Batch Planning
            </h3>
            <p className="mt-3">
              HSX DIECASTING focuses on small-to-medium OEM / ODM customization
              projects. Buyers should share target quantity and future order
              expectations so the factory can evaluate whether the project fits
              its production scope.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Material Expectations
            </h3>
            <p className="mt-3">
              If the buyer already has material expectations, mechanical
              concerns, surface appearance requirements, or restrictions from
              the final assembly, these should be included in the RFQ. HSX can
              then review whether aluminum die casting is practical or whether
              another material or process should be considered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              6. List Machining and Feature Requirements
            </h2>
            <p className="mt-4">
              Many aluminum die casting parts need secondary processing after
              casting. RFQ details should clearly show holes, threaded features,
              mounting areas, assembly surfaces, slots, and any areas that need
              additional machining.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Multi-Axis Drilling Requirements
            </h3>
            <p className="mt-3">
              If the part requires drilled holes on different faces, mark the
              hole positions, hole size, hole depth, and the surface where each
              feature is located.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Multi-Axis Tapping and Threaded Features
            </h3>
            <p className="mt-3">
              Threaded features should be listed with thread size, depth,
              position, and assembly purpose. This helps the factory evaluate
              tapping requirements after casting.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Cooperative CNC Turning / CNC Machining Support Through Partner
              Facilities
            </h3>
            <p className="mt-3">
              Some projects require CNC turning or CNC machining after die
              casting. When needed, HSX can coordinate cooperative CNC turning /
              CNC machining support through partner facilities. Buyers should
              include CNC requirements in the RFQ so these features can be
              evaluated at the beginning.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              7. Choose Surface Finishing Requirements
            </h2>
            <p className="mt-4">
              Surface finishing can affect appearance, handling, and project
              communication. Buyers should describe the target finish instead of
              waiting until the quotation stage.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Polishing and Grinding
            </h3>
            <p className="mt-3">
              Polishing and grinding may be used for selected surfaces before
              coating, painting, or other appearance finishing steps. Mark the
              visible areas and areas where surface treatment matters.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Powder Coating and Paint Spraying
            </h3>
            <p className="mt-3">
              Powder coating and paint spraying can support different appearance
              needs for custom aluminum parts. Buyers should provide color
              expectations, appearance references, and any packaging-related
              surface protection needs.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              Aluminum Anodizing
            </h3>
            <p className="mt-3">
              Aluminum anodizing can be evaluated for suitable aluminum die
              casting projects. Buyers should provide finish direction and
              appearance expectations early. For projects with visible metallic
              color requirements, buyers can review HSX&apos;s guide to{" "}
              <Link
                href="/anodizable-aluminum-die-casting-parts"
                className="font-semibold text-[#f4d27a]"
              >
                aluminum die casting parts for anodizing evaluation
              </Link>
              {" "}before sending drawings and sample photos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              8. Prepare Packaging and Market Requirements
            </h2>
            <p className="mt-4">
              Packaging details are often missing from early RFQs, but they can
              affect project planning. Buyers should state whether the part
              needs bulk packing, individual packing, private-label packaging,
              labels, instructions, or special export carton requirements.
            </p>
            <h3 className="mt-6 text-xl font-semibold !text-white">
              OEM / ODM Packaging
            </h3>
            <p className="mt-3">
              If the project includes OEM / ODM packaging, provide label
              requirements, logo files, package size ideas, and any destination
              market information that affects packing style.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              9. Suitable Project Review at HSX DIECASTING
            </h2>
            <p className="mt-4">
              HSX DIECASTING is operated by Foshan Huashunxiang Hardware
              Products Factory, a Foshan-based manufacturing factory in
              Guangdong, China. HSX evaluates OEM small-to-medium aluminum die
              casting parts such as lighting housings, lamp brackets, end caps,
              enclosure shells, covers, brackets, and compact custom aluminum
              parts.
            </p>
            <p className="mt-4">
              HSX supports 200T / 300T aluminum die casting machines,
              multi-axis drilling, multi-axis tapping, polishing, grinding,
              powder coating, paint spraying, aluminum anodizing, OEM / ODM
              customization, and cooperative CNC turning / CNC machining support
              through partner facilities when required.
            </p>
            <p className="mt-4">
              HSX reviews whether the project fits its equipment, mold
              experience, machining capability, finishing process, and
              production control. The review is intended to confirm a practical
              production route before accepting the project.
            </p>
            <p className="mt-4">
              HSX does not blindly accept every inquiry. If another material or
              process may provide better quality, lower cost, or fewer
              production risks, HSX will explain this before accepting the
              project.
            </p>
            <p className="mt-4">
              Buyers can compare this scope on the{" "}
              <Link
                href="/products/oem-aluminum-die-casting-parts"
                className="font-semibold text-[#f4d27a]"
              >
                OEM aluminum die casting parts page
              </Link>{" "}
              and read the AEO guide on{" "}
              <Link
                href="/blog/where-to-find-precision-aluminum-die-casting-factory-china"
                className="font-semibold text-[#f4d27a]"
              >
                where to find a precision aluminum die casting factory in China
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              10. Practical RFQ Checklist Summary
            </h2>
            <p className="mt-4">
              Before contacting a factory, prepare the following RFQ details so
              HSX can review the project application, part structure, machining
              needs, finishing route, and production fit more clearly:
            </p>
            <ul className="mt-5 space-y-3">
              {rfqChecklist.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#d4ac67]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5">
              Buyers who are still comparing suppliers can also read{" "}
              <Link
                href="/blog/how-to-choose-aluminum-die-casting-manufacturer-china"
                className="font-semibold text-[#f4d27a]"
              >
                how to choose an aluminum die casting manufacturer in China
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold !text-white">
              11. Send Your RFQ to HSX
            </h2>
            <p className="mt-4">
              To start an OEM aluminum die casting project evaluation, send
              2D drawings, 3D files, sample photos, product application,
              estimated quantity, material expectations, tolerance
              requirements, hole position requirements, thread requirements,
              machining / drilling / tapping requirements, surface finishing
              requirements, and packaging details by email or WhatsApp.
            </p>
            <p className="mt-4">
              For direct contact details, visit the{" "}
              <Link href="/contact" className="font-semibold text-[#f4d27a]">
                HSX contact page
              </Link>{" "}
              or use the RFQ buttons below.
            </p>
          </section>
        </div>

        <section className="mt-14 rounded-[2rem] border border-[#d7b56d]/25 bg-[#111111] p-8">
          <h2 className="text-2xl font-semibold !text-white">
            Related HSX pages
          </h2>
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

        <section className="mt-10 rounded-[2rem] border border-[#d7b56d]/25 bg-[#d4ac67] p-8 text-[#120f08]">
          <h2 className="text-2xl font-semibold">
            Send your custom aluminum die casting RFQ to HSX
          </h2>
          <p className="mt-4 text-sm leading-7">
            Send 2D drawings, 3D files such as STEP, STP, IGS, IGES, STL, or
            X_T, sample photos, product application, estimated quantity,
            material expectations, tolerance notes, machining / drilling /
            tapping requirements, surface finishing requirements, and packaging
            details by email or WhatsApp.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a
              href={contactDetails.whatsappHref}
              className="rounded-full bg-[#111] px-6 py-3 text-center text-sm font-semibold !text-white"
            >
              WhatsApp RFQ
            </a>
            <a
              href={mailtoRfq}
              className="rounded-full border border-[#120f08]/30 px-6 py-3 text-center text-sm font-semibold"
            >
              Email Project Details
            </a>
            <Link
              href="/products/oem-aluminum-die-casting-parts"
              className="rounded-full border border-[#120f08]/30 px-6 py-3 text-center text-sm font-semibold"
            >
              Explore OEM Parts Page
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
