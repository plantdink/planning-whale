import Link from 'next/link';
import { LinkStyles, TitleLink } from './styles/LinkStyles';
import { weaponTalentIcon } from './ItemIcons';

export default function LinkSmallWeaponTalent({ weapon }) {
  return (
    <>
      {weapon.weaponTalent !== [] && (
        <>
          {weapon.weaponTalent.map((talent) => (
            <LinkStyles>
              <TitleLink key={talent.id}>
                <Link href={`/talents/weaponTalent/${talent.id}`}>
                  {talent.name}
                </Link>
              </TitleLink>
              <img
                className="standard-item"
                src={
                  talent.image?.image.publicUrlTransformed || weaponTalentIcon
                }
                alt={talent.title}
              />
            </LinkStyles>
          ))}
        </>
      )}
    </>
  );
}
