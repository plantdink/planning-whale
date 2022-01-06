import { integer, text, select } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Pistol = list({
  access: {
    // TODO: add access
  },
  fields: {
    class: select({
      label: "Weapon Class",
      options: [
        { label: "Assault Rifle", value: "ASSAULT RIFLE" },
        { label: "Light Machine Gun", value: "LIGHT MACHINE GUN" },
        { label: "Marksman Rifle", value: "MARKSMAN RIFLE" },
        { label: "Pistol", value: "PISTOL" },
        { label: "Rifle", value: "RIFLE" },
        { label: "Shotgun", value: "SHOTGUN" },
        { label: "Sub Machine Gun", value: "SUB MACHINE GUN" },
      ],
      defaultValue: "PISTOL",
      isRequired: true,
    }),
    family: text({ label: "Weapon Family", isRequired: true }),
    model: text({ label: "Model", isRequired: true }),
    modSlots: integer({ label: "No of Mod Slots", isRequired: true }),
    magazineSize: integer({ label: "Magazine Size", isRequired: true }),
    rpm: integer({ label: "Rounds Per Minute (RPM)", isRequired: true }),
    accuracy: integer({ label: "Accuracy (0 if unknown)", isRequired: true }),
    stability: integer({ label: "Stability(0 if unknown)", isRequired: true }),
    optimalRange: integer({
      label: "Optimal Range (m - 0 if unknown)",
      defaultValue: 0,
      isRequired: true,
    }),
    maxRange: integer({
      label: "Maximum Range (m - 0 if unknown)",
      defaultValue: 0,
      isRequired: true,
    }),
    reloadSpeed: integer({
      label: "Reload Speed (milliseconds)",
      isRequired: true,
    }),
    reloadSpeedFromEmpty: integer({
      label: "Reload Speed From Empty (milliseconds)",
      isRequired: true,
    }),
    headshotMultiplier: integer({
      label: "Headshot Multiplier (whole number eg 1.55 = 155) ",
      isRequired: true,
    }),
    damageLevel40: integer({ label: "Level 40 Base Damage", isRequired: true }),
    damageWt5: integer({
      label: "World Tier 5 Base Damage",
      isRequired: true,
    }),
    notes: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    isNamed: select({
      label: "Is this a Named Weapon?",
      options: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      defaultValue: "NO",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    isExotic: select({
      label: "Is this an Exotic Weapon?",
      options: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      defaultValue: "NO",
      ui: {
        displayMode: "segmented-control",
      },
    }),
  },
});
