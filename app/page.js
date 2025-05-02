import Link from "next/link";
import "./_styles/globals.css";

export default function Page() {
  return (
    <div>
      <h1>The Wild Oasis. Welcome to paradise.</h1>
      <Link href="/cabins">Explore luxury cabins</Link>
    </div>
  );
}
