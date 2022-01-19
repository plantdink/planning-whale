import Link from 'next/link';
import ListStyles from './styles/ListStyles';
import Title from './Title';
import HeadSEO from './HeadSEO';

export default function Exotics() {
  return (
    <>
      <HeadSEO seoTag="Exotics" />
      <ListStyles>
        <Title>
          <Link href="/exotics/exoticWeapons">Exotic Weapons</Link>
          <Link href="/exotics/exoticArmourPieces">Exotic Armour</Link>
        </Title>
      </ListStyles>
    </>
  );
}
