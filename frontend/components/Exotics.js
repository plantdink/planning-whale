import Link from 'next/link';
import { ListStyles, ListItem } from './styles/ListStyles';
import Title from './Title';
import HeadSEO from './HeadSEO';

const exoticWeaponIcon =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287926/agent-field-manual/6201d7b5d9301f0836548af9.png';
const exoticArmourIcon =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644289564/agent-field-manual/6201de1bd9301f0836548d55.png';

export default function Exotics() {
  return (
    <>
      <HeadSEO seoTag="Exotics" />
      <ListStyles>
        <ListItem>
          <img src={exoticWeaponIcon} alt="Exotic Weapon icon" />
          <Title>
            <Link href="/exotics/exoticWeapons">Exotic Weapons</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img src={exoticArmourIcon} alt="Exotic Armour Icon" />
          <Title>
            <Link href="/exotics/exoticArmourPieces">Exotic Armour</Link>
          </Title>
        </ListItem>
      </ListStyles>
    </>
  );
}
