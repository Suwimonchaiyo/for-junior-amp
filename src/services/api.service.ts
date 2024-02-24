import axios from "axios";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
export async function getData() {
  try {
    const result = await axios.get("/application");
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function uploadData(body: any) {
  try {
    const result = await axios.post("/application", body);
    return result.data;
  } catch (error) {
    return error;
  }
}
