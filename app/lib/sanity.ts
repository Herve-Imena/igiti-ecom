import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

type ImageSource = {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
