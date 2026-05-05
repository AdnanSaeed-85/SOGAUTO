'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

const faqs = [
  {
    question: "What is Sogauto?",
    answer: "Sogauto is Algeria's #1 automotive classifieds website.",
    points: ["Buy or sell your new or used car", "Find a trusted showroom near you across Algeria", "Gain visibility with our quality expertise"]
  },
  {
    question: "How do I sell my car in Algeria?",
    answer: "Selling your car on Sogauto is simple and fast.",
    points: ["Create a free account", "Post your ad with photos and details", "Get contacted directly by buyers"]
  },
  {
    question: "How do I buy a used car in Algeria?",
    answer: "Browse thousands of listings across Algeria.",
    points: ["Use filters to find your ideal car", "Contact the seller directly via chat", "Visit the vehicle and finalize the deal"]
  },
  {
    question: "Is Sogauto free?",
    answer: "Yes, Sogauto is free for individuals. You can post ads and browse listings at no cost. Professional plans with extra features are also available."
  },
  {
    question: "What is a boost on Sogauto?",
    answer: "A boost pushes your ad to the top of search results, giving it more visibility and increasing your chances of selling faster."
  },
  {
    question: "How do I find a car showroom near me?",
    answer: "Go to the Showrooms section and filter by your wilaya to find verified showrooms near you across Algeria."
  },
  {
    question: "What is the Sogauto+ subscription?",
    answer: "Sogauto+ is our professional plan for dealers and showrooms.",
    points: ["20% discount on boosts", "Listed in the showroom directory", "Real-time statistics", "Professional seller page indexed on Google", "Sogauto+ badge"]
  },
]

export default function PopularModels() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const router = useRouter()

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  const models = [
    { name: "Renault Clio", img: "/renault_clio.png" },
    { name: "Volkswagen Golf", img: "/volkswagen_golf.png" },
    { name: "Dacia Stepway", img: "/dacia_stepway.png" },
    { name: "Seat Ibiza", img: "/seat_ibiza.png" },
    { name: "Kia Picanto", img: "/kia_picanto.png" },
    { name: "BMW", img: "/bmw.png" },
  ]

  const recommendation = [
    { name: "Toyota", img: "/toyota.png" },
    { name: "Honda", img: "/honda.png" },
    { name: "Kia", img: "/kia.png" },
    { name: "BMW-M5", img: "/bmw_m5.png" },
    { name: "Tesla", img: "/tesla.png" }
  ]

  // Extract first word as brand for filtering
  const handleClick = (name: string) => {
    const brand = name.split(" ")[0].replace("-", " ").split(" ")[0];
    router.push(`/buy?brand=${encodeURIComponent(brand)}`);
  }

  return (
    <div className="px-4 md:px-10 py-6">

      <h2 className="text-xl font-bold text-black border-l-4 border-orange-500 pl-3 mb-4">
        The most requested models
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {models.map((model) => (
          <button
            key={model.name}
            onClick={() => handleClick(model.name)}
            className="rounded-lg p-3 hover:border-orange-500 text-black text-sm text-center shadow-md hover:shadow-amber-400"
          >
            <img src={model.img} alt={model.name} className="h-[80px] md:h-[120px] w-full object-cover rounded-md" />
            <div className="my-3">{model.name}</div>
          </button>
        ))}
      </div>

      <h2 className="text-xl font-bold text-black border-l-4 border-orange-500 pl-3 mb-4 mt-8">
        Our Recommendation
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">

        {recommendation.map((recomm) => (
          <button
            key={recomm.name}
            onClick={() => handleClick(recomm.name)}
            className="rounded-lg p-3 hover:border-orange-500 text-black text-sm text-center shadow-md"
          >
            <img src={recomm.img} alt={recomm.name} className="h-[80px] md:h-[120px] w-full object-cover rounded-md shadow-md hover:shadow-amber-400" />
            <div className="my-3">{recomm.name}</div>
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-black border-l-4 border-orange-500 pl-3 mb-6 mt-8">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-4">
            <button
              onClick={() => toggle(i)}
              className="font-semibold text-black w-full text-left flex justify-between items-center gap-2"
            >
              <span>{faq.question}</span>
              <span className="text-gray-400 shrink-0">{openIndex === i ? "▲" : "▼"}</span>
            </button>
            {openIndex === i && (
              <div className="mt-3">
                <p className="text-gray-600 mb-2">{faq.answer}</p>
                {faq.points && (
                  <ul className="list-disc list-inside text-gray-600 flex flex-col gap-1">
                    {faq.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}