import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const STATIC_ROUTES = [
  "",
  "/about",
  "/approach",
  "/services",
  "/case-studies",
  "/insights",
  "/contact",
  "/consultation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
