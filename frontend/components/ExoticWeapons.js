import { useQuery } from '@apollo/client';
import { ALL_EXOTIC_WEAPONS_QUERY } from '../queries/WeaponQueries';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';
import ExoticWeapon from './ExoticWeapon';
import ItemListStyles from './styles/ItemListStyles';

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
      <ItemListStyles>
        {data.allWeapons.map((exoticWeapon) => (
          <ExoticWeapon key={exoticWeapon.id} exoticWeapon={exoticWeapon} />
        ))}
      </ItemListStyles>
    </div>
  );
}
