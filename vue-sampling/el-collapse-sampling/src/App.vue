<template>
  <div class="container">
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item title="item1" name="item1"> 
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
        </div>
      </el-collapse-item>
      <el-collapse-item title="item2" name="item2"> 
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging
          elements of the page.
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { ElCollapse, ElCollapseItem } from 'element-plus';
import { ref } from "vue";
const activeNames = ref(["item1", "item2"]);

</script>

<style scoped>

.container {
  height: 300px;
}
</style>
