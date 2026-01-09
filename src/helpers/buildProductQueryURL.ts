interface ProductParams {
  categoryId?: number;
  name?: string;
}

export const buildProductQueryURL = ({ name, categoryId }: ProductParams) => {
  const urlParams = new URLSearchParams();

  if (name) urlParams.set("name_like", name);
  if (categoryId) urlParams.set("categoryId", categoryId.toString());

  return urlParams.toString();
};
