import { gql, useQuery } from '@apollo/client';
import { displayPercentage, humanReadableNumber } from '../lib/displayNumbers';
import DisplayError from './ErrorMessage';
import HeadSEO from './HeadSEO';
import SingleGearItemStyle from './styles/SingleGearItemStyles';

const SINGLE_NAMED_ARMOUR_PIECE_QUERY = gql`
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
        name
      }
      armourTalent {
        name
        descriptionPVE
        descriptionPVP
      }
    }
  }
`;

export default function SingleNamedArmourPiece({ id }) {
  const { data, loading, error } = useQuery(SINGLE_NAMED_ARMOUR_PIECE_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading.....</p>;
  if (error) return <DisplayError error={error} />;

  const { ...singleNamedPiece } = data.allArmourTypes[0];
  //   console.log(singleNamedPiece);

  return (
    <>
      <HeadSEO seoTag={singleNamedPiece.name} />
      <SingleGearItemStyle>
        <>
          <h1
            className={`single-gear-item__heading ${
              singleNamedPiece.isNamed === 'YES' ? 'named-item' : null
            } ${
              singleNamedPiece.__typename === 'ExoticArmourPiece'
                ? 'exotic-item'
                : null
            }`}
          >
            {singleNamedPiece.name}
          </h1>
          <img
            className="single-gear-item__icon-image"
            src={singleNamedPiece.image?.image.publicUrlTransformed}
            alt={singleNamedPiece.image?.image.altText}
          />
          <>
            <div>
              {singleNamedPiece.flavourText !== null && (
                <q>{singleNamedPiece.flavourText}</q>
              )}
              <p>{singleNamedPiece.piece}</p>
              {singleNamedPiece.notes !== '' && <p>{singleNamedPiece.notes}</p>}
              {singleNamedPiece.modSlots > 0 && (
                <>
                  <h2 className="single-gear-item__subheading">
                    Number of Mod Slots
                  </h2>
                  <ul>
                    <li>{singleNamedPiece.modSlots}</li>
                  </ul>
                </>
              )}
            </div>
          </>

          {/* -------- High end & named items Level 40 -------- */}
          <>
            {singleNamedPiece.coreAttributeTypeOne && (
              <div className="single-gear-item__content">
                <div className="single-gear-item__details">
                  <h2 className="single-gear-item__subheading">
                    Level 40 Stats
                  </h2>
                  <h2 className="single-gear-item__subheading">
                    Core Attributes
                  </h2>

                  <ul>
                    {singleNamedPiece.coreAttributeTypeOne !== 'N/A' && (
                      <li>
                        {displayPercentage(
                          singleNamedPiece.maxCoreDamageLevel40.toString()
                        )}
                        % {singleNamedPiece.coreAttributeTypeOne}
                      </li>
                    )}
                    {singleNamedPiece.coreAttributeTypeTwo !== 'N/A' && (
                      <li>
                        {humanReadableNumber(
                          singleNamedPiece.maxCoreArmourLevel40.toString()
                        )}{' '}
                        {singleNamedPiece.coreAttributeTypeTwo}
                      </li>
                    )}
                    {singleNamedPiece.coreAttributeTypeThree !== 'N/A' && (
                      <li>
                        {singleNamedPiece.maxCoreSkillTierLevel40.toString()}{' '}
                        {singleNamedPiece.coreAttributeTypeThree}
                      </li>
                    )}
                  </ul>

                  <>
                    <h2 className="single-gear-item__subheading">
                      Offensive Attributes
                    </h2>
                    <ul>
                      <li>{singleNamedPiece.attributeOneType}</li>
                      <li>{singleNamedPiece.attributeTwoType}</li>
                    </ul>
                  </>

                  {singleNamedPiece.coreAttributeTypeOne && (
                    <>
                      <ul>
                        <li>
                          {displayPercentage(
                            singleNamedPiece.offensiveAttributeOneMaxValueLevel40.toString()
                          )}
                          % {singleNamedPiece.offensiveAttributeOneLevel40}
                        </li>
                        <li>
                          {displayPercentage(
                            singleNamedPiece.offensiveAttributeTwoMaxValueLevel40.toString()
                          )}
                          % {singleNamedPiece.offensiveAttributeTwoLevel40}
                        </li>
                        <li>
                          {displayPercentage(
                            singleNamedPiece.offensiveAttributeThreeMaxValueLevel40.toString()
                          )}
                          % {singleNamedPiece.offensiveAttributeThreeLevel40}
                        </li>
                        <li>
                          {displayPercentage(
                            singleNamedPiece.offensiveAttributeFourMaxValueLevel40.toString()
                          )}
                          % {singleNamedPiece.offensiveAttributeFourLevel40}
                        </li>
                      </ul>
                    </>
                  )}

                  {singleNamedPiece.coreAttributeTypeTwo && (
                    <>
                      <h2 className="single-gear-item__subheading">
                        Defensive Attributes
                      </h2>
                      <ul>
                        <li>
                          {humanReadableNumber(
                            singleNamedPiece.defensiveAttributeOneMaxValueLevel40.toString()
                          )}{' '}
                          per second{' '}
                          {singleNamedPiece.defensiveAttributeOneLevel40}
                        </li>
                        <li>
                          {displayPercentage(
                            singleNamedPiece.defensiveAttributeTwoMaxValueLevel40.toString()
                          )}
                          % {singleNamedPiece.defensiveAttributeTwoLevel40}
                        </li>
                        <li>
                          {displayPercentage(
                            singleNamedPiece.defensiveAttributeThreeMaxValueLevel40.toString()
                          )}
                          % {singleNamedPiece.defensiveAttributeThreeLevel40}
                        </li>
                        <li>
                          {humanReadableNumber(
                            singleNamedPiece.defensiveAttributeFourMaxValueLevel40.toString()
                          )}{' '}
                          {singleNamedPiece.defensiveAttributeFourLevel40}
                        </li>
                      </ul>
                    </>
                  )}

                  {singleNamedPiece.coreAttributeTypeTwo && (
                    <>
                      <h2 className="single-gear-item__subheading">
                        Skill Attributes
                      </h2>
                      <ul>
                        <li>
                          {displayPercentage(
                            singleNamedPiece.utilityAttributeOneMaxValueLevel40.toString()
                          )}
                          % {singleNamedPiece.utilityAttributeOneLevel40}
                        </li>
                        <li>
                          {displayPercentage(
                            singleNamedPiece.utilityAttributeTwoMaxValueLevel40.toString()
                          )}
                          % {singleNamedPiece.utilityAttributeTwoLevel40}
                        </li>
                        <li>
                          {displayPercentage(
                            singleNamedPiece.utilityAttributeThreeMaxValueLevel40.toString()
                          )}
                          % {singleNamedPiece.utilityAttributeThreeLevel40}
                        </li>
                        <li>
                          {displayPercentage(
                            singleNamedPiece.utilityAttributeFourMaxValueLevel40.toString()
                          )}
                          % {singleNamedPiece.utilityAttributeFourLevel40}
                        </li>
                      </ul>
                    </>
                  )}
                </div>

                {/* ------------- World Tier 5 below ----------- */}

                {singleNamedPiece.availableWT5 === 'Yes' && (
                  <div className="single-item-details">
                    <h2 className="single-gear-item__subheading">
                      World Tier 5 Stats
                    </h2>

                    <h2 className="single-gear-item__subheading">
                      Core Attributes
                    </h2>

                    <ul>
                      {singleNamedPiece.coreAttributeTypeOne !== 'N/A' && (
                        <li>
                          {displayPercentage(
                            singleNamedPiece.maxCoreValueDamageLevel30.toString()
                          )}
                          % {singleNamedPiece.coreAttributeTypeOne}
                        </li>
                      )}
                      {singleNamedPiece.coreAttributeTypeTwo !== 'N/A' && (
                        <li>
                          {humanReadableNumber(
                            singleNamedPiece.maxCoreArmourLevel30.toString()
                          )}{' '}
                          {singleNamedPiece.coreAttributeTypeTwo}
                        </li>
                      )}
                      {singleNamedPiece.coreAttributeTypeThree !== 'N/A' && (
                        <li>
                          {singleNamedPiece.maxCoreSkillTierLevel30.toString()}{' '}
                          {singleNamedPiece.coreAttributeTypeThree}
                        </li>
                      )}
                    </ul>

                    {singleNamedPiece.coreOne && (
                      <>
                        <h2 className="single-gear-item__subheading">
                          Attribute One
                        </h2>
                        <ul>
                          <li>
                            {singleNamedPiece.attributeOneType} -{' '}
                            {singleNamedPiece.attributeOneValueLevel30}%
                          </li>
                        </ul>
                      </>
                    )}

                    {singleNamedPiece.coreAttributeTypeOne && (
                      <>
                        <h2 className="single-gear-item__subheading">
                          Offensive Attributes
                        </h2>
                        <ul>
                          <li>{singleNamedPiece.attributeOneType}</li>
                          <li>{singleNamedPiece.attributeTwoType}</li>
                        </ul>
                      </>
                    )}

                    {singleNamedPiece.coreAttributeTypeOne && (
                      <>
                        <ul>
                          <li>
                            {displayPercentage(
                              singleNamedPiece.offensiveAttributeOneMaxValueLevel30.toString()
                            )}
                            % {singleNamedPiece.offensiveAttributeOneLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              singleNamedPiece.offensiveAttributeTwoMaxValueLevel30.toString()
                            )}
                            % {singleNamedPiece.offensiveAttributeTwoLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              singleNamedPiece.offensiveAttributeThreeMaxValueLevel30.toString()
                            )}
                            % {singleNamedPiece.offensiveAttributeThreeLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              singleNamedPiece.offensiveAttributeFourMaxValueLevel30.toString()
                            )}
                            % {singleNamedPiece.offensiveAttributeFourLevel40}
                          </li>
                        </ul>
                      </>
                    )}

                    {singleNamedPiece.coreAttributeTypeTwo && (
                      <>
                        <h2 className="single-gear-item__subheading">
                          Defensive Attributes
                        </h2>
                        <ul>
                          <li>
                            {humanReadableNumber(
                              singleNamedPiece.defensiveAttributeOneMaxValueLevel30.toString()
                            )}{' '}
                            per second{' '}
                            {singleNamedPiece.defensiveAttributeOneLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              singleNamedPiece.defensiveAttributeTwoMaxValueLevel30.toString()
                            )}
                            % {singleNamedPiece.defensiveAttributeTwoLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              singleNamedPiece.defensiveAttributeThreeMaxValueLevel30.toString()
                            )}
                            % {singleNamedPiece.defensiveAttributeThreeLevel40}
                          </li>
                          <li>
                            {humanReadableNumber(
                              singleNamedPiece.defensiveAttributeFourMaxValueLevel30.toString()
                            )}{' '}
                            {singleNamedPiece.defensiveAttributeFourLevel40}
                          </li>
                        </ul>
                      </>
                    )}

                    {singleNamedPiece.coreAttributeTypeTwo && (
                      <>
                        <h2 className="single-gear-item__subheading">
                          Skill Attributes
                        </h2>
                        <ul>
                          <li>
                            {displayPercentage(
                              singleNamedPiece.utilityAttributeOneMaxValueLevel30.toString()
                            )}
                            % {singleNamedPiece.utilityAttributeOneLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              singleNamedPiece.utilityAttributeTwoMaxValueLevel30.toString()
                            )}
                            % {singleNamedPiece.utilityAttributeTwoLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              singleNamedPiece.utilityAttributeThreeMaxValueLevel30.toString()
                            )}
                            % {singleNamedPiece.utilityAttributeThreeLevel40}
                          </li>
                          <li>
                            {displayPercentage(
                              singleNamedPiece.utilityAttributeFourMaxValueLevel30.toString()
                            )}
                            % {singleNamedPiece.utilityAttributeFourLevel40}
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
