import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "O'Callaghan's Loft | Zante's Premier Terrace Bar",
  description:
    "The ultimate terrace bar experience in Laganas, Zante. Cocktails, live entertainment, and unforgettable nights at O'Callaghan's Loft.",
  openGraph: {
    title: "O'Callaghan's Loft | Zante",
    description:
      "Zante's most popular Irish bar and terrace club in the heart of Laganas.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}