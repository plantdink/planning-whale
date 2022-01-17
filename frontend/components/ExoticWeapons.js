import { gql, useQuery } from '@apollo/client';
import ExoticWeapon from './ExoticWeapon';
import ItemListStyles from './styles/ItemListStyles';

const ALL_EXOTIC_WEAPONS_QUERY = gql`
  query ALL_EXOTIC_WEAPONS_QUERY {
    allWeapons(where: { isExotic: "YES" }) {
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
    }
  }
`;

export default function ExoticWeapons() {
  const { data, loading, error } = useQuery(ALL_EXOTIC_WEAPONS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
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
