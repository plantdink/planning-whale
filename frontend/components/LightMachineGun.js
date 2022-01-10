import Link from 'next/link';
import WeaponStyles from './styles/WeaponStyles';
import Title from './Title';
import DamageTag from './styles/DamageTag';
// import displayPercentage from '../lib/displayPercentage';

export default function LightMachineGun({ lightMachineGun }) {
  return (
    <WeaponStyles>
      <img
        src={lightMachineGun?.photo?.image?.publicUrlTransformed}
        alt={lightMachineGun.model}
      />
      <Title>
        <Link href={`/lightMachineGuns/${lightMachineGun.id}`}>
          {lightMachineGun.model}
        </Link>
        <DamageTag>{lightMachineGun.damageLevel40}</DamageTag>
      </Title>
    </WeaponStyles>
  );
}
