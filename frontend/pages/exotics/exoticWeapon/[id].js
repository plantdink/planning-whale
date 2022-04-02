import SingleWeapon from "../../../components/SingleWeapon";
import HeadSEOTag from '../../../components/HeadSEOTag';


export default function SingleWeaponPage()({ query }) {
    return (
        // <HeadSEOTag seoTag={} />
        <SingleWeapon id={query.id} />
    );
}