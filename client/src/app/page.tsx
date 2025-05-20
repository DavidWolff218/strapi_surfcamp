
import { getHomePage } from "@/data/loaders";

import { BlockRenderer } from "@/components/BlockRenderer";

const loader = async () => {
  const data = await getHomePage();
  console.log(data);
  return { ...data.data };
};

export default async function Home() {
  const data = await loader();
  const blocks = data?.blocks || [];
  return <BlockRenderer blocks={blocks} />;
}
