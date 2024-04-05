import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-20 w-full py-8 px-3 bg-[#0C0C0C]">
      <Link className="text-center text-xl font-bold text-[#F2613F]" href={"/"}>
        <h1>Infinite Scrolling</h1>
      </Link>
    </nav>
  );
}
