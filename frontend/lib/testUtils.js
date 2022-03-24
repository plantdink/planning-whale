import { WEAPON_PAGINATION_QUERY } from '../queries/PaginationQueries';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

function makePaginationMocksFor(length) {
  return [
    {
      request: { query: WEAPON_PAGINATION_QUERY },
      result: {
        data: {
          _allWeaponsMeta: {
            count: length,
          },
          itemsConnection: {
            __typename: 'aggregate',
            aggregate: {
              count: length,
              __typename: 'count',
            },
          },
        },
      },
    },
  ];
}

const fakeChestArmourTalent = () => ({
  __typename: 'ArmourTalent',
  id: '12345678abcde',
  name: 'Fake Talent',
  piece: 'Chest',
  type: 'Fake chest talent type',
  descriptionPVE:
    'Cliche ipsum waistcoat, mollit knausgaard bespoke eiusmod do. Prism biodiesel fingerstache franzen pickled banh mi duis ethical. Kogi try-hard pariatur deep v, velit ut lo-fi ut vaporware af twee dreamcatcher. Cillum incididunt humblebrag tofu ipsum velit, banjo readymade flannel ut affogato stumptown. Poutine exercitation godard four loko, tumblr chia pop-up.',
  descriptionPVP:
    'Consectetur snackwave poutine polaroid voluptate YOLO sed. Skateboard duis iPhone direct trade sustainable blue bottle anim subway tile fanny pack. Selfies meditation ipsum anim mumblecore sint ad, palo santo williamsburg migas sed franzen typewriter nisi sustainable. Asymmetrical freegan swag velit gochujang mollit banjo nisi authentic gluten-free et. Quis nisi kinfolk enim VHS. Anim drinking vinegar cloud bread, cornhole farm-to-table butcher non swag cronut XOXO esse crucifix hella keffiyeh. Sunt banjo blue bottle, quinoa affogato nostrud vaporware.',
  isNamed: 'NO',
  namedItem: 'Fake Talent Named Chest',
  namedArmourPiece: {
    id: 'p98np8bougc',
    piece: 'Chest',
    name: 'Fake Talent Named Chest',
  },
  brand: {
    id: 'lkjngbui',
    name: 'Fake Brand name',
    image: {
      id: 'lk893yagc',
      image: {
        publicUrlTransformed: 'fakeBrandImage.jpg',
      },
    },
  },
  isExotic: 'NO',
  exoticItem: '',
  exoticArmourPiece: {
    id: '',
    name: '',
  },
  image: {
    id: '0987nimge',
    altText: 'Fake chest talent image alt text',
    image: {
      publicUrlTransformed: 'fakeChestArmourTalent.png',
    },
  },
});

const fakeBackpackArmourTalent = () => ({
  __typename: 'ArmourTalent',
  id: 'abcde12345678',
  name: 'Fake Talent',
  piece: 'Backpack',
  type: 'Fake backpack talent type',
  descriptionPVE:
    'Cliche ipsum waistcoat, mollit knausgaard bespoke eiusmod do. Prism biodiesel fingerstache franzen pickled banh mi duis ethical. Kogi try-hard pariatur deep v, velit ut lo-fi ut vaporware af twee dreamcatcher. Cillum incididunt humblebrag tofu ipsum velit, banjo readymade flannel ut affogato stumptown. Poutine exercitation godard four loko, tumblr chia pop-up.',
  descriptionPVP:
    'Consectetur snackwave poutine polaroid voluptate YOLO sed. Skateboard duis iPhone direct trade sustainable blue bottle anim subway tile fanny pack. Selfies meditation ipsum anim mumblecore sint ad, palo santo williamsburg migas sed franzen typewriter nisi sustainable. Asymmetrical freegan swag velit gochujang mollit banjo nisi authentic gluten-free et. Quis nisi kinfolk enim VHS. Anim drinking vinegar cloud bread, cornhole farm-to-table butcher non swag cronut XOXO esse crucifix hella keffiyeh. Sunt banjo blue bottle, quinoa affogato nostrud vaporware.',
  isNamed: 'NO',
  namedItem: 'Fake Talent Named Backpack',
  namedArmourPiece: {
    id: 'kljbchklhb',
    piece: 'Backpack',
    name: 'Fake Talent Named Backpack',
  },
  brand: {
    id: 'lkbuhmpmo',
    name: 'Fake Brand name',
    image: {
      id: 'lk893yagc',
      image: {
        publicUrlTransformed: 'fakeBrandImage.jpg',
      },
    },
  },
  isExotic: 'NO',
  exoticItem: '',
  exoticArmourPiece: {
    id: '',
    name: '',
  },
  image: {
    id: '0987nimge',
    altText: 'Fake backpack talent image alt text',
    image: {
      publicUrlTransformed: 'fakeBackpackArmourTalent.png',
    },
  },
});

const fakeWeaponTalent = () => ({
  __typename: 'WeaponTalent',
  id: '78yhniuH8243',
  name: 'Fake Weapon Talent',
  type: 'Fake weapon type',
  descriptionPVE:
    'Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I’m in a transitional period so I don’t wanna kill you, I wanna help you. But I can’t give you this case, it don’t belong to me. Besides, I’ve already been through too much shit this morning over this case to hand it over to your dumb ass.',
  descriptionPVP:
    'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother’s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.',
  classARTalent: true,
  classLMGTalent: true,
  classMMRTalent: true,
  classPistolTalent: true,
  classRifleTalent: true,
  classShotgunTalent: true,
  classSMGTalent: true,
  isNamed: 'NO',
  isExotic: 'NO',
  image: {
    id: 'uibcgp89ybcp8hy5q',
    altText: 'Fake weapon talent image alt text',
    image: {
      publicUrlTransformed: 'fakeWeaponTalent.png',
    },
  },
});

// stats are same as ACR-E AR
const fakeWeapon = () => ({
  id: 'lkuhblcHNOINU',
  class: 'ASSAULT RIFLE',
  family: 'Test ACR',
  model: 'Test ACR-E',
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
  weaponBonusType: 'DTH',
  maxBonusValue: 21,
  damageLevel40: 53124,
  damageWt5: 11770,
  notes: '',
  isNamed: 'NO',
  isExotic: 'NO',
  weaponTalent: [
    {
      id: 'lnjczc',
      name: 'Fake Talent 1',
      image: {
        altText: 'Fake talent 1',
        image: {
          publicUrlTransformed: 'FakeTalent01.jpg',
          __typename: 'CloudinaryImage_File',
        },
        __typename: 'FieldManualImage',
      },
      __typename: 'WeaponTalent',
    },
    {
      id: 'pojcuyg834',
      name: 'FakeTalent 2',
      image: {
        altText: 'Fake Talent 2',
        image: {
          publicUrlTransformed: 'FakeTalent02.jpg',
          __typename: 'CloudinaryImage_File',
        },
        __typename: 'FieldManualImage',
      },
      __typename: 'WeaponTalent',
    },
  ],
  averageWeapon: {
    id: 'njuhebCVKJLR',
    class: 'ASSAULT RIFLE',
    magazineSize: 30,
    rpm: 730,
    modSlots: 3,
    reloadSpeed: 2013,
    reloadSpeedFromEmpty: 3365,
    accuracy: 422,
    stability: 594,
    optimalRange: 31,
    maxRange: 69,
    headshotMultiplier: 155,
    damageLevel40: 54403,
    damageWt5: 8990,
    __typename: 'AverageWeapon',
  },
  flavourText: null,
  image: {
    image: {
      publicUrlTransformed: 'FakeWeaponImage.jpg',
    },
  },
  __typename: 'Weapon',
});

const fakeAverageWeapon = () => ({
  id: 'njuhebCVKJLR',
  class: 'ASSAULT RIFLE',
  magazineSize: 30,
  rpm: 730,
  modSlots: 3,
  reloadSpeed: 2013,
  reloadSpeedFromEmpty: 3365,
  accuracy: 422,
  stability: 594,
  optimalRange: 31,
  maxRange: 69,
  headshotMultiplier: 155,
  damageLevel40: 54403,
  damageWt5: 8990,
  __typename: 'AverageWeapon',
});

const fakeWeaponQuery = () => ({
  id: 'lkuhblcHNOINU',
  class: 'ASSAULT RIFLE',
  model: 'Test Maniac',
  family: 'AK-47',
  magazineSize: 30,
  rpm: 600,
  modSlots: 4,
  reloadSpeed: 2200,
  reloadSpeedFromEmpty: 2700,
  accuracy: 477,
  stability: 640,
  optimalRange: 31,
  maxRange: 68,
  headshotMultiplier: 155,
  weaponBonusType: 'DTH',
  maxBonusValue: 21,
  damageLevel40: 60645,
  damageWt5: 13437,
  flavourText: null,
  isNamed: 'NO',
  isExotic: 'NO',
  weaponTalent: [
    {
      id: 'lnulbvclbcgl',
      name: 'Fake Weapon Talent',
      image: {
        image: {
          publicUrlTransformed: 'FakeWeapon.png',
          __typename: 'CloudinaryImage_File',
        },
        __typename: 'FieldManualImage',
      },
      __typename: 'WeaponTalent',
    },
  ],
  averageWeapon: {
    class: 'ASSAULT RIFLE',
    magazineSize: 30,
    rpm: 730,
    modSlots: 3,
    reloadSpeed: 2013,
    reloadSpeedFromEmpty: 3365,
    accuracy: 422,
    stability: 594,
    optimalRange: 31,
    maxRange: 69,
    headshotMultiplier: 155,
    damageLevel40: 54403,
    damageWT5: 8990,
    __typename: 'AverageWeapon',
  },
  __typename: 'Weapon',
});

const fakeAverageWeaponQuery = () => ({
  id: 'hvgrdexvkTFc',
  class: 'ASSAULT RIFLE',
  modSlots: 3,
  rpm: 730,
  magazineSize: 30,
  headshotMultiplier: 155,
  accuracy: 422,
  stability: 594,
  optimalRange: 31,
  maxRange: 69,
  reloadSpeed: 2013,
  reloadSpeedFromEmpty: 3365,
  damageLevel40: 54403,
  damageWT5: 8990,
  weaponTalent: [
    {
      id: 'mijqioj898',
      name: 'Fake Talent 1',
      image: {
        image: {
          publicUrlTransformed: 'FakeTalent.png',
          __typename: 'CloudinaryImage_File',
        },
        __typename: 'FieldManualImage',
      },
      __typename: 'WeaponTalent',
    },
    {
      id: 'bilwubcoiuqhb75',
      name: 'Fake Talent 2',
      image: {
        image: {
          publicUrlTransformed: 'FakeTalent2.png',
          __typename: 'CloudinaryImage_File',
        },
        __typename: 'FieldManualImage',
      },
      __typename: 'WeaponTalent',
    },
    {
      id: 'mijmncOICB6',
      name: 'Fake Talent 3',
      image: {
        image: {
          publicUrlTransformed: 'FakeTalent3.png',
          __typename: 'CloudinaryImage_File',
        },
        __typename: 'FieldManualImage',
      },
      __typename: 'WeaponTalent',
    },
  ],
  image: {
    image: {
      publicUrlTransformed: 'AverageWeaponImage.jpg',
      __typename: 'CloudinaryImage_File',
    },
    __typename: 'FieldManualImage',
  },
  __typename: 'AverageWeapon',
});

const fakeBrand = () => ({
  name: 'Maxx Tactical',
  coreAttribute: 'Armour',
  coreAttributeValueLevel40: '170,000 Armour',
  coreAttributeValueWT5: '42,458 Armour',
  setBonusOne: '10% Health',
  setBonusTwo: '20% Extra Incoming Healing',
  setBonusThree: '10% Hazard Protection',
  image: {
    image: {
      publicUrlTransformed: 'FakeNamedBrand.jpg',
      __typename: 'CloudinaryImage_File',
    },
    __typename: 'FieldManualImage',
  },
  notes:
    'Strategic Homeland Division has approved multiple Brand manufacturers to supply equipment for SHD agents. There are also numerous non-approved Brands that an agent may find during the conduct of operations and agents are authorised to use any equipment they need in order to complete their mission. Each Brand provides different benefits to an agent and their ability to conduct operations. Equipping items from the same brand will unlock different benefits, with 3 equipped providing the maximum Brand-specific benefit. Agents are encouraged to mix and match Brands to provide the best benefit to their preferred operational style.',
  armourTalent: [],
  armourType: [
    {
      id: 'cresdhjvjytfj',
      name: 'Deathgrips',
      piece: 'Gloves',
      isNamed: 'YES',
      image: {
        image: {
          publicUrlTransformed: 'FakeNamedItemImage01.jpg',
          __typename: 'CloudinaryImage_File',
        },
        __typename: 'FieldManualImage',
      },
      __typename: 'ArmourType',
    },
  ],
  __typename: 'Brand',
});

const fakeGearset = () => ({
  name: 'Fake Protocol',
  coreAttribute: 'Utility',
  coreAttributeValueLevel40: '+1 Skill Tier',
  coreAttributeValueWT5: '+1 Skill Tier',
  setBonusOne: '15% Status Effects',
  setBonusTwo: '15% Skill Haste, 30% Hazard Protection',
  setBonusName: 'Contagion',
  setBonusThree:
    'Enemies that die while affected by your status effects spread those status effects to another enemy within 10m and refresh the duration.',
  setBackpackTalentName: 'Symptom Aggravator',
  setBackpackTalent:
    'Amplifies all damage you deal to status affected targets by 30%',
  setChestTalentName: 'Proliferation',
  setChestTalent: 'Increase contagion range from 10m to 15m',
  image: {
    image: {
      publicUrlTransformed: 'FakeGearsetImage.png',
      __typename: 'CloudinaryImage_File',
    },
    altText: 'Eclipse Protocol gearset icon',
    __typename: 'FieldManualImage',
  },
  notes:
    'A Gear Set is a unique combination of equipment pieces that an Agent can obtain. Each Gear Set revolves around a specific operational capability and can strongly influence an agents overall approach to any situation they might face.\nUnlike a Brand set, the Chest and Backpack from a Gear Set do not have a specific Talent associated with them. Once a certain number of pieces of the same Gear Set are equipped, an agent will obtain various Set bonuses with all the bonuses available when four pieces are equipped. An agent must equip the Chest piece and Backpack in order to access the bonuses associated with each of these items.',
  __typename: 'Gearset',
});

const fakeArmourPiece = () => ({
  name: 'Nightwatcher',
  piece: 'Mask',
  modSlots: 1,
  coreAttributeTypeOne: 'N/A',
  coreAttributeTypeTwo: 'Armour',
  coreAttributeTypeThree: 'N/A',
  maxCoreDamageLevel40: 0,
  maxCoreArmourLevel40: 170000,
  maxCoreSkillTierLevel40: 0,
  maxCoreValueDamageLevel30: 99,
  maxCoreArmourLevel30: 42458,
  maxCoreSkillTierLevel30: 1,
  offensiveAttributeOneLevel40: 'Critical Hit Chance',
  offensiveAttributeTwoLevel40: 'Critical Hit Damage',
  offensiveAttributeThreeLevel40: 'Headshot Damage',
  offensiveAttributeFourLevel40: 'Weapon Handling',
  offensiveAttributeOneMaxValueLevel40: 60,
  offensiveAttributeTwoMaxValueLevel40: 150,
  offensiveAttributeThreeMaxValueLevel40: 100,
  offensiveAttributeFourMaxValueLevel40: 80,
  offensiveAttributeOneMaxValueLevel30: 51,
  offensiveAttributeTwoMaxValueLevel30: 79,
  offensiveAttributeThreeMaxValueLevel30: 69,
  offensiveAttributeFourMaxValueLevel30: 70,
  defensiveAttributeOneLevel40: 'Armour Regeneration',
  defensiveAttributeTwoLevel40: 'Explosive Resistance',
  defensiveAttributeThreeLevel40: 'Hazard Protection',
  defensiveAttributeFourLevel40: 'Health',
  defensiveAttributeOneMaxValueLevel40: 4925,
  defensiveAttributeTwoMaxValueLevel40: 100,
  defensiveAttributeThreeMaxValueLevel40: 100,
  defensiveAttributeFourMaxValueLevel40: 18935,
  defensiveAttributeOneMaxValueLevel30: 1223,
  defensiveAttributeTwoMaxValueLevel30: 66,
  defensiveAttributeThreeMaxValueLevel30: 66,
  defensiveAttributeFourMaxValueLevel30: 4695,
  utilityAttributeOneLevel40: 'Skill Damage',
  utilityAttributeTwoLevel40: 'Skill Haste',
  utilityAttributeThreeLevel40: 'Skill Repair',
  utilityAttributeFourLevel40: 'Status Effects',
  utilityAttributeOneMaxValueLevel40: 100,
  utilityAttributeTwoMaxValueLevel40: 120,
  utilityAttributeThreeMaxValueLevel40: 200,
  utilityAttributeFourMaxValueLevel40: 100,
  utilityAttributeOneMaxValueLevel30: 69,
  utilityAttributeTwoMaxValueLevel30: 79,
  utilityAttributeThreeMaxValueLevel30: 121,
  utilityAttributeFourMaxValueLevel30: 66,
  uniqueAttribute: '100% Pulse Haste',
  notes:
    'This mask has been manufactured by Gila Guard and comes with Armour as the primary Core attribute. It has one fixed minor attribute - 100% Scanner Pulse Haste - and one random minor attribute which can be any of the stats listed below. It also has one gear mod slot.',
  flavourText: 'Through glass and steel; looking at you; a view so cruel.',
  availableWT5: 'Yes',
  isNamed: 'YES',
  image: {
    image: {
      publicUrlTransformed:
        'https://res.cloudinary.com/dbm1h5w02/image/upload/v1647498165/agent-field-manual/6232d3b4ec80b2199ff2c03a.png',
      __typename: 'CloudinaryImage_File',
    },
    altText: 'Mask icon',
    __typename: 'FieldManualImage',
  },
  brand: [
    {
      id: '61dfa525d1abb420ae6001e6',
      name: 'Gila Guard',
      image: {
        image: {
          publicUrlTransformed:
            'https://res.cloudinary.com/dbm1h5w02/image/upload/v1644197027/agent-field-manual/620074a13e5849082bd94b09.png',
          __typename: 'CloudinaryImage_File',
        },
        __typename: 'FieldManualImage',
      },
      __typename: 'Brand',
    },
  ],
  armourTalent: [],
  __typename: 'ArmourType',
});

const fakeNamedArmourPiece = () => ({
  name: 'Fake Hunter-Killer',
  piece: 'Chest',
  modSlots: 1,
  coreAttributeTypeOne: 'N/A',
  coreAttributeTypeTwo: 'Armour',
  coreAttributeTypeThree: 'N/A',
  maxCoreDamageLevel40: 0,
  maxCoreArmourLevel40: 170000,
  maxCoreSkillTierLevel40: 0,
  maxCoreValueDamageLevel30: 99,
  maxCoreArmourLevel30: 42458,
  maxCoreSkillTierLevel30: 1,
  offensiveAttributeOneLevel40: 'Critical Hit Chance',
  offensiveAttributeTwoLevel40: 'Critical Hit Damage',
  offensiveAttributeThreeLevel40: 'Headshot Damage',
  offensiveAttributeFourLevel40: 'Weapon Handling',
  offensiveAttributeOneMaxValueLevel40: 60,
  offensiveAttributeTwoMaxValueLevel40: 120,
  offensiveAttributeThreeMaxValueLevel40: 100,
  offensiveAttributeFourMaxValueLevel40: 80,
  offensiveAttributeOneMaxValueLevel30: 51,
  offensiveAttributeTwoMaxValueLevel30: 79,
  offensiveAttributeThreeMaxValueLevel30: 69,
  offensiveAttributeFourMaxValueLevel30: 70,
  defensiveAttributeOneLevel40: 'Armour Regeneration',
  defensiveAttributeTwoLevel40: 'Explosive Resistance',
  defensiveAttributeThreeLevel40: 'Hazard Protection',
  defensiveAttributeFourLevel40: 'Health',
  defensiveAttributeOneMaxValueLevel40: 4925,
  defensiveAttributeTwoMaxValueLevel40: 100,
  defensiveAttributeThreeMaxValueLevel40: 100,
  defensiveAttributeFourMaxValueLevel40: 18935,
  defensiveAttributeOneMaxValueLevel30: 1223,
  defensiveAttributeTwoMaxValueLevel30: 66,
  defensiveAttributeThreeMaxValueLevel30: 66,
  defensiveAttributeFourMaxValueLevel30: 4695,
  utilityAttributeOneLevel40: 'Skill Damage',
  utilityAttributeTwoLevel40: 'Skill Haste',
  utilityAttributeThreeLevel40: 'Skill Repair',
  utilityAttributeFourLevel40: 'Status Effects',
  utilityAttributeOneMaxValueLevel40: 100,
  utilityAttributeTwoMaxValueLevel40: 120,
  utilityAttributeThreeMaxValueLevel40: 200,
  utilityAttributeFourMaxValueLevel40: 100,
  utilityAttributeOneMaxValueLevel30: 69,
  utilityAttributeTwoMaxValueLevel30: 79,
  utilityAttributeThreeMaxValueLevel30: 121,
  utilityAttributeFourMaxValueLevel30: 66,
  uniqueAttribute: null,
  notes:
    'This chest is manufactured by Golan Gear Ltd. It comes with Armour as its primary Core attribute, two minor attributes, Perfect Intimidate as the talent, one gear mod slot and can be found with any combination of stats listed below. A chest is a vital piece of an agents load-out and should be considered mandatory if you wish to survive.',
  flavourText:
    '"These guys came out of nowhere. Dressed to kill and armed to the teeth. Turns out, we were the ones they were sent to kill." - Division Agent',
  availableWT5: 'No',
  isNamed: 'YES',
  image: {
    image: {
      publicUrlTransformed: 'FakeArmourPiece.jpg',
      __typename: 'CloudinaryImage_File',
    },
    altText: 'Chest icon',
    __typename: 'FieldManualImage',
  },
  brand: [
    {
      id: 'nlkbhblhb',
      name: 'Golan Gear Ltd',
      image: {
        image: {
          publicUrlTransformed: 'FakeBrandImage.jpg',
          __typename: 'CloudinaryImage_File',
        },
        __typename: 'FieldManualImage',
      },
      __typename: 'Brand',
    },
  ],
  armourTalent: [
    {
      id: ' rdvuty23684',
      name: 'Perfect Intimidate',
      piece: 'Chest',
      descriptionPVE:
        'While you have bonus armour, amplifies total weapon damage by 40% to enemies within 10 meters.',
      isNamed: 'YES',
      isExotic: 'NO',
      image: {
        image: {
          publicUrlTransformed: 'FakeArmourTalentImage.jpg',
          __typename: 'CloudinaryImage_File',
        },
        __typename: 'FieldManualImage',
      },
      __typename: 'ArmourTalent',
    },
  ],
  __typename: 'ArmourType',
});

export {
  makePaginationMocksFor,
  LocalStorageMock,
  fakeChestArmourTalent,
  fakeBackpackArmourTalent,
  fakeWeaponTalent,
  fakeWeapon,
  fakeAverageWeapon,
  fakeWeaponQuery,
  fakeAverageWeaponQuery,
  fakeBrand,
  fakeGearset,
  fakeArmourPiece,
  fakeNamedArmourPiece,
};
