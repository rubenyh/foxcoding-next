import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Product Catalog",
  description: "A simple product catalog built with Next.js and Supabase.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gray-50 text-gray-900 antialiased">
        <header className="border-b border-gray-200 bg-white">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-lg font-bold text-indigo-600">
              Catalog
            </Link>
            <div className="flex gap-6 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-indigo-600">Home</Link>
              <Link href="/products" className="hover:text-indigo-600">Products</Link>
              <Link href="/about" className="hover:text-indigo-600">About</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
