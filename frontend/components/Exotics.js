import Link from 'next/link';
import { ListStyles, ListItem, ListTitle } from './styles/ListStyles';
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
          <ListTitle>
            <Link href="/exotics/exoticWeapons">Exotic Weapons</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={exoticArmourIcon} alt="Exotic Armour Icon" />
          <ListTitle>
            <Link href="/exotics/exoticArmourPieces">Exotic Armour</Link>
          </ListTitle>
        </ListItem>
      </ListStyles>
    </>
  );
}
