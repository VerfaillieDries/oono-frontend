import * as prismic from '@prismicio/client';

const repoName = 'pandpanda-test';

export const getApiClient = () => {
  const endpoint = prismic.getEndpoint(repoName);
  const client = prismic.createClient(endpoint);
  return client;
};
