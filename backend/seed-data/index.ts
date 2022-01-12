import { weapons } from "./seedWeapons";

export async function insertSeedData(ks: any) {
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  const { mongoose } = adapter;

  console.log(`Inserting seed data: ${weapons.length}`);
  for (const weapon of weapons) {
    console.log(`Adding Weapon: ${weapon.model}`);
    await mongoose.model("Weapon").create(weapon);
  }
  console.log(`Seed data inserted: ${weapons.length} weapons`);
  console.log(`Please start the process with \`npm run dev\``);
  process.exit();
}
