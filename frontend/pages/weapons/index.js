import { Spacer } from '../../components/styles/GridStyles';
import Weapons from '../../components/Weapons';
import HeadSEOTag from '../../components/HeadSEOTag';

export default function weapons() {
  return (
    <>
      <HeadSEOTag item={null} string="Weapon Classes" />
      <Spacer>
        <Weapons />
      </Spacer>
    </>
  );
}
