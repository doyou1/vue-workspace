<template>
  <header>
    <div class="tabs">
      <span
        class="tab-item"
        v-for="(item, idx) in tabMenuList"
        :key="item + idx"
      >
        <span
          class="item"
          :class="{ active: item.id === currentTab }"
          @click="tabClick(item)"
          >{{ item.title }}</span
        >
      </span>
    </div>
  </header>
  <main>
    <!-- <keep-alive>
      <component :is="currentTab" />
    </keep-alive> -->

    <component :is="currentTab" subContent="" />
  </main>
</template>

<script>
import TabView1 from "./components/TabView1.vue";
import TabView2 from "./components/TabView2.vue";
import TabView3 from "./components/TabView3.vue";
import TabView4 from "./components/TabView4.vue";
export default {
  data() {
    return {
      tabMenuList: [
        { title: "내 테마", id: "TabView1", subContent: "Content1" },
        { title: "좋아요", id: "TabView2", subContent: "Content2" },
        { title: "결과", id: "TabView3", subContent: "Content3" },
        { title: "업적 뱃지", id: "TabView4", subContent: "Content4" },
      ],
      currentTab: "TabView1",
      currentSubContent: "Content1",
      className: "",
    };
  },
  methods: {
    tabClick(item) {
      this.currentTab = item.id;
      this.currentSubContent = item.subContent;
    },
  },
  components: {
    TabView1,
    TabView2,
    TabView3,
    TabView4,
  },
};
</script>

<style>
  .tab-item {
    margin: 5px;
    background-color: aqua;
    cursor: pointer;
  }
</style>
