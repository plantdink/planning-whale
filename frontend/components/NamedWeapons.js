import { gql, useQuery } from '@apollo/client';
import NamedWeapon from './NamedWeapon';
import ItemListStyles from './styles/ItemListStyles';

const ALL_NAMED_WEAPONS_QUERY = gql`
  query ALL_NAMED_WEAPONS_QUERY {
    allWeapons(where: { isNamed: "YES" }) {
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

export default function NamedWeapons() {
  const { data, error, loading } = useQuery(ALL_NAMED_WEAPONS_QUERY);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <ItemListStyles>
        {data.allWeapons.map((namedWeapon) => (
          <NamedWeapon key={namedWeapon.id} namedWeapon={namedWeapon} />
        ))}
      </ItemListStyles>
    </div>
  );
}
