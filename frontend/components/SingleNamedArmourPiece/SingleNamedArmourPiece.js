import HeadSEO from '../HeadSEO';
import SingleArmourPiece from '../SingleArmourPiece';

export default function SingleNamedArmourPiece({ singleNamedPiece }) {
  return (
    <>
      <HeadSEO seoTag={singleNamedPiece.name} />
      <SingleArmourPiece armourPiece={singleNamedPiece} />
    </>
  );
}
