import Link from 'next/link';
import WeaponStyles from './styles/WeaponStyles';
import Title from './Title';
import DamageTag from './styles/DamageTag';
// import displayPercentage from '../lib/displayPercentage';

export default function Shotgun({ shotgun }) {
  return (
    <WeaponStyles>
      <img
        src={shotgun?.photo?.image?.publicUrlTransformed}
        alt={shotgun.model}
      />
      <Title>
        <Link href={`/weapons/shotgun/${shotgun.id}`}>{shotgun.model}</Link>
        <DamageTag>{shotgun.damageLevel40}</DamageTag>
      </Title>
    </WeaponStyles>
  );
}
