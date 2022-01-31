import Link from 'next/link';
import { ListStyles, ListItem } from './styles/ListStyles';
import Title from './Title';
import HeadSEO from './HeadSEO';

export default function Weapons() {
  return (
    <>
      <HeadSEO seoTag="Weapon Classes" />
      <ListStyles>
        <ListItem>
          <img />
          <Title>
            <Link href="/weapons/assaultRifles">Assault Rifles</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img />
          <Title>
            <Link href="/weapons/lightMachineGuns">Light Machine Guns</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img />
          <Title>
            <Link href="/weapons/marksmanRifles">Marksman Rifles</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img />
          <Title>
            <Link href="/weapons/rifles">Rifles</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img />
          <Title>
            <Link href="/weapons/pistols">Sidearms</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img />
          <Title>
            <Link href="/weapons/shotguns">Shotguns</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img />
          <Title>
            <Link href="/weapons/subMachineGuns">Submachine Guns</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img />
          <Title>
            <Link href="/weapons/namedWeapons">Named Weapons</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img />
          <Title>
            <Link href="/weapons/exoticWeapons">Exotic Weapons</Link>
          </Title>
        </ListItem>
      </ListStyles>
    </>
  );
}
