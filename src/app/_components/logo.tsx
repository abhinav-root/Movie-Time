import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <span className="bg-yellow-400 text-black font-black uppercase rounded px-2 py-2">
        Movie Time
      </span>
    </Link>
  );
}
