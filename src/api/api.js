import { instance } from "config/instanceAxios";

const getHourlyPairOHLCV = async ({ queryKey }) => {
  const params = queryKey[1];
  const { data } = await instance.get("/v2/histohour", {
    params: params,
  });
  return data?.Data;
};

export { getHourlyPairOHLCV };
