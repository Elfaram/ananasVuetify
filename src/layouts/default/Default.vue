<template>
  <VApp>
    <AppBar />
  </VApp>
</template>

<script lang="ts">
import AppBar from "./AppBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: { AppBar },

  methods: {},
});
</script>
