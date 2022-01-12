import { text, select } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const ArmourTalent = list({
  access: {
    // TODO: add access
  },
  ui: {
    labelField: "piece",
    listView: {
      initialColumns: ["piece", "name", "type"],
      initialSort: {
        field: "piece",
        direction: "ASC",
      },
      pageSize: 24,
    },
  },
  fields: {
    piece: select({
      label: "Armour Piece",
      options: [
        { label: "Chest", value: "CHEST" },
        { label: "Backpack", value: "BACKPACK" },
      ],
      isRequired: true,
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
