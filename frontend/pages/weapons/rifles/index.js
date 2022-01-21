import { useRouter } from 'next/dist/client/router';
import Pagination from '../../../components/Pagination';
import Rifles from '../../../components/Rifles';

export default function RiflesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Rifle';
  const weaponLink = '/weapons/rifles/';

  return (
    <div>
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
      <Rifles page={page || 1} />
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
    </div>
  );
}
