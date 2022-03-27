import Link from 'next/link';
import { ListItem, ListTitle } from '../styles/ListStyles';

export default function ExoticArmourPiece({ exoticArmourPiece }) {
  console.log(exoticArmourPiece);
  return (
    <ListItem>
      <img
        src={exoticArmourPiece.image?.image.publicUrlTransformed}
        alt={`${exoticArmourPiece.name} icon`}
      />
      <ListTitle>
        <Link href={`/exotics/exoticArmourPiece/${exoticArmourPiece.id}`}>
          {exoticArmourPiece.name}
        </Link>
      </ListTitle>
    </ListItem>
  );
}
