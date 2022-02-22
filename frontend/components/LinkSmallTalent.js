import Link from 'next/link';
import { LinkStyles, TitleLink } from './styles/LinkStyles';
import { lowerCaseFirstLetter, lowerCaseLink } from '../lib/displayStrings';
import { chestIcon, backpackIcon } from './ItemIcons';

export default function LinkSmallTalent({ talent }) {
  const classArray = [];

  // set classArray for a chest talent, link to generic chest
  if (
    talent.__typename === 'ArmourTalent' &&
    talent.piece === 'Chest' &&
    talent.isNamed === 'NO' &&
    talent.isExotic === 'NO'
  ) {
    classArray.push({
      title: `${talent.piece}`,
      link: `/gear/armourType/61e4fa8b4568c11c0804cd2e`,
      image: `${talent.image?.image.publicUrlTransformed || chestIcon}`,
      id: `620b16903f985c08074b794c`,
    });
  }

  // set classArray for a backpack talent, link to generic backpack
  if (
    talent.__typename === 'ArmourTalent' &&
    talent.piece === 'Backpack' &&
    talent.isNamed === 'NO' &&
    talent.isExotic === 'NO'
  ) {
    classArray.push({
      title: `${talent.piece}`,
      link: `/gear/armourType/61e4fb8f4568c11c0804cd7c`,
      image: `${talent.image?.image.publicUrlTransformed || backpackIcon}`,
      id: `620b16713f985c08074b7886`,
    });
  }

  // set classArray for a Named armour talent, link to that specific item
  if (talent.__typename === 'ArmourTalent' && talent.isNamed === 'YES') {
    classArray.push({
      title: `${talent.name}`,
      link: `/talents/${lowerCaseLink(talent.__typename)}/${talent.id}`,
      image: `${
        talent.image?.image.publicUrlTransformed ||
        (talent.piece === 'Chest' ? chestIcon : backpackIcon)
      }`,
      id: `${talent.id}`,
    });
  }

  // set classArray for an Exotic armour talent, link to that specific item
  if (talent.__typename === 'ArmourTalent' && talent.isExotic === 'YES') {
    classArray.push({
      title: `${talent.name}`,
      link: `/talents/${lowerCaseLink(talent.__typename)}/${talent.id}`,
      image: `${talent.piece === 'Chest' ? chestIcon : backpackIcon}`,
      id: `${talent.id}`,
    });
  }

  return (
    <>
      {talent.__typename === 'ArmourTalent' && (
        <>
          <div className="single-gear-item__details">
            <div className="single-gear-item__subheading">
              {classArray.map((arrayItem) => (
                <LinkStyles>
                  <TitleLink>
                    <Link key={arrayItem.id} href={arrayItem.link}>
                      {arrayItem.title}
                    </Link>
                  </TitleLink>
                  <img
                    className="standard-item"
                    src={arrayItem.image}
                    alt={arrayItem.class}
                  />
                </LinkStyles>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
