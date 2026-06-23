# 3ERP Website Structure Research for HSX DIECASTING

Date: 2026-06-24

Reference scope: public pages on `https://www.3erp.com/` only.

Research safety log:

- Used only 3ERP public pages, `robots.txt`, sitemap files, visible navigation, visible footer links, and selected internal URLs.
- Did not use Google search or third-party websites.
- Did not log in, submit forms, upload files, contact 3ERP, bypass restrictions, download private files, build, commit, push, deploy, or publish online.
- Did not inspect the external Zoho form embedded on 3ERP's quote page because the instruction was domain-only.
- Changed only this research documentation file.

## Executive Summary

3ERP positions itself as a rapid prototyping and low-volume manufacturing partner for engineers, product developers, startups, and industrial buyers who need custom parts made from CAD files. The website is more engineer/product-development oriented than a traditional factory brochure. Its structure is built around service selection, technical learning, trust proof, and quote conversion.

The site supports RFQ conversion by repeating a simple path across almost every page:

1. Identify the manufacturing need or process.
2. Explain capabilities, materials, finishes, tolerances, quality, and project examples.
3. Build confidence through ISO, equipment, case studies, engineering/DFM language, and privacy/NDA wording.
4. Move the visitor toward `Get Instant Quote`, `Upload Your Files`, `Start With A Free Project Review`, `Contact Us`, or similar quote actions.

3ERP differs from HSX DIECASTING in positioning. 3ERP presents itself as a broad rapid-manufacturing platform covering CNC machining, 3D printing, injection molding, sheet metal, extrusion, casting, finishing, and many materials. HSX should not try to copy that all-in-one breadth. HSX's stronger path is a real aluminum die casting factory position: suitable small-to-medium OEM aluminum die casting projects, LED light housings, secondary machining, drilling and tapping, powder coating, painting, polishing, mold maintenance, project review, and stable batch production control.

The best lesson for HSX is not "be like 3ERP." The better lesson is: make the buyer's project review path easier, more technical, and more reassuring without weakening HSX's real factory identity.

## Research Method

Pages were selected from:

- `https://www.3erp.com/`
- `https://www.3erp.com/robots.txt`
- `https://www.3erp.com/sitemap.xml`
- `https://www.3erp.com/sitemap_index.xml` references shown by robots/sitemap
- Main navigation and footer links visible on the homepage
- Representative pages from page sitemap, case-study sitemap, design-tips sitemap, manufacturing-technology sitemap, and blog sitemap

This was a bounded review, not a full crawl. I reviewed 50 representative public pages, plus robots and sitemap files for discovery.

## Audience Analysis

### Engineers

3ERP speaks to engineers through material pages, finish pages, tolerances, DFM references, CAD upload wording, manufacturing technology guides, machining constraints, thread design, hole design, tolerances, quality equipment, and inspection language. Engineers are encouraged to trust that the company can review files and advise before production.

HSX adaptation: make technical pages about die casting project review, LED heat dissipation housing requirements, drilling/tapping details, surface finishing feasibility, mold temperature control, and batch stability. Avoid generic platform language. Use real factory judgement.

### Product Developers and R&D Teams

3ERP's rapid prototyping and low-volume production sections speak directly to teams that need fast iterations before production. It uses process breadth as a reassurance that the buyer can stay with one supplier from prototype to production.

HSX adaptation: HSX can speak to prototype/sample review before tooling and customer-funded mold development, but should avoid implying a broad one-stop prototyping platform unless HSX truly supports that scope.

### Procurement Teams and Manufacturing Buyers

3ERP's website reduces procurement risk through repeatable quote routes, visible services, certifications, contact page, quality page, case studies, and broad capability coverage. It uses service pages as procurement-facing landing pages: the buyer can find process, material, finish, tolerance, and quality signals before asking for a quote.

HSX adaptation: procurement buyers need clarity on what HSX can quote, what information is required, what is project-dependent, and what should be confirmed before tooling. HSX should emphasize suitable project review instead of promising instant certainty.

### Hardware Startups

3ERP appeals to startups with rapid prototyping, CAD upload, low minimums, fast quotes, design tips, and case studies showing product development problems solved.

HSX adaptation: startup-oriented HSX content should focus on avoiding mold rework, confirming application and surface treatment early, and protecting drawings/samples. Do not promise startup-speed miracles. Promise careful review and clear communication.

### Industrial Designers

3ERP supports designers through finish pages, material choices, design tips, case studies, and visual/process explanation pages.

HSX adaptation: create finish guidance for powder coating, painting, polishing, texture, logo areas, visible surfaces, and die casting appearance limitations. Keep anodizing wording cautious and project-dependent.

### Low-Volume Production Buyers

3ERP has a dedicated low-volume manufacturing path and connects it to CNC, injection molding, die casting, 3D printing, extrusion, and finishing.

HSX adaptation: HSX can use a "suitable small-to-medium aluminum die casting project review" path, but should define fit by part type, annual volume, material, secondary machining, finishing, and tooling readiness.

## Website Structure Map

3ERP's structure can be summarized as a conversion ecosystem:

| Section | Representative pages | Role in funnel |
| --- | --- | --- |
| Homepage | `/` | Positions 3ERP as a rapid prototyping/custom parts source and routes users to services, case studies, resources, and quote upload. |
| Services hub | `/services/` | Lists broad manufacturing capability families and acts as the master service navigation page. |
| CNC machining cluster | `/services/cnc-machining/`, milling, turning, 5-axis, precision, tolerances | Deep technical/service cluster for engineers needing machined parts. |
| Rapid prototyping and low-volume | `/services/rapid-prototyping/`, `/services/low-volume-manufacturing/` | Supports product-development stage and bridge-to-production buyers. |
| Tooling and molding | `/services/rapid-tooling/`, `/services/mold-making/`, `/services/injection-molding/` | Converts prototype buyers toward tooling and production support. |
| Metal casting/die casting | `/services/metal-casting/`, `/services/metal-casting/aluminum-casting/` | Shows casting as one process family inside a broader platform. |
| Materials | `/materials/`, CNC material pages | Helps buyers select materials and feeds SEO/resource discovery. |
| Surface finishes | `/surface-finishing-services/`, `/services/surface-finishing/`, CNC finishes | Helps buyers think about appearance, protection, and finishing tradeoffs. |
| Quality and confidentiality | `/quality-assurance/`, `/prototyping-non-disclosure-agreements/`, privacy page | Builds risk reduction around inspection, ISO, NDA, and data handling. |
| Case studies | `/case-study/` plus project pages | Gives proof of technical capability and project handling. |
| Design tips/manufacturing guides | `/design-tips/`, `/manufacturing-technology/`, blog articles | Captures engineer search intent and warms visitors before RFQ. |
| Industries | `/industries/`, automotive, aerospace, etc. | Shows cross-industry relevance and routes industry buyers back to services and quote. |
| Contact/RFQ | `/contact/`, `/request-a-quote/` | Final conversion route: message, file upload on contact form, quote page, project review. |

## Page Group Analysis

| Group | Page purpose | Target audience | Main conversion action | Technical depth | Trust signals | What HSX can learn | What HSX should not copy |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Homepage | Present broad rapid manufacturing offer and route users into service/resource/quote paths. | Engineers, startups, procurement, product teams. | Get instant quote, upload files, contact, case studies. | Medium. It introduces process breadth rather than deep detail. | ISO, case studies, customer/testimonial style, service breadth, resource links. | Make HSX homepage immediately show what projects HSX fits and how to start an RFQ. | Do not copy broad "all custom parts" platform positioning. |
| Services | Organize all process families. | Buyers who know a process or need to compare processes. | Quote/upload/contact. | Medium. Service cards lead to deeper pages. | Breadth, process categorization, linked resources. | Create a clearer HSX capability map: die casting, machining, finishing, project review. | Do not list processes outside HSX's real capability. |
| Rapid prototyping | Capture early-stage product development projects. | Product developers, startups, R&D. | Upload files / get quote. | Medium-high, with process comparison. | Materials, ISO, DFM, production bridge. | HSX can explain sample/prototype review before tooling. | Do not claim a broad prototyping platform if HSX mainly does die casting projects. |
| CNC machining | Convert CAD-file machining buyers. | Mechanical engineers, product developers, procurement. | Instant DFM quote / upload CAD / equipment download. | High. Includes process, tolerances, materials, finishes, sub-processes. | Tolerances, ISO, DFM, equipment, inspection, case studies. | Build technical depth around HSX's secondary machining, drilling, tapping, hole/thread details. | Do not copy exact tolerance/speed promises. |
| Low-volume manufacturing | Explain production between prototype and mass production. | Hardware startups, industrial buyers, procurement. | Free project review / quote. | Medium-high. | Process breadth, quantity framing, engineering support. | Use "suitable project review" for small-to-medium die casting projects. | Do not over-promise low MOQ or instant production if project feasibility depends on tooling. |
| Metal casting/die casting | Explain casting within 3ERP's process menu. | Buyers comparing casting with machining/tooling. | Free project review / quote. | Medium. Includes materials, finishes, FAQs. | Certified/quality terms, materials and finishing. | HSX can be much deeper and more credible here because die casting is a core factory capability. | Do not dilute HSX by making die casting look like one minor process among many unrelated services. |
| Materials | Help buyers select material families and discover material landing pages. | Engineers, designers, procurement. | Order/request quote. | Medium. Strong SEO structure. | Material breadth, links to process pages. | Create HSX-specific material guidance for aluminum die casting and project-dependent standards. | Do not claim unsupported alloy breadth or zinc/alloy capability without verification. |
| Surface finishes | Help buyers select appearance/protection finishes. | Designers, engineers, procurement. | Order/request quote. | Medium-high. | Finish categories, examples, broad choices. | HSX should build pages for powder coating, painting, polishing, passivation/project-dependent partners, and anodizing caution. | Do not imply every finish is in-house if it is partner-supported. |
| Quality/certification | Reduce buyer risk. | Procurement, engineers, regulated-industry buyers. | Quote/contact after quality reassurance. | Medium-high. | ISO, QC steps, inspection equipment, material/design verification. | HSX needs a plain quality/project review page with inspection workflow and customer-specific requirements. | Do not publish unverified quality numbers or fixed yield claims. |
| Confidentiality/NDA | Address IP and prototype secrecy concerns. | Startups, R&D teams, engineers. | Contact/quote with less IP anxiety. | Medium. | NDA, privacy, non-disclosure, IP protection language. | HSX should publish clear tooling/sample/drawing confidentiality principles. | Do not offer legal templates or terms beyond what HSX is prepared to honor. |
| Contact/quote | Capture inquiry details and files. | Active buyers. | Contact form, file upload, quote page. | Low-medium, conversion focused. | Contact details, upload field, quote page, privacy. | HSX should make RFQ fields and file guidance more explicit. | Do not build an "instant quote" promise unless quoting is actually automated and reliable. |
| Case studies | Prove execution through examples. | Buyers seeking evidence. | Quote/contact after reading proof. | Medium-high, especially project challenge/solution pages. | Named project stories, technical challenges, images, outcomes. | HSX can write anonymized case-style project review notes without exposing customers. | Do not expose customer-sensitive details, drawings, dimensions, or tooling information. |
| Design tips/blog/guides | Capture technical searches and educate before RFQ. | Engineers, designers, startups. | Quote/contact after technical learning. | High on specific topics. | Practical advice, internal links, table-of-contents style, engineering vocabulary. | HSX should build focused clusters around RFQ checklist, LED housings, drilling/tapping, finishing, and mold stability. | Do not create shallow generic manufacturing encyclopedias that do not reflect HSX experience. |
| Industries | Show relevance across verticals. | Industry buyers and procurement. | Quote/contact/upload. | Medium. | Industry pages, case links, certifications. | HSX can use focused application pages, especially LED light housing and automotive non-safety decorative parts. | Do not claim aerospace/medical/defense relevance unless verified and supported. |

## Conversion Path Analysis

3ERP's conversion logic is layered:

1. Problem or need: pages start from a manufacturing need such as rapid prototype, CNC machining, low-volume production, aluminum casting, surface finishing, or a specific industry.
2. Process/material selection: service pages connect to materials, finishes, sub-processes, tolerances, and guides.
3. Technical content: design tips, manufacturing technology articles, and process explainers answer engineering questions before the buyer contacts sales.
4. Trust signal: quality assurance, ISO language, equipment list links, case studies, testimonials, project examples, and NDA/privacy language reduce perceived risk.
5. RFQ action: most pages repeat `Get Instant Quote`, `Start to Upload Your Files`, `Start With A Free Project Review`, `Contact Us`, or equivalent actions.

The funnel does not rely on a single contact page. It surrounds the buyer with quote routes at every stage: homepage, service page, technical guide, industry page, case study, and footer. The site also normalizes CAD/file upload as the expected next step.

HSX should adapt the same funnel shape but with different promises:

- From "Get an instant quote" to "Send RFQ / Request Project Review."
- From broad platform process choice to "Is this a suitable aluminum die casting project?"
- From generic file upload to "send 3D drawings, application, quantity, material, finishing, machining, hole/thread details, sample photos if available."
- From broad speed claims to "early clarification helps reduce rework and delays."

## Engineering-Focused Content

3ERP builds engineering trust through content clusters:

- Material pages: broad material catalogs and specific material/service pages help buyers connect material choice to process.
- Surface finish pages: finishing is treated as a buyer decision, not an afterthought.
- Process explanations: machining, casting, molding, sheet metal, 3D printing, and rapid prototyping pages explain when a process fits.
- Design tips: technical articles on threads, holes, CNC restrictions, milling guidelines, costs, CAD files, and technical drawings help visitors prepare better RFQs.
- Case studies: project pages frame work around customer need, manufacturing challenge, solution, and outcome.
- Tolerance/feasibility language: CNC pages and tolerance pages make precision, standards, and DFM visible before the quote.

HSX should use the same "engineering help before RFQ" pattern around its real factory strengths:

- Aluminum die casting material selection and project-dependent standards.
- Surface treatment guidance for powder coating, painting, polishing, and project-dependent anodizing/passivation through partners.
- LED light housing review: heat dissipation, waterproofing, corrosion resistance, indoor/outdoor use, bathroom/humid applications, salt spray requirements.
- Drilling and tapping notes: hole position, number, diameter, depth, blind/through, tolerance, thread specs, drilling/tapping depth.
- Mold and batch stability: mold temperature control, cooling design, continuous production risks, flash/burrs, shrinkage, air entrapment, incomplete filling, polishing workload.
- Project review framing: HSX reviews requirements before saying yes.

## RFQ / Quote Flow

Observed 3ERP RFQ signals:

- The quote path is repeated across navigation, headers, service pages, case studies, resources, and footer.
- CTAs commonly point to `/request-a-quote/`.
- Many pages use upload/CAD wording, making file submission feel normal.
- The quote page embeds an external Zoho form. I did not inspect the external form due to domain-only scope.
- The 3ERP contact page contains fields for first name, last name, email, subject, message, and a file upload field with up to 10MB wording.
- Quote and contact flows are supported by NDA/privacy language elsewhere on the site.

What 3ERP likely wants from buyers:

- CAD files or technical drawings.
- Contact information.
- Project description/message.
- Material and process expectations.
- Quantity and lead-time needs.
- Finishing and tolerance expectations.

How it reduces friction:

- Quote routes are always nearby.
- Upload wording appears before the user reaches the form.
- Service and material pages answer common process questions before the buyer asks.
- Case studies and quality pages reduce anxiety.

HSX adaptation:

- Make `/contact` or a future RFQ page the clean project review path.
- Ask for 3D files, 2D drawings if available, sample photos, application/use environment, annual quantity, material, machining, hole/thread/tapping details, surface finishing, packaging, testing requirements, and target timeline.
- Offer "sample/photo-only inquiry" guidance: when no 3D file exists, HSX may request a physical sample for measurement/reverse engineering.
- Use confidentiality wording near the file-upload/contact area.
- Avoid "instant quote" if human review is required.

## Trust Signals

Visible 3ERP trust signals include:

- ISO 9001:2015 / ISO-related wording on many service and quality pages.
- Quality assurance page with QC steps, material/design verification, first article inspection, in-process inspection, final inspection, and inspection equipment.
- NDA and privacy content.
- Case studies with project contexts and technical challenges.
- Engineering/DFM wording.
- Equipment list links on machining/about pages.
- Broad process capability and material/finish coverage.
- Fast quote / short lead-time language.
- Industry pages for automotive, aerospace, medical, energy, consumer products, robotics, education, and industrial machinery.

HSX trust signals should be narrower but more believable:

- Real aluminum die casting factory positioning.
- Project review before production.
- Die casting, secondary machining, drilling/tapping, polishing, powder coating, painting.
- Mold maintenance and production stability experience.
- Customer-funded mold and sample confidentiality.
- Clear RFQ checklist and feasibility review.
- Customer success tone: clarify early to reduce rework and support smoother delivery.

## What HSX Can Learn

1. Treat RFQ as a guided project review, not just a contact form.
2. Put quote/project-review CTAs on every important service, product, and resource page.
3. Build technical pages that reduce repeated buyer questions before inquiry.
4. Create material and surface treatment resource pages for HSX's real options.
5. Explain when surface finishing affects quoting, tooling, appearance, and production risk.
6. Add confidentiality language near any drawing/sample upload path.
7. Use anonymized case-study structures without exposing customer-sensitive details.
8. Convert blog content into an RFQ-support system, not just SEO traffic.
9. Help buyers understand what information HSX needs before accurate quotation.
10. Use engineering language carefully: project-dependent, suitable projects, review required, customer-specific requirements.

## What HSX Should Not Copy

HSX should not copy 3ERP's:

- Big all-in-one platform positioning. HSX is stronger as a real factory with a focused die casting path.
- Overly broad service claims. Do not imply CNC, 3D printing, injection molding, extrusion, sheet metal, and all finishing are equal HSX capabilities unless verified.
- Unrealistic speed promises. Die casting projects often require tooling review, samples, finishing confirmation, and production stability work.
- "Instant quote" language if HSX uses human project review.
- Customer-sensitive case displays. HSX should not expose customer-funded mold details, sample dimensions, drawings, specifications, tooling parameters, thermal details, or commercial conflict details.
- Process claims outside HSX's real capabilities.
- Generic platform wording that makes HSX sound like a marketplace or trading company.
- Industry claims such as aerospace/medical/defense unless HSX has verified qualifications and project experience.

## HSX Adaptation Strategy

HSX should turn 3ERP's useful funnel logic into a narrower real-factory pathway:

### Positioning

Recommended public positioning:

> HSX DIECASTING reviews suitable small-to-medium OEM aluminum die casting projects, with support for secondary machining, drilling and tapping, polishing, powder coating, painting, mold maintenance, and project-specific surface treatment coordination when required.

Avoid positioning HSX as a broad rapid manufacturing platform.

### Project Review Path

Create a clear journey:

1. Buyer lands on aluminum die casting / LED housing / RFQ article.
2. Page explains what HSX reviews and what affects quotation.
3. Page links to a project review or contact form.
4. RFQ checklist asks for drawings, 3D files, application, volume, material, machining, surface treatment, testing, and packaging.
5. Confidentiality note reassures the buyer that drawings, samples, molds, and customer-funded tooling are protected.

### LED Light Housing Review

HSX can build a strong page around:

- Indoor vs outdoor use.
- Bathroom or humid environment distinction.
- Heat dissipation and thermal review.
- Waterproofing and corrosion resistance.
- Powder coating as common route.
- Salt spray/testing requirements when needed.
- Secondary machining and assembly details.

### Secondary Machining, Drilling, and Tapping

Use engineering content to explain:

- Hole quantity, position, angle, diameter, and depth.
- Blind vs through holes.
- Thread specifications.
- Tapping depth and tolerance.
- Assembly function and risk of late changes.

### Surface Treatment

Create practical pages for:

- Powder coating.
- Painting.
- Polishing.
- Project-dependent anodizing feasibility.
- Partner-supported treatments when required.
- Appearance expectations and corrosion/testing requirements.

### Mold Temperature Control and Batch Stability

HSX can differentiate from generic service sites by writing from real production experience:

- Mold temperature can change during continuous production.
- Cooling design, material temperature, injection speed, and injection force affect batch stability.
- Flash/burrs, shrinkage, air entrapment, incomplete filling, and surface issues may increase finishing workload.
- These risks are project-dependent and should be reviewed before tooling and batch production.

### Confidentiality

Add a simple public policy:

- Customer-funded molds belong to the customer's project.
- HSX will not use customer-funded molds to supply unrelated customers.
- HSX will not provide customer-developed samples to unrelated customers.
- Drawings, dimensions, specifications, project parameters, mold details, and thermal/material requirements are confidential.
- If a customer says samples/photos cannot be displayed, HSX will not display them.

### Customer Success Tone

Use collaborative wording:

- "We clarify key details early to reduce rework and support smoother delivery."
- "We review project requirements before confirming feasibility."
- "A clear RFQ helps both sides avoid unnecessary delay."

Do not blame customers for incomplete RFQs.

## Recommended Future HSX Pages or Content

These are recommendations only. No HSX website files were created or edited.

1. Aluminum Die Casting RFQ Checklist
2. Materials for OEM Aluminum Die Casting Parts
3. Surface Finishing Options for Aluminum Die Casting
4. LED Light Housing Project Review Guide
5. Drilling and Tapping Notes for Die Cast Aluminum Parts
6. Mold Maintenance and Production Stability Notes
7. Confidentiality and Customer Tooling Policy
8. Project Review Flow for OEM Aluminum Die Casting
9. Powder Coating vs Painting for Die Cast Aluminum Parts
10. Photo/Sample-Only Inquiry Guide
11. How HSX Reviews Surface Treatment Before Tooling
12. What to Confirm Before Customer-Funded Mold Development

## Reviewed URL List

| # | URL | Page topic | Group | Why useful |
| --- | --- | --- | --- | --- |
| 1 | https://www.3erp.com/ | Homepage | Homepage | Shows main positioning, service routes, case/resource routes, quote/upload CTAs. |
| 2 | https://www.3erp.com/services/ | Services hub | Services | Shows how 3ERP organizes broad process families. |
| 3 | https://www.3erp.com/services/rapid-prototyping/ | Rapid prototyping | Rapid prototyping | Shows product-development positioning and upload/quote flow. |
| 4 | https://www.3erp.com/services/cnc-machining/ | CNC machining | CNC machining | Strong example of engineering service page, tolerances, DFM, materials, CTAs. |
| 5 | https://www.3erp.com/services/cnc-machining/precision-machining/ | Precision machining | CNC machining | Shows precision/quality positioning for technical buyers. |
| 6 | https://www.3erp.com/services/cnc-machining/cnc-milling/ | CNC milling | CNC machining | Shows sub-process page structure and prototype/low-volume framing. |
| 7 | https://www.3erp.com/services/cnc-machining/cnc-turning/ | CNC turning | CNC machining | Shows material/process detail and equipment/quote routing. |
| 8 | https://www.3erp.com/services/cnc-machining/5-axis-machining/ | 5-axis machining | CNC machining | Shows engineering expertise and complex-part positioning. |
| 9 | https://www.3erp.com/services/cnc-machining/tolerances-and-standards/ | Tolerances | Engineering trust | Useful model for standards/tolerance support content. |
| 10 | https://www.3erp.com/services/cnc-machining/materials/ | CNC materials | Materials | Shows material hub structure. |
| 11 | https://www.3erp.com/services/cnc-machining/material/aluminum/ | Aluminum machining | Materials | Shows material-specific page tied to quote conversion. |
| 12 | https://www.3erp.com/services/cnc-machining/material/plastic/ | Plastic machining | Materials | Shows breadth that HSX should not copy unless relevant. |
| 13 | https://www.3erp.com/services/cnc-machining/finishes/ | CNC finishes | Surface finishes | Shows finish options as conversion-support content. |
| 14 | https://www.3erp.com/services/low-volume-manufacturing/ | Low-volume manufacturing | Low-volume | Shows bridge from prototype to production and free project review CTA. |
| 15 | https://www.3erp.com/services/rapid-tooling/ | Rapid tooling | Tooling | Shows tooling page structure and production transition language. |
| 16 | https://www.3erp.com/services/mold-making/ | Mold making | Tooling | Shows DFM, mold options, and quote/upload routing. |
| 17 | https://www.3erp.com/services/3d-printing/ | 3D printing | Services | Shows broad platform scope that HSX should not mirror. |
| 18 | https://www.3erp.com/services/sheet-metal-prototyping/ | Sheet metal | Services | Shows another service family and repeated conversion pattern. |
| 19 | https://www.3erp.com/services/injection-molding/ | Injection molding | Tooling/molding | Shows project review, mold class, materials, and customer feedback use. |
| 20 | https://www.3erp.com/services/metal-casting/ | Metal casting | Metal casting | Most relevant 3ERP service cluster for HSX die casting comparison. |
| 21 | https://www.3erp.com/services/metal-casting/aluminum-casting/ | Aluminum casting | Metal casting | Directly relevant to HSX aluminum die casting positioning. |
| 22 | https://www.3erp.com/surface-finishing-services/ | Surface finishing | Surface finishes | Shows organized finish taxonomy and quote routing. |
| 23 | https://www.3erp.com/services/surface-finishing/ | Production surface finishing | Surface finishes | Shows finishing as production support/trust content. |
| 24 | https://www.3erp.com/materials/ | Materials hub | Materials | Shows searchable material structure. |
| 25 | https://www.3erp.com/quality-assurance/ | Quality assurance | Trust | Shows QC steps, equipment, and ISO trust structure. |
| 26 | https://www.3erp.com/prototyping-non-disclosure-agreements/ | NDA/IP | Confidentiality | Useful model for buyer confidence around sensitive designs. |
| 27 | https://www.3erp.com/about-us/ | Company overview | Trust | Shows factory/team/facility/equipment positioning. |
| 28 | https://www.3erp.com/contact/ | Contact form | RFQ/contact | Shows message and file-upload form path. |
| 29 | https://www.3erp.com/request-a-quote/ | Quote page | RFQ/contact | Shows quote destination and embedded form entry point. External form not inspected. |
| 30 | https://www.3erp.com/case-study/ | Case-study hub | Case studies | Shows case studies as proof and internal conversion support. |
| 31 | https://www.3erp.com/case-study/rapid-tooling-for-tail-light-project/ | Tail light rapid tooling | Case studies | Relevant to automotive/lighting project storytelling. |
| 32 | https://www.3erp.com/case-study/5-axis-cnc-machining-formula-sae-uprights/ | Formula SAE uprights | Case studies | Shows technical challenge, material, and machining proof structure. |
| 33 | https://www.3erp.com/case-study/cnc-machined-aluminum-racing-wheel-hubs/ | Racing wheel hubs | Case studies | Shows project challenge/solution structure for aluminum parts. |
| 34 | https://www.3erp.com/design-tips/ | Design tips hub | Engineering content | Shows technical resource cluster. |
| 35 | https://www.3erp.com/design-tips/a-guide-to-thread-types/ | Thread types | Engineering content | Relevant to HSX drilling/tapping content opportunity. |
| 36 | https://www.3erp.com/design-tips/design-for-cnc-machining-restrictions-considerations/ | CNC design restrictions | Engineering content | Useful structure for manufacturability limits. |
| 37 | https://www.3erp.com/design-tips/design-guidelines-for-cnc-milled-parts/ | CNC milling guidelines | Engineering content | Shows engineering SEO plus quote path. |
| 38 | https://www.3erp.com/design-tips/10-tips-cutting-costs-cnc-machining/ | CNC cost tips | Engineering content | Useful model for cost-factor articles. |
| 39 | https://www.3erp.com/manufacturing-technology/ | Manufacturing technology hub | Engineering content | Shows educational hub for process discovery. |
| 40 | https://www.3erp.com/manufacturing-technology/what-is-cnc-milling/ | CNC milling guide | Engineering content | Shows glossary/guide structure. |
| 41 | https://www.3erp.com/manufacturing-technology/machining/ | Machining guide | Engineering content | Shows broad educational content leading to quote. |
| 42 | https://www.3erp.com/manufacturing-technology/rapid-prototyping/ | Rapid prototyping guide | Engineering content | Shows long-form guide tied back to RFQ. |
| 43 | https://www.3erp.com/blog/ | Blog hub | Blog/resources | Shows current content hub and quote footer pattern. |
| 44 | https://www.3erp.com/blog/prototype-machining-pros-and-cons-of-cnc-for-prototyping/ | Prototype machining article | Blog/resources | Shows technical education for prototype buyers. |
| 45 | https://www.3erp.com/blog/various-aluminum-alloy-manufacturing/ | Aluminum alloy article | Blog/resources | Relevant to HSX materials guidance opportunity. |
| 46 | https://www.3erp.com/blog/cad-file-formats-for-cnc-machining/ | CAD file formats | RFQ preparation | Useful model for telling buyers which files to send. |
| 47 | https://www.3erp.com/industries/ | Industries hub | Industries | Shows industry routing with case studies and upload steps. |
| 48 | https://www.3erp.com/industries/automotive/ | Automotive | Industries | Relevant to HSX automotive-adjacent decorative and lighting products. |
| 49 | https://www.3erp.com/industries/aerospace/ | Aerospace | Industries | Useful as a caution against unverified industry claims. |
| 50 | https://www.3erp.com/privacy-policy/ | Privacy policy | Confidentiality | Confirms presence of privacy/data trust content. |

## Final Report

File created:

- `docs/research/3ERP_WEBSITE_STRUCTURE_RESEARCH.md`

Number of 3ERP pages reviewed:

- 50 representative public pages.
- Also inspected `robots.txt`, `sitemap.xml`, and sitemap index references for discovery.

Top 10 useful findings for HSX:

1. 3ERP's site is engineered around RFQ conversion from almost every page, not only the contact page.
2. Technical resource pages can reduce buyer uncertainty before inquiry.
3. Material and surface finish pages are important conversion assets, not only SEO pages.
4. Case studies are framed around project need, technical challenge, solution, and proof.
5. Quality assurance and NDA/privacy content reduce procurement and engineering risk.
6. Repeated upload/CAD/quote wording trains visitors to send files.
7. The strongest HSX adaptation is "project review" rather than "instant quote."
8. HSX can build a narrower but more credible content cluster around real aluminum die casting experience.
9. RFQ guidance should help buyers provide 3D files, drawings, application, quantity, material, machining, finish, testing, and packaging requirements.
10. HSX should avoid copying broad platform claims, unsupported speed promises, or customer-sensitive case displays.

Files changed:

- `docs/research/3ERP_WEBSITE_STRUCTURE_RESEARCH.md`

HSX website files changed:

- No.

Build, commit, push, deploy, publishing, form submission, upload, or account action:

- Build: no.
- Commit: no.
- Push: no.
- Deploy: no.
- Online publishing: no.
- Form submission: no.
- File upload: no.
- Login/account action: no.
