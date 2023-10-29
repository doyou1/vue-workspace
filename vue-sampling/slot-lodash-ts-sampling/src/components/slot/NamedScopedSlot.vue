<script setup lang="ts"></script>

<template>
  <div class="container">
    <header>
      <slot name="header" text="HEADER" message="TITLE MESSAGE"></slot>
    </header>
    <main>
      <slot text="MAIN" message="MAIN CONTENT"></slot>
    </main>
    <footer>
      <slot name="footer" text="FOOTER" message="OPTIONAL CONTENT"></slot>
    </footer>
  </div>
</template>

<style scoped></style>
