import { integer, text, select } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const ExoticArmour = list({
  access: {
    // TODO: add access
  },
  ui: {
    labelField: "name",
    listView: {
      initialColumns: ["name", "piece"],
      initialSort: {
        field: "name",
        direction: "ASC",
      },
      pageSize: 24,
    },
  },
  fields: {
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
    coreAttributeOne: select({
      label: "Core Attribute",
      options: [
        { label: "Weapon Damage", value: "Weapon Damage" },
        { label: "Armour", value: "Armour" },
        { label: "+1 Skill Tier", value: "+1 Skill Tier" },
      ],
      isRequired: true,
    }),
    maxCoreOneValue: select({
      label: "Core Attribute Amount",
      options: [
        { label: "Weapon Damage (Lvl 40)", value: "Weapon Damage - 15%" },
        { label: "Weapon Damage (Lvl 30)", value: "Weapon Damage - 9.9%" },
        { label: "Armour (Lvl 40)", value: "Armour - 170,000" },
        { label: "Armour (Lvl 30)", value: "Armour - 42,458" },
        { label: "+1 Skill Tier (Lvl 30 & 40)", value: "+1 Skill Tier" },
      ],
      isRequired: true,
    }),
    coreAttributeTwo: select({
      label: "Core Attribute",
      options: [
        { label: "Weapon Damage", value: "Weapon Damage" },
        { label: "Armour", value: "Armour" },
        { label: "+1 Skill Tier", value: "+1 Skill Tier" },
      ],
    }),
    maxCoreTwoValue: select({
      label: "Core Attribute Amount",
      options: [
        { label: "Weapon Damage (Lvl 40)", value: "Weapon Damage - 15%" },
        { label: "Weapon Damage (Lvl 30)", value: "Weapon Damage - 9.9%" },
        { label: "Armour (Lvl 40)", value: "Armour - 17,0000" },
        { label: "Armour (Lvl 30)", value: "Armour - 42,458" },
        { label: "+1 Skill Tier (Lvl 30 & 40)", value: "+1 Skill Tier" },
      ],
    }),
    coreAttributeThree: select({
      label: "Core Attribute",
      options: [
        { label: "Weapon Damage", value: "Weapon Damage" },
        { label: "Armour", value: "Armour" },
        { label: "+1 Skill Tier", value: "+1 Skill Tier" },
      ],
    }),
    maxCoreThreeValue: select({
      label: "Core Attribute Amount",
      options: [
        { label: "Weapon Damage (Lvl 40)", value: "Weapon Damage - 15%" },
        { label: "Weapon Damage (Lvl 30)", value: "Weapon Damage - 9.9%" },
        { label: "Armour (Lvl 40)", value: "Armour - 170,000" },
        { label: "Armour (Lvl 30)", value: "Armour - 42,458" },
        { label: "+1 Skill Tier (Lvl 30 & 40)", value: "+1 Skill Tier" },
      ],
    }),
    attributeOneLevel40: select({
      label: "Attribute 1 (Lvl 40)",
      options: [
        {
          label: "Critical Hit Chance (Lvl 40)",
          value: "Critical Hit Chance - 6%",
        },
        {
          label: "Critical Hit Damage (Lvl 40)",
          value: "Critical Hit Damage - 12%",
        },
        { label: "Headshot Damage (Lvl 40)", value: "Headshot Damage - 10%" },
        { label: "Weapon Handling (Lvl 40)", value: "Weapon Handling - 10%" },
        {
          label: "Armour Regeneration (Lvl 40)",
          value: "Armour Regeneration - 4925",
        },
        {
          label: "Explosive Resistance (Lvl 40)",
          value: "Explosive Resistance - 10%",
        },
        {
          label: "Hazard Protection (Lvl 40)",
          value: "Hazard Protection - 10%",
        },
        { label: "Health (Lvl 40)", value: "Health - 18,935" },
        { label: "Skill Damage (Lvl 40)", value: "Skill Damage - 10%" },
        { label: "Skill Haste (Lvl 40)", value: "Skill Haste - 12%" },
        { label: "Skill Repair (Lvl 40)", value: "Skill Repair - 20%" },
        { label: "Status Effect (Lvl 40)", value: "Status Effect - 10%" },
      ],
    }),
    attributeTwoLevel40: select({
      label: "Attribute 2 (Lvl40)",
      options: [
        {
          label: "Critical Hit Chance (Lvl 40)",
          value: "Critical Hit Chance - 6%",
        },
        {
          label: "Critical Hit Damage (Lvl 40)",
          value: "Critical Hit Damage - 12%",
        },
        { label: "Headshot Damage (Lvl 40)", value: "Headshot Damage - 10%" },
        { label: "Weapon Handling (Lvl 40)", value: "Weapon Handling - 10%" },
        {
          label: "Armour Regeneration (Lvl 40)",
          value: "Armour Regeneration - 4925",
        },
        {
          label: "Explosive Resistance (Lvl 40)",
          value: "Explosive Resistance - 10%",
        },
        {
          label: "Hazard Protection (Lvl 40)",
          value: "Hazard Protection - 10%",
        },
        { label: "Health (Lvl 40)", value: "Health - 18,935" },
        { label: "Skill Damage (Lvl 40)", value: "Skill Damage - 10%" },
        { label: "Skill Haste (Lvl 40)", value: "Skill Haste - 12%" },
        { label: "Skill Repair (Lvl 40)", value: "Skill Repair - 20%" },
        { label: "Status Effect (Lvl 40)", value: "Status Effect - 10%" },
      ],
    }),
    attributeOneLevel30: select({
      label: "Attribute 1 (Lvl 30)",
      options: [
        {
          label: "Critical Hit Chance (Lvl 30)",
          value: "Critical Hit Chance - 5.1%",
        },
        {
          label: "Critical Hit Damage (Lvl 30)",
          value: "Critical Hit Damage - 7.9%",
        },
        { label: "Headshot Damage (Lvl 30)", value: "Headshot Damage - 6.9%" },
        { label: "Weapon Handling (Lvl 30)", value: "Weapon Handling - 7%" },
        {
          label: "Armour Regeneration (Lvl 30)",
          value: "Armour Regeneration - 1,223",
        },
        {
          label: "Explosive Resistance (Lvl 30)",
          value: "Explosive Resistance - 6.6%",
        },
        {
          label: "Hazard Protection (Lvl 30)",
          value: "Hazard Protection - 6.6%",
        },
        { label: "Health (Lvl 30)", value: "Health - 4,695" },
        { label: "Skill Damage (Lvl 30)", value: "Skill Damage - 6.9%" },
        { label: "Skill Haste (Lvl 30)", value: "Skill Haste - 7.9%" },
        { label: "Skill Repair (Lvl 30)", value: "Skill Repair - 12.1%" },
        { label: "Status Effect (Lvl 30)", value: "Status Effect - 6.6%" },
      ],
    }),
    attributeTwoLevel30: select({
      label: "Attribute 2 (Lvl 30)",
      options: [
        {
          label: "Critical Hit Chance (Lvl 30)",
          value: "Critical Hit Chance - 5.1%",
        },
        {
          label: "Critical Hit Damage (Lvl 30)",
          value: "Critical Hit Damage - 7.9%",
        },
        { label: "Headshot Damage (Lvl 30)", value: "Headshot Damage - 6.9%" },
        { label: "Weapon Handling (Lvl 30)", value: "Weapon Handling - 7%" },
        {
          label: "Armour Regeneration (Lvl 30)",
          value: "Armour Regeneration - 1,223",
        },
        {
          label: "Explosive Resistance (Lvl 30)",
          value: "Explosive Resistance - 6.6%",
        },
        {
          label: "Hazard Protection (Lvl 30)",
          value: "Hazard Protection - 6.6%",
        },
        { label: "Health (Lvl 30)", value: "Health - 4,695" },
        { label: "Skill Damage (Lvl 30)", value: "Skill Damage - 6.9%" },
        { label: "Skill Haste (Lvl 30)", value: "Skill Haste - 7.9%" },
        { label: "Skill Repair (Lvl 30)", value: "Skill Repair - 12.1%" },
        { label: "Status Effect (Lvl 30)", value: "Status Effect - 6.6%" },
      ],
    }),
    modSlots: integer({ label: " No of Mod Slots", defaultValue: 0 }),
  },
});
