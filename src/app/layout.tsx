import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

import Footer from "./layouts/main/footer/Footer";
import { NavBar } from "./layouts/main/navbar/Navbar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Avellaneda Agustín | Desarrollador web Fullstack, QA-Tester y Project Manager",
  description:
    "Avellaneda Agustín, Desarrollador web Fullstack y QA-Tester con experiencia en el desarrollo de páginas web modernas, interactivas y robustas. Mi objetivo es utilizar mi experiencia técnica y mis habilidades de liderazgo para guiar equipos ágiles en la entrega de soluciones de software de alta calidad.",
  keywords: [
    "freelance",
    "fullstack",
    "developer",
    "desarrollador web",
    "argentina",
    "catamarca",
    "agustin",
    "avellaneda",
    "front-end",
    "back-end",
    "testing",
    "liderazgo",
    "ágil",
  ],

  twitter: {
    card: "summary_large_image",
    title:
      "Avellaneda Agustín | Desarrollador web Fullstack, QA-Tester y Project Manager",
    description:
      "Avellaneda Agustín, Desarrollador web Fullstack y QA-Tester con experiencia en el desarrollo de páginas web modernas, interactivas y robustas. Mi objetivo es utilizar mi experiencia técnica y mis habilidades de liderazgo para guiar equipos ágiles en la entrega de soluciones de software de alta calidad.",
    creator: "Avellaneda Agustín",
    images: [
      "https://res.cloudinary.com/draig/image/upload/v1694093622/portolio-personal/fkuuc7srs3ystt4h10tb.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },

  openGraph: {
    images:
      "https://res.cloudinary.com/draig/image/upload/v1694093622/portolio-personal/fkuuc7srs3ystt4h10tb.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <link rel="canonical" href="https://www.agustin.top" />
      <body className={raleway.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
