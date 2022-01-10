import Link from 'next/link';
import WeaponStyles from './styles/WeaponStyles';
import Title from './Title';
import DamageTag from './styles/DamageTag';
// import displayPercentage from '../lib/displayPercentage';

export default function SubMachineGun({ subMachineGun }) {
  return (
    <WeaponStyles>
      <img
        src={subMachineGun?.photo?.image?.publicUrlTransformed}
        alt={subMachineGun.model}
      />
      <Title>
        <Link href={`/subMachineGun/${subMachineGun.id}`}>
          {subMachineGun.model}
        </Link>
        <DamageTag>{subMachineGun.damageLevel40}</DamageTag>
      </Title>
    </WeaponStyles>
  );
}
