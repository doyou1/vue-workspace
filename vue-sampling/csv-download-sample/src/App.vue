<template>
  <download-excel
  ref="downloadExcel"
    :data="jsonData"
    :fields="json_fields"
    worksheet="My Worksheet"
    name="filename.csv"
    :before-generate="beforeGenerate"
    type="csv"
  >
  </download-excel>

    <button @click="csvDownload">Download Data</button>

</template>

<script>
import JsonExcel from "vue-json-excel3";

export default {
  components: {
    DownloadExcel: JsonExcel,
  },
  data() {
    return {
      //   json_fields: {
      //     "Complete name": "name",
      //     City: "city",
      //     Telephone: "phone.mobile",
      //     "Telephone 2": {
      //       field: "phone.landline",
      //       callback: (value) => {
      //         return `Landline Phone - ${value}`;
      //       },
      //     },
      //   },
      jsonData: [
        {
          name: "Tony Peña",
          city: "New York",
          country: "United States",
          birthdate: "1978-03-15",
          phone: {
            mobile: "1-541-754-3010",
            landline: "(541) 754-3010",
          },
        },
        {
          name: "Thessaloniki",
          city: "Athens",
          country: "Greece",
          birthdate: "1987-11-23",
          phone: {
            mobile: "+1 855 275 5071",
            landline: "(2741) 2621-244",
          },
        },
      ],
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8",
          },
        ],
      ],
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
  methods: {
    csvDownload() {
        console.log("csvDownload");

        this.$refs.downloadExcel.generate();
    },
    beforeGenerate() {
        console.log("beforeGenerate");
      this.jsonData = this.anotherJsonData;
    },
  },
};
</script>

<style>
.hidden {
  display: none;
}
</style>
