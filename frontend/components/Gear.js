import Link from 'next/link';
import ListStyles from './ListStyles';
import Title from './Title';

export default function Gear() {
  return (
    <ListStyles>
      <Title>
        <Link href="/gear/brands">Brands</Link>
      </Title>
      <Title>
        <Link href="/gear/gearsets">Gear Sets</Link>
      </Title>
      <Title>
        <Link href="/gear/armourTypes">Armour Pieces</Link>
      </Title>
      <Title>
        <Link href="/gear/namedArmourPieces">Named Armour Pieces</Link>
      </Title>
    </ListStyles>
  );
}
