<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center">
          <div class="flex-1 flex items-center justify-center">
            <div class="">
              <div class="flex space-x-4">
                <a
                  href="#"
                  :class="
                    selected == 'CalendarView' ? activeClass : unActiveClass
                  "
                  @click="selected = 'CalendarView'"
                  >CalendarView</a
                >
                <a
                  href="#"
                  :class="
                    selected == 'DateButton' ? activeClass : unActiveClass
                  "
                  @click="selected = 'DateButton'"
                  >DateButton</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div v-if="selected == 'CalendarView'">
    <calendar-view></calendar-view>
  </div>
  <div v-else>
    <date-button></date-button>
  </div>
</template>

<script>
import CalendarView from "./CalendarView.vue";
import DateButton from "./DateButton.vue";
export default {
  name: "HomeView",
  components: {
    CalendarView,
    DateButton,
  },
  data() {
    return {
      selected: "CalendarView",
      activeClass:
        "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",
      unActiveClass:
        "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
    };
  },
};
</script>

<style></style>
