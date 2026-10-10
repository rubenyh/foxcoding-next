import Link from "next/link";
import { connection } from "next/server";
import { supabase } from "@/lib/supabase";
import { formatPrice } from "@/lib/format";
import ErrorMessage from "@/components/ErrorMessage";
import ProductPlaceholder from "@/components/ProductPlaceholder";

export const metadata = {
  title: "Products | Product Catalog",
};

export default async function ProductsPage() {
  // Render at request time, so the build never needs the database.
  await connection();

  if (!supabase) {
    return (
      <ErrorMessage
        title="Supabase is not configured"
        message="Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY to .env.local, then restart the server."
      />
    );
  }

  const { data: products, error } = await supabase
    .from("products")
    .select("id, name, price, category")
    .order("id");

  if (error) {
    console.error("Failed to load products:", error.message);
    return (
      <ErrorMessage
        title="Could not load products"
        message="There was a problem reading the catalog from the database. Please try again later."
      />
    );
  }

  return (
    <section>
      <h1 className="mb-8 text-3xl font-bold">Products</h1>

      {products.length === 0 ? (
        <p className="rounded-lg border border-dashed border-gray-300 p-10 text-center text-gray-500">
          The catalog is empty. Run <code>supabase/setup.sql</code> to add sample products.
        </p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.id}>
              <Link
                href={`/products/${product.id}`}
                className="block rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <ProductPlaceholder name={product.name} className="h-40" />
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-indigo-600">
                  {product.category}
                </p>
                <h2 className="mt-1 font-semibold">{product.name}</h2>
                <p className="mt-2 text-gray-700">{formatPrice(product.price)}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
