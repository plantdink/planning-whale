import Link from 'next/link';
import Title from './styles/Title';
import { ListItem } from './styles/ListStyles';

export default function WeaponTalent({ weaponTalent }) {
  return (
    <ListItem>
      <img
        src={weaponTalent.image?.image.publicUrlTransformed}
        alt={`${weaponTalent.name} talent`}
      />
      <Title>
        <Link href={`/talents/weaponTalent/${weaponTalent.id}`}>
          {weaponTalent.name}
        </Link>
      </Title>
    </ListItem>
  );
}
