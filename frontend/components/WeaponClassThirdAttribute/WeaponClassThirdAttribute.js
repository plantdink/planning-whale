export default function WeaponClassThirdAttribute({ weapon }) {
  // console.log('Weapon', weapon);
  const classDisplayArray = [];

  if (weapon.class === 'ASSAULT RIFLE' && weapon.weaponThirdAttribute) {
    weapon.weaponThirdAttribute.forEach((attribute) => {
      if (attribute.classARAttribute === true)
        classDisplayArray.push(attribute);
    });
  }

  if (weapon.class === 'LIGHT MACHINE GUN' && weapon.weaponThirdAttribute) {
    weapon.weaponThirdAttribute.forEach((attribute) => {
      if (attribute.classLMGAttribute === true)
        classDisplayArray.push(attribute);
    });
  }

  if (weapon.class === 'MARKSMAN RIFLE' && weapon.weaponThirdAttribute) {
    weapon.weaponThirdAttribute.forEach((attribute) => {
      if (attribute.classMMRAttribute === true)
        classDisplayArray.push(attribute);
    });
  }

  if (weapon.class === 'PISTOL' && weapon.weaponThirdAttribute) {
    weapon.weaponThirdAttribute.forEach((attribute) => {
      if (attribute.classPistolAttribute === true)
        classDisplayArray.push(attribute);
    });
  }

  if (weapon.class === 'RIFLE' && weapon.weaponThirdAttribute) {
    weapon.weaponThirdAttribute.forEach((attribute) => {
      if (attribute.classRifleAttribute === true)
        classDisplayArray.push(attribute);
    });
  }

  if (weapon.class === 'SHOTGUN' && weapon.weaponThirdAttribute) {
    weapon.weaponThirdAttribute.forEach((attribute) => {
      if (attribute.classShotgunAttribute === true)
        classDisplayArray.push(attribute);
    });
  }

  if (weapon.class === 'SUB MACHINE GUN' && weapon.weaponThirdAttribute) {
    weapon.weaponThirdAttribute.forEach((attribute) => {
      if (attribute.classSMGAttribute === true)
        classDisplayArray.push(attribute);
    });
  }

  return (
    <>
      {classDisplayArray.length > 0 && (
        <>
          <div className="single-weapon__details">
            <div className="single-weapon__title-bar">
              <h3 className="single-weapon__subheading">
                Third Attribute (Level 40)
              </h3>
            </div>
            <ul>
              {classDisplayArray.length > 0 &&
                classDisplayArray.map((attribute) => (
                  <li key={attribute.id}>{attribute.valueLevel40}</li>
                ))}
            </ul>
          </div>
          <div className="single-weapon__details">
            <div className="single-weapon__title-bar">
              <h3 className="single-weapon__subheading">
                Third Attribute (World Tier 5)
              </h3>
            </div>
            <ul>
              {classDisplayArray.length > 0 &&
                classDisplayArray.map((attribute) => (
                  <li key={attribute.id}>{attribute.valueWT5}</li>
                ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
