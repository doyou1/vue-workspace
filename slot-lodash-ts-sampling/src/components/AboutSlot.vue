<script setup lang="ts">
import DefaultSlot from "@/components/slot/DefaultSlot.vue";
import FallbackSlot from "@/components/slot/FallbackSlot.vue";
import NamedSlot from "@/components/slot/NamedSlot.vue";
import NamedScopedSlot from "@/components/slot/NamedScopedSlot.vue";
import MouseTracker from "@/components/slot/MouseTracker.vue";
</script>

<template>
  <h2>Slot</h2>
  <h4>Slot Content and Outlet</h4>
  <DefaultSlot class="border">
    Click Me!
  </DefaultSlot>
  <div>
    <img src="@/assets/default-slot.png" width="750" alt="reference"/>
  </div>

  <h4>Fallback Content</h4>
  <FallbackSlot></FallbackSlot>
  <FallbackSlot>Save</FallbackSlot>
  <div>
    <img src="@/assets/fallback-slot.png" width="750" alt="reference"/>
  </div>

  <h4>Named Slots</h4>
  <NamedSlot>
    <template #header>
      <h4>Here might be a page title</h4>
    </template>
    <template #default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>
    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </NamedSlot>
  <div>
    <img src="@/assets/named-slot.png" width="750" alt="reference"/>
  </div>

  <h4>Named Scoped Slots</h4>
  <NamedScopedSlot>
    <template #header="{ text, message }">
      <h4>text: {{ text }}, message: {{ message }}</h4>
    </template>
    <template #default="{ text, message }">
      <p>text: {{ text }}, message: {{ message }}</p>
    </template>
    <template #footer="{ text, message }">
      <div>text: {{ text }}, message: {{ message }}</div>
    </template>
  </NamedScopedSlot>
  <div>
    <img src="@/assets/named-scoped-slot.png" width="750" alt="reference"/>
  </div>

  <h4>Mouse Tracker</h4>
  <MouseTracker v-slot="{ x, y }">
  	Mouse is at: {{ x }}, {{ y }}
	</MouseTracker>
  <div>
    <img src="@/assets/mousetracker.png" width="750" alt="reference"/>
  </div>
</template>

<style scoped>
</style>