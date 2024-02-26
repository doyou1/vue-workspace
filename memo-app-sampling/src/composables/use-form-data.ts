import invariant from "tiny-invariant";
// import { onMounted, ref, watch } from "vue";
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

export const DataModelMetaKey = {
  title: "title",
  repeatCount: "repeatCount",
  isLock: "isLock",
  currentMode: "currentMode",
};
export type DataModelMetaKeys = keyof typeof DataModelMetaKey;
export type DataModelMetaValues = string | number | boolean;

export type DataModelContent = {
  id: string;
  word: string;
  meaning: string;
};

export const DataModelContentKey = {
  id: "id",
  word: "word",
  meaning: "meaning",
};
export type DataModelContentKeys = keyof typeof DataModelContentKey;
export type DataModelContentValues = string;

export const initDataModel: DataModel = {
  meta: {
    title: "",
    repeatCount: 1,
    isLock: false,
    currentMode: "default",
  },
  contents: [
    {
      id: "id",
      word: "word",
      meaning: "meaning",
    },
    {
      id: "id",
      word: "word",
      meaning: "meaning",
    },
    {
      id: "id",
      word: "word",
      meaning: "meaning",
    },
  ],
};

export const useFormData = () => {
  const model = ref<DataModel>(JSON.parse(JSON.stringify(initDataModel)));
  const updateMeta = (key: DataModelMetaKeys, value: DataModelMetaValues) => {
    switch (key) {
      case DataModelMetaKey.title: {
        invariant(typeof value === "string");
        model.value.meta[key] = value;
        break;
      }
      case DataModelMetaKey.repeatCount: {
        invariant(typeof value === "number");
        model.value.meta[key] = value;
        break;
      }
      case DataModelMetaKey.isLock: {
        invariant(typeof value === "boolean");
        model.value.meta[key] = value;
        break;
      }
      case DataModelMetaKey.currentMode: {
        invariant(typeof value === "string");
        model.value.meta[key] = value;
        break;
      }
    }
  };
  const updateContent = (
    index: number,
    key: DataModelContentKeys,
    value: DataModelContentValues,
  ) => {
    switch (key) {
      case DataModelContentKey.id:
      case DataModelContentKey.word:
      case DataModelContentKey.meaning: {
        invariant(typeof value === "string");
        model.value.contents[index][key] = value;
        break;
      }
    }
  };

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