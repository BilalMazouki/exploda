import localFont from "next/font/local";

export const maxwell = localFont({
  src: [
    {
      path: "maxwell.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mw",
  display: "swap",
});

export const aboreto = localFont({
  src: [
    {
      path: "aboreto.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ab",
  display: "swap",
});
