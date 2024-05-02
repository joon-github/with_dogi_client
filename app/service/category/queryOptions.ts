import CategoryService from "./CategoryService";

const queryKeys = {
  all: (type: string) => ["categories", type],
};

const queryOptions = {
  all: (type: string) => ({
    queryKey: queryKeys.all(type),
    queryFn: () => CategoryService.getCategories(type),
    initialData: {data :[{ categoryId: 1, categoryName: "서버에러 입니다...", children: []}]}
  }),
};

export default queryOptions;
