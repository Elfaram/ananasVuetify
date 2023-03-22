<template>
  <router-view :key="$route.path" />
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
