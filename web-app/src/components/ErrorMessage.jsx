export default function ErrorMessage({ title, message }) {
  return (
    <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-800">
      <h2 className="font-semibold">{title}</h2>
      <p className="mt-1 text-sm">{message}</p>
    </div>
  );
}
