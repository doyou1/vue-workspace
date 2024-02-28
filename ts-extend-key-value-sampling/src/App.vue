<script setup lang="ts">
import { ElInput, ElSelect } from "element-plus";
import { useFormData } from "./composables/use-form-data";

const { formData, updateFormData } = useFormData();

const genderOptions = [
  {
    label: "남자",
    value: "man",
  },
  {
    label: "여자",
    value: "woman",
  },
];
</script>

<template>
  <div>
    <div>
      <span>name: </span>
      <el-input
        :model-value="formData.name"
        type="text"
        @update:model-value="updateFormData('name', $event as string)"
      />
    </div>
    <div>
      <span>age</span>
      <el-input
        :model-value="formData.age"
        type="number"
        @update:model-value="updateFormData('age', $event as number)"
      />
    </div>
    <div>
      <span>gender</span>
      <el-select :model-value="formData.gender" @update:model-value="updateFormData('gender', $event)">
        <el-option
          v-for="item in genderOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div>
      <span>result: {{ formData }}</span>
    </div>
  </div>
</template>
