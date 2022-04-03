export default function ExoticWeaponAttachment({ weapon }) {
  return (
    <>
      <div className="single-weapon__details">
        <div className="single-weapon__title-bar">
          <h3 className="single-weapon__subheading">Exotic Attachments</h3>
        </div>
        <ul>
          {exoticWeaponAttachment.map((attribute) => (
            <li key={attribute.id}>{attribute.valueLevel40}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
