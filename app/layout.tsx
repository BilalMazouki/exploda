import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { maxwell, aboreto } from "@/public/fonts/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${maxwell.variable} ${aboreto.variable}`}>
      <head>
        <title>Exploda</title>
        <meta name="description" content="A Mersawi Surf Experience" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

