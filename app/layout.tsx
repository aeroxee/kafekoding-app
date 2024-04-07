import { MyAlert } from "@/components/my-alert";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],

  variable: "--font-sans",
  weight: ["200", "300", "400", "600", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kafekoding-app.vercel.app"),
  title: "Kafe Koding",
  description:
    "Kafe Koding merupakan sebuah komunitas belajar yang bergerak di bidang IT dan juga tempat sharing ilmu programing dan seputar dunia IT.",
  openGraph: {
    title: "Kafe Koding",
    description:
      "Kafe Koding merupakan sebuah komunitas belajar yang bergerak di bidang IT dan juga tempat sharing ilmu programing dan seputar dunia IT.",
  },
  twitter: {
    title: "Kafe Koding",
    description:
      "Kafe Koding merupakan sebuah komunitas belajar yang bergerak di bidang IT dan juga tempat sharing ilmu programing dan seputar dunia IT.",
  },
  keywords: [
    "Kafe Koding",
    "Koding",
    "Kafe",
    "Belajar Koding",
    "Kursus Koding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={cn(fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader height={4} />
          <Navbar />
          {children}
          <MyAlert />
        </ThemeProvider>
      </body>
    </html>
  );
}
