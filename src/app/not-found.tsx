import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-6xl sm:text-8xl font-light text-white">404</h1>
      <p className="mt-4 text-[#858585] text-lg font-semibold">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-full bg-[#f5f5f5] text-[#111] text-sm font-bold hover:bg-[#e5e5e5] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
