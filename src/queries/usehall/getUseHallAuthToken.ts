import http, { getError } from "@/queries/http";

type Response = {
  token: string;
};

export default function getUseHallAuthToken(): Promise<Response> {
  return new Promise(async (resolve, reject) => {
    await http
      .get(`/user/usehall/authenticate`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(getError(error)));
  });
}
