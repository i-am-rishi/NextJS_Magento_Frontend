import { GET_PRODUCT_DETAIL_QUERY } from "@/app/api/query/getProductFullDetail";
import { usePostRequest } from "@/app/hooks/useCallToServer";

export default async function Product({urlKey}) {
  const { data } = await usePostRequest({query: GET_PRODUCT_DETAIL_QUERY, variables: { urlKey: urlKey?.[0]?.replace(".html","") }});

  console.log("DAATEAAA: ",data);

    return (
     <div>HELLO_PRODUCT_PAGE</div>
    );
  }
  