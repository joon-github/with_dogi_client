import Service from "../../Service";

class OptionService extends Service {
  upsertOption(data: any, e: React.BaseSyntheticEvent) {
    console.log(e);
    e?.preventDefault();
    console.log(data);
    // return this.http.post<any, null>("/product/option", data);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new OptionService();
