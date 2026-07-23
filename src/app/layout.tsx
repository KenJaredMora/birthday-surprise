import type { Metadata } from "next";
import { DM_Serif_Display, Poppins } from "next/font/google";

import { BackgroundDecoration } from "@/components/background/BackgroundDecoration";
import "./globals.css";

// -----------------------------------------------------------------------------
// Tipografías
// -----------------------------------------------------------------------------

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif-display",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

// -----------------------------------------------------------------------------
// Metadata
// -----------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Proyecto 07·08",
  description: "Una experiencia está a punto de comenzar.",
};

// -----------------------------------------------------------------------------
// Layout
// -----------------------------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${dmSerifDisplay.variable} ${poppins.variable} antialiased`}
      >
        {/* Decoración de fondo */}
        <BackgroundDecoration />

        {/* Contenido */}
        <div className="relative z-10 h-dvh w-dvw overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}