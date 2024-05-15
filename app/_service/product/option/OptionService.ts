import Service from "../../Service";

class OptionService extends Service {
  upsertOption(formData: FormData, productId?: number) {
    return this.http.post<any, null>(`/product/option/${productId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new OptionService();
