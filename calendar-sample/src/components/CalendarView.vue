<template>
<div id="calendar-view">
  <div>
    <DatePicker v-model="date"/>
  </div>
  <div>
    {{ fomattedDate }}
  </div>
</div>

</template>

<script>
import 'v-calendar/dist/style.css';
import { DatePicker } from 'v-calendar'

export default {
  data() {
    return {
      date: new Date(),
    }
  },
  computed: {
    fomattedDate() {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
      return this.date.toLocaleString('jp', options);
    }
  },
  components: {
    DatePicker
  }
}
</script>

<style>
#calendar-view {
    margin: 50px;
}
</style>
