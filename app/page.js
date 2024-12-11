import { GET_RESOLVE_URL } from './api/query/resolveUrl'
import { usePostRequest } from './hooks/useCallToServer';

export default async function Home() {
  const {data} = await usePostRequest({query: GET_RESOLVE_URL, variables: { url: "/financing" }});
  return (
   <main>HELLO RISHABH : {data?.data?.route?.type}</main>
  );
}
