import "./globals.css";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Nfinity Financials | Webinars",
  description: "Webinars, registrations, hosts, and admin tools for Nfinity Financials.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
