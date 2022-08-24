<template>
  <div id="date-button">
    <DatePicker v-model="date" >
        <template v-slot="{ inputValue, togglePopover }">
            <input
            class="shadow appearance-none border-2 rounded py-2 px-3 text-gray-700 border-blue-500 leading-tight"
                type="text"
                @click="togglePopover"
                :value="inputValue"
                readonly
            />
        </template>
    </DatePicker>
  </div>
</template>

<script>
import 'v-calendar/dist/style.css';
import {DatePicker} from 'v-calendar';

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
#date-button {
    margin: 50px;
}
</style>
