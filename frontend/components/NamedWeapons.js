import { useQuery } from '@apollo/client';
import NamedWeapon from './NamedWeapon';
import ItemListStyles from './styles/ItemListStyles';
import { ALL_NAMED_WEAPONS_QUERY } from '../queries/WeaponQueries';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';

export default function NamedWeapons({ page }) {
  const { data, error, loading } = useQuery(ALL_NAMED_WEAPONS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading....</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <ItemListStyles>
        {data.allWeapons.map((namedWeapon) => (
          <NamedWeapon key={namedWeapon.id} namedWeapon={namedWeapon} />
        ))}
      </ItemListStyles>
    </div>
  );
}
