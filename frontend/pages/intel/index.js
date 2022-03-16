import ItemColourComponent from '../../components/ItemColourComponent';
import EquipmentBuild from '../../components/EquipmentBuild';
import SingleGearItemStyle from '../../components/styles/SingleGearItemStyles';

export default function intel() {
  return (
    <>
      <SingleGearItemStyle>
        <ItemColourComponent />
        <EquipmentBuild />
      </SingleGearItemStyle>
    </>
  );
}
