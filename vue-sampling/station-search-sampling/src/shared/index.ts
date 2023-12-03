export type Station = {
  station_cd: number;
  station_g_cd: number;
  station_name: string;
  station_name_k: string;
  station_name_r: string;
  line_cd: number;
  pref_cd: number;
  post: string;
  address: string;
  lon: number;
  lat: number;
  open_ymd: string;
  close_ymd: string;
  e_status: number;
  e_sort: number;
};

export type Pref = {
  pref_cd: number;
  pref_name: string;
};

export type AutocompleteItem = Record<
  "value",
  { stationName: string; prefName: string }
>;
