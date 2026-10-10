import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-12 text-center">
      <p className="text-sm font-semibold text-indigo-600">404</p>
      <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-gray-600">We couldn&apos;t find the product or page you were looking for.</p>
      <Link href="/products" className="mt-6 inline-block font-medium text-indigo-600 hover:underline">
        ← Back to the catalog
      </Link>
    </section>
  );
}
