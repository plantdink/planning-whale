import { useQuery } from '@apollo/client';
import { ALL_ARMOUR_TYPES_QUERY } from '../queries/ArmourPieceQueries';
import ArmourType from './ArmourType';
import { ListStyles } from './styles/ListStyles';
import DisplayError from './ErrorMessage';
import { perPage } from '../config';

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
      <ListStyles>
        {data.allArmourTypes.map((armourType) => (
          <ArmourType key={armourType.id} armourType={armourType} />
        ))}
      </ListStyles>
    </div>
  );
}
