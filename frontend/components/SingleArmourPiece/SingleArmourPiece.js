import { gql } from '@apollo/client';
import styled from 'styled-components';
import {
  displayPercentage,
  humanReadableNumber,
} from '../../lib/displayNumbers';

export const SingleGearItemStyle = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  max-width: var(--maxWidth);
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--bs);
  padding: 2rem;
  margin-bottom: 3rem;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;

  
  .title-icon-container {
    align-self: end;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-end;
    right: 40px;
    top: 18px;
    z-index: 1;
  }
  
  .single-gear-item__icon-image {
    justify-self: center;
    align-self: end;
    position: absolute;
    z-index: 1;
    right: 35px;
    top: 25px;
    width: clamp(2vw, 4vw, 40px);
    object-fit: contain;
  }
  
  .multiple-gear-item__icon-image {
    justify-self: center;
    align-self: end;
    position: absolute;
    z-index: 1;
    right: -3px;
    top: 4px;
    width: clamp(2vw, 6vw, 40px);
    object-fit: contain;

    /* position: absolute;
    top: 3px;
    width: 50px;
    object-fit: contain; */
  }
  
  .single-gear-item__content {
    display: flex;
  }

  .single-gear-item__sub-content {
    margin-top: 2rem;
  }
  
  .single-gear-item__details {
    flex-direction: column;
  }
}

.item-image {
  img {
    max-width: clamp(10vw, 25vw, 150px);
    object-fit: contain;
  }
}

.single-gear-item__title-bar {
  transform: skew(7deg);
  margin-top: 2rem;
}
.single-gear-item__title-bar:first-child {
  margin-top: 0rem;
}

.single-gear-item__heading {
  flex: auto;
  flex-grow: 1;
  margin: 0 0 1rem 0;
  /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
  background: var(--orange);
  line-height: 1.3;
  font-size: clamp(2rem, 5vw, 4rem);
  color: var(--text);
  padding: 0 1rem;
}

.single-gear-item__subheading {
  flex: auto;
  margin-top: 1rem;
  margin-top: -3rem;
  /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
  background: var(--orange);
  display: inline;
  line-height: 2;
  font-size: clamp(1rem, 3vw, 2rem);
  font-weight: 600;
  color: var(--text);
  padding: 0 1rem;
}

.single-gear-item__subheading:first-child {
  margin-top: 0rem;
}

.single-gear-item__h3subheading {
  margin: 0;
  margin-top: -3rem;
  /* text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1); */
  background: var(--orange);
  display: inline;
  line-height: 2;
  font-size: clamp(1rem, 3vw, 1.8rem);
  font-weight: 600;
  color: var(--text);
  padding: 0 1rem;
}

.single-gear-item__sub-subheading {
  flex: auto;
  margin: 0;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.3;
}

ul {
  margin: 0;
  color: var(--text);
  font-weight: 400;
  font-size: 1.6rem;
  padding: 0;
  list-style-type: none;
}

li {
  padding: 0.5rem 0 0 1.5rem;
}

p {
  color: var(--text);
  justify-self: start;
  flex: auto;
  padding: 0 1rem 0 1rem;
  margin: 0.5rem 0;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.3;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
}

blockquote {
  color: var(--text);
  margin: 0.75rem 0;
  padding: 0 1rem;
  font-weight: 300;
  font-size: 1.6rem;
}

.standard-item {
  background: var(--orange);
}

.named-item {
  background: var(--namedGold);
}

.gearset-item {
  background: var(--gearsetGreen);
}

.exotic-item {
  background: var(--exoticOrange);
}
`;

export const SINGLE_ARMOUR_PIECE_QUERY = gql`
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

export const SINGLE_EXOTIC_ARMOUR_PIECE_QUERY = gql`
  query SINGLE_EXOTIC_ARMOUR_PIECE_QUERY($id: ID!) {
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
      flavourText
      notes
      availableWT5
      image {
        image {
          publicUrlTransformed
        }
      }
      exoticArmourTalent {
        id
        name
        piece
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

export default function SingleArmourPiece({ armourPiece }) {
  return (
    <>
      <>
        <div className="single-gear-item__title-bar">
          <h1 className="single-gear-item__heading">{armourPiece.name}</h1>
        </div>
        <img
          className="single-gear-item__icon-image"
          src={armourPiece.image?.image.publicUrlTransformed}
          alt={armourPiece.image?.altText}
          data-testid="itemIcon"
        />
        <>
          <div>
            {armourPiece.flavourText !== null && (
              <blockquote data-testid="flavourText">
                {armourPiece.flavourText}
              </blockquote>
            )}
            <p data-testid="itemPiece">{armourPiece.piece}</p>
            {armourPiece.notes !== '' && (
              <p data-testid="itemNotes">{armourPiece.notes}</p>
            )}
          </div>
        </>

        {/* ----------Exotic Items layout ---------- */}
        <>
          {armourPiece.__typename === 'ExoticArmourPiece' && (
            <div className="single-gear-item__content">
              <div className="single-gear-item__details">
                <div className="single-gear-item__title-bar">
                  <h2 className="single-gear-item__subheading">
                    Level 40 stats
                  </h2>
                </div>

                <div className="single-gear-item__title-bar">
                  <h3 className="single-gear-item__h3subheading">
                    Core Attribute
                  </h3>
                </div>
                <ul>
                  <li>
                    {armourPiece.maxCoreOneValueLevel40} {armourPiece.coreOne}
                  </li>
                  {armourPiece.coreTwo !== '' && (
                    <>
                      <li>
                        {armourPiece.maxCoreTwoValueLevel40}{' '}
                        {armourPiece.coreTwo}
                      </li>
                      <li>{armourPiece.coreThree}</li>
                    </>
                  )}
                </ul>

                {armourPiece.attributeOneType !== '' && (
                  <>
                    <div className="single-gear-item__title-bar">
                      <h3 className="single-gear-item__h3subheading">
                        Minor Attributes
                      </h3>
                    </div>
                    <ul>
                      <li>
                        {armourPiece.attributeOneValueLevel40}{' '}
                        {armourPiece.attributeOneType}
                      </li>
                      <li>
                        {armourPiece.attributeTwoValueLevel40}{' '}
                        {armourPiece.attributeTwoType}
                      </li>
                    </ul>
                  </>
                )}
              </div>

              {armourPiece.availableWT5 === 'Yes' && (
                <div className="single-gear-item__details">
                  <div className="single-gear-item__title-bar">
                    <h2 className="single-gear-item__subheading">
                      World Tier 5 Stats
                    </h2>
                  </div>
                  <div className="single-gear-item__title-bar">
                    <h3 className="single-gear-item__h3subheading">
                      Core Attribute
                    </h3>
                  </div>
                  <ul>
                    <li>
                      {armourPiece.maxCoreOneValueLevel30} {armourPiece.coreOne}
                    </li>
                  </ul>
                  <div className="single-gear-item__title-bar">
                    <h3 className="single-gear-item__h3subheading">
                      Minor Attributes
                    </h3>
                  </div>
                  <ul>
                    <li>
                      {armourPiece.attributeOneValueLevel30}{' '}
                      {armourPiece.attributeOneType}
                    </li>
                    <li>
                      {armourPiece.attributeTwoValueLevel30}{' '}
                      {armourPiece.attributeTwoType}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </>

        {/* -------- High end & named items Level 40 -------- */}
        <>
          {armourPiece.coreAttributeTypeOne && (
            <>
              <div
                className="single-gear-item__content"
                data-testid="singleArmourPiece"
              >
                <div className="single-gear-item__details">
                  <div className="single-gear-item__title-bar">
                    <h2 className="single-gear-item__subheading">
                      Level 40 Stats
                    </h2>
                  </div>
                  <div className="single-gear-item__title-bar">
                    <h3 className="single-gear-item__h3subheading">
                      Core Attributes
                    </h3>
                  </div>

                  <ul>
                    {armourPiece.coreAttributeTypeOne !== 'N/A' && (
                      <li data-testid="itemCoreOneType">
                        {displayPercentage(
                          armourPiece.maxCoreDamageLevel40.toString()
                        )}
                        % {armourPiece.coreAttributeTypeOne}
                      </li>
                    )}
                    {armourPiece.coreAttributeTypeTwo !== 'N/A' && (
                      <li data-testid="itemCoreTwoType">
                        {humanReadableNumber(
                          armourPiece.maxCoreArmourLevel40.toString()
                        )}{' '}
                        {armourPiece.coreAttributeTypeTwo}
                      </li>
                    )}
                    {armourPiece.coreAttributeTypeThree !== 'N/A' && (
                      <li data-testid="itemCoreThreeType">
                        {armourPiece.maxCoreSkillTierLevel40.toString()}{' '}
                        {armourPiece.coreAttributeTypeThree}
                      </li>
                    )}
                  </ul>

                  <>
                    <div className="single-gear-item__title-bar">
                      <h3 className="single-gear-item__h3subheading">
                        Minor Attributes - Offensive
                      </h3>
                    </div>
                  </>

                  {armourPiece.coreAttributeTypeOne && (
                    <>
                      <ul>
                        <li data-testid="itemOffAttrOneMax40Value">
                          {displayPercentage(
                            armourPiece.offensiveAttributeOneMaxValueLevel40.toString()
                          )}
                          % {armourPiece.offensiveAttributeOneLevel40}
                        </li>
                        <li data-testid="itemOffAttrTwoMax40Value">
                          {displayPercentage(
                            armourPiece.offensiveAttributeTwoMaxValueLevel40.toString()
                          )}
                          % {armourPiece.offensiveAttributeTwoLevel40}
                        </li>
                        <li data-testid="itemOffAttrThreeMax40Value">
                          {displayPercentage(
                            armourPiece.offensiveAttributeThreeMaxValueLevel40.toString()
                          )}
                          % {armourPiece.offensiveAttributeThreeLevel40}
                        </li>
                        <li data-testid="itemOffAttrFourMax40Value">
                          {displayPercentage(
                            armourPiece.offensiveAttributeFourMaxValueLevel40.toString()
                          )}
                          % {armourPiece.offensiveAttributeFourLevel40}
                        </li>
                      </ul>
                    </>
                  )}

                  {armourPiece.coreAttributeTypeTwo && (
                    <>
                      <div className="single-gear-item__title-bar">
                        <h3 className="single-gear-item__h3subheading">
                          Minor Attributes - Defensive
                        </h3>
                      </div>
                      <ul>
                        <li data-testid="itemDefAttrOneMax40Value">
                          {humanReadableNumber(
                            armourPiece.defensiveAttributeOneMaxValueLevel40.toString()
                          )}{' '}
                          per second {armourPiece.defensiveAttributeOneLevel40}
                        </li>
                        <li data-testid="itemDefAttrTwoMax40Value">
                          {displayPercentage(
                            armourPiece.defensiveAttributeTwoMaxValueLevel40.toString()
                          )}
                          % {armourPiece.defensiveAttributeTwoLevel40}
                        </li>
                        <li data-testid="itemDefAttrThreeMax40Value">
                          {displayPercentage(
                            armourPiece.defensiveAttributeThreeMaxValueLevel40.toString()
                          )}
                          % {armourPiece.defensiveAttributeThreeLevel40}
                        </li>
                        <li data-testid="itemDefAttrFourMax40Value">
                          {humanReadableNumber(
                            armourPiece.defensiveAttributeFourMaxValueLevel40.toString()
                          )}{' '}
                          {armourPiece.defensiveAttributeFourLevel40}
                        </li>
                      </ul>
                    </>
                  )}

                  {armourPiece.coreAttributeTypeTwo && (
                    <>
                      <div className="single-gear-item__title-bar">
                        <h3 className="single-gear-item__h3subheading">
                          Minor Attributes - Utility
                        </h3>
                      </div>
                      <ul>
                        <li data-testid="itemUtilAttrOneMax40Value">
                          {displayPercentage(
                            armourPiece.utilityAttributeOneMaxValueLevel40.toString()
                          )}
                          % {armourPiece.utilityAttributeOneLevel40}
                        </li>
                        <li data-testid="itemUtilAttrTwoMax40Value">
                          {displayPercentage(
                            armourPiece.utilityAttributeTwoMaxValueLevel40.toString()
                          )}
                          % {armourPiece.utilityAttributeTwoLevel40}
                        </li>
                        <li data-testid="itemUtilAttrThreeMax40Value">
                          {displayPercentage(
                            armourPiece.utilityAttributeThreeMaxValueLevel40.toString()
                          )}
                          % {armourPiece.utilityAttributeThreeLevel40}
                        </li>
                        <li data-testid="itemUtilAttrFourMax40Value">
                          {displayPercentage(
                            armourPiece.utilityAttributeFourMaxValueLevel40.toString()
                          )}
                          % {armourPiece.utilityAttributeFourLevel40}
                        </li>
                      </ul>
                    </>
                  )}
                </div>

                {/* ------------- World Tier 5 below ----------- */}

                {armourPiece.availableWT5 === 'Yes' && (
                  <div
                    className="single-gear-item__details"
                    data-testid="itemWT5Details"
                  >
                    <div className="single-gear-item__title-bar">
                      <h2 className="single-gear-item__subheading">
                        World Tier 5 Stats
                      </h2>
                    </div>
                    <div className="single-gear-item__title-bar">
                      <h3 className="single-gear-item__h3subheading">
                        Core Attributes
                      </h3>
                    </div>

                    <ul>
                      {armourPiece.coreAttributeTypeOne !== 'N/A' && (
                        <li>
                          {displayPercentage(
                            armourPiece.maxCoreValueDamageLevel30.toString()
                          )}
                          % {armourPiece.coreAttributeTypeOne}
                        </li>
                      )}
                      {armourPiece.coreAttributeTypeTwo !== 'N/A' && (
                        <li>
                          {humanReadableNumber(
                            armourPiece.maxCoreArmourLevel30.toString()
                          )}{' '}
                          {armourPiece.coreAttributeTypeTwo}
                        </li>
                      )}
                      {armourPiece.coreAttributeTypeThree !== 'N/A' && (
                        <li>
                          {armourPiece.maxCoreSkillTierLevel30.toString()}{' '}
                          {armourPiece.coreAttributeTypeThree}
                        </li>
                      )}
                    </ul>

                    {armourPiece.coreOne && (
                      <>
                        <div className="single-gear-item__title-bar">
                          <h3 className="single-gear-item__h3subheading">
                            Attribute One
                          </h3>
                        </div>
                        <ul>
                          <li>
                            {armourPiece.attributeOneType} -{' '}
                            {armourPiece.attributeOneValueLevel30}%
                          </li>
                        </ul>
                      </>
                    )}

                    {armourPiece.coreAttributeTypeOne && (
                      <>
                        <div className="single-gear-item__title-bar">
                          <h3 className="single-gear-item__h3subheading">
                            Minor Attributes - Offensive
                          </h3>
                        </div>
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
                            {displayPercentage(
                              armourPiece.offensiveAttributeOneMaxValueLevel30.toString()
                            )}
                            % {armourPiece.offensiveAttributeOneLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              armourPiece.offensiveAttributeTwoMaxValueLevel30.toString()
                            )}
                            % {armourPiece.offensiveAttributeTwoLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              armourPiece.offensiveAttributeThreeMaxValueLevel30.toString()
                            )}
                            % {armourPiece.offensiveAttributeThreeLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              armourPiece.offensiveAttributeFourMaxValueLevel30.toString()
                            )}
                            % {armourPiece.offensiveAttributeFourLevel40}
                          </li>
                        </ul>
                      </>
                    )}

                    {armourPiece.coreAttributeTypeTwo && (
                      <>
                        <div className="single-gear-item__title-bar">
                          <h3 className="single-gear-item__h3subheading">
                            Minor Attributes - Defensive
                          </h3>
                        </div>
                        <ul>
                          <li>
                            {humanReadableNumber(
                              armourPiece.defensiveAttributeOneMaxValueLevel30.toString()
                            )}{' '}
                            per second{' '}
                            {armourPiece.defensiveAttributeOneLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              armourPiece.defensiveAttributeTwoMaxValueLevel30.toString()
                            )}
                            % {armourPiece.defensiveAttributeTwoLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              armourPiece.defensiveAttributeThreeMaxValueLevel30.toString()
                            )}
                            % {armourPiece.defensiveAttributeThreeLevel40}
                          </li>
                          <li>
                            {humanReadableNumber(
                              armourPiece.defensiveAttributeFourMaxValueLevel30.toString()
                            )}{' '}
                            {armourPiece.defensiveAttributeFourLevel40}
                          </li>
                        </ul>
                      </>
                    )}

                    {armourPiece.coreAttributeTypeTwo && (
                      <>
                        <div className="single-gear-item__title-bar">
                          <h3 className="single-gear-item__h3subheading">
                            Minor Attributes - Utility
                          </h3>
                        </div>
                        <ul>
                          <li>
                            {displayPercentage(
                              armourPiece.utilityAttributeOneMaxValueLevel30.toString()
                            )}
                            % {armourPiece.utilityAttributeOneLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              armourPiece.utilityAttributeTwoMaxValueLevel30.toString()
                            )}
                            % {armourPiece.utilityAttributeTwoLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              armourPiece.utilityAttributeThreeMaxValueLevel30.toString()
                            )}
                            % {armourPiece.utilityAttributeThreeLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              armourPiece.utilityAttributeFourMaxValueLevel30.toString()
                            )}
                            % {armourPiece.utilityAttributeFourLevel40}
                          </li>
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>

              {(armourPiece.uniqueAttribute || armourPiece.modSlots > 0) && (
                <div className="single-gear-item__sub-content">
                  <div className="single-gear-item__details">
                    {armourPiece.uniqueAttribute && (
                      <>
                        <div className="single-gear-item__title-bar">
                          <h3 className="single-gear-item__h3subheading">
                            Item Unique Attribute
                          </h3>
                        </div>
                        <ul>
                          <li>{armourPiece.uniqueAttribute}</li>
                        </ul>
                      </>
                    )}

                    {armourPiece.modSlots > 0 && (
                      <>
                        <div className="single-gear-item__title-bar">
                          <h3 className="single-gear-item__h3subheading">
                            Number of Mod Slots
                          </h3>
                        </div>
                        <ul>
                          <li>{armourPiece.modSlots}</li>
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </>
      </>
    </>
  );
}
