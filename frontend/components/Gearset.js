import Link from 'next/link';
import Title from './Title';

export default function Gearset({ gearset }) {
  return (
    <div>
      <Title>
        <Link href={`/gear/gearset/${gearset.id}`}>{gearset.name}</Link>
      </Title>
    </div>
  );
}
