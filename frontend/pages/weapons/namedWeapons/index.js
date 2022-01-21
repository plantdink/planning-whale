import { useRouter } from 'next/dist/client/router';
import NamedWeapons from '../../../components/NamedWeapons';
import Pagination from '../../../components/Pagination';

export default function NamedWeaponsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Named Weapon';
  const weaponLink = '/weapons/namedWeapons/';

  return (
    <div>
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
      <NamedWeapons page={page || 1} />
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
    </div>
  );
}
