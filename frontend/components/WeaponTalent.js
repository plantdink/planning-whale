import Link from 'next/link';
import Title from './Title';

export default function WeaponTalent({ weaponTalent }) {
  return (
    <div>
      <Title>
        <Link href={`/talents/weaponTalent/${weaponTalent.id}`}>
          {weaponTalent.name}
        </Link>
      </Title>
    </div>
  );
}
