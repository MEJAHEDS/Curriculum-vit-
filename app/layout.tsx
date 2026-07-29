import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soufiane Mejahed — Software Engineer",
  description:
    "Ingénieur logiciel — pipelines de données, APIs backend, agents IA et développement full stack.",
  metadataBase: new URL("https://soufiane-mejahed.vercel.app"),
  openGraph: {
    title: "Soufiane Mejahed — Software Engineer",
    description:
      "Data pipelines, APIs backend, agents IA et développement full stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans bg-graphite text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
