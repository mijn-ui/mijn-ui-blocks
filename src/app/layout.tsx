import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/layout/navbar";
import ThemeProvider from "./components/providers/theme-provider";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next";
import Announcement from "./components/announcement";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MijnUI | Blocks",
  description: "Professional templates and blocks for React and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <NuqsAdapter>
            <Announcement />
            <Navbar />
            {children}
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
