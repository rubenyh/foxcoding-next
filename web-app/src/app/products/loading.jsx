export default function Loading() {
  return (
    <div aria-busy="true" aria-label="Loading products">
      <div className="mb-8 h-9 w-48 animate-pulse rounded bg-gray-200" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className="h-72 animate-pulse rounded-xl bg-gray-200" />
        ))}
      </div>
    </div>
  );
}
