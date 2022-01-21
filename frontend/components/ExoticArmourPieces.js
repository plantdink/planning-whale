import { gql, useQuery } from '@apollo/client';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';
import ExoticArmourPiece from './ExoticArmourPiece';
import ItemListStyles from './styles/ItemListStyles';

const ALL_EXOTIC_ARMOUR_PIECES_QUERY = gql`
  query ALL_EXOTIC_ARMOUR_PIECES_QUERY($skip: Int = 0, $first: Int) {
    allExoticArmourPieces(skip: $skip, first: $first) {
      id
      name
    }
  }
`;

export default function ExoticArmourPieces({ page }) {
  const { data, loading, error } = useQuery(ALL_EXOTIC_ARMOUR_PIECES_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading.....</p>;
  if (error) return <DisplayError error={error} />;

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
