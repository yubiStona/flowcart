import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import "material-symbols";

export const metadata: Metadata = {
  title: "FlowCart | Shop Smarter. Live Better.",
  description:
    "Curated lifestyle essentials designed for the modern individual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
