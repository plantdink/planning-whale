import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/weapons">Weapons</Link>
      <Link href="/armour">Armour</Link>
      <Link href="/exotics">Exotics</Link>
    </nav>
  );
}
