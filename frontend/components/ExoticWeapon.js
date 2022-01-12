import Link from 'next/link';
import WeaponStyles from './styles/WeaponStyles';
import Title from './Title';
import DamageTag from './styles/DamageTag';

export default function ExoticWeapon({ exoticWeapon }) {
  return (
    <WeaponStyles>
      <DamageTag>{exoticWeapon.damageLevel40}</DamageTag>
      <img />
      <Title>
        <Link href={`/weapons/exoticWeapon/${exoticWeapon.id}`}>
          {exoticWeapon.model}
        </Link>
      </Title>
    </WeaponStyles>
  );
}
