import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Renan Lima | Desenvolvedor .NET & React",
  description:
    "Portfólio de Renan Lima, desenvolvedor .NET e React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}