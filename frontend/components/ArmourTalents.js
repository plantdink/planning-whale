import { gql, useQuery } from '@apollo/client';
import ArmourTalent from './ArmourTalent';
import ItemListStyles from './styles/ItemListStyles';
import HeadSEO from './HeadSEO';

const ALL_ARMOUR_TALENTS_QUERY = gql`
  query ALL_ARMOUR_TALENTS_QUERY {
    allArmourTalents {
      id
      name
    }
  }
`;

export default function ArmourTalents() {
  const { data, loading, error } = useQuery(ALL_ARMOUR_TALENTS_QUERY);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <HeadSEO seoTag="All Armour Talents" />
      <ItemListStyles>
        {data.allArmourTalents.map((armourTalent) => (
          <ArmourTalent key={armourTalent.id} armourTalent={armourTalent} />
        ))}
      </ItemListStyles>
    </>
  );
}
