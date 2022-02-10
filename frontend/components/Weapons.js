import Link from 'next/link';
import { ListStyles, ListItem } from './styles/ListStyles';
import Title from './Title';
import HeadSEO from './HeadSEO';

const arIcon =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287791/agent-field-manual/6201d72ed9301f0836548606.png';
const lmgIcon =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287811/agent-field-manual/6201d741d9301f08365486bf.png';
const mmrIcon =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287834/agent-field-manual/6201d759d9301f0836548778.png';
const rifleIcon =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287869/agent-field-manual/6201d77cd9301f08365488ea.png';
const pistolIcon =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287851/agent-field-manual/6201d76ad9301f0836548831.png';
const shotgunIcon =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287887/agent-field-manual/6201d78ed9301f08365489a3.png';
const smgIcon =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287904/agent-field-manual/6201d79fd9301f0836548a5c.png';
const namedIcon =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644289234/agent-field-manual/6201dcd1d9301f0836548c8b.png';
const exoticIcon =
  'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287926/agent-field-manual/6201d7b5d9301f0836548af9.png';

export default function Weapons() {
  return (
    <>
      <HeadSEO seoTag="Weapon Classes" />
      <ListStyles>
        <ListItem>
          <img src={arIcon} alt="Assault Rifle" />
          <Title>
            <Link href="/weapons/assaultRifles">Assault Rifles</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img src={lmgIcon} alt="Light Machine Gun" />
          <Title>
            <Link href="/weapons/lightMachineGuns">Light Machine Guns</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img src={mmrIcon} alt="Marksman Rifle" />
          <Title>
            <Link href="/weapons/marksmanRifles">Marksman Rifles</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img src={rifleIcon} alt="Rifle" />
          <Title>
            <Link href="/weapons/rifles">Rifles</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img src={pistolIcon} alt="Pistol" />
          <Title>
            <Link href="/weapons/pistols">Pistols</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img src={shotgunIcon} alt="Shotgun" />
          <Title>
            <Link href="/weapons/shotguns">Shotguns</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img src={smgIcon} alt="Submachine Gun" />
          <Title>
            <Link href="/weapons/subMachineGuns">Submachine Guns</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img src={namedIcon} alt="Named Weapon" />
          <Title>
            <Link href="/weapons/namedWeapons">Named Weapons</Link>
          </Title>
        </ListItem>
        <ListItem>
          <img src={exoticIcon} alt="Exotic Weapon" />
          <Title>
            <Link href="/weapons/exoticWeapons">Exotic Weapons</Link>
          </Title>
        </ListItem>
      </ListStyles>
    </>
  );
}
