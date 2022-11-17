import { useQuery } from "@tanstack/react-query";
import { getHourlyPairOHLCV, getHourlyExchangeVol } from "api/api";

const useGetHourlyPairOHLCV = (params) => {
  return useQuery(["getHourlyPairOHLCV", params], getHourlyPairOHLCV, {
    enabled: !!params,
  });
};

const useGetHourlyExchangeVol = (params) => {
  return useQuery(["getHourlyExchangeVol", params], getHourlyExchangeVol, {
    enabled: !!params,
  });
};

export { useGetHourlyPairOHLCV, useGetHourlyExchangeVol };
