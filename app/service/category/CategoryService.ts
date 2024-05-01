import Service from "@/app/service/Service";
import { Category } from "./Category.entity";
import { ResponseType } from "../ResponsType";

class CategoryService extends Service {
  getCategories(type: string) {
    return this.http.get<ResponseType<Category[]>>(`/category?type=${type}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CategoryService();
