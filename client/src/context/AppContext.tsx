import { createContext, useContext, useEffect, useState } from "react";
import { createClient, groq } from 'next-sanity'
import urlBuilder from '@sanity/image-url'

const AppContext = createContext<any>({});
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export default function AppContextProvider({ children }: any) {
  const [banner1, setBanner1] = useState<{img:string, body:string}>({img:"", body: ""});
  useEffect(() => {
    const client = createClient({
      projectId,
      dataset,
      apiVersion, // https://www.sanity.io/docs/api-versioning
      useCdn: true, // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
    });

    const imageBuilder = urlBuilder(client);

    const query = groq`
    *[slug.current=="banner-1"]
    `
    client.fetch(query).then(async (data) => {
      console.log(data);
      setBanner1({
        img: imageBuilder.image(data[0].mainImage).url(),
        body: data[0].body.map((e:any) => e.children[0].text).join(" ")
      })
    })
  }, []);

  return (
    <AppContext.Provider value={{
      banner1
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
