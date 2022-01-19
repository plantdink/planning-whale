import { gql, useQuery } from '@apollo/client';
import ItemListStyles from './styles/ItemListStyles';
import Gearset from './Gearset';
import HeadSEO from './HeadSEO';

const ALL_GEARSETS_QUERY = gql`
  query ALL_GEARSETS_QUERY {
    allGearsets {
      id
      name
    }
  }
`;

export default function Gearsets() {
  const { data, error, loading } = useQuery(ALL_GEARSETS_QUERY);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <HeadSEO seoTag="Gear Sets" />
      <ItemListStyles>
        {data.allGearsets.map((gearset) => (
          <Gearset key={gearset.id} gearset={gearset} />
        ))}
      </ItemListStyles>
    </div>
  );
}
