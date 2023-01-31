import { createContext, useContext, useEffect, useState } from "react";
import { createClient, groq } from 'next-sanity'
import urlBuilder from '@sanity/image-url'

const AppContext = createContext<any>({});
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export default function AppContextProvider({ children }: any) {
  const [banner1, setBanner1] = useState<{title?: string, img:string, body:string}>({img:"", body: ""});
  const [banner2, setBanner2] = useState<{title?: string, img:string, body:string}>({img:"", body: ""});
  const [services, setServices] = useState<any[]>([]);
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
        body: data[0].body
      })
    });

    const query2 = groq`
    *[_type=="service"]
    `
    client.fetch(query2).then(async (data) => {
      console.log(data);
      setServices(data.map((e:any) => ({
        ...e,
        icon: imageBuilder.image(e.icon).url()
      })))
    });

    const query3 = groq`
    *[slug.current=="banner-2"]
    `
    client.fetch(query3).then(async (data) => {
      console.log(data);
      setBanner2({
        title: data[0].title,
        img: data[0] && imageBuilder.image(data[0].mainImage).url(),
        body: data[0].body
      })
    })
  }, []);

  return (
    <AppContext.Provider value={{
      banner1,
      banner2,
      services
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
