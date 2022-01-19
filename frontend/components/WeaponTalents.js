import { gql, useQuery } from '@apollo/client';
import WeaponTalent from './WeaponTalent';
import ItemListStyles from './styles/ItemListStyles';
import HeadSEO from './HeadSEO';

const ALL_WEAPON_TALENTS_QUERY = gql`
  query ALL_WEAPON_TALENTS_QUERY {
    allWeaponTalents {
      id
      name
    }
  }
`;

export default function WeaponTalents() {
  const { data, loading, error } = useQuery(ALL_WEAPON_TALENTS_QUERY);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <HeadSEO seoTag="All Weapon Talents" />
      <ItemListStyles>
        {data.allWeaponTalents.map((weaponTalent) => (
          <WeaponTalent key={weaponTalent.id} weaponTalent={weaponTalent} />
        ))}
      </ItemListStyles>
    </>
  );
}
