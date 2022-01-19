import { text, select, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Brand = list({
  access: {
    // TODO: add access
  },
  ui: {
    labelField: "name",
    listView: {
      initialColumns: ["name"],
      initialSort: {
        field: "name",
        direction: "ASC",
      },
      pageSize: 30,
    },
  },
  fields: {
    name: select({
      label: "Brand Name",
      options: [
        { label: "5.11 Tactical", value: "5.11 Tactical" },
        { label: "Airaldi Holdings", value: "Airaldi Holdings" },
        { label: "Alps Summit Armaments", value: "Alps Summit Armaments" },
        { label: "Badger Tuff", value: "Badger Tuff" },
        { label: "Belstone Armory", value: "Belstone Armory" },
        { label: "Ceska Vyroba s.r.o.", value: "Ceska Vyroba s.r.o" },
        {
          label: "China Light Industries Corporation",
          value: "China Light Industries Corporation",
        },
        { label: "Douglas & Harding", value: "Douglas & Harding" },
        { label: "Empress International", value: "Empress International" },
        { label: "Fenris Group AB", value: "Fenris Group AB" },
        { label: "Gila Guard", value: "Gila Guard" },
        { label: "Golan Gear Ltd", value: "Golan Gear Ltd" },
        { label: "Grupo Sombra S.A.", value: "Grupo Sombra S.A" },
        { label: "Hana-U Corporation", value: "Hana-U Corporation" },
        { label: "Murakami Industries", value: "Murakami Industries" },
        { label: "Overlord Armaments", value: "Overlord Armaments" },
        { label: "Petrov Defense Group", value: "Petrov Defense Group" },
        { label: "Providence Defense", value: "Providence Defense" },
        { label: "Richter & Kaiser GmbH", value: "Richter & Kaiser GmbH" },
        { label: "Sokolov Concern", value: "Sokolov Concern" },
        { label: "Walker, Harris & Co", value: "Walker, Harris & Co." },
        { label: "Wyvern Wear", value: "Wyvern Wear" },
        { label: "Yaahl Gear", value: "Yaahl Gear" },
        { label: "Improvised", value: "Improvised" },
        { label: "All Brands", value: "All Brands" },
      ],
    }),
    coreAttribute: select({
      label: "Brand Core Attribute",
      options: [
        { label: "Weapon Damage", value: "Weapon Damage" },
        { label: "Weapon Damage / Armour", value: "Weapon Damage / Armour" },
        { label: "Armour", value: "Armour" },
        { label: "Skill Tier", value: "Skill Tier" },
      ],
    }),
    coreAttributeValueLevel40: select({
      label: "Core Attribute Max Value (Level 40)",
      options: [
        { label: "15% Weapon Damage", value: "15% Weapon Damage" },
        {
          label: "15% Weapon Damage / 170,000 Armour",
          value: "15% Weapon Damage / 170,000 Armour",
        },
        { label: "170,000 Armour", value: "170,000 Armour" },
        {
          label: "+1 Skill Tier",
          value: "+1 Skill Tier",
        },
      ],
      isRequired: true,
    }),
    coreAttributeValueWT5: select({
      label: "Core Attribute Max Value (World Tier 5)",
      options: [
        { label: "9.9% Weapon Damage", value: "9.9% Weapon Damage" },
        { label: "42,458 Armour", value: "42,458 Armour" },
        {
          label: "+1 Skill Tier",
          value: "+1 Skill Tier",
        },
      ],
      isRequired: true,
    }),
    setBonusOne: text({ label: "First Set Bonus" }),
    setBonusTwo: text({ label: "Second Set Bonus" }),
    setBonusThree: text({ label: "Third Set Bonus" }),
    armourTalent: relationship({
      label: "Unique Brand Talents",
      ref: "ArmourTalent.brand",
      many: true,
      ui: {
        hideCreate: true,
      },
    }),
    armourType: relationship({
      label: "Named Armour Piece",
      ref: "ArmourType.brand",
      many: true,
      ui: {
        hideCreate: true,
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
