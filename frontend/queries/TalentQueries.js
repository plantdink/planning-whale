import { gql } from '@apollo/client';

export const SINGLE_TALENT_QUERY = gql`
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
      namedArmourPiece {
        id
        name
      }
      exoticArmourPiece {
        id
        name
      }
      brand {
        id
        name
      }
      isExotic
      exoticItem
      image {
        id
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
        id
        image {
          publicUrlTransformed
        }
        altText
      }
      weaponName {
        id
        class
        model
      }
    }
  }
`;
