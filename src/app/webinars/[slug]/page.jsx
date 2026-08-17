import HomePage from "@/components/HomePage";
import { getWebinars } from "@/lib/webinars";
export default async function WebinarRoute({ params }) {
    const { slug } = await params;
    return <HomePage webinars={await getWebinars()} initialSlug={slug}/>;
}
