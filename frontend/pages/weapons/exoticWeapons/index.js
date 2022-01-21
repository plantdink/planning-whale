import { useRouter } from 'next/dist/client/router';
import ExoticWeapons from '../../../components/ExoticWeapons';
import Pagination from '../../../components/Pagination';

export default function ExoticWeaponsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Exotic Weapon';
  const weaponLink = '/weapons/exoticWeapons/';

  return (
    <div>
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
      <ExoticWeapons page={page || 1} />
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
    </div>
  );
}
