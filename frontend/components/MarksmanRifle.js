import Link from 'next/link';
import WeaponStyles from './styles/WeaponStyles';
import Title from './Title';
import DamageTag from './styles/DamageTag';
// import displayPercentage from '../lib/displayPercentage';

export default function MarksmanRifle({ marksmanRifle }) {
  return (
    <WeaponStyles>
      <img
        src={marksmanRifle?.photo?.image?.publicUrlTransformed}
        alt={marksmanRifle.model}
      />
      <Title>
        <Link href={`/marksmanRifle/${marksmanRifle.id}`}>
          {marksmanRifle.model}
        </Link>
        <DamageTag>{marksmanRifle.damageLevel40}</DamageTag>
      </Title>
    </WeaponStyles>
  );
}
