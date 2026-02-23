import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
  weight:["400","600","700"]
});


export const metadata = {
  title: "Shopping Cart",
  description: "Next JS Shopping Cart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${redHatText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
