import { useQuery } from '@apollo/client';
import { ALL_MARKSMAN_RIFLES_QUERY } from '../queries/WeaponQueries';
import MarksmanRifle from './MarksmanRifle';
import { ListStyles } from './styles/ListStyles';

import DisplayError from './ErrorMessage';
import { perPage } from '../config';

export default function MarksmanRifles({ page }) {
  const { data, error, loading } = useQuery(ALL_MARKSMAN_RIFLES_QUERY, {
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
        {data.allWeapons.map((marksmanRifle) => (
          <MarksmanRifle key={marksmanRifle.id} marksmanRifle={marksmanRifle} />
        ))}
      </ListStyles>
    </div>
  );
}
