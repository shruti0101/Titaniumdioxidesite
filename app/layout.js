import { Outfit } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Script from "next/script";
import Whatsapp from "@/components/Whatsapp";
import Popup from "@/components/Popup";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Titanium Dioxide Wholesaler | Aanya Enterprise",
  description:
    "Aanya Enterprise is a leading Titanium Dioxide Wholesaler. Get bulk, high-quality TiO2 for your industry needs. Reliable supply and competitive pricing.",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* ✅ Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KZT6XBSF');
            `,
          }}
        />

        {/* DaisyUI */}
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@5"
          rel="stylesheet"
          type="text/css"
        />

      </head>

      <body className={`${outfit.variable} antialiased`}>

        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZT6XBSF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Whatsapp />

        <main>
          <Popup />
          <LayoutWrapper>{children}</LayoutWrapper>
        </main>

        {/* Tailwind Browser Script */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}