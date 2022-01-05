import { weapons } from "./data";

export async function insertSeedData(ks: any) {
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  console.log(`Inserting Seed data files: ${weapons.length} Weapons`);
  const { mongoose } = adapter;
  for (const weapon of weapons) {
    console.log(`Adding weapon: ${weapon.name}`);
    await mongoose.model("Weapon").create(weapon);
  }
  console.log(`Seed data inserted: ${weapons.length} weapons`);
  console.log(`Please start the process with \`npm run dev\``);
  process.exit();
}
