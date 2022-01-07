function timestamp() {
  const stamp =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stamp).toISOString();
}

export const subMachineGuns = [
  {
    class: "SUB MACHINE GUN",
    family: "AUG",
    model: "AUG A3 Para XS",
    modSlots: 4,
    magazineSize: 25,
    rpm: 725,
    accuracy: 289,
    stability: 733,
    optimalRange: 18,
    maxRange: 34,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2250,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 57825,
    damageWt5: 12812,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "AUG",
    model: "Enhanced AUG A3P",
    modSlots: 4,
    magazineSize: 25,
    rpm: 725,
    accuracy: 383,
    stability: 745,
    optimalRange: 18,
    maxRange: 34,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2250,
    headshotMultiplier: 145,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 57825,
    damageWt5: 12812,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "AUG",
    model: "Tactical AUG A3P",
    modSlots: 4,
    magazineSize: 25,
    rpm: 725,
    accuracy: 325,
    stability: 760,
    optimalRange: 18,
    maxRange: 34,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2250,
    headshotMultiplier: 145,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 57825,
    damageWt5: 12812,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "AUG",
    model: "Tactical AUG A3P Replica",
    modSlots: 4,
    magazineSize: 25,
    rpm: 725,
    accuracy: 325,
    stability: 760,
    optimalRange: 18,
    maxRange: 34,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2250,
    headshotMultiplier: 145,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 57825,
    damageWt5: 12812,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "CMMG",
    model: "CMMG Banshee",
    modSlots: 4,
    magazineSize: 32,
    rpm: 900,
    accuracy: 0,
    stability: 0,
    optimalRange: 16,
    maxRange: 0,
    reloadSpeed: 2070,
    reloadSpeedFromEmpty: 2550,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 50303,
    damageWt5: 0,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "CMMG",
    model: "The Grudge",
    modSlots: 4,
    magazineSize: 32,
    rpm: 900,
    accuracy: 0,
    stability: 0,
    optimalRange: 16,
    maxRange: 0,
    reloadSpeed: 2070,
    reloadSpeedFromEmpty: 2550,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 50303,
    damageWt5: 0,
    notes:
      "Talent: Perfectly Vindictive. Killing an enemy with a status effect applied grants all group members within 20 meters, 18% critical hit chance and 18% critical hit damage for 20 seconds.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "MP5",
    model: "MP5 ST",
    modSlots: 4,
    magazineSize: 32,
    rpm: 800,
    accuracy: 251,
    stability: 697,
    optimalRange: 16,
    maxRange: 42,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2250,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 51713,
    damageWt5: 11458,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "MP5",
    model: "MP5 ST Replica",
    modSlots: 4,
    magazineSize: 32,
    rpm: 800,
    accuracy: 251,
    stability: 697,
    optimalRange: 16,
    maxRange: 42,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2250,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 51713,
    damageWt5: 11458,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "MP5",
    model: "MP5-N",
    modSlots: 4,
    magazineSize: 32,
    rpm: 800,
    accuracy: 266,
    stability: 712,
    optimalRange: 16,
    maxRange: 42,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2250,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 51713,
    damageWt5: 11458,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "MP5",
    model: "MP5A2",
    modSlots: 4,
    magazineSize: 32,
    rpm: 800,
    accuracy: 267,
    stability: 700,
    optimalRange: 16,
    maxRange: 42,
    reloadSpeed: 1800,
    reloadSpeedFromEmpty: 2250,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 51713,
    damageWt5: 11458,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "MP7",
    model: "MP7",
    modSlots: 3,
    magazineSize: 40,
    rpm: 950,
    accuracy: 262,
    stability: 745,
    optimalRange: 19,
    maxRange: 31,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2200,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 47952,
    damageWt5: 10624,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "MP7",
    model: "Swap Chain",
    modSlots: 2,
    magazineSize: 40,
    rpm: 950,
    accuracy: 262,
    stability: 745,
    optimalRange: 19,
    maxRange: 31,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2200,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 47952,
    damageWt5: 10624,
    notes:
      "Talent: Perfect Unwavering. Swapping to this weapon grants 400% weapon handling for 5 seconds. Kills refresh the buff. Swapping away disables this from all weapons for 5 seconds.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "MPX",
    model: "Backfire",
    modSlots: 0,
    magazineSize: 30,
    rpm: 850,
    accuracy: 265,
    stability: 736,
    optimalRange: 22,
    maxRange: 42,
    reloadSpeed: 2300,
    reloadSpeedFromEmpty: 2300,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 53124,
    damageWt5: 0,
    notes:
      "Talent: Payment in Kind. Dealing damage to enemies adds a stack of +1% critical hit damage, up to 200 stacks, lasting 10 seconds. On reload, apply a 10 second bleed to yourself, which deals 0.5% armor damage per stack.",
    isNamed: "NO",
    isExotic: "YES",
  },
  {
    class: "SUB MACHINE GUN",
    family: "MPX",
    model: "MPX",
    modSlots: 4,
    magazineSize: 30,
    rpm: 850,
    accuracy: 265,
    stability: 736,
    optimalRange: 22,
    maxRange: 42,
    reloadSpeed: 2300,
    reloadSpeedFromEmpty: 2300,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 53124,
    damageWt5: 11770,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "MPX",
    model: "Safety Distance",
    modSlots: 4,
    magazineSize: 30,
    rpm: 850,
    accuracy: 265,
    stability: 736,
    optimalRange: 22,
    maxRange: 42,
    reloadSpeed: 2300,
    reloadSpeedFromEmpty: 2300,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 53124,
    damageWt5: 11770,
    notes:
      "Talent: Perfect Outsider. After killing an enemy, gain 125% optimal range and 125% accuracy for 10 seconds.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "MPX",
    model: "The Apartment",
    modSlots: 4,
    magazineSize: 30,
    rpm: 850,
    accuracy: 265,
    stability: 736,
    optimalRange: 22,
    maxRange: 42,
    reloadSpeed: 2300,
    reloadSpeedFromEmpty: 2300,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 53124,
    damageWt5: 11770,
    notes:
      "Talent: Perfectly Measured. The top half of the magazine has +20% rate of fire and -27% weapon damage. The bottom half of the magazine has -20% rate of fire and +33% weapon damage.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "P90",
    model: "P90",
    modSlots: 2,
    magazineSize: 50,
    rpm: 900,
    accuracy: 284,
    stability: 716,
    optimalRange: 15,
    maxRange: 42,
    reloadSpeed: 2500,
    reloadSpeedFromEmpty: 2350,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 48892,
    damageWt5: 10883,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "P90",
    model: "P90 Replica",
    modSlots: 2,
    magazineSize: 50,
    rpm: 900,
    accuracy: 284,
    stability: 716,
    optimalRange: 15,
    maxRange: 42,
    reloadSpeed: 2500,
    reloadSpeedFromEmpty: 2350,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 48892,
    damageWt5: 10883,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "P90",
    model: "The Chatterbox",
    modSlots: 0,
    magazineSize: 50,
    rpm: 900,
    accuracy: 284,
    stability: 716,
    optimalRange: 15,
    maxRange: 42,
    reloadSpeed: 2500,
    reloadSpeedFromEmpty: 2350,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 42781,
    damageWt5: 9479,
    notes:
      "Talent: Incessant Chatter. When you reload, rate of fire is increased by 20% for each enemy within 15 meters for the duration of that magazine. Max stacks: 5. Kills refill 50% of your magazine.",
    isNamed: "NO",
    isExotic: "YES",
  },
  {
    class: "SUB MACHINE GUN",
    family: "P90",
    model: "Emeline's Guard",
    modSlots: 2,
    magazineSize: 50,
    rpm: 900,
    accuracy: 284,
    stability: 716,
    optimalRange: 15,
    maxRange: 42,
    reloadSpeed: 2500,
    reloadSpeedFromEmpty: 2350,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 42781,
    damageWt5: 9479,
    notes:
      "Talent: Perfect Preservation. Killing an enemy repairs 12% armor over 5 seconds. Headshot kills improves the repair to 24%.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "PP-19",
    model: "Enhanced PP-19",
    modSlots: 4,
    magazineSize: 50,
    rpm: 700,
    accuracy: 0,
    stability: 0,
    optimalRange: 16,
    maxRange: 42,
    reloadSpeed: 2200,
    reloadSpeedFromEmpty: 2700,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 59705,
    damageWt5: 13228,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "PP-19",
    model: "Cold Relations",
    modSlots: 2,
    magazineSize: 50,
    rpm: 700,
    accuracy: 231,
    stability: 665,
    optimalRange: 16,
    maxRange: 42,
    reloadSpeed: 2200,
    reloadSpeedFromEmpty: 2700,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 59705,
    damageWt5: 13228,
    notes:
      "Talent: Perfectly Strained. Gain 10% critical hit damage for every 0.5 seconds you are firing. Stacks up to 8 times.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "PP-19",
    model: "PP-19",
    modSlots: 2,
    magazineSize: 50,
    rpm: 700,
    accuracy: 231,
    stability: 665,
    optimalRange: 16,
    maxRange: 42,
    reloadSpeed: 2200,
    reloadSpeedFromEmpty: 2700,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 59705,
    damageWt5: 13228,
    notes: "",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "SMG-9",
    model: "Converted SMG-9",
    modSlots: 3,
    magazineSize: 32,
    rpm: 825,
    accuracy: 417,
    stability: 667,
    optimalRange: 20,
    maxRange: 40,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2150,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 51713,
    damageWt5: 11458,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "SMG-9",
    model: "Converted SMG-9 A2",
    modSlots: 4,
    magazineSize: 32,
    rpm: 825,
    accuracy: 399,
    stability: 682,
    optimalRange: 20,
    maxRange: 40,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2150,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 49833,
    damageWt5: 11041,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "SMG-9",
    model: "Converted SMG-9 Replica",
    modSlots: 3,
    magazineSize: 32,
    rpm: 825,
    accuracy: 417,
    stability: 667,
    optimalRange: 20,
    maxRange: 40,
    reloadSpeed: 1700,
    reloadSpeedFromEmpty: 2150,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 51713,
    damageWt5: 11458,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "T821",
    model: "Black Market T821",
    modSlots: 4,
    magazineSize: 32,
    rpm: 550,
    accuracy: 327,
    stability: 699,
    optimalRange: 17,
    maxRange: 36,
    reloadSpeed: 1600,
    reloadSpeedFromEmpty: 2050,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 66757,
    damageWt5: 14791,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "T821",
    model: "Black Market T821 Replica",
    modSlots: 4,
    magazineSize: 32,
    rpm: 550,
    accuracy: 327,
    stability: 699,
    optimalRange: 17,
    maxRange: 36,
    reloadSpeed: 1600,
    reloadSpeedFromEmpty: 2050,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 66757,
    damageWt5: 14791,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "T821",
    model: "Police T821",
    modSlots: 4,
    magazineSize: 32,
    rpm: 550,
    accuracy: 366,
    stability: 716,
    optimalRange: 17,
    maxRange: 36,
    reloadSpeed: 1600,
    reloadSpeedFromEmpty: 2050,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 66757,
    damageWt5: 14791,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "Thompson",
    model: "M1928",
    modSlots: 1,
    magazineSize: 30,
    rpm: 600,
    accuracy: 234,
    stability: 742,
    optimalRange: 16,
    maxRange: 42,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2450,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 705180,
    damageWt5: 15624,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "Thompson",
    model: "Tommy Gun",
    modSlots: 0,
    magazineSize: 50,
    rpm: 800,
    accuracy: 234,
    stability: 742,
    optimalRange: 16,
    maxRange: 42,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2450,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 55474,
    damageWt5: 12291,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "Thompson",
    model: "The Sleigher",
    modSlots: 0,
    magazineSize: 50,
    rpm: 250,
    accuracy: 0,
    stability: 0,
    optimalRange: 16,
    maxRange: 42,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2450,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 84621,
    damageWt5: 0,
    notes: "",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "UMP-45",
    model: "Police UMP-45",
    modSlots: 4,
    magazineSize: 30,
    rpm: 600,
    accuracy: 399,
    stability: 701,
    optimalRange: 14,
    maxRange: 30,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 65817,
    damageWt5: 14582,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "UMP-45",
    model: "Tactical UMP-45",
    modSlots: 4,
    magazineSize: 30,
    rpm: 600,
    accuracy: 341,
    stability: 713,
    optimalRange: 14,
    maxRange: 30,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 65817,
    damageWt5: 14582,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "UMP-45",
    model: "Tactical UMP-45 Replica",
    modSlots: 4,
    magazineSize: 30,
    rpm: 600,
    accuracy: 341,
    stability: 713,
    optimalRange: 14,
    maxRange: 30,
    reloadSpeed: 2000,
    reloadSpeedFromEmpty: 2500,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 65817,
    damageWt5: 14582,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "Vector",
    model: "Tactical Vector SBR 9mm",
    modSlots: 4,
    magazineSize: 19,
    rpm: 1200,
    accuracy: 229,
    stability: 745,
    optimalRange: 15,
    maxRange: 42,
    reloadSpeed: 1600,
    reloadSpeedFromEmpty: 2050,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 42311,
    damageWt5: 9374,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "Vector",
    model: "Vector SBR .45 ACP",
    modSlots: 4,
    magazineSize: 25,
    rpm: 1200,
    accuracy: 207,
    stability: 749,
    optimalRange: 15,
    maxRange: 42,
    reloadSpeed: 1600,
    reloadSpeedFromEmpty: 2050,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 40430,
    damageWt5: 8958,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "Vector",
    model: "Vector SBR .45 ACP Replica",
    modSlots: 4,
    magazineSize: 25,
    rpm: 1200,
    accuracy: 207,
    stability: 749,
    optimalRange: 15,
    maxRange: 42,
    reloadSpeed: 1600,
    reloadSpeedFromEmpty: 2050,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 40430,
    damageWt5: 8958,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "Vector",
    model: "Dark Winter",
    modSlots: 4,
    magazineSize: 25,
    rpm: 1200,
    accuracy: 207,
    stability: 749,
    optimalRange: 15,
    maxRange: 42,
    reloadSpeed: 1600,
    reloadSpeedFromEmpty: 2050,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 40430,
    damageWt5: 0,
    notes:
      "Talent: Perfect Killer. Killing an enemy with a critical hit grants 50% critical hit damage for 10 seconds.",
    isNamed: "YES",
    isExotic: "NO",
  },
  {
    class: "SUB MACHINE GUN",
    family: "Vector",
    model: "Vector SBR 9mm",
    modSlots: 4,
    magazineSize: 33,
    rpm: 1200,
    accuracy: 210,
    stability: 759,
    optimalRange: 15,
    maxRange: 42,
    reloadSpeed: 1600,
    reloadSpeedFromEmpty: 2050,
    headshotMultiplier: 150,
    weaponBonusDamage: "CHC",
    maximumBonusPercent: 21,
    damageLevel40: 37139,
    damageWt5: 8229,
    notes: "",
    isNamed: "NO",
    isExotic: "NO",
  },
];
