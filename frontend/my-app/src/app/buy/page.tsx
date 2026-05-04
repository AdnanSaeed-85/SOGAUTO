'use client'
import { useState } from "react"

const cars = [
  { name: "BMW M-5", year: 2023, gearbox: "Automatique", km: "63,000 km", fuel: "Essence", reg: "Safra", price: "11,110,000 DA", location: "Guelma", time: "20 hours ago", img: "/img5.png" },
  { name: "Chery Bmgrand", year: 2025, gearbox: "Manuelle", km: "3,500 km", fuel: "Essence", reg: "Safra", price: "3,650,000 DA", location: "Guelma", time: "19 hours ago", img: "/img2.png" },
  { name: "Toyota Corolla", year: 2025, gearbox: "Automatique", km: "190 km", fuel: "Essence", reg: "Safra", price: "5,150,000 DA", location: "Guelma", time: "19 hours ago", img: "/img3.png" },
  { name: "Renault Megane", year: 2006, gearbox: "Manuelle", km: "361,000 km", fuel: "Diesel", reg: "Safra", price: "1,460,000 DA", location: "Guelma", time: "18 hours ago", img: "/img4.png" },
  { name: "Volkswagen T-Roc", year: 2023, gearbox: "Manuelle", km: "63,000 km", fuel: "Essence", reg: "Safra", price: "5,110,000 DA", location: "Guelma", time: "20 hours ago", img: "/img1.png" },
];

export default function BuyPage() {
  const [price, setPrice] = useState(100000);
  const [year, setYear] = useState(1980);
  const [mileage, setMileage] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <section className="flex flex-col md:flex-row mx-3 my-3 gap-3">

      {/* Mobile Filter Toggle */}
      <button
        className="md:hidden w-full bg-orange-500 text-white py-2 rounded-md"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? "✕ Hide Filters" : "⚙️ Show Filters"}
      </button>

      {/* Left Filter */}
      <div className={`${showFilters ? "flex" : "hidden"} md:flex w-full md:w-[28%] border border-gray-200 rounded-lg p-5 shadow-sm h-fit flex-col gap-3`}>
        <h1 className="text-black font-semibold text-2xl">Filter</h1>

        <input type="text" placeholder="Search here" className="w-full rounded-lg h-10 px-3 border border-gray-300 text-gray-800 outline-none focus:border-orange-500 placeholder:text-gray-400" />

        <div>
          <label className="text-sm text-gray-600 block mb-1">Price: {price.toLocaleString()} DA – ∞</label>
          <input type="range" min={0} max={10000000} step={50000} value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full accent-orange-500" />
        </div>

        <select className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 text-gray-600">
          <option>Vehicle Location</option>
          <option>Alger</option>
          <option>Oran</option>
          <option>Constantine</option>
          <option>Guelma</option>
        </select>

        <select className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 text-gray-600">
          <option>Brand</option>
          <option>Renault</option>
          <option>Toyota</option>
          <option>Volkswagen</option>
          <option>BMW</option>
        </select>

        <select className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 text-gray-600">
          <option>Model</option>
          <option>Clio</option>
          <option>Corolla</option>
          <option>Golf</option>
        </select>

        <div>
          <label className="text-sm text-gray-600 block mb-1">Year: {year}</label>
          <input type="range" min={1980} max={2027} value={year} onChange={(e) => setYear(Number(e.target.value))} className="w-full accent-orange-500" />
        </div>

        <div>
          <label className="text-sm text-gray-600 block mb-1">Mileage: {mileage.toLocaleString()} km – ∞</label>
          <input type="range" min={0} max={500000} step={5000} value={mileage} onChange={(e) => setMileage(Number(e.target.value))} className="w-full accent-orange-500" />
        </div>

        <select className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 text-gray-600">
          <option>Fuel Type</option>
          <option>Essence</option>
          <option>Diesel</option>
          <option>Electrique</option>
          <option>Hybride</option>
        </select>

        <select className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 text-gray-600">
          <option>Gearbox</option>
          <option>Manuelle</option>
          <option>Automatique</option>
        </select>

        <div>
          <label className="text-sm text-gray-600 block mb-2">Seller Type</label>
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-gray-600 text-sm"><input type="checkbox" className="accent-orange-500" /> Pro</label>
            <label className="flex items-center gap-2 text-gray-600 text-sm"><input type="checkbox" className="accent-orange-500" /> Particular</label>
          </div>
        </div>

        <select className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 text-gray-600">
          <option>Exterior Color</option>
          <option>White</option>
          <option>Black</option>
          <option>Red</option>
          <option>Silver</option>
        </select>

        <div>
          <label className="text-sm text-gray-600 block mb-2">Registration Certificate</label>
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-gray-600 text-sm"><input type="checkbox" className="accent-orange-500" /> Safra</label>
            <label className="flex items-center gap-2 text-gray-600 text-sm"><input type="checkbox" className="accent-orange-500" /> Delay</label>
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-600 block mb-2">Vehicle Condition</label>
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-gray-600 text-sm"><input type="checkbox" className="accent-orange-500" /> First Hand</label>
            <label className="flex items-center gap-2 text-gray-600 text-sm"><input type="checkbox" className="accent-orange-500" /> Brand New Car</label>
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">✓ Apply</button>
          <button className="w-full border border-gray-300 text-gray-600 py-2 rounded-md hover:border-orange-500">✕ Reset</button>
        </div>
      </div>

      {/* Right Car Cards */}
      <div className="w-full md:w-[72%] flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-semibold">{cars.length} ads</span>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 outline-none focus:border-orange-500">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        {cars.map((car, i) => (
          <div key={i} className="border border-gray-200 rounded-lg shadow-sm flex flex-col md:flex-row overflow-hidden hover:shadow-md transition">
            <img src={car.img} alt={car.name} className="w-full md:w-[300px] h-[200px] md:h-[190px] object-cover" />
            <div className="p-4 flex flex-col justify-between w-full">
              <div>
                <h3 className="font-bold text-black text-lg">{car.name}</h3>
                <div className="flex flex-wrap gap-2 md:gap-4 text-sm text-gray-500 mt-1">
                  <span>📅 {car.year}</span>
                  <span>⚙️ {car.gearbox}</span>
                  <span>🛣️ {car.km}</span>
                  <span>⛽ {car.fuel}</span>
                  <span>📄 {car.reg}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <div>
                  <p className="text-orange-500 font-bold text-lg">{car.price}</p>
                  <span className="bg-orange-100 text-orange-500 text-xs px-2 py-0.5 rounded-full">Negotiable</span>
                </div>
                <div className="text-right text-sm text-gray-400">
                  <p>{car.location}</p>
                  <p>{car.time}</p>
                </div>
                <button className="text-gray-300 hover:text-red-500 text-2xl">♥</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}