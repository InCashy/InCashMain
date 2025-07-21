import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center bg-white px-4">
      {/* Card Section */}
      <div className="bg-gray-50 p-6 md:p-10 rounded-2xl shadow-xl text-center max-w-xl w-full">
        <div className="flex items-center justify-center mb-6">
          <Image
            src="https://www.incashy.com/logo.png"
            alt="Cashy Logo"
            width={40}
            height={40}
            unoptimized
            className="mr-2"
          />
          <h1 className="text-3xl font-bold text-gray-900">InCashy</h1>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          404
        </h2>
        <h3 className="md:text-2xl font-semibold text-gray-800 mb-6">
          🚧 Page Not Found 🚧
        </h3>
        <p className="text-gray-700 mb-6">
          Oops, the page you’re craving doesn’t exist yet. But we’re working hard behind the scenes.
        </p>
        <Link href="/">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition">
            Take Me Home
          </button>
        </Link>
      </div>
    </div>
  )
}
