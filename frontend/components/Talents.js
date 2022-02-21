import Link from 'next/link';
import { ListStyles, ListItem, ListTitle } from './styles/ListStyles';
import HeadSEO from './HeadSEO';

const armourTalentImage =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644114295/agent-field-manual/61ff31765b249912fe4458b6.png';

const weaponTalentImage =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1643601001/agent-field-manual/61f75c67bf8ae52333c9766c.png';

export default function Talents() {
  return (
    <>
      <HeadSEO seoTag="Talents" />
      <ListStyles>
        <ListItem>
          <img src={armourTalentImage} alt="Generic armour talent" />
          <ListTitle>
            <Link href="/talents/armourTalents">Armour Talents</Link>
          </ListTitle>
        </ListItem>
        <ListItem>
          <img src={weaponTalentImage} alt="Generic weapon" />
          <ListTitle>
            <Link href="/talents/weaponTalents">Weapon Talents</Link>
          </ListTitle>
        </ListItem>
      </ListStyles>
    </>
  );
}
