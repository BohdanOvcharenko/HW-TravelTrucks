import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TravelTrucks — Campers Rental",
    template: "%s | TravelTrucks",
  },
  description:
    "Find and book the perfect camper for your next adventure with TravelTrucks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
          <Toaster position="top-right" />
        </QueryProvider>
      </body>
    </html>
  );
}
