import HeadSEO from '../HeadSEO';
import { chestIcon, backpackIcon, weaponTalentIcon } from '../ItemIcons';

export default function SingleTalent({ singleTalent }) {
  let armourPieceIcon = '';
  if (singleTalent.piece === 'Chest') armourPieceIcon = chestIcon;
  if (singleTalent.piece === 'Backpack') armourPieceIcon = backpackIcon;

  return (
    <>
      <HeadSEO seoTag={singleTalent.name} />
      <>
        <div className="single-gear-item__title-bar">
          <h1 className="single-gear-item__heading">{singleTalent.name}</h1>
        </div>

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
            <div className="single-gear-item__title-bar">
              <h2 className="single-gear-item__subheading">Characteristics</h2>
            </div>
            {singleTalent.__typename === 'ArmourTalent' && (
              <>
                <p>{singleTalent.type}</p>
              </>
            )}
            <p>
              <span className="single-gear-item__sub-subheading">PVE:</span>{' '}
              {singleTalent.descriptionPVE}
            </p>
            {singleTalent.descriptionPVP && (
              <>
                <p>
                  <span className="single-gear-item__sub-subheading">PVP:</span>{' '}
                  {singleTalent.descriptionPVP}
                </p>
              </>
            )}
          </div>

          <div className="item-image">
            <img
              className="standard-item"
              src={singleTalent.image?.image.publicUrlTransformed}
              alt={singleTalent.image?.altText}
            />
          </div>
        </div>
      </>
    </>
  );
}
