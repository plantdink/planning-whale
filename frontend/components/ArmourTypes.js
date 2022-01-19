import { gql, useQuery } from '@apollo/client';
import ArmourType from './ArmourType';
import ItemListStyles from './styles/ItemListStyles';
import HeadSEO from './HeadSEO';

const ALL_ARMOUR_TYPES_QUERY = gql`
  query ALL_ARMOUR_TYPES_QUERY {
    allArmourTypes {
      id
      name
    }
  }
`;

export default function ArmourTypes() {
  const { data, loading, error } = useQuery(ALL_ARMOUR_TYPES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <HeadSEO seoTag="High End Armour" />
      <ItemListStyles>
        {data.allArmourTypes.map((armourType) => (
          <ArmourType key={armourType.id} armourType={armourType} />
        ))}
      </ItemListStyles>
    </div>
  );
}
