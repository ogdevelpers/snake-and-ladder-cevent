import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Snakes & Ladders',
  description: 'A fun game of Snakes and Ladders!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app-container"> {/* Global container for centering and background */}
          {children}
        </div>
      </body>
    </html>
  );
}
