import { useRouter } from 'next/dist/client/router';
import WeaponTalents from '../../../components/WeaponTalents';
import GearPagination from '../../../components/GearPagination';

export default function WeaponTalentsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Weapon Talent';
  const gearLink = '/talents/weaponTalents';

  return (
    <div>
      <GearPagination
        gearLink={gearLink}
        queryString={queryString}
        page={page || 1}
      />
      <WeaponTalents page={page || 1} />
      <GearPagination
        gearLink={gearLink}
        queryString={queryString}
        page={page || 1}
      />
    </div>
  );
}
