"use client";

import { usePathname } from "next/navigation";

const BLOGS_WITH_OWN_PROJECT_REVIEW = [
  "/blog/oem-automotive-led-light-manufacturing-process",
  "/blog/how-to-customize-led-work-lights",
];

export function BlogProjectReviewCta() {
  const pathname = usePathname();

  if (BLOGS_WITH_OWN_PROJECT_REVIEW.includes(pathname)) {
    return null;
  }

  return (
    <section className="border-t border-white/8 bg-[#080808] py-12">
      <div className="container-shell rounded-[1.5rem] border border-[#d5ae67]/35 bg-white/[0.03] p-6 sm:p-8">
        <p className="section-kicker">Next step</p>
        <h2 className="section-heading mt-4 text-2xl text-white sm:text-3xl">
          Send Your OEM Aluminum Die Casting Project for Review
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#cac1b2]">
          Share drawings, 3D files, sample photos, quantity, finishing, and
          application requirements so HSX can review project fit before
          quotation.
        </p>
        <div className="mt-6 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="/b2b-oem-project-review"
            className="gold-button w-full text-center sm:w-auto"
          >
            Request Project Review
          </a>
          <a
            href="/products/oem-aluminum-die-casting-parts"
            className="outline-button w-full text-center sm:w-auto"
          >
            View OEM Die Casting Parts
          </a>
          <a
            href="/capabilities"
            className="outline-button w-full text-center sm:w-auto"
          >
            Review Factory Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
