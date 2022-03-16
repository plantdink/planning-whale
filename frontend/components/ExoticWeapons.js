import { useQuery } from '@apollo/client';
import { ALL_EXOTIC_WEAPONS_QUERY } from '../queries/WeaponQueries';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';
import ExoticWeapon from './ExoticWeapon';
import { ListStyles } from './styles/ListStyles';

export default function ExoticWeapons({ page }) {
  const { data, loading, error } = useQuery(ALL_EXOTIC_WEAPONS_QUERY, {
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
        {data.allWeapons.map((exoticWeapon) => (
          <ExoticWeapon key={exoticWeapon.id} exoticWeapon={exoticWeapon} />
        ))}
      </ListStyles>
    </div>
  );
}
