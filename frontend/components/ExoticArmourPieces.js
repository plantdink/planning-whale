import { gql, useQuery } from '@apollo/client';
import ExoticArmourPiece from './ExoticArmourPiece';
import ItemListStyles from './styles/ItemListStyles';

const ALL_EXOTIC_ARMOUR_PIECES_QUERY = gql`
  query ALL_EXOTIC_ARMOUR_PIECES_QUERY {
    allExoticArmourPieces {
      id
      name
    }
  }
`;

export default function ExoticArmourPieces() {
  const { data, loading, error } = useQuery(ALL_EXOTIC_ARMOUR_PIECES_QUERY);
  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <ItemListStyles>
        {data.allExoticArmourPieces.map((exoticArmourPiece) => (
          <ExoticArmourPiece
            key={exoticArmourPiece.id}
            exoticArmourPiece={exoticArmourPiece}
          />
        ))}
      </ItemListStyles>
    </div>
  );
}
