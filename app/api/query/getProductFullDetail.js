
const gql = String.raw;

import { ProductDetailsFragment } from "../fragments/productDetailFragment";

export const GET_PRODUCT_DETAIL_QUERY = `
    query getProductDetailForProductPage($urlKey: String!) {
        products(filter: { url_key: { eq: $urlKey } }) {
            items {
                id
                uid
                ...ProductDetailsFragment
            }
        }
    }
    ${ProductDetailsFragment}
    `;





  



