import Link from 'next/link';
import Title from './styles/Title';
import { ListItem } from './styles/ListStyles';

export default function NamedArmourPiece({ armourType }) {
  return (
    <ListItem>
      <img
        src={armourType.image?.image.publicUrlTransformed}
        alt={`${armourType.name} icon`}
      />
      <Title>
        <Link href={`/gear/namedArmourPiece/${armourType.id}`}>
          {armourType.name}
        </Link>
      </Title>
    </ListItem>
  );
}
