import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/assaultRifles">Assault Rifles</Link>
      <Link href="/subMachineGuns">Sub Machine Guns</Link>
      <Link href="/lightMachineGuns">Light Machine Guns</Link>
      <Link href="/rifles">Rifles</Link>
      <Link href="marksmanRifles">Marksman Rifles</Link>
      <Link href="shotguns">Shotguns</Link>
      <Link href="/pistols">Pistols</Link>
      <Link href="/namedWeapons">Named Weapons</Link>
      <Link href="/exotics">Exotics</Link>
      <Link href="/weaponTalents">Weapon Talents</Link>
      <Link href="/chestTalents">Chest Talents</Link>
      <Link href="/backpackTalents">Backpack Talents</Link>
    </nav>
  );
}
