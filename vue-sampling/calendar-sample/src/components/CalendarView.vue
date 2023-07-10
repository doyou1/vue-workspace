<template>
  <div id="calendar-view" class="flex justify-center grid gird-rows-2">
    <div>
      <DatePicker v-model="date" />
    </div>
    <div>
      <table class="table-auto m-8 p-8">
        <thead class="text-xl bg-gray-200">
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Day</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{{ fomattedDate.year }}년</th>
            <th>{{ fomattedDate.month }}월</th>
            <th>{{ fomattedDate.day }}일</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import "v-calendar/dist/style.css";
import { DatePicker } from "v-calendar";

export default {
  data() {
    return {
      date: new Date(),
    };
  },
  computed: {
    fomattedDate() {
      // const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
      // return this.date.toLocaleString('jp', options);
      const newDate = new Date(this.date);
      const year = newDate.getFullYear();
      const month = newDate.getMonth() + 1;
      const day = newDate.getDate();
      return {
        year,
        month,
        day
      };
    },
  },
  components: {
    DatePicker,
  },
};
</script>

<style>
#calendar-view {
  margin: 50px;
}
</style>
