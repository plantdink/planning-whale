import { useQuery } from '@apollo/client';
import { ALL_GEARSETS_QUERY } from '../queries/ArmourPieceQueries';
import { ListStyles } from './styles/ListStyles';
import Gearset from './Gearset';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';

export default function Gearsets({ page }) {
  const { data, error, loading } = useQuery(ALL_GEARSETS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  if (loading) return <p>Loading....</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <ListStyles>
        {data.allGearsets.map((gearset) => (
          <Gearset
            key={gearset.id}
            gearset={gearset}
            img={gearset.image?.image.publicUrlTransformed}
          />
        ))}
      </ListStyles>
    </div>
  );
}
