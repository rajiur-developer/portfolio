import "./globals.css";

export const metadata = {
  title: "Rajiur Rahman | Front-End Developer",
  description: "Front-end developer building thoughtful, responsive digital experiences with React, Next.js, and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
