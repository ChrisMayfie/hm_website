import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-950 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold">Cornerstone Home Services</h2>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
