import { integer, text, select } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const ArmourType = list({
  access: {
    // TODO: add access
  },
  ui: {
    labelField: "piece",
    listView: {
      initialColumns: ["piece"],
      initialSort: {
        field: "piece",
        direction: "ASC",
      },
      pageSize: 24,
    },
  },
  fields: {
    piece: select({
      label: "Armour Type",
      options: [
        { label: "Mask", value: "MASK" },
        { label: "Chest", value: "CHEST" },
        { label: "Holster", value: "HOLSTER" },
        { label: "Backpack", value: "BACKPACK" },
        { label: "Gloves", value: "GLOVES" },
        { label: "Kneepads", value: "KNEEPADS" },
      ],
      isRequired: true,
    }),
    coreAttributeTypeOne: text({
      label: "Core Attribute Type",
      defaultValue: "Weapon Damage",
    }),
    coreAttributeTypeTwo: text({
      label: "Core Attribute Type",
      defaultValue: "Armour",
    }),
    coreAttributeTypeThree: text({
      label: "Core Attribute Type",
      defaultValue: "Skill Tier",
    }),
    maxCoreValueDamageLevel40: integer({
      label: "Weapon Damage (Lvl 40)",
      defaultValue: 150,
    }),
    maxCoreArmourLevel40: integer({
      label: "Armour (Lvl 40)",
      defaultValue: 170000,
    }),
    maxCoreSkillTierLevel40: integer({
      label: "Skill Tier (Level 40)",
      defaultValue: 1,
    }),
    offensiveAttributeOneLevel40: text({
      label: "Offensive Attribute Type",
      defaultValue: "Critical Hit Chance",
    }),
    offensiveAttributeOneMaxValueLevel40: integer({
      label: "Max Amount",
      defaultValue: 60,
    }),
    offensiveAttributeTwoLevel40: text({
      label: "Offensive Attribute Type",
      defaultValue: "Critical Hit Damage",
    }),
    offensiveAttributeTwoMaxValueLevel40: integer({
      label: "Max Amount",
      defaultValue: 120,
    }),
    offensiveAttributeThreeLevel40: text({
      label: "Offensive Attribute Type",
      defaultValue: "Headshot Damage",
    }),
    offensiveAttributeThreeMaxValueLevel40: integer({
      label: "Max Amount",
      defaultValue: 100,
    }),
    offensiveAttributeFourLevel40: text({
      label: "Offensive Attribute Type",
      defaultValue: "Weapon Handling",
    }),
    offensiveAttributeFourMaxValueLevel40: integer({
      label: "Max Amount",
      defaultValue: 80,
    }),
    defensiveAttributeOneLevel40: text({
      label: "Defensive Attribute Type",
      defaultValue: "Armour Regeneration",
    }),
    defensiveAttributeOneMaxValueLevel40: integer({
      label: "Max Amount",
      defaultValue: 4925,
    }),
    defensiveAttributeTwoLevel40: text({
      label: "Defensive Attribute Type",
      defaultValue: "Explosive Resistance",
    }),
    defensiveAttributeTwoMaxValueLevel40: integer({
      label: "Max Amount",
      defaultValue: 100,
    }),
    defensiveAttributeThreeLevel40: text({
      label: "Defensive Attribute Type",
      defaultValue: "Hazard Protection",
    }),
    defensiveAttributeThreeMaxValueLevel40: integer({
      label: "Max Amount",
      defaultValue: 100,
    }),
    defensiveAttributeFourLevel40: text({
      label: "Defensive Attribute Type",
      defaultValue: "Health",
    }),
    defensiveAttributeFourMaxValueLevel40: integer({
      label: "Max Amount",
      defaultValue: 18935,
    }),
    utilityAttributeOneLevel40: text({
      label: "Utility Attribute Type",
      defaultValue: "Skill Damage",
    }),
    utilityAttributeOneMaxValueLevel40: integer({
      label: "Max Amount",
      defaultValue: 100,
    }),
    utilityAttributeTwoLevel40: text({
      label: "Utility Attribute Type",
      defaultValue: "Skill Haste",
    }),
    utilityAttributeTwoMaxValueLevel40: integer({
      label: "Max Amount",
      defaultValue: 120,
    }),
    utilityAttributeThreeLevel40: text({
      label: "Utility Attribute Type",
      defaultValue: "Skill Repair",
    }),
    utilityAttributeThreeMaxValueLevel40: integer({
      label: "Max Amount",
      defaultValue: 200,
    }),
    utilityAttributeFourLevel40: text({
      label: "Utility Attribute Type",
      defaultValue: "Status Effects",
    }),
    utilityAttributeFourMaxValueLevel40: integer({
      label: "Max Amount",
      defaultValue: 100,
    }),
    // level 30 from here down
    maxCoreValueDamageLevel30: integer({
      label: "Weapon Damage (Lvl 30)",
      defaultValue: 99,
    }),
    maxCoreArmourLevel30: integer({
      label: "Armour (Lvl 30)",
      defaultValue: 42458,
    }),
    maxCoreSkillTierLevel30: integer({
      label: "Skill Tier (Level 30)",
      defaultValue: 1,
    }),
    offensiveAttributeOneLevel30: text({
      label: "Offensive Attribute Type",
      defaultValue: "Critical Hit Chance",
    }),
    offensiveAttributeOneMaxValueLevel30: integer({
      label: "Max Amount",
      defaultValue: 51,
    }),
    offensiveAttributeTwoLevel30: text({
      label: "Offensive Attribute Type",
      defaultValue: "Critical Hit Damage",
    }),
    offensiveAttributeTwoMaxValueLevel30: integer({
      label: "Max Amount",
      defaultValue: 79,
    }),
    offensiveAttributeThreeLevel30: text({
      label: "Offensive Attribute Type",
      defaultValue: "Headshot Damage",
    }),
    offensiveAttributeThreeMaxValueLevel30: integer({
      label: "Max Amount",
      defaultValue: 69,
    }),
    offensiveAttributeFourLevel30: text({
      label: "Offensive Attribute Type",
      defaultValue: "Weapon Handling",
    }),
    offensiveAttributeFourMaxValueLevel30: integer({
      label: "Max Amount",
      defaultValue: 70,
    }),
    defensiveAttributeOneLevel30: text({
      label: "Defensive Attribute Type",
      defaultValue: "Armour Regeneration",
    }),
    defensiveAttributeOneMaxValueLevel30: integer({
      label: "Max Amount",
      defaultValue: 1223,
    }),
    defensiveAttributeTwoLevel30: text({
      label: "Defensive Attribute Type",
      defaultValue: "Explosive Resistance",
    }),
    defensiveAttributeTwoMaxValueLevel30: integer({
      label: "Max Amount",
      defaultValue: 66,
    }),
    defensiveAttributeThreeLevel30: text({
      label: "Defensive Attribute Type",
      defaultValue: "Hazard Protection",
    }),
    defensiveAttributeThreeMaxValueLevel30: integer({
      label: "Max Amount",
      defaultValue: 66,
    }),
    defensiveAttributeFourLevel30: text({
      label: "Defensive Attribute Type",
      defaultValue: "Health",
    }),
    defensiveAttributeFourMaxValueLevel30: integer({
      label: "Max Amount",
      defaultValue: 4695,
    }),
    utilityAttributeOneLevel30: text({
      label: "Utility Attribute Type",
      defaultValue: "Skill Damage",
    }),
    utilityAttributeOneMaxValueLevel30: integer({
      label: "Max Amount",
      defaultValue: 69,
    }),
    utilityAttributeTwoLevel30: text({
      label: "Utility Attribute Type",
      defaultValue: "Skill Haste",
    }),
    utilityAttributeTwoMaxValueLevel30: integer({
      label: "Max Amount",
      defaultValue: 79,
    }),
    utilityAttributeThreeLevel30: text({
      label: "Utility Attribute Type",
      defaultValue: "Skill Repair",
    }),
    utilityAttributeThreeMaxValueLevel30: integer({
      label: "Max Amount",
      defaultValue: 121,
    }),
    utilityAttributeFourLevel30: text({
      label: "Utility Attribute Type",
      defaultValue: "Status Effects",
    }),
    utilityAttributeFourMaxValueLevel30: integer({
      label: "Max Amount",
      defaultValue: 66,
    }),
  },
});
