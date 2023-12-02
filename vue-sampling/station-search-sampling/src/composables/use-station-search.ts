import axios from "axios";
import { Ref, computed, unref } from "vue";
import { useQuery } from "vue-query";

export const useStationSearch = (inputValue: Ref<string>) => {
  const { isLoading, isError, data, error, isFetching } = useQuery(
    ["/api/station", inputValue],
    async () => {
      return axios.get("/api/station", {
        params: {
          input: unref(inputValue),
        },
      });
    },
  );

  const resultData = computed(() => {
    return data.value.data;
  });

  return {
    isLoading,
    isError,
    resultData,
    error,
    isFetching,
  };
};
