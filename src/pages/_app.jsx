// src/pages/_app.jsx
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import RootLayout from "./layout";
import ThemeProvider from "../components/ThemeProvider";
import CookieConsentBanner from "../components/Essential/CookieConsentBanner";
import SmoothScroll from "../components/Essential/SmoothScroll";
import { trackVisit } from "../lib/activityTracker";
import Popupform from "@/components/Form/PopupModel";
import GlobalActivityTracker from "../components/GlobalActivityTracker";

// Import tracing utility
import { generateCorrelationId } from "../lib/tracer";
import { createWebsiteLogger } from "../lib/loggerPresets";

const routerLogger = createWebsiteLogger("AppRouter");

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const initialPageTxId = generateCorrelationId();
      // 🚨 TICKET 3: page_loaded
      routerLogger.info("navigation", "page_loaded", {
        correlation: { correlation_id: initialPageTxId },
        context: { endpoint: router.pathname },
      });
      trackVisit(router.pathname, initialPageTxId);
    }

    const handleRouteChange = (url) => {
      const routeTxId = generateCorrelationId();
      // 🚨 TICKET 3: page_loaded
      routerLogger.info("navigation", "page_loaded", {
        correlation: { correlation_id: routeTxId },
        context: { endpoint: url },
      });
      trackVisit(url, routeTxId);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.isReady, router.pathname]);

  const isLogsPage = router.pathname === "/logs";
  const isDashboard = router.pathname === "/lg";

  return (
    <ThemeProvider>
      <SmoothScroll />
      <RootLayout>
        <GlobalActivityTracker />

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.pathname}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex-grow flex flex-col"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>

        {!isLogsPage && !isDashboard && (
          <>
            {/* <Popupform /> */}
            <CookieConsentBanner />
          </>
        )}
      </RootLayout>
    </ThemeProvider>
  );
}
