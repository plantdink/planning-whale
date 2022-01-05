function timestamp() {
  const stamp =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stamp).toISOString();
}

export const weapons = [
  {
    category: "",
    variant: "",
    name: "",
    modSlots: 0,
    accuracy: 0,
    stability: 0,
    optimalRange: 0,
    maxRange: 0,
    roundsPerMinute: 0,
    magazineSize: 0,
    reloadSpeed: 0,
    reloadSpeedFromEmpty: 0,
    headshotMultiplier: 0,
    weaponBonusDamage: 0,
    maximumBonusPercent: 0,
    damageLevel40: 0,
    damageWorldTier5: 0,
  },
];
