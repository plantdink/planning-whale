function timestamp() {
  const stamp =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stamp).toISOString();
}
export const MarksmanRifles = [
  {
    class: "MARKSMAN RIFLE",
    family: "AWM",
    model: "Nemesis",
    modSlots: 0,
    magazineSize: 5,
    rpm: 50,
    accuracy: 0,
    stability: 0,
    optimalRange: 60,
    maxRange: 80,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 3400,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 940240,
    damageWt5: 208320,
    notes:
      "Talent: Electromagnetic Accelerator. Shots fired deal 0 -100% weapon damage based on how long the trigger is held before releasing.",
    isNamed: "NO",
    isExotic: "YES",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "G28",
    model: "G28",
    modSlots: 4,
    magazineSize: 20,
    rpm: 275,
    accuracy: 0,
    stability: 0,
    optimalRange: 60,
    maxRange: 80,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2600,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 146677,
    damageWt5: 32498,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "M44",
    model: "Classic M44 Carbine",
    modSlots: 3,
    magazineSize: 5,
    rpm: 55,
    accuracy: 709,
    stability: 654,
    optimalRange: 60,
    maxRange: 100,
    reloadSpeed: 4200,
    reloadSpeedFromEmpty: 4400,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 423108,
    damageWt5: 93744,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "M44",
    model: "Classic M44 Carbine Replica",
    modSlots: 3,
    magazineSize: 5,
    rpm: 55,
    accuracy: 709,
    stability: 654,
    optimalRange: 60,
    maxRange: 100,
    reloadSpeed: 4200,
    reloadSpeedFromEmpty: 4400,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 423108,
    damageWt5: 93744,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "M44",
    model: "White Death",
    modSlots: 3,
    magazineSize: 5,
    rpm: 55,
    accuracy: 709,
    stability: 654,
    optimalRange: 60,
    maxRange: 100,
    reloadSpeed: 4200,
    reloadSpeedFromEmpty: 4400,
    headshotMultiplier: 237,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 137,
    damageLevel40: 423108,
    damageWt5: 0,
    notes: "",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "M44",
    model: "Custom M44",
    modSlots: 4,
    magazineSize: 5,
    rpm: 55,
    accuracy: 685,
    stability: 681,
    optimalRange: 60,
    maxRange: 100,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 3400,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 376096,
    damageWt5: 83328,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "M44",
    model: "Custom M44 Replica",
    modSlots: 4,
    magazineSize: 5,
    rpm: 55,
    accuracy: 685,
    stability: 681,
    optimalRange: 60,
    maxRange: 100,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 3400,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 376096,
    damageWt5: 83328,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "M44",
    model: "Hunting M44",
    modSlots: 4,
    magazineSize: 5,
    rpm: 55,
    accuracy: 679,
    stability: 668,
    optimalRange: 60,
    maxRange: 100,
    reloadSpeed: 4200,
    reloadSpeedFromEmpty: 4400,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 416056,
    damageWt5: 92182,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "Model 700",
    model: "M700 Carbon",
    modSlots: 4,
    magazineSize: 7,
    rpm: 54,
    accuracy: 687,
    stability: 598,
    optimalRange: 42,
    maxRange: 100,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 3500,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 376096,
    damageWt5: 83328,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "Model 700",
    model: "M700 Carbon Replica",
    modSlots: 4,
    magazineSize: 7,
    rpm: 54,
    accuracy: 687,
    stability: 598,
    optimalRange: 42,
    maxRange: 100,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 3500,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 376096,
    damageWt5: 83328,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "Model 700",
    model: "M700 Tactical",
    modSlots: 4,
    magazineSize: 7,
    rpm: 54,
    accuracy: 708,
    stability: 582,
    optimalRange: 42,
    maxRange: 100,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 3500,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 376096,
    damageWt5: 83328,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "Model 700",
    model: "Model 700",
    modSlots: 4,
    magazineSize: 7,
    rpm: 54,
    accuracy: 708,
    stability: 568,
    optimalRange: 42,
    maxRange: 100,
    reloadSpeed: 6300,
    reloadSpeedFromEmpty: 8000,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 399602,
    damageWt5: 88536,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "Model 700",
    model: "Model 700 Replica",
    modSlots: 4,
    magazineSize: 7,
    rpm: 54,
    accuracy: 708,
    stability: 568,
    optimalRange: 42,
    maxRange: 100,
    reloadSpeed: 6300,
    reloadSpeedFromEmpty: 8000,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 399602,
    damageWt5: 88536,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "Model 700",
    model: "Ekim's Long Stick",
    modSlots: 4,
    magazineSize: 7,
    rpm: 54,
    accuracy: 708,
    stability: 568,
    optimalRange: 42,
    maxRange: 100,
    reloadSpeed: 6300,
    reloadSpeedFromEmpty: 8000,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 399602,
    damageWt5: 88536,
    notes:
      "Talent: Perfect Ranger. Amplifies weapon damage by 2% for every 4 meters you are away from the target.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "SCAR",
    model: "SOCOM Mk20 SSR",
    modSlots: 4,
    magazineSize: 20,
    rpm: 275,
    accuracy: 817,
    stability: 604,
    optimalRange: 60,
    maxRange: 80,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 2400,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 143857,
    damageWt5: 31873,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "SCAR",
    model: "SOCOM Mk20 SSR Replica",
    modSlots: 4,
    magazineSize: 20,
    rpm: 275,
    accuracy: 817,
    stability: 604,
    optimalRange: 60,
    maxRange: 80,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 2400,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 143857,
    damageWt5: 31873,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "SCAR",
    model: "The Darkness",
    modSlots: 4,
    magazineSize: 20,
    rpm: 275,
    accuracy: 817,
    stability: 604,
    optimalRange: 60,
    maxRange: 80,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 2400,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 143857,
    damageWt5: 31873,
    notes:
      "Talent: Perfect Eyeless. Deal 25% weapon damage to blinded enemies. After 3 kills, applies blind to the next enemy you hit.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "SR-1",
    model: "Adrestia SR-1",
    modSlots: 4,
    magazineSize: 5,
    rpm: 60,
    accuracy: 755,
    stability: 637,
    optimalRange: 42,
    maxRange: 80,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 3400,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 357291,
    damageWt5: 79162,
    notes: "Deconstruct to collect the first piece of the Nemesis project",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "SR-1",
    model: "SR-1",
    modSlots: 4,
    magazineSize: 5,
    rpm: 60,
    accuracy: 755,
    stability: 637,
    optimalRange: 42,
    maxRange: 80,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 3400,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 357291,
    damageWt5: 79162,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "SR-1",
    model: "SR-1 Replica",
    modSlots: 4,
    magazineSize: 5,
    rpm: 60,
    accuracy: 755,
    stability: 637,
    optimalRange: 42,
    maxRange: 80,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 3400,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 357291,
    damageWt5: 79162,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "SR-1",
    model: "Designated Hitter",
    modSlots: 4,
    magazineSize: 5,
    rpm: 60,
    accuracy: 753,
    stability: 636,
    optimalRange: 42,
    maxRange: 80,
    reloadSpeed: 1900,
    reloadSpeedFromEmpty: 3400,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 357291,
    damageWt5: 79162,
    notes:
      "Talent: Perfect Reformation. Headshots grant 40% skill repair for 8 seconds.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "SRS",
    model: "Covert SRS",
    modSlots: 4,
    magazineSize: 7,
    rpm: 60,
    accuracy: 708,
    stability: 521,
    optimalRange: 42,
    maxRange: 100,
    reloadSpeed: 2200,
    reloadSpeedFromEmpty: 3200,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 338957,
    damageWt5: 75099,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "SRS",
    model: "Pinprick",
    modSlots: 4,
    magazineSize: 7,
    rpm: 60,
    accuracy: 708,
    stability: 521,
    optimalRange: 42,
    maxRange: 100,
    reloadSpeed: 2200,
    reloadSpeedFromEmpty: 3200,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 338957,
    damageWt5: 75099,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "SRS",
    model: "Covert SRS",
    modSlots: 4,
    magazineSize: 7,
    rpm: 60,
    accuracy: 708,
    stability: 521,
    optimalRange: 42,
    maxRange: 100,
    reloadSpeed: 2200,
    reloadSpeedFromEmpty: 3200,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 338957,
    damageWt5: 75099,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "SRS",
    model: "Covert SRS",
    modSlots: 4,
    magazineSize: 7,
    rpm: 60,
    accuracy: 708,
    stability: 521,
    optimalRange: 42,
    maxRange: 100,
    reloadSpeed: 2200,
    reloadSpeedFromEmpty: 3200,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 338957,
    damageWt5: 75099,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "SRS",
    model: "Covert SRS",
    modSlots: 4,
    magazineSize: 7,
    rpm: 60,
    accuracy: 708,
    stability: 521,
    optimalRange: 42,
    maxRange: 100,
    reloadSpeed: 2200,
    reloadSpeedFromEmpty: 3200,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 338957,
    damageWt5: 75099,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "",
    model: "",
    modSlots: 4,
    magazineSize: 0,
    rpm: 0,
    accuracy: 0,
    stability: 0,
    optimalRange: 0,
    maxRange: 0,
    reloadSpeed: 0,
    reloadSpeedFromEmpty: 0,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 0,
    damageWt5: 0,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "MARKSMAN RIFLE",
    family: "",
    model: "",
    modSlots: 4,
    magazineSize: 0,
    rpm: 0,
    accuracy: 0,
    stability: 0,
    optimalRange: 0,
    maxRange: 0,
    reloadSpeed: 0,
    reloadSpeedFromEmpty: 0,
    headshotMultiplier: 211,
    weaponBonusDamage: "HSD",
    maximumBonusPercent: 111,
    damageLevel40: 0,
    damageWt5: 0,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
];
