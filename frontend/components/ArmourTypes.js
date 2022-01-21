import { gql, useQuery } from '@apollo/client';
import ArmourType from './ArmourType';
import ItemListStyles from './styles/ItemListStyles';
import HeadSEO from './HeadSEO';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

const ALL_ARMOUR_TYPES_QUERY = gql`
  query ALL_ARMOUR_TYPES_QUERY($skip: Int = 0, $first: Int) {
    allArmourTypes(first: $first, skip: $skip) {
      id
      name
    }
  }
`;

export default function ArmourTypes({ page }) {
  const { data, loading, error } = useQuery(ALL_ARMOUR_TYPES_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <ItemListStyles>
        {data.allArmourTypes.map((armourType) => (
          <ArmourType key={armourType.id} armourType={armourType} />
        ))}
      </ItemListStyles>
    </div>
  );
}
