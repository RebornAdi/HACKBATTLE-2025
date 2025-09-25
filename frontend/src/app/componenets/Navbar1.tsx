import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="w-full bg-white/90 backdrop-blur-md text-blue-800 px-6 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.jpg"
          alt="GoldenApple Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <span className="text-3xl md:text-4xl font-bold bg-blue-800 bg-clip-text text-transparent">
          GoldenApple
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/">
          <button className="px-5 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 rounded-full font-semibold transition shadow-sm">
            Home
          </button>
        </Link>

        <Link href="/History">
          <button className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition shadow">
            History
          </button>
        </Link>

        <Link href="/Details">
          <button className="px-5 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-semibold transition shadow">
            Details
          </button>
        </Link>
      </div>
    </nav>
  );
}
