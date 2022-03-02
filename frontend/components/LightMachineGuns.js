import { useQuery } from '@apollo/client';
import { ALL_LIGHT_MACHINE_GUNS_QUERY } from '../queries/WeaponQueries';
import LightMachineGun from './LightMachineGun';
import { ListStyles } from './styles/ListStyles';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

export default function LightMachineGuns({ page }) {
  const { data, error, loading } = useQuery(ALL_LIGHT_MACHINE_GUNS_QUERY, {
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
        {data.allWeapons.map((lightMachineGun) => (
          <LightMachineGun
            key={lightMachineGun.id}
            lightMachineGun={lightMachineGun}
          />
        ))}
      </ListStyles>
    </div>
  );
}
