import Link from 'next/link';
import { ListStyles, ListItem } from './styles/ListStyles';
import Title from './Title';
import HeadSEO from './HeadSEO';

const brandIconLink =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644195761/agent-field-manual/62006fb03e5849082bd943f5.png';

const gearsetIconLink =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644195289/agent-field-manual/62006dd83e5849082bd94367.png';

const armourPiecesIconLink =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644114295/agent-field-manual/61ff31765b249912fe4458b6.png';

const namedArmourPiecesIconLink =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644114403/agent-field-manual/61ff31e25b249912fe445a00.png';

export default function Gear() {
  return (
    <>
      <HeadSEO seoTag="Equipment" />
      <ListStyles>
        <ListItem>
          <img src={brandIconLink} alt="All Brands" />
          <Title>
            <Link href="/gear/brands">Brands</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img src={gearsetIconLink} alt="All Gear Sets" />
          <Title>
            <Link href="/gear/gearsets">Gear Sets</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img src={armourPiecesIconLink} alt="All Armour Pieces" />
          <Title>
            <Link href="/gear/armourTypes">Armour Pieces</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img src={namedArmourPiecesIconLink} alt="All Named Armour Pieces" />
          <Title>
            <Link href="/gear/namedArmourPieces">Named Armour Pieces</Link>
          </Title>
        </ListItem>
      </ListStyles>
    </>
  );
}
