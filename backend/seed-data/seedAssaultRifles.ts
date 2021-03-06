function timestamp() {
  const stamp =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stamp).toISOString();
}

export const assaultRifles = [
  {
    class: "ASSAULT RIFLE",
    family: "ACR",
    model: "ACR",
    modSlots: 4,
    magazineSize: 30,
    rpm: 650,
    accuracy: 515,
    stability: 691,
    optimalRange: 27,
    maxRange: 105,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 53124,
    damageWt5: 11770,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "ACR",
    model: "ACR-E",
    modSlots: 4,
    magazineSize: 30,
    rpm: 650,
    accuracy: 618,
    stability: 760,
    optimalRange: 27,
    maxRange: 105,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 53124,
    damageWt5: 11770,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "AK-47",
    model: "AK-M",
    modSlots: 3,
    magazineSize: 30,
    rpm: 600,
    accuracy: 479,
    stability: 635,
    optimalRange: 31,
    maxRange: 68,
    reloadSpeed: 2200,
    reloadSpeedFromEmpty: 2700,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 62056,
    damageWt5: 13749,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "AK-47",
    model: "Black Market AK-M",
    modSlots: 4,
    magazineSize: 30,
    rpm: 600,
    accuracy: 477,
    stability: 640,
    optimalRange: 31,
    maxRange: 68,
    reloadSpeed: 2200,
    reloadSpeedFromEmpty: 2700,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 60645,
    damageWt5: 13437,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "AK-47",
    model: "Black Market AK-M Replica",
    modSlots: 4,
    magazineSize: 30,
    rpm: 600,
    accuracy: 477,
    stability: 640,
    optimalRange: 31,
    maxRange: 68,
    reloadSpeed: 2200,
    reloadSpeedFromEmpty: 2700,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 60645,
    damageWt5: 13437,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "AK-47",
    model: "Maniac",
    modSlots: 4,
    magazineSize: 30,
    rpm: 600,
    accuracy: 477,
    stability: 640,
    optimalRange: 31,
    maxRange: 68,
    reloadSpeed: 2200,
    reloadSpeedFromEmpty: 2700,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 60645,
    damageWt5: 13437,
    notes: "",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "AK-47",
    model: "Military AK-M",
    modSlots: 4,
    magazineSize: 30,
    rpm: 600,
    accuracy: 477,
    stability: 640,
    optimalRange: 31,
    maxRange: 68,
    reloadSpeed: 2200,
    reloadSpeedFromEmpty: 2700,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 60645,
    damageWt5: 13437,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "AUG",
    model: "AUG A3-CQC",
    modSlots: 4,
    magazineSize: 30,
    rpm: 680,
    accuracy: 547,
    stability: 663,
    optimalRange: 27,
    maxRange: 105,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2300,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 51243,
    damageWt5: 11353,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "AUG",
    model: "Invisible Hand",
    modSlots: 4,
    magazineSize: 30,
    rpm: 762,
    accuracy: 547,
    stability: 663,
    optimalRange: 27,
    maxRange: 105,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2300,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 51243,
    damageWt5: 11353,
    notes: "Talent: Perfect Allegro. Increase rate of fire by 12%",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "AUG",
    model: "Big Horn (Full Auto)",
    modSlots: 0,
    magazineSize: 40,
    rpm: 800,
    accuracy: 0,
    stability: 0,
    optimalRange: 27,
    maxRange: 0,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 23000,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 51243,
    damageWt5: 0,
    notes:
      "Talent: Big Game Hunter. When scoped, switches to semi-automatic fire mode, dealing 450% weapon damage with each shot. Headshots grant +2% headshot damage. Stacks up to 50 times. Once at full stacks, 10 stacks decay every 4 seconds until all stacks have been removed. Headshots delay decaying of stacks",
    isNamed: "NO",
    isExotic: "YES",
  },
  {
    class: "ASSAULT RIFLE",
    family: "AUG",
    model: "Big Horn (Semi Auto)",
    modSlots: 0,
    magazineSize: 40,
    rpm: 120,
    accuracy: 0,
    stability: 0,
    optimalRange: 42,
    maxRange: 0,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 23000,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 230829,
    damageWt5: 0,
    notes:
      "Talent: Big Game Hunter. When scoped, switches to semi-automatic fire mode, dealing 450% weapon damage with each shot. Headshots grant +2% headshot damage. Stacks up to 50 times. Once at full stacks, 10 stacks decay every 4 seconds until all stacks have been removed. Headshots delay decaying of stacks",
    isNamed: "NO",
    isExotic: "YES",
  },
  {
    class: "ASSAULT RIFLE",
    family: "F2000",
    model: "F2000",
    modSlots: 3,
    magazineSize: 30,
    rpm: 850,
    accuracy: 493,
    stability: 716,
    optimalRange: 27,
    maxRange: 105,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2300,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 45132,
    damageWt5: 9999,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "F2000",
    model: "F2000 Replica",
    modSlots: 3,
    magazineSize: 30,
    rpm: 850,
    accuracy: 493,
    stability: 716,
    optimalRange: 27,
    maxRange: 105,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2300,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 45132,
    damageWt5: 9999,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "F2000",
    model: "Shield Splinterer",
    modSlots: 3,
    magazineSize: 30,
    rpm: 850,
    accuracy: 493,
    stability: 716,
    optimalRange: 27,
    maxRange: 105,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2300,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 45132,
    damageWt5: 9999,
    notes:
      "Talent: Perfect Optimist. Weapon damage is increased by 4% for every 10% ammo missing from the magazine.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "FAL",
    model: "FAL",
    modSlots: 4,
    magazineSize: 20,
    rpm: 650,
    accuracy: 489,
    stability: 725,
    optimalRange: 32,
    maxRange: 105,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 56885,
    damageWt5: 12603,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "FAL",
    model: "FAL SA-58",
    modSlots: 4,
    magazineSize: 20,
    rpm: 650,
    accuracy: 523,
    stability: 732,
    optimalRange: 32,
    maxRange: 105,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 56885,
    damageWt5: 12603,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "FAL",
    model: "FAL SA-58 Para",
    modSlots: 4,
    magazineSize: 20,
    rpm: 650,
    accuracy: 466,
    stability: 751,
    optimalRange: 32,
    maxRange: 105,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 56885,
    damageWt5: 12603,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "FAL",
    model: "FAL SA-58 Para Replica",
    modSlots: 4,
    magazineSize: 20,
    rpm: 650,
    accuracy: 466,
    stability: 751,
    optimalRange: 32,
    maxRange: 105,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 56885,
    damageWt5: 12603,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "FAMAS",
    model: "FAMAS 2010",
    modSlots: 4,
    magazineSize: 30,
    rpm: 900,
    accuracy: 567,
    stability: 746,
    optimalRange: 28,
    maxRange: 70,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 2400,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 44191,
    damageWt5: 9791,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "FAMAS",
    model: "FAMAS 2010 Replica",
    modSlots: 4,
    magazineSize: 30,
    rpm: 900,
    accuracy: 567,
    stability: 746,
    optimalRange: 28,
    maxRange: 70,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 2400,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 44191,
    damageWt5: 9791,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "FAMAS",
    model: "Burn Out",
    modSlots: 4,
    magazineSize: 30,
    rpm: 900,
    accuracy: 567,
    stability: 746,
    optimalRange: 28,
    maxRange: 70,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 2400,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 44191,
    damageWt5: 0,
    notes:
      "Talent: Perfect On Empty. Reloading from empty grants 40% weapon handling for 10 seconds.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "G36",
    model: "G36C",
    modSlots: 4,
    magazineSize: 30,
    rpm: 750,
    accuracy: 0,
    stability: 0,
    optimalRange: 32,
    maxRange: 105,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 48892,
    damageWt5: 9791,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "G36",
    model: "G36 Enhanced",
    modSlots: 4,
    magazineSize: 30,
    rpm: 750,
    accuracy: 447,
    stability: 740,
    optimalRange: 32,
    maxRange: 105,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 48892,
    damageWt5: 9791,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "G36",
    model: "G36 Enhanced Replica",
    modSlots: 4,
    magazineSize: 30,
    rpm: 750,
    accuracy: 447,
    stability: 740,
    optimalRange: 32,
    maxRange: 105,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 48892,
    damageWt5: 9791,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "G36",
    model: "Military G36",
    modSlots: 4,
    magazineSize: 30,
    rpm: 750,
    accuracy: 393,
    stability: 708,
    optimalRange: 32,
    maxRange: 105,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 48892,
    damageWt5: 9791,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "Honey Badger",
    model: "Honey Badger",
    modSlots: 3,
    magazineSize: 30,
    rpm: 790,
    accuracy: 659,
    stability: 783,
    optimalRange: 27,
    maxRange: 70,
    reloadSpeed: 2100,
    reloadSpeedFromEmpty: 2600,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 47952,
    damageWt5: 10624,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "Honey Badger",
    model: "Savage Wolverine",
    modSlots: 4,
    magazineSize: 30,
    rpm: 790,
    accuracy: 659,
    stability: 783,
    optimalRange: 27,
    maxRange: 70,
    reloadSpeed: 2100,
    reloadSpeedFromEmpty: 2600,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 47952,
    damageWt5: 10624,
    notes:
      "Talent: Perfectly Close & Personal. Killing a target within 7 meters grants 38% weapon damage for 10 seconds.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "M4",
    model: "Carbine 7",
    modSlots: 4,
    magazineSize: 30,
    rpm: 790,
    accuracy: 0,
    stability: 0,
    optimalRange: 35,
    maxRange: 70,
    reloadSpeed: 2100,
    reloadSpeedFromEmpty: 2600,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 47012,
    damageWt5: 10416,
    notes:
      "Talent: Overflowing. Every 3 reloads from empty increases your base magazine capacity by 100%",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "M4",
    model: "Police M4",
    modSlots: 4,
    magazineSize: 30,
    rpm: 850,
    accuracy: 620,
    stability: 808,
    optimalRange: 35,
    maxRange: 70,
    reloadSpeed: 2100,
    reloadSpeedFromEmpty: 2600,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 44191,
    damageWt5: 9791,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "M4",
    model: "Police M4 Replica",
    modSlots: 4,
    magazineSize: 30,
    rpm: 850,
    accuracy: 620,
    stability: 808,
    optimalRange: 35,
    maxRange: 70,
    reloadSpeed: 2100,
    reloadSpeedFromEmpty: 2600,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 44191,
    damageWt5: 9791,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "M4",
    model: "Pyromaniac",
    modSlots: 4,
    magazineSize: 30,
    rpm: 850,
    accuracy: 620,
    stability: 808,
    optimalRange: 35,
    maxRange: 70,
    reloadSpeed: 2100,
    reloadSpeedFromEmpty: 2600,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 44191,
    damageWt5: 9791,
    notes: "",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "M4",
    model: "Eagle Bearer",
    modSlots: 0,
    magazineSize: 30,
    rpm: 750,
    accuracy: 620,
    stability: 808,
    optimalRange: 35,
    maxRange: 70,
    reloadSpeed: 2200,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 51713,
    damageWt5: 11458,
    notes:
      "Talent: Eagle's Strike. Accuracy increases as you continuously fire, up to 30%. Headshot kills grant the Tenacity buff for 15 seconds.The strength of Tenacity is increased by 1% for body shots and 5% for headshots. Talent: Tenacity. 40% - 80% of damage taken is delayed until the buff expires. All of the total delayed damage is reduced for each enemy killed while the buff is active, up to 100% with 3 kills.",
    isNamed: "NO",
    isExotic: "YES",
  },
  {
    class: "ASSAULT RIFLE",
    family: "P416",
    model: "Custom P416 G3",
    modSlots: 4,
    magazineSize: 30,
    rpm: 750,
    accuracy: 420,
    stability: 803,
    optimalRange: 26,
    maxRange: 60,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 47952,
    damageWt5: 10624,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "P416",
    model: "Glory Daze",
    modSlots: 4,
    magazineSize: 30,
    rpm: 750,
    accuracy: 420,
    stability: 803,
    optimalRange: 26,
    maxRange: 60,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 47952,
    damageWt5: 0,
    notes: "",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "P416",
    model: "Military P416",
    modSlots: 4,
    magazineSize: 30,
    rpm: 750,
    accuracy: 436,
    stability: 769,
    optimalRange: 26,
    maxRange: 60,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 47952,
    damageWt5: 10624,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "PDR",
    model: "PDR",
    modSlots: 3,
    magazineSize: 30,
    rpm: 700,
    accuracy: 0,
    stability: 0,
    optimalRange: 28,
    maxRange: 0,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 2400,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 51713,
    damageWt5: 0,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "PDR",
    model: "Test Subject",
    modSlots: 3,
    magazineSize: 30,
    rpm: 700,
    accuracy: 0,
    stability: 0,
    optimalRange: 28,
    maxRange: 0,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 2400,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 51713,
    damageWt5: 0,
    notes:
      "Talent: Perfectly in Sync. Hitting an enemy grants +20% skill damage for 5 seconds. Using a skill or damaging an enemy with a skill grants +20% weapon damage for 5 seconds. Damage increases are doubled while both buffs are active at the same time.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "PDR",
    model: "Capacitor",
    modSlots: 0,
    magazineSize: 30,
    rpm: 700,
    accuracy: 0,
    stability: 0,
    optimalRange: 28,
    maxRange: 0,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 2400,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 51713,
    damageWt5: 0,
    notes:
      "Talent: Capacitance. Shooting enemies builds stacks to a cap of 40. Each stack grants 1.5% Skill Damage. After 5 seconds, stacks decay 1 per second. For each utility core gain 7.5% Weapon Damage",
    isNamed: "NO",
    isExotic: "YES",
  },
  {
    class: "ASSAULT RIFLE",
    family: "SCAR",
    model: "Mk16",
    modSlots: 4,
    magazineSize: 30,
    rpm: 625,
    accuracy: 661,
    stability: 686,
    optimalRange: 35,
    maxRange: 70,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 55004,
    damageWt5: 12187,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "SCAR",
    model: "SOCOM Mk16",
    modSlots: 4,
    magazineSize: 30,
    rpm: 625,
    accuracy: 598,
    stability: 760,
    optimalRange: 35,
    maxRange: 70,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 55004,
    damageWt5: 12187,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "SCAR",
    model: "Tactical Mk16",
    modSlots: 4,
    magazineSize: 30,
    rpm: 625,
    accuracy: 594,
    stability: 776,
    optimalRange: 35,
    maxRange: 70,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 55004,
    damageWt5: 12187,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "SCAR",
    model: "Tactical Mk16 Replica",
    modSlots: 4,
    magazineSize: 30,
    rpm: 625,
    accuracy: 594,
    stability: 776,
    optimalRange: 35,
    maxRange: 70,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 55004,
    damageWt5: 12187,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "Sig Sauer 556",
    model: "Sig Sauer 556",
    modSlots: 4,
    magazineSize: 30,
    rpm: 720,
    accuracy: 0,
    stability: 0,
    optimalRange: 35,
    maxRange: 0,
    reloadSpeed: 2170,
    reloadSpeedFromEmpty: 2700,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 50773,
    damageWt5: 0,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "Sig Sauer 556",
    model: "Mechanical Animal",
    modSlots: 4,
    magazineSize: 30,
    rpm: 720,
    accuracy: 0,
    stability: 0,
    optimalRange: 35,
    maxRange: 0,
    reloadSpeed: 2170,
    reloadSpeedFromEmpty: 2700,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 50773,
    damageWt5: 0,
    notes:
      "Talent: Future Perfection. Weapon kills grant +1 skill tier for 19s. Stacks up to 3 times. Weapon kills at skill tier 6 grant overcharge for 15 seconds. Overcharge Cooldown: 90 seconds",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "TAR-21",
    model: "CTAR-21",
    modSlots: 3,
    magazineSize: 30,
    rpm: 900,
    accuracy: 516,
    stability: 725,
    optimalRange: 35,
    maxRange: 68,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 41371,
    damageWt5: 9166,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "TAR-21",
    model: "The Railsplitter",
    modSlots: 3,
    magazineSize: 30,
    rpm: 900,
    accuracy: 516,
    stability: 725,
    optimalRange: 35,
    maxRange: 68,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 155,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 41371,
    damageWt5: 9166,
    notes: "Talent: Perfectly Accurate. Increase accuracy by 50%.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "ASSAULT RIFLE",
    family: "Vector",
    model: "Chameleon",
    modSlots: 0,
    magazineSize: 30,
    rpm: 900,
    accuracy: 271,
    stability: 779,
    optimalRange: 15,
    maxRange: 42,
    reloadSpeed: 2060,
    reloadSpeedFromEmpty: 2550,
    headshotMultiplier: 150,
    weaponBonusType: "DTH",
    maxBonusValue: 21,
    damageLevel40: 39960,
    damageWt5: 8854,
    notes:
      "Talent: Adaptive Instincts. Hitting 30 headshots grants 20% critical hit chance and 50% critical hit damage for 45 seconds. Hitting 60 body shots grants 80% weapon damage for 45 seconds. Hitting 30 leg shots grants 150% reload speed for 45 seconds.",
    isNamed: "NO",
    isExotic: "YES",
  },
];
