import CategoryService from "./CategoryService";

const queryKeys = {
  all: (type: string) => ["categories", type] as const,
};

const queryOptions = {
  all: (type: string) => ({
    queryKey: queryKeys.all(type),
    queryFn: () => CategoryService.getCategories(type),
  }),
};

export default queryOptions;
