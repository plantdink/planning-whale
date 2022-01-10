import Link from 'next/link';
import ListStyles from './ListStyles';
import Title from './Title';

export default function Weapons() {
  return (
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
    </ListStyles>
  );
}
