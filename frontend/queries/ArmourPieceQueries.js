import { gql } from '@apollo/client';

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

//  ------------- Exotic Armour Queries -----------------
export const ALL_EXOTIC_ARMOUR_PIECES_QUERY = gql`
  query ALL_EXOTIC_ARMOUR_PIECES_QUERY($skip: Int = 0, $first: Int) {
    allExoticArmourPieces(skip: $skip, first: $first) {
      id
      name
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

// ------------ Named Armour queries below ----------------

export const ALL_NAMED_ARMOUR_PIECES_QUERY = gql`
  query ALL_NAMED_ARMOUR_PIECES_QUERY($skip: Int, $first: Int) {
    allArmourTypes(where: { isNamed: "YES" }, first: $first, skip: $skip) {
      id
      name
      image {
        image {
          publicUrlTransformed
        }
      }
      armourTalent {
        name
      }
    }
  }
`;

export const SINGLE_NAMED_ARMOUR_PIECE_QUERY = gql`
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

//  ----------- Armour Types = a specific armour piece ---------------
export const ALL_ARMOUR_TYPES_QUERY = gql`
  query ALL_ARMOUR_TYPES_QUERY($skip: Int = 0, $first: Int) {
    allArmourTypes(first: $first, skip: $skip) {
      id
      name
      image {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

//  -------------- Gearset Queries ----------------

export const ALL_GEARSETS_QUERY = gql`
  query ALL_GEARSETS_QUERY($skip: Int = 0, $first: Int) {
    allGearsets(first: $first, skip: $skip) {
      id
      name
      image {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

export const SINGLE_GEARSET_QUERY = gql`
  query SINGLE_GEARSET_QUERY($id: ID!) {
    allGearsets(where: { id: $id }) {
      name
      coreAttribute
      coreAttributeValueLevel40
      coreAttributeValueWT5
      setBonusOne
      setBonusTwo
      setBonusThree
      setBackpackTalent
      setChestTalent
      image {
        image {
          publicUrlTransformed
        }
        altText
      }
      notes
    }
  }
`;
