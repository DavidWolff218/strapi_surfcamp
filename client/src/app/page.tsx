import { HeroSection } from "@/components/blocks/HeroSection";
import { getHomePage } from "@/data/loaders";

const loader = async () => {
  const data = await getHomePage();
  console.log(data)
  return {...data.data}
};

export default async function Home() {
  const data = await loader();
  const blocks = data?.blocks || [];
  return (
    <div>
      <HeroSection {...blocks[0]} />
    </div>
  );
}
