
const gql = String.raw;

export const GET_CMS_PAGE = `
    query GetCmsPage($identifier: String!) {
        cmsPage(identifier: $identifier) {
          url_key
          content
          content_heading
          title
          page_layout
          meta_title
          meta_keywords
          meta_description
          __typename
        }
      }
    `;





  