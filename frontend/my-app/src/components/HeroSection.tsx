'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useState } from "react";
import { useRouter } from "next/navigation";

const cards = [
  { name: "Toyota", price: "Price on demand", fuel: "Diesel", year: 2022, km: "45,000 km", img: "/img1.png" },
  { name: "Honda civic", price: "2,750,000 DA", fuel: "Essence", year: 2021, km: "32,000 km", img: "/img2.png" },
  { name: "Honda civic", price: "1,900,000 DA", fuel: "Essence", year: 2020, km: "60,000 km", img: "/img3.png" },
  { name: "Changan", price: "1,900,000 DA", fuel: "Essence", year: 2020, km: "60,000 km", img: "/img4.png" },
  { name: "MBW M-5", price: "11,300,000 DA", fuel: "Diesel", year: 2023, km: "10,000 km", img: "/img5.png" },
];

export default function HeroSection() {
  const [price, setPrice] = useState(0);
  const router = useRouter();

  const handleCardClick = (carName: string) => {
    // Extract brand (first word) from the car name
    const brand = carName.split(" ")[0];
    router.push(`/buy?brand=${encodeURIComponent(brand)}`);
  };

  return (
    <section className="flex flex-col md:flex-row gap-6 px-4 md:px-10 py-8">
      <div className="w-full md:w-[30%] border border-gray-200 rounded-lg p-6 shadow-sm h-fit">
        <input type="text" placeholder="Search..." className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 mb-4 placeholder:text-gray-300" />
        <div className="mb-4">
          <label className="text-sm text-gray-600 block mb-1">Price: {price} DA – ∞</label>
          <input
            type="range"
            min={100000}
            max={10000000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-orange-500"
          />
        </div>
        <select className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 mb-4 text-black">
          <option>Vehicle Location</option>
          <option>Alger</option>
          <option>Oran</option>
          <option>Constantine</option>
        </select>
        <button className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-orange-500">
          🔍 Search Listings
        </button>
      </div>

      <div className="w-full md:w-[70%]">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
          }}
        >
          {cards.map((car, i) => (
            <SwiperSlide key={i}>
              <div
                onClick={() => handleCardClick(car.name)}
                className="border border-gray-200 rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-md hover:border-orange-400 transition-all duration-200"
              >
                <div className="bg-orange-400 h-[180px] rounded-md mb-3 flex items-center justify-center text-gray-400">
                  <img src={car.img} alt={car.name} className="h-[180px] w-full object-cover rounded-md mb-3" />
                </div>
                <h3 className="font-semibold text-black">{car.name}</h3>
                <p className="text-orange-500 font-bold">{car.price}</p>
                <p className="text-sm text-gray-500">{car.year} • {car.fuel} • {car.km}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}