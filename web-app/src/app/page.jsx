import Link from "next/link";

export default function HomePage() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Welcome to the Product Catalog</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
        Browse a small collection of products stored in Supabase and rendered on the server with Next.js.
      </p>
      <Link
        href="/products"
        className="mt-8 inline-block rounded-full bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
      >
        Browse the catalog
      </Link>
    </section>
  );
}
