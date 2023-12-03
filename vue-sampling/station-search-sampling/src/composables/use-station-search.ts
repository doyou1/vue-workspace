import { Station, Pref } from "@/shared";
import axios from "axios";
import { AutocompleteFetchSuggestionsCallback } from "element-plus";
import { ComputedRef, Ref, computed } from "vue";
import { useQuery } from "vue-query";

export type SearchInput = {
  inputValue: string;
  prefValue: string;
  stationGroupCode: number;
  stationPosition: {
    lat: number;
    lng: number;
  };
};

export type AutocompleteItem = Record<
  "value",
  {
    stationName: string;
    prefName: string;
    stationGroupCode: number;
    stationPosition: { lat: number; lng: number };
  }
>;

export const usePrefData = () => {
  const { isLoading, isError, data, error, isFetching } = useQuery(
    ["/api/pref"],
    async () => {
      return axios.get("/api/pref");
    },
  );

  const prefData = computed<Pref[] | undefined>(() => {
    return data.value?.data;
  });

  return {
    isLoading,
    isError,
    prefData,
    error,
    isFetching,
  };
};

export const useStationSearch = (
  meValue: Ref<SearchInput>,
  youValue: Ref<SearchInput>,
  prefData: ComputedRef<Pref[] | undefined>,
) => {
  const { data: meData } = useQuery(["/api/station", meValue], async () => {
    return axios.get("/api/station", {
      params: {
        input: meValue.value.inputValue,
      },
    });
  });

  const { data: youData } = useQuery(["/api/station", youValue], async () => {
    return axios.get("/api/station", {
      params: {
        input: youValue.value.inputValue,
      },
    });
  });

  const meStationData = computed<Station[] | undefined>(() => {
    return meData.value?.data;
  });

  const youStationData = computed<Station[] | undefined>(() => {
    return youData.value?.data;
  });

  const compStationInfomation = computed<{
    me: AutocompleteItem[];
    you: AutocompleteItem[];
  }>(() => {
    const meItems: AutocompleteItem[] = [];
    meStationData.value?.map((station) => {
      const pref = prefData.value?.find(
        (pref) => station.pref_cd === pref.pref_cd,
      );
      meItems.push({
        value: {
          stationGroupCode: station.station_g_cd,
          stationName: station.station_name,
          prefName: pref?.pref_name ?? "",
          stationPosition: {
            lat: -1,
            lng: -1,
          },
        },
      });
    });

    const youItems: AutocompleteItem[] = [];
    youStationData.value?.map((station) => {
      const pref = prefData.value?.find(
        (pref) => station.pref_cd === pref.pref_cd,
      );
      youItems.push({
        value: {
          stationGroupCode: station.station_g_cd,
          stationName: station.station_name,
          prefName: pref?.pref_name ?? "",
          stationPosition: {
            lat: -1,
            lng: -1,
          },
        },
      });
    });

    /* remove duplicate object */
    const meRemovedDuplicate: AutocompleteItem[] = Array.from(
      new Set(meItems.map((v) => JSON.stringify(v))),
    ).map((v) => JSON.parse(v));

    const youRemovedDuplicate: AutocompleteItem[] = Array.from(
      new Set(youItems.map((v) => JSON.stringify(v))),
    ).map((v) => JSON.parse(v));

    /* sort by prefName & stationName */
    const meSorted = meRemovedDuplicate.sort((a, b) => {
      if (
        a.value.prefName > b.value.prefName ||
        a.value.stationName > b.value.stationName
      ) {
        return 1;
      } else if (
        a.value.prefName < b.value.prefName ||
        a.value.stationName < b.value.stationName
      ) {
        return -1;
      } else {
        return 0;
      }
    });

    const youSorted = youRemovedDuplicate.sort((a, b) => {
      if (
        a.value.prefName > b.value.prefName ||
        a.value.stationName > b.value.stationName
      ) {
        return 1;
      } else if (
        a.value.prefName < b.value.prefName ||
        a.value.stationName < b.value.stationName
      ) {
        return -1;
      } else {
        return 0;
      }
    });
    return {
      me: meSorted,
      you: youSorted,
    };
  });

  const querySearch = (
    _queryString: string,
    cb: AutocompleteFetchSuggestionsCallback,
    type: "me" | "you",
  ) => {
    cb(
      type === "me"
        ? compStationInfomation.value.me
        : compStationInfomation.value.you,
    );
  };

  const handleSelect = (item: AutocompleteItem, type: "me" | "you") => {
    if (type === "me") {
      meValue.value.inputValue = item.value.stationName;
      meValue.value.prefValue = item.value.prefName;
      meValue.value.stationPosition = item.value.stationPosition;
      meValue.value.stationGroupCode = item.value.stationGroupCode;
    } else {
      youValue.value.inputValue = item.value.stationName;
      youValue.value.prefValue = item.value.prefName;
      youValue.value.stationPosition = item.value.stationPosition;
      youValue.value.stationGroupCode = item.value.stationGroupCode;
    }
  };

  return {
    querySearch,
    handleSelect,
    meStationData,
    youStationData,
  };
};
