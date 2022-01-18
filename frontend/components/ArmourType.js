import Link from 'next/link';
import Title from './Title';

export default function ArmourType({ armourType }) {
  return (
    <div>
      <Title>
        <Link href={`/armourType/${armourType.id}`}>{armourType.name}</Link>
      </Title>
    </div>
  );
}
