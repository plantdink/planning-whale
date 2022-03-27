import { useQuery, gql } from '@apollo/client';
// import { ALL_LIGHT_MACHINE_GUNS_QUERY } from '../../queries/WeaponQueries';
import LightMachineGun from '../LightMachineGun';
import { ListStyles } from '../styles/ListStyles';
import DisplayError from '../ErrorMessage';
import { perPage } from '../../config';

export const ALL_LIGHT_MACHINE_GUNS_QUERY = gql`
  query ALL_LIGHT_MACHINE_GUNS_QUERY($skip: Int, $first: Int) {
    allWeapons(
      where: { class: "LIGHT MACHINE GUN" }
      first: $first
      skip: $skip
    ) {
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

export default function LightMachineGuns({ page }) {
  const { data, error, loading } = useQuery(ALL_LIGHT_MACHINE_GUNS_QUERY, {
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
        {data.allWeapons.map((lightMachineGun) => (
          <LightMachineGun
            key={lightMachineGun.id}
            lightMachineGun={lightMachineGun}
          />
        ))}
      </ListStyles>
    </div>
  );
}
