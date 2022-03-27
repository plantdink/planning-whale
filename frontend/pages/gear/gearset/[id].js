import { useQuery, gql } from '@apollo/client';
// import { SINGLE_GEARSET_QUERY } from '../../../queries/GearsetQueries';
import DisplayError from '../../../components/ErrorMessage';
import SingleGearset from '../../../components/SingleGearset';

export const SINGLE_GEARSET_QUERY = gql`
  query SINGLE_GEARSET_QUERY($id: ID!) {
    allGearsets(where: { id: $id }) {
      name
      coreAttribute
      coreAttributeValueLevel40
      coreAttributeValueWT5
      setBonusOne
      setBonusTwo
      setBonusName
      setBonusThree
      setBackpackTalentName
      setBackpackTalent
      setChestTalentName
      setChestTalent
      image {
        image {
          publicUrlTransformed
        }
        altText
      }
      notes
    }
  }
`;

export default function SingleGearsetPage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_GEARSET_QUERY, {
    variables: {
      id: query.id,
    },
  });

  if (loading) return <p>Loading....</p>;
  if (error) return <DisplayError error={error} />;

  const gearset = data.allGearsets[0];

  return <SingleGearset gearset={gearset} />;
}
