// import { titleCase } from "../lib/titleCase";
// import { assaultRifles } from "./seedAssaultRifles";
// import { lightMachineGuns } from "./seedLightMachineGuns";
// import { marksmanRifles } from "./seedMarksmanRifles";
// import { pistols } from "./seedPistols";
// import { rifles } from "./seedRifles";
// import { shotguns } from "./seedShotguns";
// import { subMachineGuns } from "./seedSubMachineGuns";
import { weapons } from "./seedWeapons";

export async function insertSeedData(ks: any) {
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  const { mongoose } = adapter;

  // const seedDataFiles = [
  //   ...assaultRifles,
  //   ...lightMachineGuns,
  //   ...marksmanRifles,
  //   ...pistols,
  //   ...rifles,
  //   ...shotguns,
  //   ...subMachineGuns,
  // ];

  // for (const seedDataFile of seedDataFiles) {
  //   console.log(`Inserting ${seedDataFile.model}`);
  //   // await mongoose.model(titleCase(seedDataFile.class)).create(seedDataFile);

  //   console.log(`Successfully inserted: ${seedDataFile.model} \n ------`);
  // }

  console.log(`Inserting seed data: ${weapons.length}`);
  for (const weapon of weapons) {
    console.log(`Adding Weapon: ${weapon.model}`);
    await mongoose.model("Weapon").create(weapon);
  }
  console.log(`Seed data inserted: ${weapons.length} weapons`);
  console.log(`Please start the process with \`npm run dev\``);
  process.exit();
}
