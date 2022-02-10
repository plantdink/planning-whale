import Link from 'next/link';
import Title from './Title';
import { ListItem } from './styles/ListStyles';

export default function ArmourTalent({ armourTalent }) {
  console.log(armourTalent);
  return (
    <ListItem>
      <img
        src={armourTalent.image?.image.publicUrlTransformed}
        alt="Generic armour talent"
      />
      <Title>
        <Link href={`/talents/armourTalent/${armourTalent.id}`}>
          {armourTalent.name}
        </Link>
      </Title>
    </ListItem>
  );
}
