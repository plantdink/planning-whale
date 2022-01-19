import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import { displayPercentage } from '../lib/displayNumbers';
import HeadSEO from './HeadSEO';

const SingleArmourPieceStyle = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  /* grid-auto-flow: column; */
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_ARMOUR_PIECE_QUERY = gql`
  query SINGLE_ARMOUR_PIECE_QUERY($id: ID!) {
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
    }
    allExoticArmourPieces(where: { id: $id }) {
      name
      piece
      modSlots
      coreOne
      coreTwo
      coreThree
      maxCoreOneValueLevel40
      maxCoreTwoValueLevel40
      maxCoreThreeValueLevel40
      maxCoreOneValueLevel30
      attributeOneType
      attributeTwoType
      attributeOneValueLevel40
      attributeTwoValueLevel40
      attributeOneValueLevel30
      attributeTwoValueLevel30
      exoticArmourTalent {
        name
      }
    }
  }
`;

export default function SingleArmourPiece({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ARMOUR_PIECE_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading....</p>;
  if (error) return <DisplayError error={error} />;

  const { ...armourPiece } =
    data.allArmourTypes[0] || data.allExoticArmourPieces[0];

  return (
    <SingleArmourPieceStyle>
      <HeadSEO seoTag={armourPiece.name} />
      <img />
      <h1>{armourPiece.name}</h1>
      <h3>{armourPiece.piece}</h3>
      <h2>Core types</h2>
      {armourPiece.coreOne && (
        <ul>
          <li>{armourPiece.coreOne}</li>
        </ul>
      )}
      {armourPiece.coreAttributeTypeOne && (
        <>
          <ul>
            <li>
              {armourPiece.coreAttributeTypeOne} -{' '}
              {displayPercentage(armourPiece.maxCoreDamageLevel40.toString())}%{' '}
              {displayPercentage(
                armourPiece.maxCoreValueDamageLevel30.toString()
              )}
              %
            </li>
            <li>
              {armourPiece.coreAttributeTypeTwo} -{' '}
              {armourPiece.maxCoreArmourLevel40.toString()}{' '}
              {armourPiece.maxCoreArmourLevel30.toString()}
            </li>
            <li>
              {armourPiece.coreAttributeTypeThree} - +
              {armourPiece.maxCoreSkillTierLevel40.toString()} +
              {armourPiece.maxCoreSkillTierLevel30.toString()}
            </li>
          </ul>
        </>
      )}

      <h3>Number of Mod Slots</h3>
      <ul>
        <li>{armourPiece.modSlots}</li>
      </ul>

      {armourPiece.coreOne && (
        <>
          <h3>Attribute One</h3>
          <ul>
            <li>
              {armourPiece.attributeOneType} -{' '}
              {armourPiece.attributeOneValueLevel40}%
            </li>
          </ul>
        </>
      )}

      {armourPiece.attributeOneType && (
        <>
          <h3>Offensive Attributes - Level 40 Max Value</h3>
          <ul>
            <li>{armourPiece.attributeOneType}</li>
            <li>{armourPiece.attributeTwoType}</li>
          </ul>
        </>
      )}
      {armourPiece.coreAttributeTypeOne && (
        <>
          <ul>
            <li>
              {armourPiece.offensiveAttributeOneLevel40} -{' '}
              {displayPercentage(
                armourPiece.offensiveAttributeOneMaxValueLevel40.toString()
              )}
              %
            </li>
            <li>
              {armourPiece.offensiveAttributeTwoLevel40} -{' '}
              {displayPercentage(
                armourPiece.offensiveAttributeTwoMaxValueLevel40.toString()
              )}
              %
            </li>
            <li>
              {armourPiece.offensiveAttributeThreeLevel40} -{' '}
              {displayPercentage(
                armourPiece.offensiveAttributeThreeMaxValueLevel40.toString()
              )}
              %
            </li>
            <li>
              {armourPiece.offensiveAttributeFourLevel40} -{' '}
              {displayPercentage(
                armourPiece.offensiveAttributeFourMaxValueLevel40.toString()
              )}
              %
            </li>
          </ul>
        </>
      )}

      {armourPiece.coreAttributeTypeTwo && (
        <>
          <h3>Defensive Attributes - Level 40 Max Value</h3>
          <ul>
            <li>
              {armourPiece.defensiveAttributeOneLevel40} -{' '}
              {armourPiece.defensiveAttributeOneMaxValueLevel40.toString()} per
              second
            </li>
            <li>
              {armourPiece.defensiveAttributeTwoLevel40} -{' '}
              {displayPercentage(
                armourPiece.defensiveAttributeTwoMaxValueLevel40.toString()
              )}
              %
            </li>
            <li>
              {armourPiece.defensiveAttributeThreeLevel40} -{' '}
              {displayPercentage(
                armourPiece.defensiveAttributeThreeMaxValueLevel40.toString()
              )}
              %
            </li>
            <li>
              {armourPiece.defensiveAttributeFourLevel40} -{' '}
              {armourPiece.defensiveAttributeFourMaxValueLevel40.toString()}
            </li>
          </ul>
        </>
      )}

      {armourPiece.coreAttributeTypeTwo && (
        <>
          <h3>Skill Attributes - Level 40 Max Value</h3>
          <ul>
            <li>
              {armourPiece.utilityAttributeOneLevel40} -{' '}
              {displayPercentage(
                armourPiece.utilityAttributeOneMaxValueLevel40.toString()
              )}
              %
            </li>
            <li>
              {armourPiece.utilityAttributeTwoLevel40} -{' '}
              {displayPercentage(
                armourPiece.utilityAttributeTwoMaxValueLevel40.toString()
              )}
              %
            </li>
            <li>
              {armourPiece.utilityAttributeThreeLevel40} -{' '}
              {displayPercentage(
                armourPiece.utilityAttributeThreeMaxValueLevel40.toString()
              )}
              %
            </li>
            <li>
              {armourPiece.utilityAttributeFourLevel40} -{' '}
              {displayPercentage(
                armourPiece.utilityAttributeFourMaxValueLevel40.toString()
              )}
              %
            </li>
          </ul>
        </>
      )}
    </SingleArmourPieceStyle>
  );
}
