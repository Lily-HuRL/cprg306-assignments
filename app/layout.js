
import "./globals.css";

export const metadata = {
  title: "Shopping List",
  description: "A shopping list for groceries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
