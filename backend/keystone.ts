import { createAuth } from "@keystone-next/auth";
import { config, createSchema } from "@keystone-next/keystone/schema";
import {
  withItemData,
  statelessSessions,
} from "@keystone-next/keystone/session";
import { insertSeedData } from "./seed-data";
import { User } from "./schemas/User";
import { Weapon } from "./schemas/Weapon";
import { ArmourType } from "./schemas/ArmourType";
import { ArmourTalent } from "./schemas/ArmourTalent";
import { Brand } from "./schemas/Brand";
import { WeaponTalent } from "./schemas/WeaponTalent";
import { ExoticArmourPiece } from "./schemas/ExoticArmourPiece";
import { Gearset } from "./schemas/Gearset";
import "dotenv/config";

const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost/div2-item-compare";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 180, // 180 day cookie life
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
    // TODO: add initial roles here
  },
});

export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: "mongoose",
      url: databaseURL,
      async onConnect(keystone) {
        if (process.argv.includes("--seed-data")) {
          await insertSeedData(keystone);
        }
      },
    },
    lists: createSchema({
      // schema goes here
      User,
      Weapon,
      ArmourType,
      ArmourTalent,
      Brand,
      WeaponTalent,
      ExoticArmourPiece,
      Gearset,
    }),
    ui: {
      // TODO: change for roles
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id`,
    }),
  })
);
