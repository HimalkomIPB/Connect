import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: "2023-03-04",
    useCDN: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = new imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);