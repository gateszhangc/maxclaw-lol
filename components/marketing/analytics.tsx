"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

type RuntimeAnalyticsConfig = {
  googleAnalyticsId: string | null;
  clarityProjectId: string | null;
};

const emptyConfig: RuntimeAnalyticsConfig = {
  googleAnalyticsId: null,
  clarityProjectId: null,
};

export function Analytics() {
  const [config, setConfig] = useState<RuntimeAnalyticsConfig>(emptyConfig);

  useEffect(() => {
    let cancelled = false;

    if (process.env.NODE_ENV !== "production") {
      return () => {
        cancelled = true;
      };
    }

    void fetch("/api/runtime-config", { cache: "no-store" })
      .then((response) => response.json() as Promise<RuntimeAnalyticsConfig>)
      .then((data) => {
        if (!cancelled) {
          setConfig({
            googleAnalyticsId: data.googleAnalyticsId || null,
            clarityProjectId: data.clarityProjectId || null,
          });
        }
      })
      .catch(() => {
        if (!cancelled) {
          setConfig(emptyConfig);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!config.googleAnalyticsId && !config.clarityProjectId) {
    return null;
  }

  return (
    <>
      {config.googleAnalyticsId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${config.googleAnalyticsId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {config.clarityProjectId ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${config.clarityProjectId}");
          `}
        </Script>
      ) : null}
    </>
  );
}
