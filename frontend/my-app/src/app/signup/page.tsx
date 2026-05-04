import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-12">
      <div className="border border-gray-200 rounded-lg shadow-md p-8 w-full max-w-[400px] flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-black text-center">Create an account</h1>
        <input type="text" placeholder="Full name" className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 placeholder:text-gray-400 text-black" />
        <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 placeholder:text-gray-400 text-black" />
        <input type="password" placeholder="Password" className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 placeholder:text-gray-400 text-black" />
        <input type="text" placeholder="Phone number" className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-orange-500 placeholder:text-gray-400 text-black" />
        <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">Sign up</button>
        <p className="text-center text-gray-500 text-sm">Already have an account? <Link href="/sell" className="text-orange-500 hover:underline">Login</Link></p>
      </div>
    </div>
  )
}