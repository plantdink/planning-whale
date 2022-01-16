import { text, select, checkbox, relationship } from "@keystone-next/fields";
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
      pageSize: 40,
    },
  },
  fields: {
    name: text({ label: "Name of Talent", isRequired: true }),
    type: select({
      label: "Talent Type",
      options: [
        { label: "Weapon DPS", value: "Weapon DPS" },
        { label: "Weapon Utility", value: "Weapon Utility" },
        { label: "Weapon / Skill DPS", value: "Hybrid" },
        { label: "Skill DPS", value: "Skill DPS" },
        { label: "Status", value: "Status" },
        { label: "Tank & Bruiser", value: "Tank & Bruiser" },
        { label: "Heal & Support", value: "Heal & Support" },
      ],
      isRequired: true,
    }),
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
    classARTalent: checkbox({
      label: "Assault Rifle talent?",
    }),
    classLMGTalent: checkbox({
      label: "Light Machine Gun talent?",
    }),
    classMMRTalent: checkbox({
      label: "Marksman Rifle talent?",
    }),
    classPistolTalent: checkbox({
      label: "Pistol talent?",
    }),
    classRifleTalent: checkbox({
      label: "Rifle talent?",
    }),
    classShotgunTalent: checkbox({
      label: "Shotgun talent?",
    }),
    classSMGTalent: checkbox({
      label: "Sub Machine Gun talent?",
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
    weaponName: relationship({
      label: "Named or Exotic Weapon",
      ref: "Weapon.weaponTalent",
      many: true,
    }),
  },
});
