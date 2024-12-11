import { GET_RESOLVE_URL } from "../api/query/resolveUrl";
import { usePostRequest } from "../hooks/useCallToServer";
import { notFound } from "next/navigation";


import Header from "../components/Header";
import Footer from "../components/Footer";
import Cms from "../RootComponents/Cms";
import Category from "../RootComponents/Category";
import Product from "../RootComponents/Product";

export default async function MagentoRoute({ params }) {
  const { slug } = await params;
  const { data } = await usePostRequest({query: GET_RESOLVE_URL, variables: { url: `/${slug}`}});

  let rootComponent;

  if(data?.data?.route?.type == "CMS_PAGE")
      rootComponent = <Cms identifier={data?.data?.route?.identifier} />;
    else if(data?.data?.route?.type == "CATEGORY")
      rootComponent = <Category/>;
    else if(data?.data?.route?.type == "PRODUCT")
      rootComponent = <Product urlKey={slug} />;
    else
    notFound();


  return <><Header/>{rootComponent}<Footer/></>;
}