import Link from 'next/link';
import WeaponStyles from './styles/WeaponStyles';
import Title from './Title';
import DamageTag from './styles/DamageTag';
// import displayPercentage from '../lib/displayPercentage';

export default function LightMachineGun({ assaultRifle }) {
  return (
    <WeaponStyles>
      <DamageTag>{assaultRifle.damageLevel40}</DamageTag>
      <img
        src={assaultRifle?.photo?.image?.publicUrlTransformed}
        alt={assaultRifle.model}
      />
      <Title>
        <Link href={`/weapons/assaultRifle/${assaultRifle.id}`}>
          {assaultRifle.model}
        </Link>
      </Title>
    </WeaponStyles>
  );
}
