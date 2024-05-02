export interface ResponseType<T> {
  statusCode: number;
  message: string | null;
  data: T;
}
