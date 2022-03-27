import ItemColour from '../../components/ItemColour';
import EquipmentBuild from '../../components/EquipmentBuild';
import SingleGearItemStyle from '../../components/styles/SingleGearItemStyles';

export default function intel() {
  return (
    <>
      <SingleGearItemStyle>
        <ItemColour />
        <EquipmentBuild />
      </SingleGearItemStyle>
    </>
  );
}
