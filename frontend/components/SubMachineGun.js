import Link from 'next/link';
import WeaponStyles from './styles/WeaponStyles';
import Title from './Title';
import DamageTag from './styles/DamageTag';
// import displayPercentage from '../lib/displayPercentage';

export default function SubMachineGun({ subMachineGun }) {
  return (
    <WeaponStyles>
      <DamageTag>{subMachineGun.damageLevel40}</DamageTag>
      <img
        src={subMachineGun?.photo?.image?.publicUrlTransformed}
        alt={subMachineGun.model}
      />
      <Title>
        <Link href={`/weapons/subMachineGun/${subMachineGun.id}`}>
          {subMachineGun.model}
        </Link>
      </Title>
    </WeaponStyles>
  );
}
