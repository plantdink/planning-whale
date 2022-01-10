import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/weapons">Weapons</Link>
      <Link href="/armour">Armour</Link>
      <Link href="/exotics">Exotics</Link>
    </NavStyles>
  );
}
