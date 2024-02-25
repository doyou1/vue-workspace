<template>
  <div class="wrap">
    <header class="header">
      <div>새 단어장(홈)</div>
      <div>
        모드
        <div>일반 단어장</div>
        <div>퀴즐렛(순서)</div>
        <div>퀴즐렛(랜덤)</div>
        <div>객관식(순서)</div>
        <div>객관식(랜덤)</div>
      </div>
      <div>잠금</div>
      <div>반복횟수</div>
      <div>링크복사</div>
      <div>import / export</div>
    </header>
    <div class="content">
      <div class="left">
        <div class="row">
          <div>check</div>
          <div>word</div>
          <div>meaning</div>
        </div>
        <div class="row">
          <input class="checkbox" type="checkbox" />
          <input />
          <input />
        </div>
      </div>
      <div class="right">
        <div class="row">
          <div>check</div>
          <div>word</div>
          <div>meaning</div>
        </div>
        <div class="row">
          <input class="checkbox" type="checkbox" />
          <input />
          <input />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;

  .header {
    display: flex;
    border: solid 1px black;
    gap: 20px;
  }

  .content {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: solid 1px black;

    .row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      // display: flex;
      // justify-content: space-between;
      margin: 8px 32px;
      .checkbox {
        margin-right: auto;
      }
    }
  }
}
</style>
