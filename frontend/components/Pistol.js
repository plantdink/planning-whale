import Link from 'next/link';
import WeaponStyles from './styles/WeaponStyles';
import Title from './Title';
import DamageTag from './styles/DamageTag';
// import displayPercentage from '../lib/displayPercentage';

export default function pistol({ pistol }) {
  return (
    <WeaponStyles>
      <img
        src={pistol?.photo?.image?.publicUrlTransformed}
        alt={pistol.model}
      />
      <Title>
        <Link href={`/pistol/${pistol.id}`}>{pistol.model}</Link>
        <DamageTag>{pistol.damageLevel40}</DamageTag>
      </Title>
    </WeaponStyles>
  );
}
