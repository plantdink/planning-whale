import { useQuery } from '@apollo/client';
import { ALL_ARMOUR_TALENTS_QUERY } from '../queries/TalentQueries';
import ArmourTalent from './ArmourTalent';
import { ListStyles } from './styles/ListStyles';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';

export default function ArmourTalents({ page }) {
  const { data, loading, error } = useQuery(ALL_ARMOUR_TALENTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading....</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <>
      <ListStyles>
        {data.allArmourTalents.map((armourTalent) => (
          <ArmourTalent
            key={armourTalent.id}
            armourTalent={armourTalent}
            img={armourTalent.image?.image.publicUrlTransformed}
          />
        ))}
      </ListStyles>
    </>
  );
}
