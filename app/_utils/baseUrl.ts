export const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.BAKC_URL
    : "http://localhost:8000";
