import { gql, useQuery } from '@apollo/client';
import DisplayError from './ErrorMessage';
import { displayPercentage, humanReadableNumber } from '../lib/displayNumbers';
import HeadSEO from './HeadSEO';
import SingleGearItemStyle from './styles/SingleGearItemStyles';

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
      flavourText
      notes
      availableWT5
      image {
        image {
          publicUrlTransformed
        }
      }
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
    <>
      <HeadSEO seoTag={armourPiece.name} />
      <SingleGearItemStyle>
        <>
          <h1
            className={`single-gear-item__heading ${
              armourPiece.isNamed === 'YES' ? 'named-item' : null
            } ${
              armourPiece.__typename === 'ExoticArmourPiece'
                ? 'exotic-item'
                : null
            }`}
          >
            {armourPiece.name}
          </h1>
          <img
            className="single-gear-item__icon-image"
            src={armourPiece.image?.image.publicUrlTransformed}
            alt={armourPiece.image?.image.altText}
          />
          <>
            <div>
              {armourPiece.flavourText !== null && (
                <q>{armourPiece.flavourText}</q>
              )}
              <p>{armourPiece.piece}</p>
              {armourPiece.notes !== '' && <p>{armourPiece.notes}</p>}
              {armourPiece.modSlots > 0 && (
                <>
                  <h2 className="single-gear-item__subheading">
                    Number of Mod Slots
                  </h2>
                  <ul>
                    <li>{armourPiece.modSlots}</li>
                  </ul>
                </>
              )}
            </div>
          </>

          {/* ----------Exotic Items layout ---------- */}
          <>
            {armourPiece.__typename === 'ExoticArmourPiece' && (
              <div className="single-gear-item__content">
                <div className="single-gear-item__details">
                  <h2 className="single-gear-item__subheading">
                    Level 40 stats
                  </h2>

                  <h2 className="single-gear-item__subheading">
                    Core Attribute
                  </h2>
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
                      <h2 className="single-gear-item__subheading">
                        Secondary Attributes
                      </h2>
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
                    <h2 className="single-gear-item__subheading">
                      World Tier 5 Stats
                    </h2>
                    <h2 className="single-gear-item__subheading">
                      Core Attribute
                    </h2>
                    <ul>
                      <li>
                        {armourPiece.maxCoreOneValueLevel30}{' '}
                        {armourPiece.coreOne}
                      </li>
                    </ul>
                    <h2 className="single-gear-item__subheading">
                      Secondary Attributes
                    </h2>
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
              <div className="single-gear-item__content">
                <div className="single-gear-item__details">
                  <h2 className="single-gear-item__subheading">
                    Level 40 Stats
                  </h2>
                  <h2 className="single-gear-item__subheading">
                    Core Attributes
                  </h2>

                  <ul>
                    {armourPiece.coreAttributeTypeOne !== 'N/A' && (
                      <li>
                        {displayPercentage(
                          armourPiece.maxCoreDamageLevel40.toString()
                        )}
                        % {armourPiece.coreAttributeTypeOne}
                      </li>
                    )}
                    {armourPiece.coreAttributeTypeTwo !== 'N/A' && (
                      <li>
                        {humanReadableNumber(
                          armourPiece.maxCoreArmourLevel40.toString()
                        )}{' '}
                        {armourPiece.coreAttributeTypeTwo}
                      </li>
                    )}
                    {armourPiece.coreAttributeTypeThree !== 'N/A' && (
                      <li>
                        {armourPiece.maxCoreSkillTierLevel40.toString()}{' '}
                        {armourPiece.coreAttributeTypeThree}
                      </li>
                    )}
                  </ul>

                  <>
                    <h2 className="single-gear-item__subheading">
                      Offensive Attributes
                    </h2>
                    <ul>
                      <li>{armourPiece.attributeOneType}</li>
                      <li>{armourPiece.attributeTwoType}</li>
                    </ul>
                  </>

                  {armourPiece.coreAttributeTypeOne && (
                    <>
                      <ul>
                        <li>
                          {displayPercentage(
                            armourPiece.offensiveAttributeOneMaxValueLevel40.toString()
                          )}
                          % {armourPiece.offensiveAttributeOneLevel40}
                        </li>
                        <li>
                          {displayPercentage(
                            armourPiece.offensiveAttributeTwoMaxValueLevel40.toString()
                          )}
                          % {armourPiece.offensiveAttributeTwoLevel40}
                        </li>
                        <li>
                          {displayPercentage(
                            armourPiece.offensiveAttributeThreeMaxValueLevel40.toString()
                          )}
                          % {armourPiece.offensiveAttributeThreeLevel40}
                        </li>
                        <li>
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
                      <h2 className="single-gear-item__subheading">
                        Defensive Attributes
                      </h2>
                      <ul>
                        <li>
                          {humanReadableNumber(
                            armourPiece.defensiveAttributeOneMaxValueLevel40.toString()
                          )}{' '}
                          per second {armourPiece.defensiveAttributeOneLevel40}
                        </li>
                        <li>
                          {displayPercentage(
                            armourPiece.defensiveAttributeTwoMaxValueLevel40.toString()
                          )}
                          % {armourPiece.defensiveAttributeTwoLevel40}
                        </li>
                        <li>
                          {displayPercentage(
                            armourPiece.defensiveAttributeThreeMaxValueLevel40.toString()
                          )}
                          % {armourPiece.defensiveAttributeThreeLevel40}
                        </li>
                        <li>
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
                      <h2 className="single-gear-item__subheading">
                        Skill Attributes
                      </h2>
                      <ul>
                        <li>
                          {displayPercentage(
                            armourPiece.utilityAttributeOneMaxValueLevel40.toString()
                          )}
                          % {armourPiece.utilityAttributeOneLevel40}
                        </li>
                        <li>
                          {displayPercentage(
                            armourPiece.utilityAttributeTwoMaxValueLevel40.toString()
                          )}
                          % {armourPiece.utilityAttributeTwoLevel40}
                        </li>
                        <li>
                          {displayPercentage(
                            armourPiece.utilityAttributeThreeMaxValueLevel40.toString()
                          )}
                          % {armourPiece.utilityAttributeThreeLevel40}
                        </li>
                        <li>
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
                  <div className="single-item-details">
                    <h2 className="single-gear-item__subheading">
                      World Tier 5 Stats
                    </h2>

                    <h2 className="single-gear-item__subheading">
                      Core Attributes
                    </h2>

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
                        <h2 className="single-gear-item__subheading">
                          Attribute One
                        </h2>
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
                        <h2 className="single-gear-item__subheading">
                          Offensive Attributes
                        </h2>
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
                        <h2 className="single-gear-item__subheading">
                          Defensive Attributes
                        </h2>
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
                        <h2 className="single-gear-item__subheading">
                          Skill Attributes
                        </h2>
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
            )}
          </>
        </>
      </SingleGearItemStyle>
    </>
  );
}
