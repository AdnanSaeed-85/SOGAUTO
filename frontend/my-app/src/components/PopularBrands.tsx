'use client'
import { useRouter } from "next/navigation"

export default function PopularBrands() {
  const brands = ["Renault", "Volkswagen", "Peugeot", "Hyundai", "Kia", "Seat"];
  const router = useRouter();

  return (
    <div className="px-4 md:px-10 py-6">
      <h2 className="text-xl font-bold text-black border-l-4 border-orange-500 pl-3 mb-4">
        The most popular brands
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => router.push(`/buy?brand=${encodeURIComponent(brand)}`)}
            className="flex justify-center items-center gap-2 border border-orange-400 rounded-md px-4 py-2 hover:bg-orange-500/[0.5] text-black"
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
}