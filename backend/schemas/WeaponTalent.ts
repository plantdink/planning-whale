import { text, select } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const WeaponTalent = list({
  access: {
    // TODO: add access
  },
  ui: {
    labelField: "type",
    listView: {
      initialColumns: ["name", "type"],
      initialSort: {
        field: "type",
        direction: "ASC",
      },
      pageSize: 24,
    },
  },
  fields: {
    onAssaultRifles: select({
      label: "Is this available on Assault Rilfes?",
      options: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      isRequired: true,
      defaultValue: "NO",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    onLightMachineGuns: select({
      label: "Is this available on Light Machine Guns?",
      options: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      isRequired: true,
      defaultValue: "NO",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    onMarksmanRifles: select({
      label: "Is this available on Marksman Rifles?",
      options: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      isRequired: true,
      defaultValue: "NO",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    onPistols: select({
      label: "Is this available on Pistols?",
      options: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      isRequired: true,
      defaultValue: "NO",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    onRifles: select({
      label: "Is this available on Rifles?",
      options: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      isRequired: true,
      defaultValue: "NO",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    onShotguns: select({
      label: "Is this available on Shotguns?",
      options: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      isRequired: true,
      defaultValue: "NO",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    onSubMachineGuns: select({
      label: "Is this available on Sub Machine Guns?",
      options: [
        { label: "Yes", value: "YES" },
        { label: "No", value: "NO" },
      ],
      isRequired: true,
      defaultValue: "NO",
      ui: {
        displayMode: "segmented-control",
      },
    }),
    type: select({
      label: "Talent Type",
      options: [
        { label: "Weapon DPS", value: "WPNDPS" },
        { label: "Tank & Bruiser", value: "TANK" },
        { label: "Sustain", value: "SUSTAIN" },
        { label: "Status Effect", value: "STATUS" },
        { label: "Skill DPS", value: "SKILLDPS" },
        { label: "Heal & Support", value: "HEALSPT" },
      ],
      isRequired: true,
    }),
    name: text({ label: "Name of Talent", isRequired: true }),
    descriptionPVE: text({
      label: "Description (PVE)",
      ui: {
        displayMode: "textarea",
      },
    }),
    descriptionPVP: text({
      label: "Description (PVP)",
      ui: {
        displayMode: "textarea",
      },
    }),
    isNamed: select({
      label: "Is this a Perfect Talent?",
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
      label: "Is this an Exotic Talent?",
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
