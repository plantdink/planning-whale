import { useRouter } from 'next/dist/client/router';
import ExoticWeapons from '../../../components/ExoticWeapons';
import Pagination from '../../../components/Pagination';

export default function ExoticWeaponsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Exotic Weapon';
  const weaponLink = '/exotics/exoticWeapons/';

  return (
    <div>
      <Pagination
        queryString={queryString}
        weaponLink={weaponLink}
        page={page || 1}
      />
      <ExoticWeapons page={page || 1} />
      <Pagination
        queryString={queryString}
        weaponLink={weaponLink}
        page={page || 1}
      />
    </div>
  );
}
