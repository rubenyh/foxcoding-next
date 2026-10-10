export const metadata = {
  title: "About | Product Catalog",
};

export default function AboutPage() {
  return (
    <section className="max-w-2xl space-y-4">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="text-gray-600">
        This catalog is a small demo of the Next.js App Router working with a Supabase database.
      </p>
      <ul className="list-disc space-y-2 pl-5 text-gray-600">
        <li>Product pages are Server Components that query Supabase on the server.</li>
        <li>Each product has its own page, found through a dynamic route segment.</li>
        <li>The favorite button is a small Client Component that keeps its state in the browser.</li>
        <li>The database allows public reads only; nobody can change products from this site.</li>
      </ul>
    </section>
  );
}
