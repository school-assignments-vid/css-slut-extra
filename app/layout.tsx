import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fuckass App",
  description: "Randomly fucking generated fuckass metadata by create-fuckass-app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
