import Link from 'next/link';
import { ListStyles, ListItem } from './styles/ListStyles';
import Title from './Title';
import HeadSEO from './HeadSEO';

export default function Exotics() {
  return (
    <>
      <HeadSEO seoTag="Exotics" />
      <ListStyles>
        <ListItem>
          <img />
          <Title>
            <Link href="/exotics/exoticWeapons">Exotic Weapons</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img />
          <Title>
            <Link href="/exotics/exoticArmourPieces">Exotic Armour</Link>
          </Title>
        </ListItem>
      </ListStyles>
    </>
  );
}
