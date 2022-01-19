import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/weapons">Weapons</Link>
      <Link href="/gear">Armour</Link>
      <Link href="/exotics">Exotics</Link>
      <Link href="/talents">Talents</Link>
    </NavStyles>
  );
}
