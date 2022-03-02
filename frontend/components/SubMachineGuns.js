import { useQuery } from '@apollo/client';
import { ListStyles } from './styles/ListStyles';
import { ALL_SUB_MACHINE_GUNS_QUERY } from '../queries/WeaponQueries';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';
import SubMachineGun from './SubMachineGun';

export default function SubMachineGuns({ page }) {
  const { data, error, loading } = useQuery(ALL_SUB_MACHINE_GUNS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <ListStyles>
        {data.allWeapons.map((subMachineGun) => (
          <SubMachineGun key={subMachineGun.id} subMachineGun={subMachineGun} />
        ))}
      </ListStyles>
    </div>
  );
}
