import Link from 'next/link';
import Title from './Title';

export default function ArmourTalent({ armourTalent }) {
  return (
    <div>
      <Title>
        <Link href={`/talents/armourTalent/${armourTalent.id}`}>
          {armourTalent.name}
        </Link>
      </Title>
    </div>
  );
}
