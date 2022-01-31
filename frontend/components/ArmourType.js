import Link from 'next/link';
import Title from './Title';
import { ListItem } from './styles/ListStyles';

export default function ArmourType({ armourType }) {
  return (
    <ListItem>
      <img />
      <Title>
        <Link href={`/gear/armourType/${armourType.id}`}>
          {armourType.name}
        </Link>
      </Title>
    </ListItem>
  );
}
