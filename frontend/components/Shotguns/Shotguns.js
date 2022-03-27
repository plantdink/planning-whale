import { useQuery, gql } from '@apollo/client';
import Shotgun from '../Shotgun';
import { ListStyles } from '../styles/ListStyles';
// import { ALL_SHOTGUNS_QUERY } from '../../queries/WeaponQueries';
import { perPage } from '../../config';
import DisplayError from '../ErrorMessage';

export const ALL_SHOTGUNS_QUERY = gql`
  query ALL_SHOTGUNS_QUERY($skip: Int = 0, $first: Int) {
    allWeapons(where: { class: "SHOTGUN" }, first: $first, skip: $skip) {
      id
      model
      family
      magazineSize
      rpm
      modSlots
      reloadSpeed
      reloadSpeedFromEmpty
      accuracy
      stability
      optimalRange
      maxRange
      headshotMultiplier
      weaponBonusType
      maxBonusValue
      damageLevel40
      damageWt5
      notes
      isNamed
      isExotic
      image {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Shotguns({ page }) {
  const { data, error, loading } = useQuery(ALL_SHOTGUNS_QUERY, {
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
        {data.allWeapons.map((shotgun) => (
          <Shotgun key={shotgun.id} shotgun={shotgun} />
        ))}
      </ListStyles>
    </div>
  );
}
