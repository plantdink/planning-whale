import Link from 'next/link';
import WeaponStyles from './styles/WeaponStyles';
import Title from './Title';
import DamageTag from './styles/DamageTag';

export default function NamedWeapon({ namedWeapon }) {
  return (
    <WeaponStyles>
      <DamageTag>{namedWeapon.damageLevel40}</DamageTag>
      <img />
      <Title>
        <Link href={`/weapons/namedWeapon/${namedWeapon.id}`}>
          {namedWeapon.model}
        </Link>
      </Title>
    </WeaponStyles>
  );
}
