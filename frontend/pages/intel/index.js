import ItemColour from '../../components/ItemColour';
import EquipmentBuild from '../../components/EquipmentBuild';
import WeaponClasses from '../../components/WeaponClasses';
import { SingleGearItemStyle } from '../../components/SingleArmourPiece';

export default function intel() {
  return (
    <>
      <SingleGearItemStyle>
        <WeaponClasses />
        <ItemColour />
        <EquipmentBuild />
      </SingleGearItemStyle>
    </>
  );
}
