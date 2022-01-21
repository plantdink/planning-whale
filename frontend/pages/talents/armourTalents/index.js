import { useRouter } from 'next/dist/client/router';
import ArmourTalents from '../../../components/ArmourTalents';
import GearPagination from '../../../components/GearPagination';

export default function ArmourTalentsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Armour Talent';
  const gearLink = '/talents/armourTalents/';

  return (
    <div>
      <GearPagination
        gearLink={gearLink}
        queryString={queryString}
        page={page || 1}
      />
      <ArmourTalents page={page || 1} />
      <GearPagination
        gearLink={gearLink}
        queryString={queryString}
        page={page || 1}
      />
    </div>
  );
}
