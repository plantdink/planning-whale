import { useQuery } from '@apollo/client';
import Shotgun from './Shotgun';
import { ListStyles } from './styles/ListStyles';
import { ALL_SHOTGUNS_QUERY } from '../queries/WeaponQueries';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';

export default function Shotguns({ page }) {
  const { data, error, loading } = useQuery(ALL_SHOTGUNS_QUERY, {
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
        {data.allWeapons.map((shotgun) => (
          <Shotgun key={shotgun.id} shotgun={shotgun} />
        ))}
      </ListStyles>
    </div>
  );
}
