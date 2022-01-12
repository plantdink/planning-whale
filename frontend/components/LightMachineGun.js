import Link from 'next/link';
import WeaponStyles from './styles/WeaponStyles';
import Title from './Title';
import DamageTag from './styles/DamageTag';

export default function LightMachineGun({ lightMachineGun }) {
  return (
    <WeaponStyles>
      <DamageTag>{lightMachineGun.damageLevel40}</DamageTag>
      <img
        src={lightMachineGun?.photo?.image?.publicUrlTransformed}
        alt={lightMachineGun.model}
      />
      <Title>
        <Link href={`/weapons/lightMachineGun/${lightMachineGun.id}`}>
          {lightMachineGun.model}
        </Link>
      </Title>
    </WeaponStyles>
  );
}
