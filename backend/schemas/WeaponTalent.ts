import { text, select } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const WeaponTalent = list({
  access: {
    // TODO: add access
  },
  ui: {
    labelField: "name",
    listView: {
      initialColumns: ["name", "type"],
      initialSort: {
        field: "name",
        direction: "ASC",
      },
      pageSize: 24,
    },
  },
  fields: {
    type: select({
      label: "Talent Type",
      options: [
        { label: "Weapon DPS", value: "Weapon DPS" },
        { label: "Tank & Bruiser", value: "Tank" },
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
