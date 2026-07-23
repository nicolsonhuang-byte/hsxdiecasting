import type { ReactNode } from "react";

import { SiteFooter, SiteHeader } from "../components/site-navigation";
import { BlogProjectReviewCta } from "./blog-project-review-cta";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-w-0">
      <SiteHeader />
      {children}
      <BlogProjectReviewCta />
      <SiteFooter />
    </div>
  );
}
