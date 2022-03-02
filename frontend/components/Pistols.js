import { useQuery } from '@apollo/client';
import { ALL_PISTOLS_QUERY } from '../queries/WeaponQueries';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';
import Pistol from './Pistol';
import { ListStyles } from './styles/ListStyles';

export default function Pistols({ page }) {
  const { data, error, loading } = useQuery(ALL_PISTOLS_QUERY, {
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
        {data.allWeapons.map((pistol) => (
          <Pistol key={pistol.id} pistol={pistol} />
        ))}
      </ListStyles>
    </div>
  );
}
