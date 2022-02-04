import { integer, relationship, select } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";

export const AverageWeapon = list({
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
    labelField: "class",
    listView: {
      initialColumns: ["class"],
      initialSort: {
        field: "class",
        direction: "ASC",
      },
    },
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
      isRequired: true,
    }),
    modSlots: integer({ label: "No of Mod Slots", isRequired: true }),
    rpm: integer({ label: "Rounds Per Minute (RPM)", isRequired: true }),
    magazineSize: integer({ label: "Base Mag Size", isRequired: true }),
    headshotMultiplier: integer({
      label: "Headshot Multiplier",
      isRequired: true,
    }),
    accuracy: integer({
      label: "Accuracy",
      defaultValue: 0,
      isRequired: true,
    }),
    stability: integer({
      label: "Stability",
      defaultValue: 0,
      isRequired: true,
    }),
    optimalRange: integer({
      label: "Optimal Range (m)",
      defaultValue: 0,
      isRequired: true,
    }),
    maxRange: integer({
      label: "Maximum Range (m)",
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
    damageLevel40: integer({
      label: "Level 40 Average Damage",
      isRequired: true,
    }),
    damageWT5: integer({
      label: "World Tier 5 Average Damage",
      isRequired: true,
    }),
    weaponClass: relationship({
      label: "Weapons",
      ref: "Weapon.averageWeapon",
      many: true,
    }),
  },
});
