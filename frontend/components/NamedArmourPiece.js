import Link from 'next/link';
import Title from './Title';
import { ListItem } from './styles/ListStyles';

export default function NamedArmourPiece({ armourType }) {
  return (
    <ListItem>
      <img />
      <Title>
        <Link href={`/gear/namedArmourPiece/${armourType.id}`}>
          {armourType.name}
        </Link>
      </Title>
    </ListItem>
  );
}
