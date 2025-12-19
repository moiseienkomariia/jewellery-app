import { api } from "../../api.ts";
import { Chip } from "../../ui/chip/Chip.tsx";

export const CategoriesList = () => {
  const { data, isLoading } = api.useGetCategoriesListQuery();
  if (isLoading) return <div>Is Loading...</div>;
  console.log({ data });

  return (
    <>
      {data &&
        data.map((category) => {
          <Chip icon="icon">
            <div>{category.name}</div>
          </Chip>;
        })}
    </>
  );
};
