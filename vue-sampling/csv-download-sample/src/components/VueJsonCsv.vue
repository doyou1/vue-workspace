<template>
  <csv-download
    v-if="jsonData !== null"
    ref="csvDownload"
    class="hidden"
    :data="jsonData"
    :name="fileName + '.csv'"
  />
  <button @click="csvDownload">Download CSV</button>

  <input type="text" v-model="fileName" />
  <div>
    <pre>{{ readableJson }}</pre>
  </div>
</template>

<script>
import JsonCsv from "vue-json-csv";

export default {
  components: {
    CsvDownload: JsonCsv,
  },
  data() {
    return {
      fileName: "fileName",
      jsonData: null,
      anotherJsonData: [
        {
          name: "test1",
          age: 999,
        },
        {
          name: "test2",
          age: 333,
        },
      ],
    };
  },
  computed: {
    readableJson() {
      return JSON.stringify(this.jsonData, null, 2);
    },
  },
  methods: {
    async csvDownload() {
      // this.$refs.csvDownload.data = this.anotherJsonData;
      this.jsonData = await this.anotherJsonData;
      this.$refs.csvDownload.generate();
    },
  },
};
</script>

<style>
.hidden {
  display: none;
}
</style>