import "./globals.css";

export const metadata = {
  title: "GoodLuck Footwear Logo",
  description: "Professional logo concept for GoodLuck Footwear."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
