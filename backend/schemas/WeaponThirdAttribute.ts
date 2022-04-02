import { text, select, checkbox, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { permissions } from "../access";

export const WeaponThirdAttribute = list({
  access: {
    create: permissions.canEditItems,
    read: () => true,
    update: permissions.canEditItems,
    delete: permissions.canEditItems,
  },
  ui: {
    hideCreate: (args) => !permissions.canEditItems(args),
    hideDelete: (args) => !permissions.canEditItems(args),
    isHidden: (args) => !permissions.canViewAdminSite(args),
    labelField: "attribute",
    listView: {
      initialColumns: ["attribute"],
      initialSort: {
        field: "attribute",
        direction: "ASC",
      },
      pageSize: 50,
    },
  },
  fields: {
    attribute: select({
      label: "Attribute Name",
      options: [
        { label: "Accuracy", value: "Accuracy" },
        { label: "Critical Hit Chance", value: "Critical Hit Chance" },
        { label: "Critical Hit Damage", value: "Critical Hit Damage" },
        { label: "Damage to Armour", value: "Damage to Armour" },
        { label: "Damage to Health", value: "Damage to Health" },
        {
          label: "Damage to Targets out of Cover",
          value: "Damage to Targets out of Cover",
        },
        { label: "Headshot Damage", value: "Headshot Damage" },
        { label: "Magazine Size", value: "Magazine Size" },
        { label: "Optimal Range", value: "Optimal Range" },
        { label: "Rate of Fire", value: "Rate of Fire" },
        { label: "Reload Speed", value: "Reload Speed" },
        { label: "Stability", value: "Stability" },
        { label: "Swap Speed", value: "Swap Speed" },
      ],
      isRequired: true,
    }),
    valueLevel40: select({
      label: "Level 40 Max Value",
      options: [
        { label: "12% Accuracy", value: "12% Accuracy" },
        {
          label: "9.5% Critical Hit Chance",
          value: "9.5% Critical Hit Chance",
        },
        { label: "10% Critical Hit Damage", value: "10% Critical Hit Damage" },
        { label: "6% Damage to Armour", value: "6% Damage to Armour" },
        { label: "9.5% Damage to Health", value: "9.5% Damage to Health" },
        {
          label: "10% Damage to Targets out of Cover",
          value: "10% Damage to Targets out of Cover",
        },
        { label: "10% Headshot Damage", value: "10% Headshot Damage" },
        { label: "12.5% Magazine Size", value: "12.5% Magazine Size" },
        { label: "24% Optimal Range", value: "24% Optimal Range" },
        { label: "5% Rate of Fire", value: "5% Rate of Fire" },
        { label: "12% Reload Speed", value: "12% Reload Speed" },
        { label: "12% Stability", value: "12% Stability" },
        { label: "15% Swap Speed", value: "15% Swap Speed" },
      ],
      isRequired: true,
    }),
    valueWT5: select({
      label: "World Tier 5 Max Value",
      options: [
        { label: "7.9% Accuracy", value: "7.9% Accuracy" },
        {
          label: "6.5% Critical Hit Chance",
          value: "6.5% Critical Hit Chance",
        },
        { label: "7% Critical Hit Damage", value: "7% Critical Hit Damage" },
        { label: "6% Damage to Armour", value: "6% Damage to Armour" },
        { label: "6.5% Damage to Health", value: "6.5% Damage to Health" },
        {
          label: "7% Damage to Targets out of Cover",
          value: "7% Damage to Targets out of Cover",
        },
        { label: "7% Headshot Damage", value: "7% Headshot Damage" },
        { label: "8% Magazine Size", value: "8% Magazine Size" },
        { label: "14.5% Optimal Range", value: "14.5% Optimal Range" },
        { label: "4.3% Rate of Fire", value: "4.3% Rate of Fire" },
        { label: "7.9% Reload Speed", value: "7.9% Reload Speed" },
        { label: "7.9% Stability", value: "7.9% Stability" },
        { label: "10.3% Swap Speed", value: "10.3% Swap Speed" },
      ],
      isRequired: true,
    }),
    classARAttribute: checkbox({
      label: "Assault Rifle attribute?",
    }),
    classLMGAttribute: checkbox({
      label: "Light Machine Gun attribute?",
    }),
    classMMRAttribute: checkbox({
      label: "Marksman Rifle attribute?",
    }),
    classPistolAttribute: checkbox({
      label: "Pistol attribute?",
    }),
    classRifleAttribute: checkbox({
      label: "Rifle attribute?",
    }),
    classShotgunAttribute: checkbox({
      label: "Shotgun attribute?",
    }),
    classSMGAttribute: checkbox({
      label: "Sub Machine Gun attribute?",
    }),
    averageWeapon: relationship({
      label: "Average Weapon",
      ref: "AverageWeapon.weaponThirdAttribute",
      many: true,
    }),
    notes: text({
      label: "Notes",
      ui: {
        displayMode: "textarea",
      },
    }),
  },
});
