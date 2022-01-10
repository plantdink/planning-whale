import Link from 'next/link';
import WeaponStyles from './styles/WeaponStyles';
import Title from './Title';
import DamageTag from './styles/DamageTag';
// import displayPercentage from '../lib/displayPercentage';

export default function Rifle({ rifle }) {
  return (
    <WeaponStyles>
      <img src={rifle?.photo?.image?.publicUrlTransformed} alt={rifle.model} />
      <Title>
        <Link href={`/rifle/${rifle.id}`}>{rifle.model}</Link>
        <DamageTag>{rifle.damageLevel40}</DamageTag>
      </Title>
    </WeaponStyles>
  );
}
