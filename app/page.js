// Node Modules
import Image from "next/image";

// Services
import { getContentByEntryId } from "@/src/Services/contentfulService";

// Constants
import { contentfulEntryIds } from "@/src/Constants/contentfulEntryIds";

// Components
import WaterBackground from "@/src/Components/Global/WaterBackground";

export default async function Home() {
  const content = await getContentByEntryId(contentfulEntryIds.homePage);

  
  const {
    heading,
    homePage: page,
    heroLogo: {
      fields: {
        description,
        file: {
          url,
          details: {
            image: {
              width,
              height
            }
          }
        }
      }
    }
  } = content.fields

  return (
    <main className="flex flex-col w-full h-full">
      <WaterBackground className={"flex items-center justify-around w-screen h-screen bg-background-water"}>
        <Image
          alt={description}
          height={height}
          src={url}
          width={width}
        />
        <h1 className="text-4xl underline font-berkshire">{heading}</h1>
      </WaterBackground>
      <section className="w-full h-32 bg-slate-900"></section>
    </main>
  );
}
