import Link from 'next/link';
import Title from './Title';

export default function Brand({ brand }) {
  return (
    <div>
      <Title>
        <Link href={`/gear/brand/${brand.id}`}>{brand.name}</Link>
      </Title>
    </div>
  );
}
