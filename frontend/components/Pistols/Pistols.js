import { useQuery, gql } from '@apollo/client';
// import { ALL_PISTOLS_QUERY } from '../../queries/WeaponQueries';
import { perPage } from '../../config';
import DisplayError from '../ErrorMessage';
import Pistol from '../Pistol';
import { ListStyles } from '../styles/ListStyles';

export const ALL_PISTOLS_QUERY = gql`
  query ALL_PISTOLS_QUERY($skip: Int = 0, $first: Int) {
    allWeapons(where: { class: "PISTOL" }, first: $first, skip: $skip) {
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
      damageLevel40
      damageWt5
      notes
      isNamed
      isExotic
      image {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Pistols({ page }) {
  const { data, error, loading } = useQuery(ALL_PISTOLS_QUERY, {
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
        {data.allWeapons.map((pistol) => (
          <Pistol key={pistol.id} pistol={pistol} />
        ))}
      </ListStyles>
    </div>
  );
}
