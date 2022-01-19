import Link from 'next/link';
import ListStyles from './styles/ListStyles';
import Title from './Title';
import HeadSEO from './HeadSEO';

export default function Weapons() {
  return (
    <>
      <HeadSEO seoTag="Weapon Classes" />
      <ListStyles>
        <Title>
          <img />
          <Link href="/weapons/assaultRifles">Assault Rifles</Link>
        </Title>
        <Title>
          <img />
          <Link href="/weapons/lightMachineGuns">Light Machine Guns</Link>
        </Title>
        <Title>
          <img />
          <Link href="/weapons/marksmanRifles">Marksman Rifles</Link>
        </Title>
        <Title>
          <img />
          <Link href="/weapons/rifles">Rifles</Link>
        </Title>
        <Title>
          <img />
          <Link href="/weapons/pistols">Sidearms</Link>
        </Title>
        <Title>
          <img />
          <Link href="/weapons/shotguns">Shotguns</Link>
        </Title>
        <Title>
          <img />
          <Link href="/weapons/subMachineGuns">Submachine Guns</Link>
        </Title>
        <Title>
          <img />
          <Link href="/weapons/namedWeapons">Named Weapons</Link>
        </Title>
        <Title>
          <img />
          <Link href="/weapons/exoticWeapons">Exotic Weapons</Link>
        </Title>
      </ListStyles>
    </>
  );
}
