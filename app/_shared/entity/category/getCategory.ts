import { server } from "../../utils/axiosServer";
import { baseUrl } from "../../utils/baseUrl";

export default async function getCateory(type: string) {
  // return await server.get(`/category?type=${type}`);
  const response = await fetch(`${baseUrl}/category?type=${type}`);
  const data = await response.json();
  return data;
}
