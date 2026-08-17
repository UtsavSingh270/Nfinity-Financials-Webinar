import HomePage from "@/components/HomePage";
import { getWebinars } from "@/lib/webinars";
import { getHosts } from "@/lib/hosts";
export const dynamic = "force-dynamic";
export default async function Page() {
  const [webinars, hosts] = await Promise.all([getWebinars(), getHosts()]);
  return <HomePage webinars={webinars} hosts={hosts} />;
}
