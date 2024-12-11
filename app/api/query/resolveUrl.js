const gql = String.raw;

export const GET_RESOLVE_URL = `
    query ResolveURL($url: String!) {
      route(url: $url) {
        relative_url
        redirect_code
        type
        ... on CmsPage {
          identifier
          __typename
        }
        ... on ProductInterface {
          uid
          __typename
        }
        ... on CategoryInterface {
          uid
          __typename
        }
        __typename
      }
    }
    `;