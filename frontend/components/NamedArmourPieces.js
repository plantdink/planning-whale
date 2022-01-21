import { gql, useQuery } from '@apollo/client';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';
import NamedArmourPiece from './NamedArmourPiece';
import ItemListStyles from './styles/ItemListStyles';

const ALL_NAMED_ARMOUR_PIECES_QUERY = gql`
  query ALL_NAMED_ARMOUR_PIECES_QUERY($skip: Int, $first: Int) {
    allArmourTypes(where: { isNamed: "YES" }, first: $first, skip: $skip) {
      id
      name
      armourTalent {
        name
      }
    }
  }
`;

export default function NamedArmourPieces({ page }) {
  const { data, loading, error } = useQuery(ALL_NAMED_ARMOUR_PIECES_QUERY, {
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
          <NamedArmourPiece key={armourType.id} armourType={armourType} />
        ))}
      </ItemListStyles>
    </div>
  );
}
