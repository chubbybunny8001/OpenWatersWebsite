// Node Modules
import Image from "next/image";

// Services
import { getContentByEntryId } from "@/src/Services/contentfulService";

// Constants
import { contentfulEntryIds } from "@/src/Constants/contentfulEntryIds";

// Components
import WaterOverlay from "@/src/Components/Global/WaterOverlay";

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
      <WaterOverlay>
        <Image
          alt={description}
          loading="lazy"
          className="lg:w-[30%] md:h-full:w=[20%] w-[50%]"
          height={height}
          src={url}
          width={width}
          />
        <h1 className="md:w-[40%] lg:w-[45%] lg:text-6xl text-4xl text-brand-secondary font-berkshire text-center self-center align-middle w-[90%]">{heading}</h1>
      </WaterOverlay>
      <section className="w-full h-32 bg-brand-black">Hello World</section>
    </main>
  );
}
