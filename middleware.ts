import { NextRequest, NextResponse } from "next/server";

const blockedUserAgents = [
  "curl",
  "python-requests",
  "scrapy",
  "httpclient",
  "libwww-perl",
  "wget",
  "masscan",
  "nmap",
  "sqlmap",
  "nikto",
  "mj12bot",
  "semrushbot",
  "ahrefsbot",
  "dotbot",
  "petalbot",
  "bytespider",
  "baiduspider",
  "yandexbot",
];

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const lowerUserAgent = userAgent.toLowerCase();

  const isBlocked = blockedUserAgents.some((bot) =>
    lowerUserAgent.includes(bot)
  );

  if (isBlocked) {
    return new NextResponse("Access denied", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
