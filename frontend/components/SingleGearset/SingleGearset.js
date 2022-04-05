import { gql } from '@apollo/client';
import HeadSEO from '../HeadSEO';
import { SingleGearItemStyle } from '../SingleArmourPiece';
import { stringToParagraphs } from '../../lib/displayStrings';

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
        id
        image {
          publicUrlTransformed
        }
        altText
      }
      notes
    }
  }
`;

export default function SingleGearset({ gearset }) {
  return (
    <>
      <HeadSEO seoTag={gearset.name} />
      <SingleGearItemStyle>
        <>
          <div className="single-gear-item__title-bar">
            <h1 className="single-gear-item__heading">{gearset.name}</h1>
          </div>
          <div className="single-gear-item__content">
            <div className="single-item__details">
              {stringToParagraphs(gearset.notes)}
              <div className="single-gear-item__title-bar">
                <h2 className="single-gear-item__subheading">
                  Core Attribute Type - {gearset.coreAttribute}
                </h2>
              </div>

              <p>{gearset.coreAttributeValueLevel40} (Level 40)</p>
              <p>{gearset.coreAttributeValueWT5} (World Tier 5) </p>
              <div className="single-gear-item__title-bar">
                <h2 className="single-gear-item__subheading">
                  Gear Set Bonuses
                </h2>
              </div>
              <p>Whilst wearing:</p>

              <p>
                <span className="single-gear-item__sub-subheading">
                  1 Piece -{' '}
                </span>
                {gearset.setBonusOne}
              </p>
              <p>
                <span className="single-gear-item__sub-subheading">
                  2 Piece -{' '}
                </span>
                {gearset.setBonusTwo}
              </p>
              <p>
                <span className="single-gear-item__sub-subheading">
                  3 Piece - {gearset.setBonusName}
                </span>
              </p>
              <p>{gearset.setBonusThree}</p>
              <div className="single-gear-item__title-bar">
                <h2 className="single-gear-item__subheading">
                  Gear Set Talents
                </h2>
              </div>

              <p>Whilst wearing:</p>
              <p>
                <span className="single-gear-item__sub-subheading">
                  Chest: {gearset.setChestTalentName} -{' '}
                </span>
                {gearset.setChestTalent}
              </p>
              <p>
                <span className="single-gear-item__sub-subheading">
                  Backpack: {gearset.setBackpackTalentName} -{' '}
                </span>
                {gearset.setBackpackTalent}
              </p>
            </div>
            <div className="item-image">
              <img
                className="standard-item"
                src={gearset.image?.image.publicUrlTransformed}
                alt={gearset.image?.altText}
              />
            </div>
          </div>
        </>
      </SingleGearItemStyle>
    </>
  );
}
