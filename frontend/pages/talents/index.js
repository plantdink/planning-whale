import { Spacer } from '../../components/styles/GridStyles';
import Talents from '../../components/Talents';
import HeadSEOTag from '../../components/HeadSEOTag';

export default function talents() {
  return (
    <>
      <HeadSEOTag item={null} string="Armour & Weapon Talents" />
      <Spacer>
        <Talents />
      </Spacer>
    </>
  );
}
