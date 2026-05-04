import Link from "next/link"

export default function SellPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-12">
      <div className="border border-gray-200 rounded-lg shadow-md p-8 w-full max-w-[600px] flex flex-col gap-4 shadow-gray-700">
        <h1 className="text-2xl font-bold text-black text-center">Login to your account</h1>
        <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 placeholder:text-gray-400 text-black" />
        <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 placeholder:text-gray-400 text-black" />
        <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">Login</button>
        <p className="text-center text-gray-500 text-sm">Don't have an account? <Link href={'/signup'} className="text-orange-500 cursor-pointer hover:underline">Sign up</Link></p>
      </div>
    </div>
  )
}