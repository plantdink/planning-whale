import HeadSEO from './HeadSEO';
import SingleGearItemStyle from './styles/SingleGearItemStyles';
import { chestIcon, backpackIcon, weaponTalentIcon } from './ItemIcons';

export default function SingleTalent({ singleTalent }) {
  let armourPieceIcon = '';
  if (singleTalent.piece === 'Chest') armourPieceIcon = chestIcon;
  if (singleTalent.piece === 'Backpack') armourPieceIcon = backpackIcon;

  return (
    <>
      <HeadSEO seoTag={singleTalent.name} />
      <>
        <h1
          className={`single-gear-item__heading ${
            singleTalent.isNamed === 'YES' ? 'named-item' : null
          } ${singleTalent.isExotic === 'YES' ? 'exotic-item' : null}`}
        >
          {singleTalent.name}
        </h1>

        {armourPieceIcon !== '' && (
          <img
            className="single-gear-item__icon-image"
            src={armourPieceIcon}
            alt={singleTalent.piece}
          />
        )}

        <>
          <div className="title-icon-container">
            {singleTalent.__typename === 'WeaponTalent' && (
              <img
                className="multiple-gear-item__icon-image"
                src={weaponTalentIcon}
                alt="Weapon Talent icon"
              />
            )}
          </div>
        </>

        <div className="single-gear-item__content">
          <div className="single-item__details">
            <h2 className="single-gear-item__subheading">Characteristics</h2>
            {singleTalent.__typename === 'ArmourTalent' && (
              <>
                <p>{singleTalent.type}</p>
                <p>Available on: {singleTalent.piece}</p>
              </>
            )}
            <p>
              <span>PVE:</span> {singleTalent.descriptionPVE}
            </p>
            {singleTalent.descriptionPVP && (
              <>
                <p>
                  <span>PVP:</span> {singleTalent.descriptionPVP}
                </p>
              </>
            )}
          </div>

          <div className="item-image">
            <img
              className={`${
                singleTalent.isNamed === 'YES' ? 'named-item' : 'standard-item'
              } ${
                singleTalent.isExotic === 'YES'
                  ? 'exotic-item'
                  : 'standard-item'
              }`}
              src={singleTalent.image?.image.publicUrlTransformed}
              alt={singleTalent.image?.altText}
            />
          </div>
        </div>
      </>
    </>
  );
}
