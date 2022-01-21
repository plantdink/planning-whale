import { useRouter } from 'next/dist/client/router';
import EquipmentPagination from '../../../components/GearPagination';
import Gearsets from '../../../components/Gearsets';

export default function GearsetsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Gearset';
  const gearLink = '/gear/gearsets/';

  return (
    <div>
      <EquipmentPagination
        gearLink={gearLink}
        queryString={queryString}
        page={page || 1}
      />
      <Gearsets page={page || 1} />
      <EquipmentPagination
        gearLink={gearLink}
        queryString={queryString}
        page={page || 1}
      />
    </div>
  );
}
