import { useQuery, gql } from '@apollo/client';
// import { ALL_EXOTIC_ARMOUR_PIECES_QUERY } from '../../queries/ArmourPieceQueries';
import { perPage } from '../../config';
import DisplayError from '../ErrorMessage';
import ExoticArmourPiece from '../ExoticArmourPiece';
import { ListStyles } from '../styles/ListStyles';

export const ALL_EXOTIC_ARMOUR_PIECES_QUERY = gql`
  query ALL_EXOTIC_ARMOUR_PIECES_QUERY($skip: Int = 0, $first: Int) {
    allExoticArmourPieces(skip: $skip, first: $first) {
      id
      name
      image {
        id
        image {
          publicUrlTransformed
        }
      }
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
      <ListStyles>
        {data.allExoticArmourPieces.map((exoticArmourPiece) => (
          <ExoticArmourPiece
            key={exoticArmourPiece.id}
            exoticArmourPiece={exoticArmourPiece}
          />
        ))}
      </ListStyles>
    </div>
  );
}
