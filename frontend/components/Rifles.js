import { useQuery } from '@apollo/client';
import { ALL_RIFLES_QUERY } from '../queries/WeaponQueries';
import Rifle from './Rifle';
import { ListStyles } from './styles/ListStyles';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';

export default function Rifles({ page }) {
  const { data, error, loading } = useQuery(ALL_RIFLES_QUERY, {
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
        {data.allWeapons.map((rifle) => (
          <Rifle key={rifle.id} rifle={rifle} />
        ))}
      </ListStyles>
    </div>
  );
}
