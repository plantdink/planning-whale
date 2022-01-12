import Link from 'next/link';
import WeaponStyles from './styles/WeaponStyles';
import Title from './Title';
import DamageTag from './styles/DamageTag';
// import displayPercentage from '../lib/displayPercentage';

export default function Rifle({ rifle }) {
  return (
    <WeaponStyles>
      <DamageTag>{rifle.damageLevel40}</DamageTag>
      <img src={rifle?.photo?.image?.publicUrlTransformed} alt={rifle.model} />
      <Title>
        <Link href={`/weapons/rifle/${rifle.id}`}>{rifle.model}</Link>
      </Title>
    </WeaponStyles>
  );
}
