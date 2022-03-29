export default function WeaponClasses() {
  return (
    <>
      <div className="single-gear-item__title-bar">
        <h1 className="single-gear-item__heading">Weapons</h1>
      </div>

      <div className="single-gear-item__content">
        <div className="single-gear-item__details">
          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Background</h2>
          </div>
          <p>
            Agents will at times be required to secure suitable weapons from a
            variety of sources and it is expected they will be proficient with
            all classes of weapons. As an Agent you will naturally find that one
            or two classes of weapons will suit your individual operational
            preferences and it is expected that you will gain a high degree of
            proficiency using these weapon classes.
          </p>
          <p>
            When the tactical situation dictates, an Agent will be required to
            conduct operations with up to 7 other agents. By utilising a mix of
            weapon classes and understanding the strengths and weaknesses of
            each class, a group of agents will have a large impact on an enemy
            group that is many times larger.
          </p>

          <div className="single-gear-item__title-bar">
            <h2 className="single-gear-item__subheading">Weapon Stats</h2>
          </div>
          <p>
            All weapons that an agent will use during operations come with a
            total of 3 attributes, Weapon damage, a class specific fixed second
            attribute, a random third attribute and a single random talent. Each
            weapon will also have from 1 - 4 modification slots that agents can
            mount a range of attachments to in order to customise each weapon to
            their particular preferences.
          </p>
          <p>
            A Named weapon will usually come with a fixed talent that has a
            higher value than the normal version of the talent. Exotic weapons
            may come with more than one talent, or have a combination of class
            specific attributes. Exotic weapons will also have fixed
            modification slots that are unable to be modified by an agent.
          </p>
        </div>
      </div>
    </>
  );
}
