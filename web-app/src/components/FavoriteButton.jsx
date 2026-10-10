"use client";

import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      type="button"
      aria-pressed={isFavorite}
      onClick={() => setIsFavorite(!isFavorite)}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        isFavorite
          ? "border-pink-500 bg-pink-500 text-white hover:bg-pink-600"
          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
      }`}
    >
      {isFavorite ? "♥ Favorited" : "♡ Add to favorites"}
    </button>
  );
}
