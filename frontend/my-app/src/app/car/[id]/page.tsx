import data from "@/app/database/dataset.json"

const cars = data.cars

export function generateStaticParams() {
  return cars.map((_, i) => ({ id: String(i) }))
}

export default async function CarDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const car = cars[Number(id)]

  if (!car) return <div className="p-10 text-gray-400">Car not found.</div>

  return (
    <section className="max-w-5xl mx-auto px-4 md:px-10 py-10">

      {/* Top: Image + Summary */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[55%]">
          <img src={car.img} alt={car.name} className="w-full h-[320px] object-cover rounded-xl" />
          <div className="grid grid-cols-3 gap-2 mt-2">
            <img src={car.img} alt="" className="h-[80px] w-full object-cover rounded-lg opacity-70 hover:opacity-100 cursor-pointer" />
            <img src={car.img} alt="" className="h-[80px] w-full object-cover rounded-lg opacity-70 hover:opacity-100 cursor-pointer" />
            <img src={car.img} alt="" className="h-[80px] w-full object-cover rounded-lg opacity-70 hover:opacity-100 cursor-pointer" />
          </div>
        </div>

        {/* Right Summary */}
        <div className="w-full md:w-[45%] flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-black">{car.name}</h1>
          <p className="text-orange-500 font-bold text-2xl">{car.price}</p>
          <span className="bg-orange-100 text-orange-500 text-xs px-3 py-1 rounded-full w-fit">Negotiable</span>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-xs text-gray-400">Year</p>
              <p className="text-black font-semibold">📅 {car.year}</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-xs text-gray-400">Gearbox</p>
              <p className="text-black font-semibold">⚙️ {car.gearbox}</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-xs text-gray-400">Mileage</p>
              <p className="text-black font-semibold">🛣️ {car.km}</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-xs text-gray-400">Fuel</p>
              <p className="text-black font-semibold">⛽ {car.fuel}</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-xs text-gray-400">Registration</p>
              <p className="text-black font-semibold">📄 {car.reg}</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3">
              <p className="text-xs text-gray-400">Location</p>
              <p className="text-black font-semibold">📍 {car.location}</p>
            </div>
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 font-semibold mt-2">
            Contact Seller
          </button>
        </div>
      </div>

      {/* Bottom: Description */}
      <div className="mt-10 border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-bold text-black mb-3">About this car</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          This {car.name} ({car.year}) is available in {car.location}. It has {car.km} on the clock,
          runs on {car.fuel}, and comes with a {car.gearbox} gearbox. Registration: {car.reg}.
          Listed {car.time}.
        </p>
      </div>

    </section>
  )
}