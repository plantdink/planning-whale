import Link from 'next/link';
import { ListStyles, ListItem } from './styles/ListStyles';
import Title from './Title';
import HeadSEO from './HeadSEO';

export default function Talents() {
  return (
    <>
      <HeadSEO seoTag="Talents" />
      <ListStyles>
        <ListItem>
          <img />
          <Title>
            <Link href="/talents/armourTalents">Armour Talents</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img />
          <Title>
            <Link href="/talents/weaponTalents">Weapon Talents</Link>
          </Title>
        </ListItem>
      </ListStyles>
    </>
  );
}
