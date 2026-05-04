'use client'
import { useState } from "react"

const locations = [
  "Export Germany", "Export Spain", "Export France", "Export UAE", "Export China", "Export Other",
  "1 - Adrar", "2 - Chlef", "3 - Laghouat", "4 - Oum El Bouaghi", "5 - Batna",
  "6 - Béjaïa", "7 - Biskra", "8 - Béchar", "9 - Blida", "10 - Bouira",
  "11 - Tamanrasset", "12 - Tébessa", "13 - Tlemcen", "14 - Tiaret", "15 - Tizi Ouzou"
];

const showrooms = [
  { name: "Auto Elite Alger", location: "Alger", phone: "0550 123 456", brands: ["Toyota", "Honda"] },
  { name: "Sahara Motors", location: "Oran", phone: "0660 789 012", brands: ["BMW", "Mercedes"] },
  { name: "Atlas Auto", location: "Constantine", phone: "0770 345 678", brands: ["Renault", "Peugeot"] },
  { name: "Nord Auto", location: "Annaba", phone: "0550 987 654", brands: ["Volkswagen", "Kia"] },
  { name: "Sud Garage", location: "Tamanrasset", phone: "0660 111 222", brands: ["Toyota", "Nissan"] },
  { name: "Est Motors", location: "Tébessa", phone: "0770 333 444", brands: ["Hyundai", "Seat"] },
];

export default function ShowroomPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const toggle = (loc: string) => {
    setSelected(prev =>
      prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
    );
  };

  return (
    <section className="flex flex-col md:flex-row mx-2 my-2 gap-3">

      {/* Mobile Filter Toggle */}
      <button
        className="md:hidden w-full bg-orange-500 text-white py-2 rounded-md"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? "✕ Hide Filters" : "⚙️ Show Filters"}
      </button>

      {/* Left Filter */}
      <div className={`${showFilters ? "flex" : "hidden"} md:flex w-full md:w-[25%] border border-gray-200 rounded-lg p-5 shadow-sm h-fit flex-col gap-3`}>
        <h2 className="font-semibold text-2xl text-black">Filters</h2>
        <input
          type="text"
          placeholder="Search a dealer..."
          className="placeholder:text-gray-400 text-black w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-orange-500"
        />
        <div>
          <label className="text-sm font-semibold text-gray-700 block mb-2">Showroom Location</label>
          <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
            {locations.map((loc) => (
              <label key={loc} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-orange-500"
                  checked={selected.includes(loc)}
                  onChange={() => toggle(loc)}
                />
                {loc}
              </label>
            ))}
          </div>
        </div>
        <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 mt-2">
          ✓ Apply
        </button>
      </div>

      {/* Right Showrooms */}
      <div className="w-full md:w-[75%] flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-black">Auto Showrooms Directory in Algeria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {showrooms.map((showroom, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition">
              <div className="bg-gray-100 h-[150px] rounded-md flex items-center justify-center text-gray-400 mb-3">
                No Image
              </div>
              <h3 className="font-bold text-black text-lg">{showroom.name}</h3>
              <p className="text-sm text-gray-500 mt-1">📍 {showroom.location}</p>
              <p className="text-sm text-gray-500">📞 {showroom.phone}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {showroom.brands.map((brand) => (
                  <span key={brand} className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded-full">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}