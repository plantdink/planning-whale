import { useQuery } from '@apollo/client';
import { ALL_NAMED_ARMOUR_PIECES_QUERY } from '../queries/ArmourPieceQueries';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';
import NamedArmourPiece from './NamedArmourPiece';
import { ListStyles } from './styles/ListStyles';

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
      <ListStyles>
        {data.allArmourTypes.map((armourType) => (
          <NamedArmourPiece key={armourType.id} armourType={armourType} />
        ))}
      </ListStyles>
    </div>
  );
}
