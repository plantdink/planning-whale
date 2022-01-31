import Link from 'next/link';
import Title from './Title';
import { ListItem } from './styles/ListStyles';

export default function ArmourTalent({ armourTalent }) {
  return (
    <ListItem>
      <img />
      <Title>
        <Link href={`/talents/armourTalent/${armourTalent.id}`}>
          {armourTalent.name}
        </Link>
      </Title>
    </ListItem>
  );
}
