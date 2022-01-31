import Link from 'next/link';
import { ListStyles, ListItem } from './styles/ListStyles';
import Title from './Title';
import HeadSEO from './HeadSEO';

export default function Gear() {
  return (
    <>
      <HeadSEO seoTag="Equipment" />
      <ListStyles>
        <ListItem>
          <img />
          <Title>
            <Link href="/gear/brands">Brands</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img />
          <Title>
            <Link href="/gear/gearsets">Gear Sets</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img />
          <Title>
            <Link href="/gear/armourTypes">Armour Pieces</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img />
          <Title>
            <Link href="/gear/namedArmourPieces">Named Armour Pieces</Link>
          </Title>
        </ListItem>
      </ListStyles>
    </>
  );
}
