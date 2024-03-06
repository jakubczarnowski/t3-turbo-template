"use client";

import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import { env } from "~/env.js";

export const AnalyticsProvider = () => <Analytics />;

export const UmamiAnalyticsProvider = () => {
  return env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ? (
    <Script
      src="https://analytics.umami.is/script.js"
      data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      strategy="lazyOnload"
    />
  ) : null;
};
