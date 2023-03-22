<template>
  <VApp>
    <router-view :key="$route.path" />
  </VApp>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  name: "App",

  components: { RouterView },

  data() {
    return {};
  },
});
</script>
