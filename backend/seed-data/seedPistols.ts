function timestamp() {
  const stamp =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stamp).toISOString();
}

export const pistolDbModel = "Pistol";

export const pistols = [
  {
    class: "PISTOL",
    family: "93R",
    model: "93R",
    modSlots: 2,
    magazineSize: 20,
    rpm: 1100,
    accuracy: 518,
    stability: 601,
    optimalRange: 16,
    maxRange: 50,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 32908,
    damageWt5: 7291,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "93R",
    model: "Sharpshooters 93R",
    modSlots: 2,
    magazineSize: 20,
    rpm: 1100,
    accuracy: 518,
    stability: 601,
    optimalRange: 16,
    maxRange: 50,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 32908,
    damageWt5: 7291,
    notes:
      "Specialisation Sidearm. Talent: Perfect Unwavering. Swapping to this weapon grants 400% weapon handling for 5 seconds. Kills refresh the buff. Swapping away disables this from all weapons for 5 seconds.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "586 Magnum",
    model: "586 Magnum",
    modSlots: 2,
    magazineSize: 6,
    rpm: 160,
    accuracy: 320,
    stability: 634,
    optimalRange: 18,
    maxRange: 36,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 190399,
    damageWt5: 42185,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "586 Magnum",
    model: "Orbit",
    modSlots: 2,
    magazineSize: 6,
    rpm: 160,
    accuracy: 320,
    stability: 634,
    optimalRange: 18,
    maxRange: 36,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 190399,
    damageWt5: 42185,
    notes:
      "Talent: Perfect Finisher. Swapping from this weapon within 10 seconds of killing an enemy grants 35% critical hit chance and 40% critical hit damage for 15 seconds.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "586 Magnum",
    model: "Police 686 Magnum",
    modSlots: 2,
    magazineSize: 6,
    rpm: 160,
    accuracy: 298,
    stability: 648,
    optimalRange: 18,
    maxRange: 36,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 190399,
    damageWt5: 42185,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "586 Magnum",
    model: "Police 686 Magnum Replica",
    modSlots: 2,
    magazineSize: 6,
    rpm: 160,
    accuracy: 298,
    stability: 648,
    optimalRange: 18,
    maxRange: 36,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 190399,
    damageWt5: 42185,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "586 Magnum",
    model: "Regulus",
    modSlots: 0,
    magazineSize: 6,
    rpm: 160,
    accuracy: 0,
    stability: 0,
    optimalRange: 18,
    maxRange: 36,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 282072,
    damageWt5: 62496,
    notes:
      "Talent: Regicide. Headshot kills deals 400% weapon damage and applies bleed to enemies within 5 meters of the enemy killed.",
    isNamed: "NO",
    isExotic: "YES",
  },
  {
    class: "PISTOL",
    family: "Desert Eagle",
    model: "D50",
    modSlots: 1,
    magazineSize: 8,
    rpm: 150,
    accuracy: 499,
    stability: 404,
    optimalRange: 16,
    maxRange: 50,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 1900,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 220956,
    damageWt5: 48955,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "Desert Eagle",
    model: "Survivalist D50",
    modSlots: 1,
    magazineSize: 8,
    rpm: 150,
    accuracy: 500,
    stability: 404,
    optimalRange: 16,
    maxRange: 50,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 1900,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 220956,
    damageWt5: 48955,
    notes:
      "Specialisation Sidearm - Talent: Perfect Sadist. Deal +25% weapon damage to bleeding enemies. After 3 kills, applies bleed to the next enemy you hit.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "Desert Eagle",
    model: "Libery",
    modSlots: 1,
    magazineSize: 8,
    rpm: 150,
    accuracy: 497,
    stability: 633,
    optimalRange: 16,
    maxRange: 50,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 1900,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 235060,
    damageWt5: 52080,
    notes:
      "Talent: Liberty or Death. Hits grant 2% weapon damage. Stacks up to 30 times. Headshots consume all stacks, repairing your shield for 3% per stack.",
    isNamed: "NO",
    isExotic: "YES",
  },
  {
    class: "PISTOL",
    family: "KARD",
    model: "KARD-45",
    modSlots: 4,
    magazineSize: 7,
    rpm: 310,
    accuracy: 0,
    stability: 0,
    optimalRange: 12,
    maxRange: 0,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 109068,
    damageWt5: 0,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "KARD",
    model: "TDI KARD Custom",
    modSlots: 4,
    magazineSize: 7,
    rpm: 310,
    accuracy: 0,
    stability: 0,
    optimalRange: 12,
    maxRange: 0,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 109068,
    damageWt5: 0,
    notes:
      "1 Skill Tier when in use. Note: Must be in hand to activate +1 skill tier",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "M1911",
    model: "M1911",
    modSlots: 4,
    magazineSize: 7,
    rpm: 310,
    accuracy: 499,
    stability: 647,
    optimalRange: 12,
    maxRange: 38,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 101076,
    damageWt5: 22394,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "M1911",
    model: "M45A1",
    modSlots: 1,
    magazineSize: 7,
    rpm: 310,
    accuracy: 496,
    stability: 663,
    optimalRange: 12,
    maxRange: 38,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 98725,
    damageWt5: 21874,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "M1911",
    model: "Mozambique Special",
    modSlots: 4,
    magazineSize: 7,
    rpm: 310,
    accuracy: 499,
    stability: 647,
    optimalRange: 12,
    maxRange: 38,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 98725,
    damageWt5: 0,
    notes: "",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "M1911",
    model: "Tactical M1911",
    modSlots: 4,
    magazineSize: 7,
    rpm: 310,
    accuracy: 496,
    stability: 639,
    optimalRange: 12,
    maxRange: 38,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 98725,
    damageWt5: 21874,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "M1911",
    model: "Tactical M1911 Replica",
    modSlots: 4,
    magazineSize: 7,
    rpm: 310,
    accuracy: 496,
    stability: 639,
    optimalRange: 12,
    maxRange: 38,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 98725,
    damageWt5: 21874,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "M9",
    model: "Military M9",
    modSlots: 2,
    magazineSize: 15,
    rpm: 350,
    accuracy: 518,
    stability: 662,
    optimalRange: 16,
    maxRange: 50,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 1900,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 81801,
    damageWt5: 18124,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "M9",
    model: "Military M9 Replica",
    modSlots: 2,
    magazineSize: 15,
    rpm: 350,
    accuracy: 518,
    stability: 662,
    optimalRange: 16,
    maxRange: 50,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 1900,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 81801,
    damageWt5: 18124,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "M9",
    model: "Officer's M9 A1",
    modSlots: 4,
    magazineSize: 20,
    rpm: 350,
    accuracy: 0,
    stability: 0,
    optimalRange: 16,
    maxRange: 50,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 1900,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 81801,
    damageWt5: 18124,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "Maxim 9",
    model: "Maxim 9",
    modSlots: 1,
    magazineSize: 0,
    rpm: 280,
    accuracy: 0,
    stability: 0,
    optimalRange: 16,
    maxRange: 50,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 98725,
    damageWt5: 21874,
    notes:
      "Technician Sidearm - Talent: Perfect Spike. Headshots grant 25% skill damage for 8 seconds.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "P320",
    model: "P320 XCompact",
    modSlots: 4,
    magazineSize: 15,
    rpm: 380,
    accuracy: 0,
    stability: 0,
    optimalRange: 16,
    maxRange: 50,
    reloadSpeed: 1600,
    reloadSpeedFromEmpty: 1600,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 79920,
    damageWt5: 17707,
    notes:
      "Gunner Sidearm - Talent: Perfect Preservation. Killing an enemy repairs 12% armor over 5 seconds. Headshot kills improves the repair to 24%. ",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "PF45",
    model: "Custom PF45",
    modSlots: 4,
    magazineSize: 15,
    rpm: 370,
    accuracy: 351,
    stability: 677,
    optimalRange: 14,
    maxRange: 40,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 79920,
    damageWt5: 17707,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "PF45",
    model: "Lightning Rod",
    modSlots: 4,
    magazineSize: 15,
    rpm: 370,
    accuracy: 351,
    stability: 677,
    optimalRange: 14,
    maxRange: 40,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 79920,
    damageWt5: 17707,
    notes:
      "Talent: Perfect Salvage. Killing a target has a 85% chance to refill the magazine.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "PF45",
    model: "First Wave PF45",
    modSlots: 2,
    magazineSize: 15,
    rpm: 370,
    accuracy: 351,
    stability: 677,
    optimalRange: 14,
    maxRange: 40,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 82741,
    damageWt5: 18332,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "Px4",
    model: "Px4 Storm Type F",
    modSlots: 3,
    magazineSize: 17,
    rpm: 380,
    accuracy: 392,
    stability: 634,
    optimalRange: 16,
    maxRange: 50,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 79920,
    damageWt5: 17707,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "Px4",
    model: "Px4 Storm Type T",
    modSlots: 3,
    magazineSize: 17,
    rpm: 380,
    accuracy: 353,
    stability: 649,
    optimalRange: 16,
    maxRange: 50,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 79920,
    damageWt5: 17707,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "Px4",
    model: "Px4 Storm Type T Replica",
    modSlots: 3,
    magazineSize: 17,
    rpm: 380,
    accuracy: 353,
    stability: 649,
    optimalRange: 16,
    maxRange: 50,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 79920,
    damageWt5: 17707,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "Rhino",
    model: "Diceros",
    modSlots: 2,
    magazineSize: 6,
    rpm: 1800,
    accuracy: 300,
    stability: 677,
    optimalRange: 18,
    maxRange: 36,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 169243,
    damageWt5: 37498,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "Rhino",
    model: "Diceros Replica",
    modSlots: 2,
    magazineSize: 6,
    rpm: 1800,
    accuracy: 300,
    stability: 677,
    optimalRange: 18,
    maxRange: 36,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 169243,
    damageWt5: 37498,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "Rhino",
    model: "Diceros Special",
    modSlots: 3,
    magazineSize: 6,
    rpm: 1800,
    accuracy: 300,
    stability: 677,
    optimalRange: 18,
    maxRange: 36,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 169243,
    damageWt5: 37498,
    notes:
      "Demolisionist Sidearm - Talent: Perfect Optimist. Weapon damage is increased by 4% for every 10% ammo missing from the magazine.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "Rhino",
    model: "Snubnosed Diceros",
    modSlots: 3,
    magazineSize: 6,
    rpm: 1800,
    accuracy: 316,
    stability: 658,
    optimalRange: 18,
    maxRange: 36,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 170183,
    damageWt5: 37706,
    notes: "",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "X-45",
    model: "X-45",
    modSlots: 3,
    magazineSize: 10,
    rpm: 400,
    accuracy: 449,
    stability: 633,
    optimalRange: 16,
    maxRange: 100,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 76630,
    damageWt5: 16978,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "X-45",
    model: "X-45 Tactical",
    modSlots: 3,
    magazineSize: 10,
    rpm: 400,
    accuracy: 452,
    stability: 601,
    optimalRange: 16,
    maxRange: 100,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 76630,
    damageWt5: 16978,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "PISTOL",
    family: "X-45",
    model: "X-45 Tactical Replica",
    modSlots: 3,
    magazineSize: 10,
    rpm: 400,
    accuracy: 452,
    stability: 601,
    optimalRange: 16,
    maxRange: 100,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2100,
    headshotMultiplier: 200,
    weaponBonusType: "-----",
    maxBonusValue: 0,
    damageLevel40: 76630,
    damageWt5: 16978,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
];
