'use client'
import { useState, useMemo, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import data from "@/app/database/dataset.json"
import Link from "next/link"

const cars = data.cars

function BuyPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const brandParam = searchParams.get("brand") || "";

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [yearRange, setYearRange] = useState<[number, number]>([1980, 2027]);
  const [mileageRange, setMileageRange] = useState<[number, number]>([0, 500000]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchInput, setSearchInput] = useState(brandParam);

  const filteredCars = useMemo(() => {
    if (!brandParam) return cars;
    return cars.filter((car) =>
      car.name.toLowerCase().includes(brandParam.toLowerCase())
    );
  }, [brandParam]);

  const handleClearFilter = () => {
    setSearchInput("");
    router.push("/buy");
  };

  const formatPrice = (val: number) =>
    val >= 1000000
      ? `${(val / 1000000).toFixed(1)}M DA`
      : val >= 1000
      ? `${(val / 1000).toFixed(0)}K DA`
      : `${val} DA`;

  const formatMileage = (val: number) =>
    val >= 1000 ? `${(val / 1000).toFixed(0)}K km` : `${val} km`;

  const sliderStyles = {
    track: { backgroundColor: "#f97316", height: 4 },
    rail: { backgroundColor: "#e5e7eb", height: 4 },
    handle: {
      backgroundColor: "#f97316",
      borderColor: "#f97316",
      opacity: 1,
      width: 4,
      height: 4,
      marginTop: -6,
      boxShadow: "0 0 0 2px #fff, 0 0 0 3px #f97316",
    },
  };

  const renderHandle = (
  node: React.ReactElement<{ style?: React.CSSProperties }>,
  handleProps: { value: number },
  formatter: (v: number) => string
) => (
  <div style={{ ...node.props.style, position: "absolute" }}>
      {node}
      <div
        className="opacity-0 hover:opacity-100 transition-opacity duration-200"
        style={{
          position: "absolute",
          top: "-32px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#f97316",
          color: "#fff",
          fontSize: "10px",
          fontWeight: 600,
          padding: "2px 7px",
          borderRadius: "999px",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 10,
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        {formatter(handleProps.value)}
        <span
          style={{
            position: "absolute",
            bottom: "-4px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "4px solid transparent",
            borderRight: "4px solid transparent",
            borderTop: "4px solid #f97316",
          }}
        />
      </div>
    </div>
  );

  // Shared filter panel content used in both desktop sidebar and mobile drawer
  const FilterPanel = () => (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Search here"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full rounded-lg h-10 px-3 border border-gray-300 text-gray-800 outline-none focus:border-orange-500 placeholder:text-gray-400"
      />

      {/* Price Range */}
      <div>
        <label className="text-sm text-gray-600 block mb-4">
          Prix : {formatPrice(priceRange[0])} – {formatPrice(priceRange[1])}
        </label>
        <div className="px-1">
          <Slider
            range min={0} max={10000000} step={50000}
            value={priceRange}
            onChange={(val) => setPriceRange(val as [number, number])}
            styles={sliderStyles}
            handleRender={(node, handleProps) => renderHandle(node, handleProps, formatPrice)}
          />
        </div>
      </div>

      <select className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 text-gray-600">
        <option>Vehicle Location</option>
        <option>Alger</option><option>Oran</option>
        <option>Constantine</option><option>Guelma</option>
      </select>

      <select className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 text-gray-600">
        <option>Brand</option>
        <option>Renault</option><option>Toyota</option>
        <option>Volkswagen</option><option>BMW</option>
      </select>

      <select className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 text-gray-600">
        <option>Model</option>
        <option>Clio</option><option>Corolla</option><option>Golf</option>
      </select>

      {/* Year Range */}
      <div>
        <label className="text-sm text-gray-600 block mb-4">
          Year : {yearRange[0]} – {yearRange[1]}
        </label>
        <div className="px-1">
          <Slider
            range min={1980} max={2027} step={1}
            value={yearRange}
            onChange={(val) => setYearRange(val as [number, number])}
            styles={sliderStyles}
            handleRender={(node, handleProps) => renderHandle(node, handleProps, (v) => String(v))}
          />
        </div>
      </div>

      {/* Mileage Range */}
      <div>
        <label className="text-sm text-gray-600 block mb-4">
          Mileage : {formatMileage(mileageRange[0])} – {formatMileage(mileageRange[1])}
        </label>
        <div className="px-1">
          <Slider
            range min={0} max={500000} step={5000}
            value={mileageRange}
            onChange={(val) => setMileageRange(val as [number, number])}
            styles={sliderStyles}
            handleRender={(node, handleProps) => renderHandle(node, handleProps, formatMileage)}
          />
        </div>
      </div>

      <select className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 text-gray-600">
        <option>Fuel Type</option>
        <option>Essence</option><option>Diesel</option>
        <option>Electrique</option><option>Hybride</option>
      </select>

      <select className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 text-gray-600">
        <option>Gearbox</option>
        <option>Manuelle</option><option>Automatique</option>
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
        <option>White</option><option>Black</option>
        <option>Red</option><option>Silver</option>
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
    </div>
  );

  return (
    <section className="flex flex-col md:flex-row mx-3 my-3 gap-3">

      {/* ── MOBILE: full-screen drawer overlay ── */}
      {showFilters && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col">
          {/* Dark backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowFilters(false)}
          />

          {/* Drawer panel */}
          <div className="relative z-10 bg-white w-full h-full flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <h2 className="text-black font-bold text-lg">🔧 Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-400 hover:text-black text-2xl leading-none"
              >
                ✕
              </button>
            </div>

            {/* Scrollable filter content */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <FilterPanel />
            </div>

            {/* Sticky bottom action buttons */}
            <div className="flex gap-2 px-4 py-3 border-t border-gray-200 bg-white">
              <button
                onClick={() => setShowFilters(false)}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold"
              >
                ✓ Apply Filters
              </button>
              <button
                onClick={() => { handleClearFilter(); setShowFilters(false); }}
                className="w-full border border-gray-300 text-gray-600 py-3 rounded-lg hover:border-orange-500"
              >
                ✕ Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE: Show Filters button ── */}
      <button
        className="md:hidden w-full bg-orange-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
        onClick={() => setShowFilters(true)}
      >
        ⚙️ Show Filters
      </button>

      {/* ── DESKTOP: sidebar ── */}
      <div className="hidden md:flex w-full md:w-[28%] border border-gray-200 rounded-lg p-5 shadow-sm h-fit flex-col gap-3">
        <h1 className="text-black font-semibold text-2xl">Filter</h1>
        <FilterPanel />
        <div className="flex gap-2 mt-2">
          <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">✓ Apply</button>
          <button
            onClick={handleClearFilter}
            className="w-full border border-gray-300 text-gray-600 py-2 rounded-md hover:border-orange-500"
          >
            ✕ Reset
          </button>
        </div>
      </div>

      {/* ── Right Car Cards ── */}
      <div className="w-full md:w-[72%] flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-semibold">{filteredCars.length} ads</span>
            {brandParam && (
              <span className="flex items-center gap-1 bg-orange-100 text-orange-600 text-sm px-3 py-1 rounded-full">
                Brand: {brandParam}
                <button onClick={handleClearFilter} className="ml-1 hover:text-red-500 font-bold">✕</button>
              </span>
            )}
          </div>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-gray-600 outline-none focus:border-orange-500">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        {filteredCars.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <p className="text-4xl mb-3">🚗</p>
            <p className="text-lg font-semibold">No cars found for "{brandParam}"</p>
            <button onClick={handleClearFilter} className="mt-4 text-orange-500 underline text-sm">Clear filter</button>
          </div>
        ) : (
          filteredCars.map((car) => {
            const globalIndex = cars.indexOf(car);
            return (
              <div key={globalIndex} className="border border-gray-200 rounded-lg shadow-sm flex flex-col md:flex-row overflow-hidden hover:shadow-md transition">
                <Link href={`/car/${globalIndex}`}>
                  <img src={car.img} alt={car.name} className="w-full md:w-[300px] h-[200px] md:h-[190px] object-cover" />
                </Link>
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
            );
          })
        )}
      </div>

    </section>
  );
}

export default function BuyPage() {
  return (
    <Suspense fallback={<div className="p-10 text-gray-400">Loading...</div>}>
      <BuyPageContent />
    </Suspense>
  );
}