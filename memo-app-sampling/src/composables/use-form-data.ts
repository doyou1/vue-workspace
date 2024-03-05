import { onMounted, ref, watch } from "vue";

export type DataModel = {
  meta: DataModelMeta;
  contents: DataModelContent[];
};

export type DataModelMeta = {
  title: string;
  repeatCount: number;
  isLock: boolean;
  currentMode: string;
};

export type DataModelContent = {
  id: number;
  word: string;
  meaning: string;
};

export const initDataModel: DataModel = {
  meta: {
    title: "",
    repeatCount: 1,
    isLock: false,
    currentMode: "default",
  },
  contents: [
    {
      id: 1,
      word: "",
      meaning: "",
    },
  ],
};

export const useFormData = () => {
  const model = ref<DataModel>(JSON.parse(JSON.stringify(initDataModel)));


  function updateMeta<K extends keyof DataModelMeta>(key: K, value: DataModelMeta[K]) {
    model.value.meta[key] = value;
  }

  function updateContent<K extends keyof DataModelContent>(index: number, key: K, value: DataModelContent[K]) {
    model.value.contents[index][key] = value;
  }

  const addContent = () => {
    model.value.contents.push({
      id: model.value.contents.length + 1,
      word: "",
      meaning: "",
    });
  }

  watch(
    () => model.value,
    () => {
      // btoa encoding
      if (JSON.stringify(model.value) === JSON.stringify(initDataModel)) {
        clearPath();
      } else {
        history.pushState("", "", `#${encoding(JSON.stringify(model.value))}`);
      }
    },
    {
      deep: true,
    },
  );

  const clearPath = () => {
    history.pushState("", "", "/");
  };

  onMounted(() => {
    if (window.location.hash !== "") {
      // atob decoding
      const urlData = JSON.parse(decoding(window.location.hash.substring(1)));
      if (isTargetObject(urlData)) {
        if (JSON.stringify(urlData) === JSON.stringify(initDataModel)) {
          clearPath();
        } else {
          model.value = urlData;
        }
      }
    }
  });

  const isTargetObject = (data: object): data is DataModel => {
    return Object.keys(data).some(
      (key) => key === "meta" || key === "contents",
    );
  };

  const refresh = () => {
    location.reload();
  };

  return {
    model,
    updateMeta,
    updateContent,
    addContent,
    clearPath,
    refresh,
  };
};

// const utf8_to_b64 = ( value: string) => {
  const encoding = ( value: string) => {
  return window.btoa(unescape(encodeURIComponent( value )));
}

// decoding
// function b64_to_utf8( str ) {
  const decoding = ( value: string ) => {
  return decodeURIComponent(escape(window.atob( value )));
}

export const memoContentItemHeight = 75;
export const memoContentItemGap = 16;