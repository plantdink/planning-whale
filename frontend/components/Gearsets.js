import { gql, useQuery } from '@apollo/client';
import ItemListStyles from './styles/ItemListStyles';
import Gearset from './Gearset';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';

const ALL_GEARSETS_QUERY = gql`
  query ALL_GEARSETS_QUERY($skip: Int = 0, $first: Int) {
    allGearsets(first: $first, skip: $skip) {
      id
      name
    }
  }
`;

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
      <ItemListStyles>
        {data.allGearsets.map((gearset) => (
          <Gearset key={gearset.id} gearset={gearset} />
        ))}
      </ItemListStyles>
    </div>
  );
}
