import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "@/lib/contexts/ProgressContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medical English Learning",
  description: "Aprenda inglês médico de forma interativa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ProgressProvider>{children}</ProgressProvider>
      </body>
    </html>
  );
}

