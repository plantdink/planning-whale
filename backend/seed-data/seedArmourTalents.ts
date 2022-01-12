function timestamp() {
  const stamp =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stamp).toISOString();
}

export const armourTalents = [
  {
    piece: "CHEST",
    type: "WPNDPS",
    name: "Braced",
    descriptionPVE: "While in cover weapon handling is increased by 45%",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "WPNDPS",
    name: "Perfect Braced",
    descriptionPVE:
      "Perfect Braced: While in cover weapon handling is increased by 50%.",
    descriptionPVP: "",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Vedmedytsya Vest - Brand: Petrov",
  },
  {
    piece: "CHEST",
    type: "WPNDPS",
    name: "Focus",
    descriptionPVE:
      "Increases total weapon damage by 5% every second you are aiming while scoped 8x or higher, up to 50%.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "WPNDPS",
    name: "Perfect Focus",
    descriptionPVE:
      "Increases total weapon damage by 5% every second you are aiming while scoped 8x or higher, up to 60%.",
    descriptionPVP: "",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Pristine Example - Brand: Airaldi Holdings",
  },
  {
    piece: "CHEST",
    type: "WPNDPS",
    name: "Glass Cannon",
    descriptionPVE:
      "All damage you deal is amplified by 25%. All damage you take is amplified by 50%",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "WPNDPS",
    name: "Perfect Glass Cannon",
    descriptionPVE:
      "All damage you deal is amplified by 30%. All damage you take is amplified by 60%",
    descriptionPVP: "",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "The Sacrifice - Brand: Providence Defence",
  },
  {
    piece: "CHEST",
    type: "WPNDPS",
    name: "Gunslinger",
    descriptionPVE:
      "Weapon swapping increases total weapon damage by 20% for 5 seconds. This buff is lost for 5 seconds if you weapon swap while it is active.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "WPNDPS",
    name: "Headhunter",
    descriptionPVE:
      "After killing an enemy with a headshot, your next weapon hit within 30 seconds deals an additional 125% fo that killing blow's damage. Damage is capped at 800% of your weapon damage. This is raised to 1250% if your headshot damage is greater than 150%.",
    descriptionPVP:
      "After killing an enemy with a headshot, your next weapon hit within 5 seconds deals an additional 20% fo that killing blow's damage. Damage is capped at 200% of your weapon damage. This is raised to 300% if your headshot damage is greater than 150%.",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "WPNDPS",
    name: "Perfect Headhunter",
    descriptionPVE:
      "Perfect Headhunter: After killing an enemy with a headshot, your next weapon hit within 30 seconds deals an additional 150% fo that killing blow's damage. Damage is capped at 800% of your weapon damage. This is raised to 1250% if your headshot damage is greater than 150%.",
    descriptionPVP:
      "Perfect Headhunter: After killing an enemy with a headshot, your next weapon hit within 5 seconds deals an additional 25% fo that killing blow's damage. Damage is capped at 200% of your weapon damage. This is raised to 300% if your headshot damage is greater than 150%",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Chainkiller - Brand: Walker, Harris & Co.",
  },
  {
    piece: "CHEST",
    type: "WPNDPS",
    name: "Obliterate",
    descriptionPVE:
      "Critical hits increase total weapon damage by 1% for 5 seconds. Stacks up to 25 times.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "WPNDPS",
    name: "Spark",
    descriptionPVE:
      "Damaging an enemy with a skill increases total weapon damage by 15% for 15 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "WPNDPS",
    name: "Perfect Spark",
    descriptionPVE:
      "Damaging an enemy with a skill increases total weapon damage by 15% for 20 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "Door-Kickers Knock - Grupo Sombra S.A.",
  },
  {
    piece: "CHEST",
    type: "TANK",
    name: "Vanguard",
    descriptionPVE:
      "Deploying a shield makes it invulnerable for 5 seconds and grants 45% of your armor as bonus armor to all other allies for 20 seconds. Cooldown is 25 seconds.",
    descriptionPVP:
      "Deploying a shield makes it invulnerable for 2 seconds and grants 20% of your armor as bonus armor to all other allies for 20 seconds. Cooldown is 25 seconds.",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "TANK",
    name: "Perfect Vanguard",
    descriptionPVE:
      "Deploying a shield makes it invulnerable for 5 seconds and grants 50% of your armor as bonus armor to all other allies for 20 seconds. Cooldown is 25 seconds.",
    descriptionPVP:
      "Deploying a shield makes it invulnerable for 2 seconds and grants 25% of your armor as bonus armor to all other allies for 20 seconds. Cooldown is 25 seconds.",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Pointman - Brand: Gila Guard",
  },
  {
    piece: "CHEST",
    type: "TANK",
    name: "Unbreakable",
    descriptionPVE:
      "When your armor is depleted, repair 95% of your armor. Cooldown is 60 seconds.",
    descriptionPVP:
      "When your armor is depleted, repair 50% of your armor. Cooldown is 60 seconds.",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "TANK",
    name: "Perfectly Unbreakable",
    descriptionPVE:
      "When your armor is depleted, repair 100% of your armor. Cooldown is 55 seconds.",
    descriptionPVP:
      "When your armor is depleted, repair 55% of your armor. Cooldown is 55 seconds.",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Zero Fs - Brand: Badger Tuff",
  },
  {
    piece: "CHEST",
    type: "TANK",
    name: "Protected Reload",
    descriptionPVE:
      "Grants 20% bonus armor while reloading. Grants 0-18% of your armor as bonus armor to all other allies when they are reloading, based on your [defence] core attribute.",
    descriptionPVP:
      "Grants 15% bonus armor while reloading. Grants 0-12% of your armor as bonus armor to all other allies when they are reloading, based on your [defence] core attribute.",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "TANK",
    name: "Intimidate",
    descriptionPVE:
      "While you have bonus armor, amplifies total weapon damage by 35% to enemies within 10 meters.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "TANK",
    name: "Perfect Intimidate",
    descriptionPVE:
      "Perfect Intimidate: While you have bonus armor, amplifies total weapon damage by 40% to enemies within 10 meters.",
    descriptionPVP: "",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Hunter-Killer - Brand: Golan Gear",
  },
  {
    piece: "CHEST",
    type: "TANK",
    name: "Entrench",
    descriptionPVE:
      "If you are below 30% armor, headshots from cover repair 20% of your armor. Cooldown is 6 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "TANK",
    name: "Efficient",
    descriptionPVE:
      "Using an armor kit has a 50% chance to not consume the armor kit. Specialization armor kit bonuses are increased by 100%.",
    descriptionPVP:
      "Using an armor kit has a 50% chance to not consume the armor kit. Specialization armor kit bonuses are increased by 50%.",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "TANK",
    name: "Perfectly Efficient",
    descriptionPVE:
      "Using an armor kit has a 75% chance to not consume the armor kit. Specialization armor kit bonuses are increased by 100%.",
    descriptionPVP:
      "Using an armor kit has a 75% chance to not consume the armor kit. Specialization armor kit bonuses are increased by 50%.",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Everyday Carrier - Brand: Belstone Armory",
  },
  {
    piece: "CHEST",
    type: "SKILLDPS",
    name: "Tamper Proof",
    descriptionPVE:
      "Enemies that walk within 3 meters of your hive, turret, or remote pulse are shocked. Arm time is 3 seconds and cooldown per skill is 10 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "SKILLDPS",
    name: "Tag Team",
    descriptionPVE:
      "The last enemy you have damaged with a skill is marked.Dealing weapon damage to that enemy consumes the mark to reduce active cooldowns by 6 seconds. Cooldown: 4 seconds",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "SKILLDPS",
    name: "Spotter",
    descriptionPVE:
      "Amplifies total weapon and skill damage by 15% to pulsed enemies.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "SKILLDPS",
    name: "Skilled",
    descriptionPVE:
      "Skill kills have a 25% chance to reset skill cooldowns. If no skills were on cooldown, you instead gain one-time buff that immediately refreshes a skill's cooldown when it goes on cooldown.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "SKILLDPS",
    name: "Perfectly Skilled",
    descriptionPVE:
      "Skill kills have a 30% chance to reset skill cooldowns. If no skills were on cooldown, you instead gain one-time buff that immediately refreshes a skill's cooldown when it goes on cooldown.",
    descriptionPVP: "",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Caesar's Guard - Brand: Empress International",
  },
  {
    piece: "CHEST",
    type: "SKILLDPS",
    name: "Kinetic Momentum",
    descriptionPVE:
      "When in combat, each skill generates a stack while active or not on cooldown. Stacks increase your total skill damage by 1% and total skill repair by 2%. Up to 15 stacks per skill. Lost when on cooldown.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "SKILLDPS",
    name: "Explosive Delivery",
    descriptionPVE:
      "Whenever you throw a skill, 1.5 seconds after landing, it creates an explosion damaging enemies within 5 meters. Damage scales with skill tier dealing 25-100% damage of a concussion grenade. At most once per skill. Remote Pulse, All Turrets, All Hives, Explosive Seeker, Cluster Seeker, Mender Seeker, Decoy, All Traps.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "HEALSPT",
    name: "Trauma",
    descriptionPVE:
      "Applies blind to an enemy hit in the head. Cooldown is 30 seconds. Applies bleed to an enemy hit in the chest. Cooldown is 30 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "HEALSPT",
    name: "Reassigned",
    descriptionPVE:
      "Killing an enemy adds 1 round of a random special ammo into your sidearm. Cooldown is 20 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "HEALSPT",
    name: "Overwatch",
    descriptionPVE:
      "After staying in cover for 10 seconds, increase your and all allies total weapon and skill damage by 12% as long as you remain in cover or in a cover-to-cover move.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "HEALSPT",
    name: "Perfect Overwatch",
    descriptionPVE:
      "After staying in cover for 8 seconds, increase your and all allies total weapon and skill damage by 12% as long as you remain in cover or in a cover-to-cover move.",
    descriptionPVP: "",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Ferocious Calm - Brand: Fenris Group AB",
  },
  {
    piece: "CHEST",
    type: "HEALSPT",
    name: "Mad Bomber",
    descriptionPVE:
      'Grenade radius is increased by 50%. Grenades that kill an enemy are refunded. Grenades can now be "cooked" by holding the fire button, making them explode earlier. Gain 15% bonus armor while aiming grenades.',
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "CHEST",
    type: "HEALSPT",
    name: "Empathic Resolve",
    descriptionPVE:
      "Repairing an ally, increases their total weapon and skill damage by 3-15% for 20 seconds. 1-7% if self. Effectiveness increased by your skill tier.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "WPNDPS",
    name: "Vigilance",
    descriptionPVE:
      "Increases total weapon damage by 25%. Taking damage disables this buff for 4 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "WPNDPS",
    name: "Perfect Vigilance",
    descriptionPVE:
      "Increases total weapon damage by 25%. Taking damage disables this buff for 3 seconds.",
    descriptionPVP: "",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "The Gift - Brand: Providence Defence",
  },
  {
    piece: "BACKPACK",
    type: "WPNDPS",
    name: "Versatile",
    descriptionPVE:
      "Amplifies total weapon damage for 10 seconds when swapping between your primary and secondary weapons if they are different. 35% to enemies within 15 meters for Shotguns and SMGs. 35% to enemies further than 25 meters for Rifles and Marksman Rifles. 10% to enemies between 15 - 25 meters for LMGs and Assault Rifles. At most once per 5 seconds per weapon type.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "WPNDPS",
    name: "Unstoppable Force",
    descriptionPVE:
      "Killing an enemy increases total weapon damage by 5% for 15 seconds. Stacks up to 5 times.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "WPNDPS",
    name: "Opportunistic",
    descriptionPVE:
      "Enemies you hit with shotguns and marksman rifles amplifies the damage they take by 10% from all sources for 5 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "WPNDPS",
    name: "Concussion",
    descriptionPVE:
      "Headshots increase total weapon damage by 10% for 1.5 seconds. 5 seconds with marksman rifles. Headshot kills additionally increase total weapon damage by 15% for 10 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "WPNDPS",
    name: "Composure",
    descriptionPVE: "While in cover, increases total weapon damage by 15%.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "WPNDPS",
    name: "Companion",
    descriptionPVE:
      "While you are within 5 meters of an ally or skill, total weapon damage is increased by 15%.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "TANK",
    name: "Protector",
    descriptionPVE:
      "When your shield is damaged, you gain 5% and all other allies gain 15% of your armor as bonus armor for 3 seconds. Cooldown is 3 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "TANK",
    name: "Leadership",
    descriptionPVE:
      "Performing a cover to cover grants 15% of your armor as bonus armor to you and all allies for 10 seconds. This is doubled if you end within 10 meters of an enemy. Cooldown is 10 seconds.",
    descriptionPVP:
      "Performing a cover to cover grants 10% of your armor as bonus armor to you and all allies for 10 seconds. This is doubled if you end within 10 meters of an enemy. Cooldown is 10 seconds.",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "TANK",
    name: "Bloodsucker ",
    descriptionPVE:
      "Killing an enemy adds and refreshes a stack of 10% bonus armor for 10 seconds. Max stack is 10.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "TANK",
    name: "Perfect Bloodsucker",
    descriptionPVE:
      "Killing an enemy adds and refreshes a stack of 12% bonus armor for 10 seconds. Max stack is 10",
    descriptionPVP: "",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Liquid Engineer - Brand: Belstone Armory",
  },
  {
    piece: "BACKPACK",
    type: "TANK",
    name: "Adrenaline Rush",
    descriptionPVE:
      "Whenever you are within 10 meters of an enemy, gain 20% bonus armor for 5 seconds. Stacks up to 3 times. Cooldown: 5 seconds.",
    descriptionPVP:
      "Whenever you are within 10 meters of an enemy, gain 10% bonus armor for 5 seconds. Stacks up to 3 times. Cooldown: 5 seconds.",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "TANK",
    name: "Perfect Adrenaline Rush",
    descriptionPVE:
      "Whenever you are within 10 meters of an enemy, gain 23% bonus armor for 5 seconds. Stacks up to 3 times. Cooldown: 5 seconds.",
    descriptionPVP:
      "Whenever you are within 10 meters of an enemy, gain 12% bonus armor for 5 seconds. Stacks up to 3 times. Cooldown: 5 seconds.",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Matador - Brand: Walker, Harris & Co.",
  },
  {
    piece: "BACKPACK",
    type: "SUSTAIN",
    name: "Clutch",
    descriptionPVE:
      "If you are below 15% armor, critical hits repair 2.5% missing armor. Kills allow you to repair up to 100% armor for 4-10 seconds, based on your [Weapon] core attribute.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "SUSTAIN",
    name: "Perfect Clutch",
    descriptionPVE:
      "If you are below 20% armor, critical hits repair 2.5% missing armor. Kills allow you to repair up to 100% armor for 4-10 secondss, based on your [Weapon] core attribute.",
    descriptionPVP: "",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Devils Due - Brand: Ceska Vyroba s.r.o.",
  },
  {
    piece: "BACKPACK",
    type: "STATUS",
    name: "Wicked",
    descriptionPVE:
      "Applying a status effect increases total weapon damage by 18% for 20 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "STATUS",
    name: "Perfectly Wicked",
    descriptionPVE:
      "Applying a status effect increases total weapon damage by 18% for 27 seconds.",
    descriptionPVP: "",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Anarchists Cookbook - Brand: Golan Gear",
  },
  {
    piece: "BACKPACK",
    type: "STATUS",
    name: "Galvanize",
    descriptionPVE:
      "Applying a Blind, Ensnare, Confuse, or Shock to an enemy grants 40% of your armor as bonus armor to you and all allies within 20 meters of that enemy for 10 seconds.",
    descriptionPVP:
      "Applying a Blind, Ensnare, Confuse, or Shock to an enemy grants 20% of your armor as bonus armor to you and all allies within 20 meters of that enemy for 10 seconds.",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "STATUS",
    name: "Creeping Death",
    descriptionPVE:
      "When you apply a status effect, it is also applied to all enemies within 8 meters of your target. Cooldown is 15 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "SKILLDPS",
    name: "Tech Support",
    descriptionPVE:
      "Skill kills increase total skill damage by 25% for 20 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "SKILLDPS",
    name: "Perfect Tech Support",
    descriptionPVE:
      "Skill kills increase total skill damage by 25% for 27 seconds.",
    descriptionPVP: "",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Percussive Maintenance - Brand: Alps Summit Armament",
  },
  {
    piece: "BACKPACK",
    type: "SKILLDPS",
    name: "Shock and Awe",
    descriptionPVE:
      "Applying a status effect to an enemy increases total skill damage and repair by 20% for 20 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "SKILLDPS",
    name: "Perfect Shock and Awe",
    descriptionPVE:
      "Applying a status effect to an enemy increases total skill damage and repair by 20% for 27 seconds.",
    descriptionPVP: "",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Strategic Alignment - Brand: China Light Industries",
  },
  {
    piece: "BACKPACK",
    type: "SKILLDPS",
    name: "Combined Arms",
    descriptionPVE:
      "Shooting an enemy increases total skill damage by 25% for 3 seconds.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "SKILLDPS",
    name: "Perfect Combined Arms",
    descriptionPVE:
      "Shooting an enemy increases total skill damage by 30% for 3 seconds.",
    descriptionPVP: "",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Force Multiplier - Brand: Hana-U Corporation",
  },
  {
    piece: "BACKPACK",
    type: "SKILLDPS",
    name: "Calculated",
    descriptionPVE: "Kills from cover reduce skill cooldowns by 10%.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  {
    piece: "BACKPACK",
    type: "SKILLDPS",
    name: "Perfectly Calculated",
    descriptionPVE: "Kills from cover reduce skill cooldowns by 15%.",
    descriptionPVP: "",
    isNamed: "YES",
    isExotic: "NO",
    specificPieceName: "Battery Pack - Brand: Empress International",
  },
  {
    piece: "BACKPACK",
    type: "HEALSPT",
    name: "Safeguard",
    descriptionPVE:
      "While at full armor, increases total skill repair by 100%.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
  {
    piece: "BACKPACK",
    type: "HEALSPT",
    name: "Overclock",
    descriptionPVE:
      "You and allies within 7 meters of your deployed skills, gain 25% reload speed and reduces active cooldowns by 0.2s each second.",
    descriptionPVP: "",
    isNamed: "NO",
    isExotic: "NO",
    specificPieceName: "",
  },
];
