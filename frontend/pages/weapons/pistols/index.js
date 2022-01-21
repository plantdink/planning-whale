import { useRouter } from 'next/dist/client/router';
import Pagination from '../../../components/Pagination';
import Pistols from '../../../components/Pistols';

export default function PistolsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Pistol';
  const weaponLink = '/weapons/pistols/';

  return (
    <div>
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
      <Pistols page={page || 1} />
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
    </div>
  );
}
