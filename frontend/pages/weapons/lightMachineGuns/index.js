import { useRouter } from 'next/dist/client/router';
import LightMachineGuns from '../../../components/LightMachineGuns';
import Pagination from '../../../components/Pagination';

export default function LightMachineGunsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Light Machine Gun';
  const weaponLink = '/weapons/lightMachineGuns/';

  return (
    <div>
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
      <LightMachineGuns page={page || 1} />
      <Pagination
        weaponLink={weaponLink}
        queryString={queryString}
        page={page || 1}
      />
    </div>
  );
}
