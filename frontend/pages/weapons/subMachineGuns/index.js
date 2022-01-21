import { useRouter } from 'next/dist/client/router';
import Pagination from '../../../components/Pagination';
import SubMachineGuns from '../../../components/SubMachineGuns';

export default function SubMachineGunsPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  const queryString = 'Sub Machine Gun';
  const weaponLink = '/weapons/subMachineGuns/';

  return (
    <div>
      <Pagination
        queryString={queryString}
        weaponLink={weaponLink}
        page={page || 1}
      />
      <SubMachineGuns page={page || 1} />
      <Pagination
        queryString={queryString}
        weaponLink={weaponLink}
        page={page || 1}
      />
    </div>
  );
}
