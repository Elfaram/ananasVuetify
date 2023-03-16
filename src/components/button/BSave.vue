<template>
  <div class="pa-4 ma-4">
    <VBtn color="#150954" @click="onConfirm" rounded="pill" variant="outlined">
      ENREGISTRER
    </VBtn>
  </div>
</template>

<script lang="ts">
// Components
import { defineComponent } from "vue";

export default defineComponent({
  name: "BSave",

  emits: ["onConfirm"],

  methods: {
    onConfirm() {
      this.$emit("onConfirm");
    },
  },
});
</script>
