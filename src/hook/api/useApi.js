import { useQuery } from "@tanstack/react-query";
import { getHourlyPairOHLCV } from "api/api";

const useGetHourlyPairOHLCV = (params) => {
  return useQuery(["getHourlyPairOHLCV", params], getHourlyPairOHLCV);
};

export { useGetHourlyPairOHLCV };
