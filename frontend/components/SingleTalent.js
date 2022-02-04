import { gql, useQuery } from '@apollo/client';
import DisplayError from './ErrorMessage';
import HeadSEO from './HeadSEO';
import SingleGearItemStyles from './styles/SingleGearItemStyles';

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

  const classArray = [];
  if (singleTalent.classARTalent === true) {
    classArray.push('Assault Rifles');
  }
  if (singleTalent.classLMGTalent === true) {
    classArray.push('Light Machine Guns');
  }
  if (singleTalent.classMMRTalent === true) {
    classArray.push('Marksman Rifles');
  }
  if (singleTalent.classPistolTalent === true) {
    classArray.push('Pistols');
  }
  if (singleTalent.classRifleTalent === true) {
    classArray.push('Rifles');
  }
  if (singleTalent.classShotgunTalent === true) {
    classArray.push('Shotguns');
  }
  if (singleTalent.classSMGTalent === true) {
    classArray.push('Submachine Guns');
  }

  return (
    <>
      <HeadSEO seoTag={singleTalent.name} />
      <SingleGearItemStyles>
        <h1
          className={`single-gear-item__heading ${
            singleTalent.isNamed === 'YES' ? 'named-item' : null
          } ${singleTalent.isExotic === 'YES' ? 'exotic-item' : null}`}
        >
          {singleTalent.name}
        </h1>
        {singleTalent.__typename === 'ArmourTalent' && (
          <p>
            {singleTalent.type} {singleTalent.piece}
          </p>
        )}
        <h3>Description (PVE)</h3>
        <p>{singleTalent.descriptionPVE}</p>
        {singleTalent.descriptionPVP && (
          <>
            <h3>(PVP)</h3>
            <p>{singleTalent.descriptionPVP}</p>
          </>
        )}
      </SingleGearItemStyles>
    </>
  );
}
