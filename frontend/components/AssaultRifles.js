import { useQuery } from '@apollo/client';
import { ALL_ASSAULT_RIFLES_QUERY } from '../queries/WeaponQueries';
import { perPage } from '../config';
import AssaultRifle from './AssaultRifle';
import { ListStyles } from './styles/ListStyles';
import DisplayError from './ErrorMessage';

export default function AssaultRifles({ page }) {
  const { data, error, loading } = useQuery(ALL_ASSAULT_RIFLES_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <ListStyles>
      {data.allWeapons.map((assaultRifle) => (
        <AssaultRifle key={assaultRifle.id} assaultRifle={assaultRifle} />
      ))}
    </ListStyles>
  );
}
