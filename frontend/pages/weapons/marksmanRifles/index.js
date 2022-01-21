import { useRouter } from 'next/dist/client/router';
import MarksmanRifles from '../../../components/MarksmanRifles';
import Pagination from '../../../components/Pagination';

export default function MarksmanRiflesPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Marksman Rifle';
  const weaponLink = '/weapons/marksmanRifles/';

  return (
    <div>
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
      <MarksmanRifles page={page || 1} />
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
    </div>
  );
}
