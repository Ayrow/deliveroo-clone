import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = SanityClient({
  projectId: 'cxolgfew',
  dataset: 'production',
  useCdn: true,
  // apiVersion: '',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
