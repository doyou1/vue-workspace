<template>
  <div>
    <div>
      <!-- for debug -->
      <!-- <div>children: {{ modelValue }}</div> -->
      <div class="m-2">Change Label Name</div>
      <div v-for="(label, idx) in modelValue.labels" :key="idx">
        <input
          class="border-2 m-2"
          :value="label"
          @input="updateLabel($event, idx)"
        />
      </div>
      <div class="m-2">Change Graph Data</div>
      <table class="table-auto">
        <thead>
          <td>-</td>
          <th>{{ modelValue.labels[0] }}</th>
          <th>{{ modelValue.labels[1] }}</th>
          <th>{{ modelValue.labels[2] }}</th>
          <th>Border Width</th>
          <th>Change BorderWidth</th>
        </thead>
        <tbody>
          <tr v-for="(dataset, rowIdx) in modelValue.datasets" :key="rowIdx">
            <td>{{ dataset.label }}</td>
            <th v-for="(data, colIdx) in dataset.data" :key="colIdx">
              <input
                class="border-2 m-2"
                :value="data"
                @input="updateData($event, rowIdx, colIdx)"
              />
            </th>
            <th>
              {{ dataset.borderWidth }}
            </th>
            <th>
              <button
                class="bg-blue-500 hover:bg-blue-600 text-white text-lg mx-1 px-5"
                @click="increaseBorderWidth(rowIdx)"
              >
                + plus
              </button>
              <button
                class="bg-blue-500 hover:bg-blue-600 text-white text-lg mx-1 px-5"
                @click="decreaseBorderWidth(rowIdx)"
              >
                - minus
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Object,
  },
  methods: {
    updateLabel(event, idx) {
      const value = event.target.value;
      // 첫번째 방법
      // const newLabels = [...this.modelValue.labels];
      // newLabels[idx] = value;
      // this.$emit("update:modelValue", {
      //   ...this.modelValue,
      //   ["labels"]: newLabels,
      // });

      // 두번째 방법
      const newInstance = { ...this.modelValue };
      newInstance.labels[idx] = value;
    },
    updateData(event, rowIdx, colIdx) {
      const value = Number(event.target.value);

      const newInstance = { ...this.modelValue };
      newInstance.datasets[rowIdx].data[colIdx] = value;
      // 굳이 필요없음, 추후 확인 필요
      // this.$emit("update:modelValue", {
      //   ...this.modelValue,
      //   newInstance
      // });
    },
    increaseBorderWidth(rowIdx) {
      const newInstance = { ...this.modelValue };
      newInstance.datasets[rowIdx].borderWidth++;
    },
    decreaseBorderWidth(rowIdx) {
      const newInstance = { ...this.modelValue };
      if((newInstance.datasets[rowIdx].borderWidth-1) == 0) return;
      newInstance.datasets[rowIdx].borderWidth--;
    },
  },
};
</script>

<style></style>
