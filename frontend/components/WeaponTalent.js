import Link from 'next/link';
import Title from './Title';
import { ListItem } from './styles/ListStyles';

export default function WeaponTalent({ weaponTalent }) {
  return (
    <ListItem>
      <img />
      <Title>
        <Link href={`/talents/weaponTalent/${weaponTalent.id}`}>
          {weaponTalent.name}
        </Link>
      </Title>
    </ListItem>
  );
}
