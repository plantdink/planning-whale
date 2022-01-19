import Link from 'next/link';
import Title from './Title';

export default function NamedArmourPiece({ armourType }) {
  return (
    <div>
      <Title>
        <Link href={`/gear/namedArmourPiece/${armourType.id}`}>
          {armourType.name}
        </Link>
      </Title>
    </div>
  );
}
