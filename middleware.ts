import { NextRequest, NextResponse } from "next/server";
import { SITE_URL } from "./app/lib/brand";

// Neutralise l'URL technique *.vercel.app : 301 permanent vers le domaine
// canonique. Évite le duplicate content et consolide le SEO sur cledessols.fr.
// On ne redirige QUE le déploiement de production : les previews (VERCEL_ENV
// === "preview") gardent leur URL *.vercel.app fonctionnelle.
export function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const isProdDeploy = process.env.VERCEL_ENV === "production";

  if (isProdDeploy && host.endsWith(".vercel.app")) {
    const url = new URL(req.nextUrl.pathname + req.nextUrl.search, SITE_URL);
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

// Exclut les assets statiques et les routes internes Next.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};
