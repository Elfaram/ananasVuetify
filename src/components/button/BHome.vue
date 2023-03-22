<template>
  <VBtn
    size="small"
    icon="mdi-home"
    :color="color"
    variant="text"
    class="my-3 mr-2"
    @click="$emit('clickHome')"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BHome",

  props: {
    variant: String,
    color: String,
    size: String,
  },
  emits: ["clickHome"],

  methods: {},
});
</script>
