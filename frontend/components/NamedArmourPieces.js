import { gql, useQuery } from '@apollo/client';
import NamedArmourPiece from './NamedArmourPiece';
import ItemListStyles from './styles/ItemListStyles';

const ALL_NAMED_ARMOUR_PIECES_QUERY = gql`
  query ALL_NAMED_ARMOUR_PIECES_QUERY {
    allArmourTypes(where: { isNamed: "YES" }) {
      id
      name
      armourTalent {
        name
      }
    }
  }
`;

export default function NamedArmourPieces() {
  const { data, loading, error } = useQuery(ALL_NAMED_ARMOUR_PIECES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
