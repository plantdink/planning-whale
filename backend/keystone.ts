import { createAuth } from "@keystone-next/auth";
import { config, createSchema } from "@keystone-next/keystone/schema";
import {
  withItemData,
  statelessSessions,
} from "@keystone-next/keystone/session";
import { User } from "./schemas/User";
import { AssaultRifle } from "./schemas/AssaultRifle";
import { LightMachineGun } from "./schemas/LightMachineGun";
import { MarksmanRifle } from "./schemas/MarksmanRifle";
import { SubMachineGun } from "./schemas/SubMachineGun";
import { Shotgun } from "./schemas/Shotgun";
import { Pistol } from "./schemas/Pistol";
import { Rifle } from "./schemas/Rifle";
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
      // TODO: add seeding here
    },
    lists: createSchema({
      // schema goes here
      User,
      AssaultRifle,
      LightMachineGun,
      MarksmanRifle,
      Pistol,
      Rifle,
      Shotgun,
      SubMachineGun,
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
