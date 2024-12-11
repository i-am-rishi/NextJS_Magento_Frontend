import { GET_CMS_PAGE } from "@/app/api/query/getCmsPage";
import { usePostRequest } from "@/app/hooks/useCallToServer";

export default async function Cms({identifier}) {

  const { data } = await usePostRequest({query: GET_CMS_PAGE, variables: { identifier }});

  return (
   <div>
    HELLO_CMS_PAGE
        {/* <div dangerouslySetInnerHTML={{__html: data?.data?.cmsPage?.content}}/> */}       
   </div>
  );
}
