import { integer, text, select, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";

export const ExoticArmourPiece = list({
  access: {
    create: permissions.canEditItems,
    read: () => true,
    update: permissions.canEditItems,
    delete: permissions.canEditItems,
  },
  ui: {
    hideCreate: (args) => !permissions.canEditItems(args),
    hideDelete: (args) => !permissions.canEditItems(args),
    isHidden: (args) => !permissions.canEditItems(args),
    labelField: "name",
    listView: {
      initialColumns: ["name", "piece", "level"],
      initialSort: {
        field: "name",
        direction: "ASC",
      },
      pageSize: 24,
    },
  },
  fields: {
    name: text({ label: "Name of item", isRequired: true }),
    piece: select({
      label: "Armour Type",
      options: [
        { label: "Mask", value: "Mask" },
        { label: "Chest", value: "Chest" },
        { label: "Holster", value: "Holster" },
        { label: "Backpack", value: "Backpack" },
        { label: "Gloves", value: "Gloves" },
        { label: "Kneepads", value: "Kneepads" },
      ],
      isRequired: true,
    }),
    level: select({
      label: "Item Level",
      options: [
        { label: "Level 40", value: "Level 40" },
        { label: "World Tier 5", value: "World Tier 5" },
      ],
    }),
    coreOne: select({
      label: "Core One Attribute",
      options: [
        { label: "Weapon Damage", value: "Weapon Damage" },
        { label: "Armour", value: "Armour" },
        { label: "+1 Skill Tier", value: "Skill Tier" },
      ],
      isRequired: true,
    }),
    maxCoreOneValueLevel40: select({
      label: "Core One Attribute Amount (Lvl 40)",
      options: [
        { label: "15%", value: "15%" },
        { label: "170,000", value: "170,000" },
        { label: "+1 Skill Tier (World Tier 5 & Lvl 40)", value: "1" },
      ],
    }),
    maxCoreOneValueLevel30: select({
      label: "Core One Attribute Amount (World Tier 5)",
      options: [
        { label: "9.9%", value: "9.9%" },
        { label: "42,458", value: "42,458" },
        { label: "+1 Skill Tier (World Tier 5 & Lvl 40)", value: "1" },
      ],
    }),
    coreTwo: select({
      label: "Core Two Attribute",
      options: [
        { label: "Weapon Damage", value: "Weapon Damage" },
        { label: "Armour", value: "Armour" },
        { label: "+1 Skill Tier", value: "Skill Tier" },
      ],
    }),
    maxCoreTwoValueLevel40: select({
      label: "Core Two Attribute Amount (Lvl 40)",
      options: [
        { label: "15%", value: "15%" },
        { label: "170,000", value: "170,000" },
        { label: "+1 Skill Tier (World Tier 5 & Lvl 40)", value: "1" },
      ],
    }),
    maxCoreTwoValueLevel30: select({
      label: "Core Two Attribute Amount (World Tier 5)",
      options: [
        { label: "9.9%", value: "9.9%" },
        { label: "42,458", value: "42,458" },
        { label: "+1 Skill Tier (World Tier 5 & Lvl 40)", value: "1" },
      ],
    }),
    coreThree: select({
      label: "Core Three Attribute",
      options: [
        { label: "Weapon Damage", value: "Weapon Damage" },
        { label: "Armour", value: "Armour" },
        { label: "+1 Skill Tier", value: "Skill Tier" },
      ],
    }),
    maxCoreThreeValueLevel40: select({
      label: "Core Attribute Three Amount (Lvl 40)",
      options: [
        { label: "Weapon Damage (Lvl 40)", value: "15%" },
        { label: "Armour (Lvl 40)", value: "170,000" },
        { label: "+1 Skill Tier (World Tier 5 & Lvl 40)", value: "1" },
      ],
    }),
    maxCoreThreeValueLevel30: select({
      label: "Core Three Attribute Amount (World Tier 5)",
      options: [
        { label: "Weapon Damage (World Tier 5)", value: "9.9%" },
        { label: "Armour (World Tier 5)", value: "42,458" },
        { label: "+1 Skill Tier (World Tier 5 & Lvl 40)", value: "1" },
      ],
    }),
    attributeOneType: select({
      label: "Attribute One Type",
      options: [
        {
          label: "Critical Hit Chance",
          value: "Critical Hit Chance",
        },
        {
          label: "Critical Hit Damage",
          value: "Critical Hit Damage",
        },
        { label: "Headshot Damage", value: "Headshot Damage" },
        { label: "Weapon Handling", value: "Weapon Handling" },
        {
          label: "Armour Regeneration",
          value: "Armour Regeneration",
        },
        {
          label: "Explosive Resistance",
          value: "Explosive Resistance",
        },
        {
          label: "Hazard Protection",
          value: "Hazard Protection",
        },
        { label: "Health", value: "Health" },
        { label: "Skill Damage", value: "Skill Damage" },
        { label: "Skill Haste", value: "Skill Haste" },
        { label: "Skill Repair", value: "Skill Repair" },
        { label: "Status Effect", value: "Status Effect" },
      ],
    }),
    attributeOneValueLevel40: select({
      label: "Attribute One Value (Lvl 40)",
      options: [
        { label: "6%", value: "6%" },
        { label: "10%", value: "10%" },
        { label: "12%", value: "12%" },
        { label: "20%", value: "20%" },
        { label: "4925", value: "4925" },
        { label: "18,935", value: "18,935" },
      ],
    }),
    attributeOneValueLevel30: select({
      label: "Attribute One Value (World Tier 5)",
      options: [
        { label: "5.1%", value: "5.1%" },
        { label: "6.6%", value: "6.6%" },
        { label: "6.9%", value: "6.9%" },
        { label: "7%", value: "7%" },
        { label: "7.9%", value: "7.9%" },
        { label: "12.1%", value: "12.1%" },
        { label: "1,223", value: "1,223" },
        { label: "4,695", value: "4,695" },
      ],
    }),
    attributeTwoType: select({
      label: "Attribute Two Type",
      options: [
        {
          label: "Critical Hit Chance",
          value: "Critical Hit Chance",
        },
        {
          label: "Critical Hit Damage",
          value: "Critical Hit Damage",
        },
        { label: "Headshot Damage", value: "Headshot Damage" },
        { label: "Weapon Handling", value: "Weapon Handling" },
        {
          label: "Armour Regeneration",
          value: "Armour Regeneration",
        },
        {
          label: "Explosive Resistance",
          value: "Explosive Resistance",
        },
        {
          label: "Hazard Protection",
          value: "Hazard Protection",
        },
        { label: "Health", value: "Health" },
        { label: "Skill Damage", value: "Skill Damage" },
        { label: "Skill Haste", value: "Skill Haste" },
        { label: "Skill Repair", value: "Skill Repair" },
        { label: "Status Effect", value: "Status Effect" },
      ],
    }),
    attributeTwoValueLevel40: select({
      label: "Attribute Two Value (Lvl 40)",
      options: [
        { label: "6%", value: "6%" },
        { label: "10%", value: "10%" },
        { label: "12%", value: "12%" },
        { label: "20%", value: "20%" },
        { label: "4925", value: "4925" },
        { label: "18,935", value: "18,935" },
      ],
    }),
    attributeTwoValueLevel30: select({
      label: "Attribute Two Value (World Tier 5)",
      options: [
        { label: "5.1%", value: "5.1%" },
        { label: "6.6%", value: "6.6%" },
        { label: "6.9%", value: "6.9%" },
        { label: "7%", value: "7%" },
        { label: "7.9%", value: "7.9%" },
        { label: "12.1%", value: "12.1%" },
        { label: "1,223", value: "1,223" },
        { label: "4,695", value: "4,695" },
      ],
    }),
    modSlots: integer({ label: " No of Mod Slots", defaultValue: 0 }),
    exoticArmourTalent: relationship({
      label: "Exotic Talent",
      ref: "ArmourTalent.exoticArmourPiece",
      many: true,
      ui: {
        hideCreate: true,
      },
    }),
    availableWT5: select({
      label: "Is this available in World Tier 5?",
      options: [
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ],
      defaultValue: "Yes",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    notes: text({
      label: "Notes",
      ui: {
        displayMode: "textarea",
      },
    }),
  },
});
