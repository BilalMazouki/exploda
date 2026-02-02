import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { maxwell, aboreto } from "@/public/fonts/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${maxwell.variable} ${aboreto.variable}`}>
      <head>
        <title>Exploda</title>
        <meta name="description" content="Exploda - A platform to showcase and explore creative designs and ideas." />
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

