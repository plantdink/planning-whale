import Link from 'next/link';
import WeaponStyles from './styles/WeaponStyles';
import Title from './Title';
import DamageTag from './styles/DamageTag';
// import displayPercentage from '../lib/displayPercentage';

export default function MarksmanRifle({ marksmanRifle }) {
  return (
    <WeaponStyles>
      <DamageTag>{marksmanRifle.damageLevel40}</DamageTag>
      <img
        src={marksmanRifle?.photo?.image?.publicUrlTransformed}
        alt={marksmanRifle.model}
      />
      <Title>
        <Link href={`/weapons/marksmanRifle/${marksmanRifle.id}`}>
          {marksmanRifle.model}
        </Link>
      </Title>
    </WeaponStyles>
  );
}
