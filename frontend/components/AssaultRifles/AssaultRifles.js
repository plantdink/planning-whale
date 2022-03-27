import { useQuery, gql } from '@apollo/client';
// import { ALL_ASSAULT_RIFLES_QUERY } from '../../queries/WeaponQueries';
import { perPage } from '../../config';
import AssaultRifle from '../AssaultRifle';
import { ListStyles } from '../styles/ListStyles';
import DisplayError from '../ErrorMessage';

export const ALL_ASSAULT_RIFLES_QUERY = gql`
  query ALL_ASSAULT_RIFLES_QUERY($skip: Int = 0, $first: Int) {
    allWeapons(where: { class: "ASSAULT RIFLE" }, first: $first, skip: $skip) {
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

export default function AssaultRifles({ page }) {
  const { data, error, loading } = useQuery(ALL_ASSAULT_RIFLES_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <ListStyles>
      {data.allWeapons.map((assaultRifle) => (
        <AssaultRifle key={assaultRifle.id} assaultRifle={assaultRifle} />
      ))}
    </ListStyles>
  );
}
