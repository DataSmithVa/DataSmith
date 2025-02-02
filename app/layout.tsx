import type { Metadata } from "next";
import "../styles/globals.css";

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
        {children}
      </body>
    </html>
  );
}
