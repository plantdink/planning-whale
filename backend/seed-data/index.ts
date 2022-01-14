// import { weapons } from "./seedWeapons";
// import { brands } from "./seedBrands";
// import { armourTalents } from "./seedArmourTalents";
import { exoticArmourPieces } from "./seedExoticArmourPieces";

export async function insertSeedData(ks: any) {
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  const { mongoose } = adapter;

  // console.log(`Inserting seed data: ${weapons.length}`);
  // for (const weapon of weapons) {
  //   console.log(`Adding Weapon: ${weapon.model}`);
  //   await mongoose.model("Weapon").create(weapon);
  // }
  // console.log(`Seed data inserted: ${weapons.length} weapons`);

  // console.log(`Inserting seed data: ${brands.length}`);
  // for (const brand of brands) {
  //   console.log(`Adding Brand: ${brand.name}`);
  //   await mongoose.model("Brand").create(brand);
  // }
  // console.log(`Seed data inserted: ${brands.length} brands`);

  // console.log(`Inserting seed data: ${armourTalents.length}`);
  // for (const armourTalent of armourTalents) {
  //   console.log(`Adding Armour Talent: ${armourTalent.name}`);
  //   await mongoose.model("ArmourTalent").create(armourTalent);
  // }
  // console.log(`Seed data inserted: ${armourTalents.length} armour talents`);

  console.log(`Inserting seed data: ${exoticArmourPieces.length}`);
  for (const exoticArmourPiece of exoticArmourPieces) {
    console.log(`Adding Exotic armour: ${exoticArmourPiece.name}`);
    await mongoose.model("ExoticArmourPiece").create(exoticArmourPiece);
  }
  console.log(
    `Seed data inserted: ${exoticArmourPieces.length} Exotic armour pieces`
  );

  console.log(`Please start the process with \`npm run dev\``);
  process.exit();
}
