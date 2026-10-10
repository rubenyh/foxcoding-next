import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { supabase } from "@/lib/supabase";
import { formatPrice } from "@/lib/format";
import ErrorMessage from "@/components/ErrorMessage";
import FavoriteButton from "@/components/FavoriteButton";
import ProductPlaceholder from "@/components/ProductPlaceholder";

export default async function ProductDetailPage({ params }) {
  await connection();

  // Route params are a Promise in current Next.js.
  const { id } = await params;

  // IDs are positive whole numbers; anything else can't be a product.
  if (!/^\d+$/.test(id) || !Number.isSafeInteger(Number(id))) {
    notFound();
  }

  if (!supabase) {
    return (
      <ErrorMessage
        title="Supabase is not configured"
        message="Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY to .env.local, then restart the server."
      />
    );
  }

  const { data: product, error } = await supabase
    .from("products")
    .select("id, name, description, price, category")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    console.error(`Failed to load product ${id}:`, error.message);
    return (
      <ErrorMessage
        title="Could not load this product"
        message="There was a problem reading the product from the database. Please try again later."
      />
    );
  }

  if (!product) {
    notFound();
  }

  return (
    <article>
      <Link href="/products" className="text-sm font-medium text-indigo-600 hover:underline">
        ← Back to products
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <ProductPlaceholder name={product.name} className="h-64 text-7xl md:h-80" />

        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">{product.category}</p>
          <h1 className="mt-1 text-3xl font-bold">{product.name}</h1>
          <p className="mt-3 text-2xl text-gray-800">{formatPrice(product.price)}</p>
          <p className="mt-4 leading-relaxed text-gray-600">{product.description}</p>
          <div className="mt-6">
            <FavoriteButton />
          </div>
        </div>
      </div>
    </article>
  );
}
