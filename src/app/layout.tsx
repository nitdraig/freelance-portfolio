import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avellaneda Agustín | Desarrollador Web Freelance",
  description:
    "Soy Avellaneda Agustín, un Desarrollador web Fullstack y QA-Tester de Argentina, con experiencia en el desarrollo de páginas web modernas, interactivas y robustas. Ofrezco servicios de desarrollo web freelance, consultoría tecnológica y gestión de e-commerce. ¡Contáctame para llevar tu proyecto al siguiente nivel!",
  keywords: [
    "desarrollador web freelancer",
    "desarrollo web freelance",
    "desarrollador web Fullstack",
    "desarrollo de aplicaciones web",
    "desarrollo de sitios web",
    "servicios de desarrollo web freelance",
    "servicios de gestión de e-commerce",
    "programacion freelance",
    "programador web en Argentina",
    "programador web en Latinoamérica",
    "programador freelance en España",
    "programacion web",
    "desarrollador web en Catamarca",
    "freelance en Argentina",
    "especialista en desarrollo Front-end",
    "especialista en desarrollo Back-end",
    "experto en testing de aplicaciones web",
  ],

  authors: {
    name: "Agustín Avellaneda",
  },
  publisher: "Agustín Avellaneda",

  twitter: {
    card: "summary_large_image",
    title: "Avellaneda Agustín | Desarrollador Web Freelance ",
    description:
      "Soy Avellaneda Agustín, un Desarrollador web Fullstack y QA-Tester de Argentina, con experiencia en el desarrollo de páginas web modernas, interactivas y robustas. Ofrezco servicios de desarrollo web freelance, consultoría tecnológica y gestión de e-commerce. ¡Contáctame para llevar tu proyecto al siguiente nivel!",
    creator: "Avellaneda Agustín",
    images:
      "https://res.cloudinary.com/draig/image/upload/v1710351881/portolio-personal/qhiyj8j4vtfugkotdqnr.png",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
  },

  openGraph: {
    type: "website",
    url: "https://agustin.top",
    title: "Avellaneda Agustín | Desarrollador Web Freelance ",
    description:
      "Soy Avellaneda Agustín, un Desarrollador web Fullstack y QA-Tester de Argentina, con experiencia en el desarrollo de páginas web modernas, interactivas y robustas. Ofrezco servicios de desarrollo web freelance, consultoría tecnológica y gestión de e-commerce. ¡Contáctame para llevar tu proyecto al siguiente nivel!",
    siteName: "Avellaneda Agustín | Desarrollador Web Freelance",
    images: [
      {
        url: "https://res.cloudinary.com/draig/image/upload/v1710351881/portolio-personal/qhiyj8j4vtfugkotdqnr.png",
      },
    ],
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
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
