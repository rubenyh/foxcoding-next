// A CSS-only stand-in for a product photo.
export default function ProductPlaceholder({ name, className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-100 to-sky-200 text-4xl font-bold text-indigo-500 ${className}`}
    >
      {name.charAt(0)}
    </div>
  );
}
