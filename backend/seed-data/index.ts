import { assaultRifles } from "./seedAssaultRifles";
// import { lightMachineGuns } from "./seedLightMachineGuns";
// import { marksmanRifles } from "./seedMarksmanRifles";
// import { pistols } from "./seedPistols";
// import { rifles } from "./seedRifles";
// import { shotguns } from "./seedShotguns";
// import { subMachineGuns } from "./seedSubMachineGuns";

export async function insertSeedData(ks: any) {
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  const { mongoose } = adapter;

  console.log(`Inserting Seed data files: ${assaultRifles.length} ARs`);
  for (const assaultRifle of assaultRifles) {
    console.log(`Adding: ${assaultRifle.family} ${assaultRifle.model}`);
    await mongoose.model("AssaultRifle").create(assaultRifle);
  }
  console.log(`Successfully inserted: ${assaultRifles.length} ARs`);

  // console.log(`Inserting Seed data files: ${lightMachineGuns.length} LMGs`);
  // for (const lightMachineGun of lightMachineGuns) {
  //   console.log(`Adding: ${lightMachineGun.family} ${lightMachineGun.model}`);
  //   await mongoose.model("LightMachineGun").create(lightMachineGun);
  // }
  // console.log(`Successfully inserted: ${lightMachineGuns.length} LMGs`);

  // console.log(`Inserting Seed data files: ${marksmanRifles.length} MMRs`);
  // for (const marksmanRifle of marksmanRifles) {
  //   console.log(`Adding: ${marksmanRifle.family} ${marksmanRifle.model}`);
  //   await mongoose.model("MarksmanRifle").create(marksmanRifle);
  // }
  // console.log(`Successfully inserted: ${marksmanRifles.length} MMRs`);

  // console.log(`Inserting Seed data files: ${pistols.length} sidearms`);
  // for (const pistol of pistols) {
  //   console.log(`Adding: ${pistol.family} ${pistol.model}`);
  //   await mongoose.model("Pistol").create(pistol);
  // }
  // console.log(`Successfully inserted: ${pistols.length} sidearms`);

  // console.log(`Inserting Seed data files: ${rifles.length} rifles`);
  // for (const rifle of rifles) {
  //   console.log(`Adding: ${rifle.family} ${rifle.model}`);
  //   await mongoose.model("Rifle").create(rifle);
  // }
  // console.log(`Successfully inserted: ${rifles.length} rifles`);

  // console.log(`Inserting Seed data files: ${shotguns.length} shotguns`);
  // for (const shotgun of shotguns) {
  //   console.log(`Adding: ${shotgun.family} ${shotgun.model}`);
  //   await mongoose.model("Shotgun").create(shotgun);
  // }
  // console.log(`Successfully inserted: ${shotguns.length} shotguns`);

  // console.log(`Inserting Seed data files: ${subMachineGuns.length} SMGs`);
  // for (const subMachineGun of subMachineGuns) {
  //   console.log(`Adding: ${subMachineGun.family} ${subMachineGun.model}`);
  //   await mongoose.model("SubMachineGun").create(subMachineGun);
  // }
  // console.log(`Successfully inserted: ${subMachineGuns.length} shotguns`);

  console.log(`Please start the process with \`npm run dev\``);
  process.exit();
}
