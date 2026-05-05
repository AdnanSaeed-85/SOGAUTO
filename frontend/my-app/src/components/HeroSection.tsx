'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const cards = [
  {
    name: "BMW M5",
    price: "11,300,000 DA",
    fuel: "Diesel",
    year: 2023,
    km: "10,000 km",
    images: ["/bmw1.png", "/bmw2.png", "/bmw3.png"],
  },
  {
    name: "Honda Civic",
    price: "2,750,000 DA",
    fuel: "Essence",
    year: 2021,
    km: "32,000 km",
    images: ["/honda1.png", "/honda2.png", "/honda3.png", "/honda4.png"],
  },
  {
    name: "Dacia Stepway",
    price: "1,900,000 DA",
    fuel: "Essence",
    year: 2022,
    km: "28,000 km",
    images: ["/dacia1.png", "/dacia2.png", "/dacia3.png"],
  },
  {
    name: "Hyundai",
    price: "2,100,000 DA",
    fuel: "Essence",
    year: 2022,
    km: "20,000 km",
    images: ["/hyundai1.png", "/hyundai2.png", "/hyundai3.png"],
  },
  {
    name: "KIA Picanto",
    price: "1,600,000 DA",
    fuel: "Essence",
    year: 2021,
    km: "41,000 km",
    images: ["/kia1.png", "/kia2.png", "/kia3.png", "/kia4.png"],
  },
  {
    name: "Mercedes",
    price: "Price on demand",
    fuel: "Diesel",
    year: 2023,
    km: "8,000 km",
    images: ["/merc1.png", "/merc2.png", "/merc3.png", "/merc4.png"],
  },
  {
    name: "Peugeot",
    price: "1,750,000 DA",
    fuel: "Essence",
    year: 2021,
    km: "35,000 km",
    images: ["/peugeot1.png", "/peugeot2.png", "/peugeot3.png"],
  },
  {
    name: "Renault Clio",
    price: "1,450,000 DA",
    fuel: "Essence",
    year: 2020,
    km: "55,000 km",
    images: ["/renault1.png", "/renault2.png", "/renault3.png"],
  },
  {
    name: "Seat Ibiza",
    price: "1,800,000 DA",
    fuel: "Essence",
    year: 2021,
    km: "30,000 km",
    images: ["/seat1.png", "/seat2.png", "/seat3.png"],
  },
  {
    name: "Tesla",
    price: "Price on demand",
    fuel: "Électrique",
    year: 2023,
    km: "5,000 km",
    images: ["/tesla1.png", "/tesla2.png", "/tesla3.png"],
  },
  {
    name: "Volkswagen Golf",
    price: "2,300,000 DA",
    fuel: "Essence",
    year: 2022,
    km: "18,000 km",
    images: ["/vw1.png", "/vw2.png", "/vw3.png"],
  },
];

function InnerImageSwiper({ images, price }: { images: string[]; price: string }) {
  return (
    <div
      className="relative"
      onTouchStart={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        loop={images.length > 1}
        spaceBetween={0}
        slidesPerView={1}
        className="h-[200px]"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt=""
              className="w-full h-[200px] object-cover block"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 pointer-events-none z-10">
        <p className="text-white font-bold text-lg">{price}</p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);
  const [locationOpen, setLocationOpen] = useState(false);                        // ← add
  const [selectedLocation, setSelectedLocation] = useState("Vehicle Location");   // ← add
  const locations = ["Alger", "Oran", "Constantine"];                             // ← add
  const router = useRouter();

  const formatPrice = (val: number) =>
    val === 0 ? "0 DA" : `${val.toLocaleString("fr-DZ")} DA`;

  return (
    <section className="flex flex-col md:flex-row gap-4 px-4 md:px-10 py-6">

      {/* Left Filter */}
      <div className="w-full md:w-[28%] border border-gray-200 rounded-xl p-5 shadow-sm h-fit">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-orange-500 mb-4 placeholder:text-gray-300 text-black text-sm"
        />

        {/* Dual range slider */}
        <div className="mb-6">
          <label className="text-sm text-gray-500 block mb-5">
            Prix : {formatPrice(priceRange[0])} – {formatPrice(priceRange[1])}
          </label>
          <div className="px-2">
            <Slider
              range
              min={0}
              max={10000000}
              step={50000}
              value={priceRange}
              onChange={(val) => setPriceRange(val as [number, number])}
              styles={{
                track: { backgroundColor: "#f97316", height: 4 },
                rail: { backgroundColor: "#e5e7eb", height: 4 },
                handle: {
                  backgroundColor: "#f97316",
                  borderColor: "#f97316",
                  opacity: 1,
                  width: 4,
                  height: 4,
                  marginTop: -7,
                  boxShadow: "0 0 0 2px #fff, 0 0 0 4px #f97316",
                },
              }}
              handleRender={(node, handleProps) => (
                <div style={{ ...node.props.style, position: "absolute" }}>
                  {node}
                  <div
                    className="opacity-0 hover:opacity-100 transition-opacity duration-200"
                    style={{
                      position: "absolute",
                      top: "-36px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#f97316",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "3px 8px",
                      borderRadius: "999px",
                      whiteSpace: "nowrap",
                      pointerEvents: "none",
                      zIndex: 10,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                    }}
                  >
                    {formatPrice(handleProps.value)}
                    <span
                      style={{
                        position: "absolute",
                        bottom: "-5px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: 0,
                        borderLeft: "5px solid transparent",
                        borderRight: "5px solid transparent",
                        borderTop: "5px solid #f97316",
                      }}
                    />
                  </div>
                </div>
              )}
            />
          </div>
        </div>

        <div className="relative mb-4">
          <button
            onClick={() => setLocationOpen(!locationOpen)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-left text-gray-500 text-sm flex justify-between items-center focus:border-orange-500 bg-white"
          >
            <span>{selectedLocation}</span>
            <span className="text-gray-400 text-xs">{locationOpen ? "▲" : "▼"}</span>
          </button>
          {locationOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setSelectedLocation(loc);
                    setLocationOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 text-sm font-semibold">
          🔍 Search Listings
        </button>
      </div>

      {/* Right Outer Swiper */}
      <div className="w-full md:w-[72%]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={12}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },  // ← add this
          }}
          touchStartPreventDefault={false}
        >
          {cards.map((car, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-xl overflow-hidden shadow-md bg-white border border-gray-100 hover:shadow-orange-200 hover:shadow-lg transition-all duration-200">

                <InnerImageSwiper images={car.images} price={car.price} />

                <div
                  className="p-3 cursor-pointer"
                  onClick={() =>
                    router.push(`/buy?brand=${encodeURIComponent(car.name.split(" ")[0])}`)
                  }
                >
                  <h3 className="font-bold text-black text-base">{car.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">📅 {car.year}</span>
                    <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">⛽ {car.fuel}</span>
                    <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">🛣️ {car.km}</span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}