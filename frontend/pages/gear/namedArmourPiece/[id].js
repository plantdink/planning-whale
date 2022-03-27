import { useQuery, gql } from '@apollo/client';
import DisplayError from '../../../components/ErrorMessage';
import SingleNamedArmourPiece from '../../../components/SingleNamedArmourPiece';
import LinkSmallBrand from '../../../components/LinkSmallBrand';
import LinkSmallTalent from '../../../components/LinkSmallTalent';
// import { SINGLE_NAMED_ARMOUR_PIECE_QUERY } from '../../../queries/ArmourPieceQueries';
import SingleGearItemStyle from '../../../components/styles/SingleGearItemStyles';

export const SINGLE_NAMED_ARMOUR_PIECE_QUERY = gql`
  query SINGLE_NAMED_ARMOUR_PIECE_QUERY($id: ID!) {
    allArmourTypes(where: { id: $id }) {
      name
      piece
      modSlots
      coreAttributeTypeOne
      coreAttributeTypeTwo
      coreAttributeTypeThree
      maxCoreDamageLevel40
      maxCoreArmourLevel40
      maxCoreSkillTierLevel40
      maxCoreValueDamageLevel30
      maxCoreArmourLevel30
      maxCoreSkillTierLevel30
      offensiveAttributeOneLevel40
      offensiveAttributeTwoLevel40
      offensiveAttributeThreeLevel40
      offensiveAttributeFourLevel40
      offensiveAttributeOneMaxValueLevel40
      offensiveAttributeTwoMaxValueLevel40
      offensiveAttributeThreeMaxValueLevel40
      offensiveAttributeFourMaxValueLevel40
      offensiveAttributeOneMaxValueLevel30
      offensiveAttributeTwoMaxValueLevel30
      offensiveAttributeThreeMaxValueLevel30
      offensiveAttributeFourMaxValueLevel30
      defensiveAttributeOneLevel40
      defensiveAttributeTwoLevel40
      defensiveAttributeThreeLevel40
      defensiveAttributeFourLevel40
      defensiveAttributeOneMaxValueLevel40
      defensiveAttributeTwoMaxValueLevel40
      defensiveAttributeThreeMaxValueLevel40
      defensiveAttributeFourMaxValueLevel40
      defensiveAttributeOneMaxValueLevel30
      defensiveAttributeTwoMaxValueLevel30
      defensiveAttributeThreeMaxValueLevel30
      defensiveAttributeFourMaxValueLevel30
      utilityAttributeOneLevel40
      utilityAttributeTwoLevel40
      utilityAttributeThreeLevel40
      utilityAttributeFourLevel40
      utilityAttributeOneMaxValueLevel40
      utilityAttributeTwoMaxValueLevel40
      utilityAttributeThreeMaxValueLevel40
      utilityAttributeFourMaxValueLevel40
      utilityAttributeOneMaxValueLevel30
      utilityAttributeTwoMaxValueLevel30
      utilityAttributeThreeMaxValueLevel30
      utilityAttributeFourMaxValueLevel30
      uniqueAttribute
      notes
      flavourText
      availableWT5
      isNamed
      image {
        image {
          publicUrlTransformed
        }
        altText
      }
      brand {
        id
        name
        image {
          image {
            publicUrlTransformed
          }
        }
      }
      armourTalent {
        id
        name
        piece
        descriptionPVE
        isNamed
        isExotic
        image {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function SingleNamedArmourPiecePage({ query }) {
  const { data, loading, error } = useQuery(SINGLE_NAMED_ARMOUR_PIECE_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>Loading.....</p>;
  if (error) return <DisplayError error={error} />;

  const { ...singleNamedPiece } = data.allArmourTypes[0];

  return (
    <SingleGearItemStyle>
      <SingleNamedArmourPiece singleNamedPiece={singleNamedPiece} />
      {singleNamedPiece.armourTalent.length > 0 && (
        <>
          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Item Unique Talent</h2>
          </div>
          {singleNamedPiece.armourTalent.map((talent) => (
            <LinkSmallTalent key={talent.id} talent={talent} />
          ))}
        </>
      )}
      {singleNamedPiece.brand.length > 0 && (
        <>
          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Brand of Item</h2>
          </div>
          {singleNamedPiece.brand.map((brand) => (
            <LinkSmallBrand key={brand.id} brand={brand} />
          ))}
        </>
      )}
    </SingleGearItemStyle>
  );
}
