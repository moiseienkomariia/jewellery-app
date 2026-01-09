import { Chip } from "@ui";

interface CategoryItem {
  id: number;
  name: string;
}
interface CategoriesListProps {
  selectedCategory: number | null;
  onCategoryChange: (categoryId: number) => void;
  data?: CategoryItem[];
}

export const CategoriesList = ({
  selectedCategory,
  onCategoryChange,
  data,
}: CategoriesListProps) => {
  if (!data) return <div>Error</div>;

  return (
    <>
      {data &&
        data.map((category) => {
          return (
            <Chip
              icon="icon"
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              isSelected={selectedCategory === category.id}
            >
              <div>{category.name}</div>
            </Chip>
          );
        })}
    </>
  );
};
