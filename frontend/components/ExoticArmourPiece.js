import Link from 'next/link';
import { ListItem, ListTitle } from './styles/ListStyles';

export default function ExoticArmourPiece({ exoticArmourPiece }) {
  return (
    <ListItem>
      <img />
      <ListTitle>
        <Link href={`/exotics/exoticArmourPiece/${exoticArmourPiece.id}`}>
          {exoticArmourPiece.name}
        </Link>
      </ListTitle>
    </ListItem>
  );
}
