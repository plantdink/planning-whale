import { useRouter } from 'next/dist/client/router';
import Pagination from '../../../components/Pagination';
import Shotguns from '../../../components/Shotguns';

export default function ShotgunsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Shotgun';
  const weaponLink = '/weapons/shotguns/';

  return (
    <div>
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
      <Shotguns page={page || 1} />
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
    </div>
  );
}
