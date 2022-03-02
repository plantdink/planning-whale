import Link from 'next/link';
import { ListStyles, ListItem, ListTitle } from './styles/ListStyles';
import { armourTalentImage, weaponTalentImage } from './ItemIcons';
import HeadSEO from './HeadSEO';

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
