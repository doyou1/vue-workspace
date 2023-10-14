<script setup>
import { onMounted, reactive } from "vue";
import axios from "axios";

const state = reactive({
  data: [],
});

const initData = () => {
  axios.get("api/memos").then((res) => {
    state.data = res.data;
  });
}

const addData = () => {
  const content = prompt("내용을 입력해주세요.");
  if(!content) {
    alert("입력한 내용이 없습니다.")
    return;
  }

  axios.post("api/memos", { content: content }).then((res) => {
    state.data = res.data;
  });
};

const editData = (id) => {
  const content = prompt("내용을 입력해주세요.", state.data.find((v)=> v.id === id).content);

  if(!content) {
    alert("입력한 내용이 없습니다.")
    return;
  }

  axios.put(`api/memos/${id}`, { content: content }).then((res) => {
    state.data = res.data;
  });
}
onMounted(()=> {
  initData();
})
</script>

<template>
  <div class="memo">
    <div class="act">
      <el-button type="primary" @click="addData">+ 추가</el-button>
    </div>
    <ul>
      <li v-for="d in state.data" :key="d.id" @click="editData(d.id)">{{ d.content }}</li>
    </ul>
  </div>
</template>

<style scoped>
.memo ul {
  list-style: none;
  padding: 15px 0;
  margin: 0;
}

.memo ul li {
  padding: 5px 10px;
  margin: 5px;
  border: 1px solid #eee;
  cursor: pointer;
}

.memo ul li:hover {
  font-weight: bold;
}


.memo .act {
  padding: 10px 5px 5px 5px;
  text-align: right;
}
</style>
