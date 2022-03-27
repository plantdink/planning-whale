import { useQuery, gql } from '@apollo/client';
// import { ALL_AVERAGE_WEAPONS_QUERY } from '../../queries/WeaponQueries';
import DisplayError from '../ErrorMessage';
import AverageWeapon from '../AverageWeapon';
import { ListStyles } from '../styles/ListStyles';

export const ALL_AVERAGE_WEAPONS_QUERY = gql`
  query ALL_AVERAGE_WEAPONS_QUERY {
    allAverageWeapons {
      id
      class
      modSlots
      rpm
      magazineSize
      headshotMultiplier
      accuracy
      stability
      optimalRange
      maxRange
      reloadSpeed
      reloadSpeedFromEmpty
      damageLevel40
      damageWT5
      weaponTalent {
        id
        name
        image {
          image {
            publicUrlTransformed
          }
        }
      }
      image {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function AverageWeapons() {
  const { data, loading, error } = useQuery(ALL_AVERAGE_WEAPONS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <ListStyles>
        {data.allAverageWeapons.map((averageWeapon) => (
          <AverageWeapon key={averageWeapon.id} averageWeapon={averageWeapon} />
        ))}
      </ListStyles>
    </div>
  );
}
