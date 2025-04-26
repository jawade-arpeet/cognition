import { Metadata } from "next";

import "@/styles/globals.css";
import { fontSans } from "@/lib/font";

export const metadata: Metadata = {
  title: "Cognition",
  viewport: "width=device-width, initial-scale=1",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
    </html>
  );
};

export default Layout;
