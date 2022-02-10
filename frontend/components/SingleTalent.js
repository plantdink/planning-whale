import { gql, useQuery } from '@apollo/client';
import DisplayError from './ErrorMessage';
import HeadSEO from './HeadSEO';
import SingleGearItemStyle from './styles/SingleGearItemStyles';

const SINGLE_TALENT_QUERY = gql`
  query SINGLE_TALENT_QUERY($id: ID!) {
    allArmourTalents(where: { id: $id }) {
      id
      name
      piece
      type
      descriptionPVE
      descriptionPVP
      isNamed
      namedItem
      isExotic
      exoticItem
      image {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
    allWeaponTalents(where: { id: $id }) {
      id
      name
      type
      descriptionPVE
      descriptionPVP
      classARTalent
      classLMGTalent
      classMMRTalent
      classPistolTalent
      classRifleTalent
      classShotgunTalent
      classSMGTalent
      isNamed
      isExotic
      image {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

export default function SingleTalent({ id }) {
  const { data, loading, error } = useQuery(SINGLE_TALENT_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { ...singleTalent } =
    data.allArmourTalents[0] || data.allWeaponTalents[0];

  let armourPieceIcon = '';
  if (singleTalent.piece === 'Chest')
    armourPieceIcon =
      'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644114295/agent-field-manual/61ff31765b249912fe4458b6.png';
  if (singleTalent.piece === 'Backpack')
    armourPieceIcon =
      'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644114249/agent-field-manual/61ff31485b249912fe445848.png';

  const arIcon =
    'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287791/agent-field-manual/6201d72ed9301f0836548606.png';
  const lmgIcon =
    'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287811/agent-field-manual/6201d741d9301f08365486bf.png';
  const mmrIcon =
    'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287834/agent-field-manual/6201d759d9301f0836548778.png';
  const pistolIcon =
    'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287851/agent-field-manual/6201d76ad9301f0836548831.png';
  const rifleIcon =
    'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287869/agent-field-manual/6201d77cd9301f08365488ea.png';
  const shotgunIcon =
    'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287887/agent-field-manual/6201d78ed9301f08365489a3.png';
  const smgIcon =
    'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644287904/agent-field-manual/6201d79fd9301f0836548a5c.png';

  const classArray = [];
  const iconArray = [];

  if (singleTalent.classARTalent === true) {
    classArray.push('Assault Rifles');
    iconArray.push(arIcon);
  }
  if (singleTalent.classLMGTalent === true) {
    classArray.push('Light Machine Guns');
    iconArray.push(lmgIcon);
  }
  if (singleTalent.classMMRTalent === true) {
    classArray.push('Marksman Rifles');
    iconArray.push(mmrIcon);
  }
  if (singleTalent.classPistolTalent === true) {
    classArray.push('Pistols');
    iconArray.push(pistolIcon);
  }
  if (singleTalent.classRifleTalent === true) {
    classArray.push('Rifles');
    iconArray.push(rifleIcon);
  }
  if (singleTalent.classShotgunTalent === true) {
    classArray.push('Shotguns');
    iconArray.push(shotgunIcon);
  }
  if (singleTalent.classSMGTalent === true) {
    classArray.push('Submachine Guns');
    iconArray.push(smgIcon);
  }
  console.log(iconArray);

  return (
    <>
      <HeadSEO seoTag={singleTalent.name} />
      <SingleGearItemStyle>
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
              {iconArray !== [] &&
                iconArray.map((iconItem) => (
                  <img
                    className="multiple-gear-item__icon-image"
                    src={iconItem}
                  />
                ))}
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
              {singleTalent.__typename === 'WeaponTalent' && (
                <>
                  <p>{singleTalent.type}</p>
                  <p>Available on:</p>
                  <ul>
                    {classArray.map((classItem) => (
                      <li>{classItem}</li>
                    ))}
                  </ul>
                </>
              )}
              <h2 className="single-gear-item__subheading">
                Description (PVE)
              </h2>
              <p>{singleTalent.descriptionPVE}</p>
              {singleTalent.descriptionPVP && (
                <>
                  <h3>(PVP)</h3>
                  <p>{singleTalent.descriptionPVP}</p>
                </>
              )}
            </div>
            <div className="item-image">
              <img
                className={`${
                  singleTalent.isNamed === 'YES'
                    ? 'named-item'
                    : 'standard-item'
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
      </SingleGearItemStyle>
    </>
  );
}
