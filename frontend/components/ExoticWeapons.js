import { gql, useQuery } from '@apollo/client';
import { perPage } from '../config';
import DisplayError from './ErrorMessage';
import ExoticWeapon from './ExoticWeapon';
import ItemListStyles from './styles/ItemListStyles';

const ALL_EXOTIC_WEAPONS_QUERY = gql`
  query ALL_EXOTIC_WEAPONS_QUERY($skip: Int = 0, $first: Int) {
    allWeapons(where: { isExotic: "YES" }, first: $first, skip: $skip) {
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

export default function ExoticWeapons({ page }) {
  const { data, loading, error } = useQuery(ALL_EXOTIC_WEAPONS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <ItemListStyles>
        {data.allWeapons.map((exoticWeapon) => (
          <ExoticWeapon key={exoticWeapon.id} exoticWeapon={exoticWeapon} />
        ))}
      </ItemListStyles>
    </div>
  );
}
