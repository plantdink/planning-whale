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
      pageSize: 24,
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
  },
});
