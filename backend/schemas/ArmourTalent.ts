import { text, select, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const ArmourTalent = list({
  access: {
    // TODO: add access
  },
  ui: {
    labelField: "name",
    listView: {
      initialColumns: ["name", "piece", "type"],
      initialSort: {
        field: "name",
        direction: "ASC",
      },
      pageSize: 40,
    },
  },
  fields: {
    piece: select({
      label: "Armour Piece",
      options: [
        { label: "Chest", value: "Chest" },
        { label: "Backpack", value: "Backpack" },
        { label: "Mask", value: "Mask" },
        { label: "Holster", value: "Holster" },
        { label: "Gloves", value: "Gloves" },
        { label: "Knees", value: "Knees" },
      ],
      isRequired: true,
    }),
    type: select({
      label: "Talent Type",
      options: [
        { label: "Weapon DPS", value: "Weapon DPS" },
        { label: "Tank & Bruiser", value: "Tank & Bruiser" },
        { label: "Sustain", value: "Sustain" },
        { label: "Status Effect", value: "Status" },
        { label: "Skill DPS", value: "Skill DPS" },
        { label: "Heal & Support", value: "Heal & Support" },
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
    namedItem: text({ label: "If Named Item, what is the name?" }),
    brand: relationship({
      label: "Related Brand",
      ref: "Brand.armourTalent",
      many: false,
      ui: {
        displayMode: "select",
        hideCreate: true,
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
