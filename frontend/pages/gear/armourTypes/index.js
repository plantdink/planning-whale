import { useRouter } from 'next/dist/client/router';
import ArmourTypes from '../../../components/ArmourTypes';
import GearPagination from '../../../components/GearPagination';

export default function ArmourTypesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Armour Type';
  const gearLink = '/gear/armourTypes/';

  return (
    <div>
      <GearPagination
        gearLink={gearLink}
        queryString={queryString}
        page={page || 1}
      />
      <ArmourTypes page={page || 1} />
      <GearPagination
        gearLink={gearLink}
        queryString={queryString}
        page={page || 1}
      />
    </div>
  );
}
