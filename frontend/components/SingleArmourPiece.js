import { displayPercentage, humanReadableNumber } from '../lib/displayNumbers';
import HeadSEO from './HeadSEO';

export default function SingleArmourPiece({ armourPiece }) {
  return (
    <>
      <HeadSEO seoTag={armourPiece.name} />
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
