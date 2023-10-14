<script setup>
import { computed, onBeforeMount, ref } from "vue";
import VueGeolocation from 'vue3-geolocation';

const current = ref({
  position: 0,
  lat: 0,
  lng: 0
});

const markers = computed(() => {
  const result = [];
  result.push({
    position: {
      lat: current.value.lat,
      lng: current.value.lng,
    }
  })

  return result;
});

const getCurrentLocation = () => {
  VueGeolocation.getLocation()
      .then((coordinates) => {
          current.value.position = coordinates
          current.value.lat = coordinates.lat  //緯度
          current.value.lng = coordinates.lng  //経度
      })
      .catch((error) => {
          console.log(error)
      })
}
onBeforeMount(() => {
  getCurrentLocation();
});
</script>

<template>
  <GMapMap
    :center="current"
    :zoom="15"
    map-type-id="terrain"
    class="my-3"
  >
    <GMapCluster>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>

<style scoped></style>
