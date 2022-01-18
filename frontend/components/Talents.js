import Link from 'next/link';
import ListStyles from './ListStyles';
import Title from './Title';

export default function Talents() {
  return (
    <ListStyles>
      <Title>
        <Link href="/talents/armourTalents">Armour Talents</Link>
        <Link href="/talents/weaponTalents">Weapon Talents</Link>
      </Title>
    </ListStyles>
  );
}
