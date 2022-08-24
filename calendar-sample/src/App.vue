<template>
  <calendar-view></calendar-view>
  <date-button></date-button>
</template>

<script>
import CalendarView from './components/CalendarView.vue'
import DateButton from './components/DateButton.vue'
export default {
  name: 'App',
  components: {
    CalendarView,
    DateButton
  }
}
</script>

<style>
</style>
