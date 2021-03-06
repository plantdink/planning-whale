function timestamp() {
  const stamp =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stamp).toISOString();
}

export const shotgunDbModel = "Shotgun";

export const shotguns = [
  {
    class: "SHOTGUN",
    family: "AA-12",
    model: "ACS-12",
    modSlots: 2,
    magazineSize: 20,
    rpm: 300,
    accuracy: 96,
    stability: 586,
    optimalRange: 16,
    maxRange: 40,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2550,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 169243,
    damageWt5: 37498,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "AA-12",
    model: "Rock n' Roll",
    modSlots: 2,
    magazineSize: 30,
    rpm: 300,
    accuracy: 96,
    stability: 586,
    optimalRange: 16,
    maxRange: 40,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2550,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 169243,
    damageWt5: 37498,
    notes: "Talent: Perfectly Extra. Increase magazine size by 50%",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "KSG",
    model: "KSG",
    modSlots: 3,
    magazineSize: 12,
    rpm: 70,
    accuracy: 0,
    stability: 0,
    optimalRange: 16,
    maxRange: 45,
    reloadSpeed: 7800,
    reloadSpeedFromEmpty: 8500,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 594230,
    damageWt5: 131658,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "KSG",
    model: "The Send-Off",
    modSlots: 3,
    magazineSize: 12,
    rpm: 70,
    accuracy: 0,
    stability: 0,
    optimalRange: 32,
    maxRange: 45,
    reloadSpeed: 7800,
    reloadSpeedFromEmpty: 8500,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 594230,
    damageWt5: 131658,
    notes: "Talent: Perfect Distance. Increase optimal range by 100%.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "Double Barrel",
    model: "Double Barrel Sawed Off",
    modSlots: 0,
    magazineSize: 2,
    rpm: 200,
    accuracy: 140,
    stability: 469,
    optimalRange: 11,
    maxRange: 18,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 620556,
    damageWt5: 137491,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "Double Barrel",
    model: "Backup Boomstick",
    modSlots: 0,
    magazineSize: 2,
    rpm: 200,
    accuracy: 140,
    stability: 469,
    optimalRange: 11,
    maxRange: 18,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 620556,
    damageWt5: 0,
    notes: "",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "Double Barrel",
    model: "Firestarter",
    modSlots: 0,
    magazineSize: 2,
    rpm: 200,
    accuracy: 140,
    stability: 469,
    optimalRange: 11,
    maxRange: 18,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 620556,
    damageWt5: 137491,
    notes:
      "Firewall sidearm - Talent: Primer Rounds. Damaged enemies lose 50% burn resistance for 5 seconds.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "Double Barrel",
    model: "Double Barrel Shotgun",
    modSlots: 0,
    magazineSize: 2,
    rpm: 200,
    accuracy: 198,
    stability: 469,
    optimalRange: 11,
    maxRange: 18,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 620556,
    damageWt5: 137491,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "Double Barrel",
    model: "Double Barrel Shotgun Replica",
    modSlots: 0,
    magazineSize: 2,
    rpm: 200,
    accuracy: 198,
    stability: 469,
    optimalRange: 11,
    maxRange: 18,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 620556,
    damageWt5: 137491,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "Double Barrel",
    model: "Boomstick",
    modSlots: 0,
    magazineSize: 2,
    rpm: 200,
    accuracy: 198,
    stability: 469,
    optimalRange: 11,
    maxRange: 18,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 620556,
    damageWt5: 0,
    notes:
      "Talent: Perfect Pumped Up. Reloading grants 5% weapon damage for 10 seconds. Stacks up to 5 times.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "M870",
    model: "Custom M870 MCS",
    modSlots: 3,
    magazineSize: 5,
    rpm: 75,
    accuracy: 94,
    stability: 515,
    optimalRange: 14,
    maxRange: 40,
    reloadSpeed: 3500,
    reloadSpeedFromEmpty: 3800,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 695775,
    damageWt5: 154157,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "M870",
    model: "Custom M870 MCS Replica",
    modSlots: 3,
    magazineSize: 5,
    rpm: 75,
    accuracy: 94,
    stability: 515,
    optimalRange: 14,
    maxRange: 40,
    reloadSpeed: 3500,
    reloadSpeedFromEmpty: 3800,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 695775,
    damageWt5: 154157,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "M870",
    model: "M870 Express",
    modSlots: 3,
    magazineSize: 5,
    rpm: 75,
    accuracy: 96,
    stability: 546,
    optimalRange: 14,
    maxRange: 40,
    reloadSpeed: 3500,
    reloadSpeedFromEmpty: 3800,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 695775,
    damageWt5: 154157,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "M870",
    model: "M870 Express Replica",
    modSlots: 3,
    magazineSize: 5,
    rpm: 75,
    accuracy: 96,
    stability: 546,
    optimalRange: 14,
    maxRange: 40,
    reloadSpeed: 3500,
    reloadSpeedFromEmpty: 3800,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 695775,
    damageWt5: 154157,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "M870",
    model: "Military M870",
    modSlots: 3,
    magazineSize: 5,
    rpm: 75,
    accuracy: 95,
    stability: 559,
    optimalRange: 14,
    maxRange: 40,
    reloadSpeed: 3500,
    reloadSpeedFromEmpty: 3800,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 695775,
    damageWt5: 154157,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "M870",
    model: "Cuelebre",
    modSlots: 3,
    magazineSize: 5,
    rpm: 75,
    accuracy: 95,
    stability: 559,
    optimalRange: 14,
    maxRange: 40,
    reloadSpeed: 2850,
    reloadSpeedFromEmpty: 3150,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 695775,
    damageWt5: 154157,
    notes: "Talent: Perfect Jazz Hands. Increase reload speed by 30%.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "SASG-12",
    model: "Black Market SASG-12 S",
    modSlots: 2,
    magazineSize: 7,
    rpm: 180,
    accuracy: 93,
    stability: 336,
    optimalRange: 14,
    maxRange: 40,
    reloadSpeed: 2100,
    reloadSpeedFromEmpty: 3200,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 364812,
    damageWt5: 80828,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "SASG-12",
    model: "Black Market SASG-12 S Replica",
    modSlots: 2,
    magazineSize: 7,
    rpm: 180,
    accuracy: 93,
    stability: 336,
    optimalRange: 14,
    maxRange: 40,
    reloadSpeed: 2100,
    reloadSpeedFromEmpty: 3200,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 364812,
    damageWt5: 80828,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "SASG-12",
    model: "SASG-12",
    modSlots: 2,
    magazineSize: 7,
    rpm: 180,
    accuracy: 99,
    stability: 307,
    optimalRange: 14,
    maxRange: 40,
    reloadSpeed: 2100,
    reloadSpeedFromEmpty: 3200,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 364812,
    damageWt5: 80828,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "SASG-12",
    model: "Tactical SASG-12 K",
    modSlots: 2,
    magazineSize: 7,
    rpm: 180,
    accuracy: 120,
    stability: 321,
    optimalRange: 14,
    maxRange: 40,
    reloadSpeed: 2100,
    reloadSpeedFromEmpty: 3200,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 364812,
    damageWt5: 80828,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "SASG-12",
    model: "Tsunami",
    modSlots: 2,
    magazineSize: 7,
    rpm: 180,
    accuracy: 120,
    stability: 321,
    optimalRange: 14,
    maxRange: 40,
    reloadSpeed: 2100,
    reloadSpeedFromEmpty: 3200,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 364812,
    damageWt5: 80828,
    notes:
      "Talent: Perfect Pummel. 2 consecutive kills refill the magazine and grant 40% weapon damage for 10 seconds.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "Six12",
    model: "Six-12",
    modSlots: 3,
    magazineSize: 7,
    rpm: 130,
    accuracy: 0,
    stability: 0,
    optimalRange: 14,
    maxRange: 0,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2400,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 451314,
    damageWt5: 0,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "Six12",
    model: "The Mop",
    modSlots: 3,
    magazineSize: 7,
    rpm: 130,
    accuracy: 0,
    stability: 0,
    optimalRange: 14,
    maxRange: 0,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2400,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 451314,
    damageWt5: 0,
    notes: "10% armor on kill",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "Six12",
    model: "Scorpio",
    modSlots: 0,
    magazineSize: 7,
    rpm: 130,
    accuracy: 0,
    stability: 0,
    optimalRange: 14,
    maxRange: 0,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2400,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 451314,
    damageWt5: 0,
    notes:
      "Talent: Septic Shock. Shooting a target applies stacks of venom, which last for 10s. Increasing stacks adds more severe debuffs to the target. 1 - Poison 3 - Disorient 6 - Shock 7 - Target takes 20% damage (from all sources)",
    isNamed: "NO",
    isExotic: "YES",
  },
  {
    class: "SHOTGUN",
    family: "SPAS-12",
    model: "Lullaby",
    modSlots: 0,
    magazineSize: 8,
    rpm: 70,
    accuracy: 96,
    stability: 738,
    optimalRange: 10,
    maxRange: 35,
    reloadSpeed: 5200,
    reloadSpeedFromEmpty: 5900,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 646883,
    damageWt5: 143324,
    notes:
      "Talent: Sandman. Melee attacks instantly kill non-elite enemies. Cooldown: 15 seconds.",
    isNamed: "NO",
    isExotic: "YES",
  },
  {
    class: "SHOTGUN",
    family: "SPAS-12",
    model: "SPAS-12",
    modSlots: 1,
    magazineSize: 8,
    rpm: 70,
    accuracy: 94,
    stability: 737,
    optimalRange: 16,
    maxRange: 45,
    reloadSpeed: 5200,
    reloadSpeedFromEmpty: 5900,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 646883,
    damageWt5: 143324,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "SPAS-12",
    model: "SPAS-12 Replica",
    modSlots: 1,
    magazineSize: 8,
    rpm: 70,
    accuracy: 94,
    stability: 737,
    optimalRange: 16,
    maxRange: 45,
    reloadSpeed: 5200,
    reloadSpeedFromEmpty: 5900,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 646883,
    damageWt5: 143324,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "SPAS-12",
    model: "Sweet Dreams",
    modSlots: 0,
    magazineSize: 8,
    rpm: 70,
    accuracy: 96,
    stability: 738,
    optimalRange: 10,
    maxRange: 35,
    reloadSpeed: 5200,
    reloadSpeedFromEmpty: 5900,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 646883,
    damageWt5: 143324,
    notes:
      "Talent: Sandman. Melee attacks instantly kill non-elite enemies. Cooldown: 15 seconds.",
    isNamed: "NO",
    isExotic: "YES",
  },
  {
    class: "SHOTGUN",
    family: "Super 90",
    model: "Marine Super 90",
    modSlots: 3,
    magazineSize: 8,
    rpm: 160,
    accuracy: 93,
    stability: 689,
    optimalRange: 16,
    maxRange: 45,
    reloadSpeed: 4800,
    reloadSpeedFromEmpty: 5400,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 440031,
    damageWt5: 97494,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "Super 90",
    model: "Super 90",
    modSlots: 3,
    magazineSize: 8,
    rpm: 160,
    accuracy: 93,
    stability: 675,
    optimalRange: 16,
    maxRange: 45,
    reloadSpeed: 4800,
    reloadSpeedFromEmpty: 5400,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 440031,
    damageWt5: 97494,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "Super 90",
    model: "Super 90 Replica",
    modSlots: 3,
    magazineSize: 8,
    rpm: 160,
    accuracy: 93,
    stability: 675,
    optimalRange: 16,
    maxRange: 45,
    reloadSpeed: 4800,
    reloadSpeedFromEmpty: 5400,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 440031,
    damageWt5: 97494,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "Super 90",
    model: "Enforcer",
    modSlots: 0,
    magazineSize: 8,
    rpm: 160,
    accuracy: 93,
    stability: 675,
    optimalRange: 16,
    maxRange: 45,
    reloadSpeed: 4800,
    reloadSpeedFromEmpty: 5400,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 440031,
    damageWt5: 0,
    notes: "",
    isNamed: "NO",
    isExotic: "YES",
  },
  {
    class: "SHOTGUN",
    family: "Super 90",
    model: "Tactical Super 90 SBS",
    modSlots: 0,
    magazineSize: 8,
    rpm: 160,
    accuracy: 95,
    stability: 704,
    optimalRange: 16,
    maxRange: 45,
    reloadSpeed: 4800,
    reloadSpeedFromEmpty: 5400,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 440031,
    damageWt5: 97494,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SHOTGUN",
    family: "Super 90",
    model: "Tactical Super 90 SBS Replica",
    modSlots: 0,
    magazineSize: 8,
    rpm: 160,
    accuracy: 95,
    stability: 704,
    optimalRange: 16,
    maxRange: 45,
    reloadSpeed: 4800,
    reloadSpeedFromEmpty: 5400,
    headshotMultiplier: 145,
    weaponBonusType: "DTA",
    maxBonusValue: 12,
    damageLevel40: 440031,
    damageWt5: 97494,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
];
