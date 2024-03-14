// Node Modules
import Image from "next/image";

// Services
import { getPageContentFromContentful } from "@/src/Services/contentfulService";

// Constants
import { contentfulEntryIds } from "@/src/Constants/contentfulEntryIds";

export default async function Home() {
  const content = await getPageContentFromContentful(contentfulEntryIds.homePage);

  
  const {
    heading,
    homePage: page,
    backgroundHeroImage: {
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
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg">
      <h1>{page}</h1>
      <h3>{heading}</h3>
      <Image loading="lazy" alt={description} src={`https:${url}`} width={width} height={height}/>
    </main>
  );
}
