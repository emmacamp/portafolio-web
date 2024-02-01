import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "./navigation";
export default createMiddleware({
  // A list of all locales that are supported
  // Used when no locale matches
  defaultLocale: "en",
  localePrefix,
  locales,
  pathnames
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(es|en)/:path*"],
};
