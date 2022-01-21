import { useRouter } from 'next/dist/client/router';
import AssaultRifles from '../../../components/AssaultRifles';
import Pagination from '../../../components/Pagination';

export default function AssaultRiflesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Assault Rifle';
  const weaponLink = '/weapons/assaultRifles/';

  return (
    <div>
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
      <AssaultRifles page={page || 1} />
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
    </div>
  );
}
