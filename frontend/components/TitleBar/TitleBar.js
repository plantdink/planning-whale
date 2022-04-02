export default function TitleBar({ item }) {
  let title;
  // if (item.__typename === 'Weapon') title =  item.model;
  if (item.__typename === 'AverageWeapon') title = item.class;
  if (item.__typename === 'Weapon') title = item.model;
  return (
    <>
      <div className="single-weapon__title-bar">
        <h1 className="single-weapon__heading">{title}</h1>
      </div>
    </>
  );
}

export function SubHeadingBar({ subHeading }) {
  return (
    <>
      <div className="single-weapon__title-bar">
        <h3 className="single-weapon__section-heading">{subHeading}</h3>
      </div>
    </>
  );
}
