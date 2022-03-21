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
  __typename: 'Weapon',
  id: '61dd3d32598cb7333ed90914',
  class: 'ASSAULT RIFLE',
  family: 'ACR',
  model: 'ACR-E',
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
  flavourText: null,
  isNamed: 'NO',
  isExotic: 'NO',
});

export {
  makePaginationMocksFor,
  LocalStorageMock,
  fakeChestArmourTalent,
  fakeBackpackArmourTalent,
  fakeWeaponTalent,
  fakeWeapon,
};
