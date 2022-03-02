import Link from 'next/link';
import { LinkStyles, TitleLink } from './styles/LinkStyles';

export default function LinkSmallBrand({ brand }) {
  const brandUrl = `/gear/brand/${brand.id}`;

  return (
    <>
      <div className="single-gear-item__details">
        <LinkStyles>
          <TitleLink>
            <Link key={brand.id} href={brandUrl}>
              {brand.name}
            </Link>
          </TitleLink>
          <img
            className="standard-item"
            src={brand.image?.image.publicUrlTransformed}
            alt={brand.name}
          />
        </LinkStyles>
      </div>
    </>
  );
}
