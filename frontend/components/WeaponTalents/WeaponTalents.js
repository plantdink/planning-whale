import { useQuery, gql } from '@apollo/client';
// import { ALL_WEAPON_TALENTS_QUERY } from '../../queries/TalentQueries';
import WeaponTalent from '../WeaponTalent';
import { ListStyles } from '../styles/ListStyles';
import { perPage } from '../../config';
import DisplayError from '../ErrorMessage';

export const ALL_WEAPON_TALENTS_QUERY = gql`
  query ALL_WEAPON_TALENTS_QUERY($skip: Int = 0, $first: Int) {
    allWeaponTalents(first: $first, skip: $skip) {
      id
      name
      image {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

export default function WeaponTalents({ page }) {
  const { data, loading, error } = useQuery(ALL_WEAPON_TALENTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  if (loading) return <p>Loading....</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <>
      <ListStyles>
        {data.allWeaponTalents.map((weaponTalent) => (
          <WeaponTalent
            key={weaponTalent.id}
            weaponTalent={weaponTalent}
            img={weaponTalent.image?.image.publicUrlTransformed}
          />
        ))}
      </ListStyles>
    </>
  );
}
