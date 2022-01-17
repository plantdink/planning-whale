import Link from 'next/link';
import ListStyles from './ListStyles';
import Title from './Title';

export default function Exotics() {
  return (
    <ListStyles>
      <Title>
        <img />
        <Link href="/exotics/exoticWeapons">Exotic Weapons</Link>
        <Link href="/exotics/exoticArmourPieces">Exotic Armour</Link>
      </Title>
    </ListStyles>
  );
}
