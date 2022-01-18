import SingleArmourPiece from '../../components/SingleArmourPiece';

export default function SingleArmourTypePage({ query }) {
  console.log(query);
  return <SingleArmourPiece id={query.id} />;
}
