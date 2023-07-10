<template>
  <div class="tabs">
    <ul class="tabs_header">
      <li
        v-for="title in tabTitles"
        :key="title"
        class="tabs_item"
        :class="{ selected: selectedTitle === title }"
        @click="selectedTitle = title"
      >
        {{ title }}123
      </li>
    </ul>
  </div>
  <!-- <component :is="tabsContent" /> -->
  <div>
    {{ tabsContent }}
  </div>
</template>

<script>
import { useSlots, ref, provide } from "vue";
export default {
  setup() {
    const slots = useSlots();
    const tabTitles = slots.default().map((tab) => tab.props.title);
    const selectedTitle = ref(tabTitles[0]);

    provide("selectedTitle", selectedTitle);
    return {
      tabTitles,
      selectedTitle,
    };
  },
  computed: {
    tabsContent: () => "<div>123<div>"
  }
};
</script>

<style>
.tabs {
  max-width: 60vw;
  margin: 0 auto;
}
.tabs_header {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  gap: 5px;
}
.tabs_item {
  flex: 1;
  background-color: #eee;
  padding: 5px 0;
  border-radius: 5px 5px 0 0;
  transition: 0.4s all ease-out;
  cursor: pointer;
  user-select: none;
}
.tabs_item.selected {
  background-color: #bfbfbf;
}
.tabs_content {
  background-color: #bfbfbf;
  min-height: 300px;
  display: grid;
  place-items: center;
  border-radius: 0 0 5px 5px;
  padding: 10px;
}
</style>
