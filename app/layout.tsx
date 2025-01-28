import type { Metadata } from "next";
import "./ui/globals.css";

// Components
import UnderMaint from "./ui/under_maint/under_maint";

export const metadata: Metadata = {
  title: {
    template: "DataSmith | %s",
    default: "DataSmith | Home",
  },
  description: "DataSmith LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UnderMaint />
        {children}
      </body>
    </html>
  );
}
