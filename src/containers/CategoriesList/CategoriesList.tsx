import { Chip } from "@ui";
import { api } from "../../store/api.ts";

export const CategoriesList = () => {
  const { data, isLoading, isError } = api.useGetCategoriesListQuery();

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Is Loading...</div>;
  console.log({ data });

  return (
    <>
      {data &&
        data.map((category) => {
          return (
            <Chip icon="icon">
              <div key={category.id}>{category.name}</div>
            </Chip>
          );
        })}
    </>
  );
};
