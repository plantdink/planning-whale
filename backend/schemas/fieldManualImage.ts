import "dotenv/config";
import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { cloudinaryImage } from "@keystone-next/cloudinary";

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: "agent-field-manual",
};

export const FieldManualImage = list({
  ui: {
    listView: {
      initialColumns: ["Id", "image", "altText", "weapon"],
      pageSize: 100,
    },
  },
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: "Source",
    }),
    altText: text(),
    weapon: relationship({
      ref: "Weapon.image",
      many: true,
    }),
    weaponTalent: relationship({
      ref: "WeaponTalent.image",
      many: true,
    }),
    armourTalent: relationship({
      ref: "ArmourTalent.image",
      many: true,
    }),
    armourType: relationship({
      ref: "ArmourType.image",
      many: true,
    }),
    brand: relationship({
      ref: "Brand.image",
      many: true,
    }),
    exoticArmourPiece: relationship({
      ref: "ExoticArmourPiece.image",
      many: true,
    }),
    gearset: relationship({
      ref: "Gearset.image",
      many: true,
    }),
    averageWeapon: relationship({
      ref: "AverageWeapon.image",
      many: true,
    }),
  },
});
