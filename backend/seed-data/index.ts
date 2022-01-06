import { assaultRifles } from "./data";

export async function insertSeedData(ks: any) {
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  console.log(`Inserting Seed data files: ${assaultRifles.length} ARs`);
  const { mongoose } = adapter;
  for (const assaultRifle of assaultRifles) {
    console.log(`Adding: ${assaultRifles.name}`);
    await mongoose.model("AssaultRifle").create(assaultRifle);
  }
  console.log(`Seed data inserted: ${assaultRifles.length} ARs`);
  console.log(`Please start the process with \`npm run dev\``);
  process.exit();
}
