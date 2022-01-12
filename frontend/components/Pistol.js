import Link from 'next/link';
import WeaponStyles from './styles/WeaponStyles';
import Title from './Title';
import DamageTag from './styles/DamageTag';
// import displayPercentage from '../lib/displayPercentage';

export default function pistol({ pistol }) {
  return (
    <WeaponStyles>
      <DamageTag>{pistol.damageLevel40}</DamageTag>
      <img
        src={pistol?.photo?.image?.publicUrlTransformed}
        alt={pistol.model}
      />
      <Title>
        <Link href={`/weapons/pistol/${pistol.id}`}>{pistol.model}</Link>
      </Title>
    </WeaponStyles>
  );
}
