<template>
  <div class="map">
    <div
      ref="mapRef"
      :style="[
        {
          width: `${props.inputViewWidth}px`,
          height: `${props.inputViewWidth}px`,
        },
      ]"
    ></div>
  </div>
</template>

<!-- eslint-disable no-undef -->
<script setup lang="ts">
import { SearchInput } from "@/composables/use-station-search";
import { Loader } from "@googlemaps/js-api-loader";
import { ref, onMounted, toRaw, watch } from "vue";
import { ElLoading } from "element-plus";

const props = defineProps<{
  me: SearchInput | undefined;
  you: SearchInput | undefined;
  inputViewWidth: number;
}>();

const mapRef = ref<HTMLElement>();
const map = ref<google.maps.Map>();
const markers = ref<google.maps.Marker[]>([]);

const maxZoom = 15;
watch(
  [() => props.me, () => props.you],
  () => {
    markers.value.map((v) => toRaw(v).setMap(null));
    markers.value.splice(0);
    if (
      props.me?.stationPosition.lat !== -1 &&
      props.me?.stationPosition.lng !== -1
    ) {
      const meMarker = new google.maps.Marker({
        position: props.me?.stationPosition,
        map: map.value,
        title: `${props.me?.inputValue} (${props.me?.prefValue})`,
      });
      const infoWindow = new google.maps.InfoWindow();
      // Add a click listener for each marker, and set up the info window.
      meMarker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(meMarker.getTitle());
        infoWindow.open(meMarker.getMap(), meMarker);
      });
      markers.value.push(meMarker);
    }

    if (
      props.you?.stationPosition.lat !== -1 &&
      props.you?.stationPosition.lng !== -1
    ) {
      const youMarker = new google.maps.Marker({
        position: props.you?.stationPosition,
        map: map.value,
        title: `${props.you?.inputValue} (${props.you?.prefValue})`,
      });

      const infoWindow = new google.maps.InfoWindow();
      // Add a click listener for each marker, and set up the info window.
      youMarker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(youMarker.getTitle());
        infoWindow.open(youMarker.getMap(), youMarker);
      });
      markers.value.push(youMarker);
    }

    const bounds = new google.maps.LatLngBounds();
    if (bounds !== undefined) {
      markers.value.map((v) => {
        const markerPosition = v.getPosition();
        if (markerPosition !== undefined && markerPosition !== null) {
          bounds.extend(markerPosition);
        }
      });
      map.value?.fitBounds(bounds);
      const newZoom = map.value?.getZoom();
      if (newZoom !== undefined && newZoom > maxZoom) {
        map.value?.setZoom(maxZoom);
      }
    }
  },
  { deep: true },
);

onMounted(async () => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      if (!mapRef.value) return;
      else {
        const loader = new Loader({
          apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
          version: "weekly",
          libraries: ["places"],
        });
        const mapOptions = {
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          zoom: 15,
        };

        const { Map } = await loader.importLibrary("maps");

        map.value = new Map(mapRef.value, mapOptions);
      }
    },
    (error) => {
      console.error(error);
    },
  );

  // map loading service
  ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
    target: mapRef.value,
  });
});
</script>

<style scoped lang="scss">
.map {
  display: flex; /*added*/
}
</style>
