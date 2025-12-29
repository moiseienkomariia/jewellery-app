import { api } from "../../api.ts";

interface ProductProps {
    productId: number,
}

export const Product = ({productId}: ProductProps) => {
  const { data, isLoading, isError } = api.useGetProductQuery(productId);
  if (isError) return <div>Products Error</div>
  if (isLoading) return <div>Is Loading...</div>;
  console.log({ data });

  if (!data) return null

  return (
    <>
        <div>{data.name}</div>
        <div>{data.price}</div>
    </>
    
  )
}
