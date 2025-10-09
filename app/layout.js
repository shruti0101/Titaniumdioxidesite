import { Outfit } from "next/font/google";  
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // add/remove weights as needed
});

export const metadata = {
  title: "Titanium Dioxide Wholesaler | Aanya Enterprise",
  description: "Aanya Enterprise is a leading Titanium Dioxide Wholesaler. Get bulk, high-quality TiO2 for your industry needs. Reliable supply and competitive pricing. Contact us today!",
  icons: {
    icon: "/logo.webp", // path to your favicon in public folder
  
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        <main>
             <LayoutWrapper>
       
            {children}</LayoutWrapper>


        </main>

        
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"/>
      </body>
    </html>
  );
}
